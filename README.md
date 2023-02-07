## vis-engine

**vis-engine** 是一个简单的 `webgl` 渲染引擎工具包，它的设计受到了 [threejs](https://threejs.org/) 和 [ogl](https://github.com/oframe/ogl) 的启发。

它的定位介于 WebGL 封装和渲染引擎之间，包含了相机，Mesh 和 Shader 模块化以及 webgl 状态管理。

[![CI](https://github.com/sakitam-gis/vis-engine/actions/workflows/ci.yml/badge.svg)](https://github.com/sakitam-gis/vis-engine/actions/workflows/ci.yml) [![npm version](https://badgen.net/npm/v/@sakitam-gis/vis-engine)](https://npm.im/@sakitam-gis/vis-engine) [![npm downloads](https://badgen.net/npm/dm/@sakitam-gis/vis-engine)](https://npm.im/@sakitam-gis/vis-engine) [![Coverage Status](https://coveralls.io/repos/github/sakitam-gis/vis-engine/badge.svg?branch=master)](https://coveralls.io/github/sakitam-gis/vis-engine?branch=master)

### Install

```bash
yarn add @sakitam-gis/vis-engine -S

pnpm i @sakitam-gis/vis-engine

import { Renderer, Raf, Scene, PerspectiveCamera, Geometry, Mesh, Program } from '@sakitam-gis/vis-engine';
```

### Usage

#### Renderer

创建渲染器：

```ts
const renderer = new Renderer(canvas, {
  alpha: true,
});
```

#### Camera

创建相机：

```ts
const fov = 15;
const nearZ = 0.1;

const farZ = 100;
const camera = new PerspectiveCamera(fov, canvas.width / canvas.height, nearZ, farZ);
camera.position.z = fov;
```

#### Scene

创建场景：

```ts
const scene = new Scene();
```

#### Geometry

创建几何体对象：

```ts
const geometry = new Geometry(renderer, {
  position: {
    size: 3,
    data: new Float32Array([
      -1.6, 1.5, 0,
      -1, -1, 0,
      1, -1, 0,
      -1, -1, 0,
      1, -1, 0,
      1.6, 1.5, 0,
    ])
  },
});
```

#### Program

创建着色器资源：

```ts
const program = new Program(renderer, {
  vertexShader: `
    attribute vec2 uv;
    attribute vec3 position;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec2 vUv;

    void main() {
        vUv = uv;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

        // gl_PointSize only applicable for gl.POINTS draw mode
        gl_PointSize = 5.0;
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
    uTime: { value: 0 },
  },
});
```

#### Mesh

创建 Mesh：

```ts
const triangles = new Mesh(renderer, { mode: renderer.gl.TRIANGLES, geometry, program });
```

#### 添加到场景

```ts
scene.add(triangles);
```

#### 渲染

更新 uniform 变量并渲染场景：

```ts
const raf = new Raf((t) => {
  program.setUniform('uTime', t);
  renderer.render({ scene, camera });
});
```

### Types

vis-engine 完全采用 Typescript 编写

### Roadmap

📢注意：这是一个玩具项目，不是为了替代什么，但是我会尽力完善它，它最大的方向可能是和各类地图引擎结合例如 mapbox-gl/maptalks/leaflet 等，所以暂时没有固定的路线图。

- mapbox-gl adapters: https://github.com/sakitam-gis/vis-engine/tree/master/adapters/mapbox
- maptalks adapters: https://github.com/sakitam-gis/vis-engine/tree/master/adapters/maptalks

### License

[BSD 3-Clause](https://github.com/sakitam-gis/vis-engine/LICENSE)
