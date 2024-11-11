/* eslint-disable @typescript-eslint/ban-ts-comment */
import 'maptalks/dist/maptalks.css';
import * as maptalks from 'maptalks';
import { GroupGLLayer } from '@maptalks/gl';
import React, { useEffect, useRef } from 'react';
import { Leva, LevaPanel, useCreateStore } from 'leva';

import { Box, Mesh, Program, Texture3D, Vector3, ProjectionMatrix } from '@sakitam-gis/vis-engine';
import { VeLayer } from '@sakitam-gis/maptalks-ve';
import JSZip from 'jszip';

import './styles/index.less';

export default function Maptalks() {
  const refDom = useRef(null);

  const store = useCreateStore();

  const init = (data: any) => {
    // Texture
    const cols = data.cols;
    const rows = data.rows;
    const heights = data.heights;
    // let xmax = data.xmax;
    // let xmin = data.xmin;
    // let ymax = data.ymax;
    // let ymin = data.ymin;
    // let zmax = data.zmax;
    // let zmin = data.zmin;
    const values = data.values;

    const colors = [
      [0, 0, 0, 0],
      [170, 36, 250, 1],
      [212, 142, 254, 1],
      [238, 2, 48, 1],
      [254, 100, 92, 1],
      [254, 172, 172, 1],
      [140, 140, 0, 0.9],
      [200, 200, 2, 0.8],
      [252, 244, 100, 0.7],
      [16, 146, 26, 0.6],
      [0, 234, 0, 0.5],
      [166, 252, 168, 0.4],
      [30, 38, 208, 0.3],
      [122, 114, 238, 0.2],
      [192, 192, 254, 1],
    ];

    const steps = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65];
    const resolution = new Vector3(cols, rows, heights);
    const rgbVoxelArray = new Float32Array(resolution.x * resolution.y * resolution.z * 4);

    for (let z = 0; z < resolution.z; z++) {
      const zOffset = z * resolution.x * resolution.y;
      for (let y = 0; y < resolution.y; y++) {
        const yOffset = y * resolution.x;
        for (let x = 0; x < resolution.x; x++) {
          const index = x + yOffset + zOffset;

          const val = values[index];
          if (val != null) {
            let xcolor = colors[0];
            for (let i = 0; i < steps.length; i++) {
              if (val < 0) {
                xcolor = colors[0];
                break;
              }
              if (val < steps[i]) {
                xcolor = colors[i];
                // xcolor=colors[i-1];
                break;
              }
            }
            rgbVoxelArray[4 * index] = xcolor[0] / 255;
            rgbVoxelArray[4 * index + 1] = xcolor[1] / 255;
            rgbVoxelArray[4 * index + 2] = xcolor[2] / 255;
            rgbVoxelArray[4 * index + 3] = xcolor[3];
          }
        }
      }
    }

    const map = new maptalks.Map(refDom.current as unknown as HTMLElement, {
      zoom: 17,
      center: [13.429362937522342, 52.518205849377495],
      pitch: 70,
      baseLayer: new maptalks.TileLayer('base', {
        urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ['a', 'b', 'c', 'd'],
        attribution:
          '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',
      }),
    });

    const layer = new VeLayer('mesh', {
      forceRenderOnMoving: true,
      forceRenderOnRotating: true,
      requestWebGl2: true,
    });

    const projectToWorld = (coord) => {
      const z = layer.altitudeToVector3(coord[2], coord[2]).x;
      return layer.coordinateToVector3([coord[0], coord[1]], z) as any;
    };

    layer.prepareToDraw = function (gl, scene) {
      const renderer = this.getVeRenderer();

      const coords = [13.429362937522342, 52.518205849377495, 0];
      const center = projectToWorld(coords);

      const texture = new Texture3D(renderer, {
        image: rgbVoxelArray,
        width: resolution.x,
        height: resolution.y,
        depth: resolution.z,
        format: renderer.gl.RGBA,
        type: renderer.gl.FLOAT,
        internalFormat: renderer.gl.RGBA32F,
      });

      // texture.setData(new Float32Array(rgbVoxelArray), cols, rows, heights);

      const geometry = new Box(renderer, {
        width: resolution.x,
        height: resolution.y,
        depth: resolution.z,
        widthSegments: 1,
        heightSegments: 1,
        depthSegments: 1,
      });

      const invTransform = new ProjectionMatrix();
      const program = new Program(renderer, {
        vertexShader: `#version 300 es
    layout(location=0) in vec3 position;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat4 viewMatrix;
    uniform mat4 modelMatrix;
    uniform vec3 cameraPosition;

    out vec3 v_modelPos;
    out vec3 v_origin;
		out vec3 v_direction;

    void main(void) {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      v_modelPos = (modelMatrix * vec4(position, 1.0)).xyz;

      v_origin = vec3(inverse(modelMatrix) * vec4(cameraPosition, 1.0)).xyz;
			v_direction = position - v_origin;
    }
      `,
        fragmentShader: `#version 300 es
    precision highp int;
    precision highp float;
    uniform highp sampler3D volume;
    uniform vec3 cameraPosition;
    uniform mat4 u_invTransform;
    uniform float threshold;
		uniform float steps;

    in vec3 v_modelPos;
    in vec3 v_origin;
		in vec3 v_direction;
    out vec4 color;

    vec2 hitBox( vec3 orig, vec3 dir ) {
      const vec3 box_min = vec3( - 0.5 );
      const vec3 box_max = vec3( 0.5 );
      vec3 inv_dir = 1.0 / dir;
      vec3 tmin_tmp = ( box_min - orig ) * inv_dir;
      vec3 tmax_tmp = ( box_max - orig ) * inv_dir;
      vec3 tmin = min( tmin_tmp, tmax_tmp );
      vec3 tmax = max( tmin_tmp, tmax_tmp );
      float t0 = max( tmin.x, max( tmin.y, tmin.z ) );
      float t1 = min( tmax.x, min( tmax.y, tmax.z ) );
      return vec2( t0, t1 );
    }

    float sample1(vec3 p) {
      return texture(volume, p).r;
    }

    vec4 sample2(vec3 p) {
      return texture(volume, p);
    }

    float linear_to_srgb(float x) {
      if (x <= 0.0031308f) {
          return 12.92f * x;
      }
      return 1.055f * pow(x, 1.f / 2.4f) - 0.055f;
    }

    #define epsilon .0001

    vec3 normal( vec3 coord ) {
      if ( coord.x < epsilon ) return vec3( 1.0, 0.0, 0.0 );
      if ( coord.y < epsilon ) return vec3( 0.0, 1.0, 0.0 );
      if ( coord.z < epsilon ) return vec3( 0.0, 0.0, 1.0 );
      if ( coord.x > 1.0 - epsilon ) return vec3( - 1.0, 0.0, 0.0 );
      if ( coord.y > 1.0 - epsilon ) return vec3( 0.0, - 1.0, 0.0 );
      if ( coord.z > 1.0 - epsilon ) return vec3( 0.0, 0.0, - 1.0 );

      float step = 0.01;
      float x = sample1( coord + vec3( - step, 0.0, 0.0 ) ) - sample1( coord + vec3( step, 0.0, 0.0 ) );
      float y = sample1( coord + vec3( 0.0, - step, 0.0 ) ) - sample1( coord + vec3( 0.0, step, 0.0 ) );
      float z = sample1( coord + vec3( 0.0, 0.0, - step ) ) - sample1( coord + vec3( 0.0, 0.0, step ) );

      return normalize( vec3( x, y, z ) );
    }

    vec4 BlendUnder(vec4 color, vec4 newColor) {
      color.rgb += (1.0 - color.a) * newColor.a * newColor.rgb;
      color.a += (1.0 - color.a) * newColor.a;
      return color;
    }

    void main() {
      vec3 rayDir = normalize(v_direction);
      vec2 bounds = hitBox(v_origin, rayDir);
      if (bounds.x > bounds.y) discard;

      bounds.x = max(bounds.x, 0.0);

      vec3 p = v_origin + bounds.x * rayDir;
      vec3 inc = 1.0 / abs(rayDir);
      float delta = min(inc.x, min(inc.y, inc.z));
      delta /= steps;

      for (float t = bounds.x; t < bounds.y; t += delta) {
        vec4 samplerColor = sample2(p + 0.5);
        samplerColor.a *= .02;
        color = BlendUnder(color, samplerColor);

        p += rayDir * delta;
      }


      if ( color.a == 0.0 ) discard;
    }
      `,
        uniforms: {
          volume: { value: texture },
          threshold: { value: 0.8 },
          steps: { value: 1000 },
          u_invTransform: { value: invTransform },
        },
        cullFace: renderer.gl.BACK,
        depthTest: false,
      });

      const mesh = new Mesh(renderer, {
        geometry,
        program,
        mode: renderer.gl.TRIANGLE_STRIP,
        // mode: renderer.gl.POINTS,
      });

      mesh.setParent(scene);
      // 在此处设置Volume的位置和缩放
      mesh.position.set(center.x, center.y, center.z);
      // mesh.scale.set(2, 2, 2);
    };

    const sceneConfig: any = {
      postProcess: {
        enable: true,
        antialias: { enable: true },
      },
    };
    const groupLayer = new GroupGLLayer('group', [layer as any], { sceneConfig });
    groupLayer.addTo(map);

    return map;
  };

  useEffect(() => {
    let map: any;
    fetch('./data.zip')
      .then((res) => res.arrayBuffer())
      .then(async (data) => {
        const zip = new JSZip();
        const zipFile = await zip.loadAsync(data);
        const file = await zipFile.file('data.json');
        const json = await file?.async('string');
        map = init(JSON.parse(json as string));
      });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="live-wrap">
      <div className="leva-wrap">
        <Leva collapsed fill></Leva>
        <LevaPanel collapsed store={store} fill></LevaPanel>
      </div>
      <div className="scene-canvas" ref={refDom}></div>
    </div>
  );
}
