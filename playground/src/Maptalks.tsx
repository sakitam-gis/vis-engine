/* eslint-disable @typescript-eslint/ban-ts-comment */
import 'maptalks/dist/maptalks.css';
import * as maptalks from 'maptalks';
import { GroupGLLayer } from '@maptalks/gl';
import React, { useEffect, useRef } from 'react';
import { Leva, LevaPanel, useCreateStore } from 'leva';

import { Geometry, Mesh, Program, Vector3 } from '@sakitam-gis/vis-engine';
import { VeLayer } from '@sakitam-gis/maptalks-ve';

import { GLTFLoader } from './utils/GLTFLoader';
import './styles/index.less';

export default function Maptalks() {
  const refDom = useRef(null);

  const store = useCreateStore();

  const init = () => {
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
      return layer.coordinateToVector3([coord[0], coord[1]], z);
    };

    layer.prepareToDraw = function (gl, scene) {
      const renderer = this.getVeRenderer();

      const coords = [13.429362937522342, 52.518205849377495, 80.74258167487969];
      const center = projectToWorld(coords);

      const coordinates = [
        [13.429362937522342, 52.518205849377495],
        [102.51084435117338, 24.846755709924764],
        [114.46396935117377, 39.232415634606724],
      ];
      const position: number[] = [];

      for (let i = 0, len = coordinates.length; i < len; i++) {
        const p = projectToWorld(coordinates[i]);
        if (p) {
          position.push(p.x, p.y, p.z);
        }
      }

      console.time('start');
      let minX = Infinity,
        minY = Infinity,
        maxX = -Infinity,
        maxY = -Infinity,
        minZ = Infinity,
        maxZ = Infinity;
      for (let i = 0, len = position.length; i < len; i += 3) {
        const x = position[i];
        const y = position[i + 1];
        const z = position[i + 2];
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        minZ = Math.min(minZ, z);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
        maxZ = Math.max(maxZ, z);
      }

      if (maxZ === Infinity && minZ !== Infinity) {
        maxZ = minZ;
      }
      if (minZ === Infinity && maxZ !== Infinity) {
        minZ = maxZ;
      }

      const c = [(minX + maxX) / 2, (minY + maxY) / 2, (minZ + maxZ) / 2];
      // const c = [0, 0, 0];

      let i = 0;
      const len = position.length;
      for (; i < len; i += 3) {
        position[i] = position[i] - c[0];
        position[i + 1] = position[i + 1] - c[1];
        position[i + 2] = position[i + 2] - c[2];
      }

      console.timeEnd('start');

      const geometry = new Geometry(renderer, {
        position: {
          size: 3,
          data: new Float32Array(position),
        },
      });

      const program = new Program(renderer, {
        vertexShader: `
      attribute vec2 uv;
      attribute vec3 position;
      uniform vec3 cameraPosition;
      uniform mat4 viewMatrix;
      uniform mat4 modelMatrix;
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;

      varying vec2 vUv;

      void main() {
          vUv = uv;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

          gl_PointSize = 10.0;
      }
      `,
        fragmentShader: `
      precision highp float;

      uniform float uTime;
      varying vec2 vUv;

      void main() {
          gl_FragColor.rgb = 0.5 + 0.3 * sin(vUv.yxx + uTime) + vec3(0.2, 0.0, 0.1);
          gl_FragColor.a = 1.0;

      }
      `,
        uniforms: {
          uTime: { value: 0.5 },
        },
        depthTest: true,
      });

      const mesh = new Mesh(renderer, {
        geometry,
        program,
        // mode: renderer.gl.POINTS,
      });

      mesh.position.set(c[0], c[1], c[2]);

      const loadGLTF = async (
        file = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb',
      ) => await GLTFLoader.load(renderer, file);

      loadGLTF().then((gltfObject) => {
        scene.children.forEach((child) => child.setParent(null));

        const s = gltfObject.scene || gltfObject.scenes[0];

        if (center) {
          s[0].position.set(center.x, center.y, center.z);
        }
        s[0].quaternion.fromAxisAngle(new Vector3(0, 1, 0), (180 * Math.PI) / 180);
        const scale = 1;
        s[0].scale.set(scale, scale, scale);
        layer.addMesh(s);
        layer.addMesh(mesh);
        // 因为有异步资源，但是 GLTFLoader 未做处理
        setTimeout(() => {
          // @ts-ignore
          if (layer._getRenderer()) {
            // @ts-ignore
            layer._getRenderer().setToRedraw();
          }
        }, 3000);
      });
    };

    const sceneConfig = {
      postProcess: {
        enable: true,
        antialias: { enable: true },
      },
    };
    const groupLayer = new GroupGLLayer('group', [layer], { sceneConfig });
    groupLayer.addTo(map);
    // console.log(sceneConfig);
    // layer.addTo(map);

    return map;
  };

  useEffect(() => {
    const map = init();

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
