## @sakitam-gis/mapbox-ve

这是 [vis-engine](https://github.com/sakitam-gis/vis-engine) 与 [mapbox-gl](https://github.com/mapbox/mapbox-gl-js) 的[自定义图层](https://docs.mapbox.com/mapbox-gl-js/api/properties/#customlayerinterface)结合的一个插件，主要是为了进行相机的同步

[![CI](https://github.com/sakitam-gis/vis-engine/actions/workflows/ci.yml/badge.svg)](https://github.com/sakitam-gis/vis-engine/actions/workflows/ci.yml) [![npm version](https://badgen.net/npm/v/@sakitam-gis/mapbox-ve)](https://npm.im/@sakitam-gis/mapbox-ve) [![npm downloads](https://badgen.net/npm/dm/@sakitam-gis/mapbox-ve)](https://npm.im/@sakitam-gis/mapbox-ve)

### Install

```bash
yarn add @sakitam-gis/mapbox-ve -S

pnpm i @sakitam-gis/mapbox-ve

import { 
  CameraSync,
  fromLngLat,
  meterInMercatorCoordinateUnits,
  mercatorZfromAltitude,
 } from '@sakitam-gis/mapbox-ve';
```

### Usage

#### 创建图层

```ts
class MeshLayer {
  constructor (id) {
    this.id = id;
    this.type = 'custom';
    this.renderingMode = '2d';
  }

  get camera () {
    return this.sync.camera;
  }

  updateCamera() {
    this.sync.update();
  }

  projectToWorld (coords) {
    let i = 0;
    const len = coords.length;
    const position = new Float32Array(len * 3);
    for (; i < len; i++) {
      const coord = coords[i];
      const mc = fromLngLat({
        lng: coord[0],
        lat: coord[1],
      }, coord[2]);
      position.set([mc.x, mc.y, mc.z], i * 3);
    }

    return position;
  }

  onAdd (map, gl) {
    this.renderer = new Renderer(gl, {
      autoClear: false,
    });
    this.scene = new Scene();
    this.sync = new mbve.CameraSync(map, 'perspective', this.scene);
    this.updateCamera = this.updateCamera.bind(this);
    map.on('move', this.updateCamera);
    map.on('resize', this.updateCamera);

    const geometry = new Geometry(this.renderer, {
      position: {
        size: 3,
        data: this.projectToWorld([
          [70.26608, 38.7213],
          [102.51084435117338, 24.846755709924764],
          [114.46396935117377, 39.232415634606724]
        ]),
      },
      // position: {
      //   size: 2,
      //   data: new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1])
      // },
      // uv: {
      //   size: 2,
      //   data: new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1])
      // }
    });

    this.program = new Program(this.renderer, {
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
      depthTest: false,
    });

    this.mesh = new Mesh(this.renderer, {
      geometry,
      program: this.program,
    });

    this.scene.add(this.mesh);

    this.updateCamera();
  }

  onRemove () {
    this.mesh.destroy();
    this.program.destroy();
  }

  prerender () {
  }

  render () {
    this.scene.worldMatrixNeedsUpdate = true;
    this.renderer.resetState();
    this.renderer.render({
      scene: this.scene,
      camera: this.camera,
    });
  }
}
```

#### 添加到地图

```ts
const layer = new MeshLayer('mesh');
map.addLayer(layer);
```

### License

[BSD 3-Clause](https://github.com/sakitam-gis/vis-engine/LICENSE)
