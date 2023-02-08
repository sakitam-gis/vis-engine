---
id: "Program"
title: "Class: Program"
sidebar_label: "Program"
sidebar_position: 0
custom_edit_url: null
---

着色器程序对象封装，主要功能如下：
- 创建Program管线，编译顶点着色器和片段着色器源码；
- 管理`Attribute`属性
- 管理`Uniform`属性
- 渲染状态的切换

示例代码：
```jsx live
function render(props) {
  const drawModelVertex = `
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
    `;

  const drawModelFragment = `
    precision highp float;

    uniform float uTime;
    varying vec2 vUv;

    void main() {
        gl_FragColor.rgb = 0.5 + 0.3 * sin(vUv.yxx + uTime) + vec3(0.2, 0.0, 0.1);
        gl_FragColor.a = 1.0;
    }
    `;

  const refDom = useRef(null);

  const init = () => {
    const canvas = refDom.current;

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    const renderer = new Renderer(canvas, {
      alpha: true,
    });

    const fov = 15;
    const nearZ = 0.1;

    const farZ = 100;
    const camera = new PerspectiveCamera(fov, canvas.width / canvas.height, nearZ, farZ);
    camera.position.z = 15;

    function resize(target) {
      const { width, height } = target.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / height;
    }

    const scene = new Scene();

    const geometry = new Geometry(renderer, {
      position: {
        size: 3,
        data: new Float32Array([
          -0.5, 0.5, 0,
          -0.5, -0.5, 0,
          0.5, 0.5, 0,
          0.5, -0.5, 0
        ])
      },
      uv: {
        size: 2,
        data: new Float32Array([0, 1, 1, 1, 0, 0, 1, 0])
      },
      index: {
        data: new Uint16Array([0, 1, 2, 1, 3, 2])
      },
    });

    const program = new Program(renderer, {
      vertexShader: drawModelVertex,
      fragmentShader: drawModelFragment,
      uniforms: {
        uTime: { value: 0 },
      },
    });

    const points = new Mesh(renderer, { mode: renderer.gl.POINTS, geometry, program });
    points.setParent(scene);
    points.position.set(-1, 1, 0);

    const lineStrip = new Mesh(renderer, { mode: renderer.gl.LINES, geometry, program });
    lineStrip.setParent(scene);
    lineStrip.position.set(1, 1, 0);

    const lineLoop = new Mesh(renderer, { mode: renderer.gl.LINE_LOOP, geometry, program });
    lineLoop.setParent(scene);
    lineLoop.position.set(-1, -1, 0);

    const triangles = new Mesh(renderer, { mode: renderer.gl.TRIANGLES, geometry, program });
    triangles.setParent(scene);
    triangles.position.set(1, -1, 0);

    const raf = new Raf((t) => {
      program.setUniform('uTime', t);
      renderer.render({ scene, camera });
    });

    return {
      canvas,
      resize,
    }
  }

  useEffect(() => {
    const { canvas, resize } = init();

    observe(canvas, resize);

    return () => {
      unobserve(canvas, resize);
    };
  }, []);

  return (
    <div className="live-wrap">
      <canvas className="scene-canvas" ref={refDom}></canvas>
    </div>
  );
}
```

## Hierarchy

- [`Resource`](Resource.md)<[`ProgramOptions`](../interfaces/ProgramOptions.md)\>

  ↳ **`Program`**

## Constructors

### constructor

• **new Program**(`renderer`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `any` |
| `options` | `Partial`<[`ProgramOptions`](../interfaces/ProgramOptions.md)\> |

#### Overrides

[Resource](Resource.md).[constructor](Resource.md#constructor)

#### Defined in

[src/core/Program.ts:330](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;1f7cbec#line&#x3D;330)

## Properties

### attributeOrder

• **attributeOrder**: `string`

#### Defined in

[src/core/Program.ts:316](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;1f7cbec#line&#x3D;316)

___

### byteLength

• **byteLength**: `number`

#### Inherited from

[Resource](Resource.md).[byteLength](Resource.md#bytelength)

#### Defined in

[src/core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;28)

___

### id

• **id**: `string`

#### Inherited from

[Resource](Resource.md).[id](Resource.md#id)

#### Defined in

[src/core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;21)

___

### name

• **name**: `WithUndef`<`string`\>

#### Inherited from

[Resource](Resource.md).[name](Resource.md#name)

#### Defined in

[src/core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;23)

___

### options

• **options**: `Partial`<[`ResourceOptions`](../interfaces/ResourceOptions.md) & [`ProgramOptions`](../interfaces/ProgramOptions.md)\>

#### Inherited from

[Resource](Resource.md).[options](Resource.md#options)

#### Defined in

[src/core/Resource.ts:30](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;30)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Resource](Resource.md).[renderer](Resource.md#renderer)

#### Defined in

[src/core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1f7cbec#line&#x3D;7)

___

### uniforms

• **uniforms**: `any`

#### Defined in

[src/core/Program.ts:318](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;1f7cbec#line&#x3D;318)

___

### userData

• **userData**: `any`

#### Inherited from

[Resource](Resource.md).[userData](Resource.md#userdata)

#### Defined in

[src/core/Resource.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;25)

## Accessors

### attributeLocations

• `get` **attributeLocations**(): `Map`<`any`, `any`\>

#### Returns

`Map`<`any`, `any`\>

#### Defined in

[src/core/Program.ts:415](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;1f7cbec#line&#x3D;415)

___

### fragmentShader

• `get` **fragmentShader**(): `FragmentShader`

获取 `FragmentShader` 对象

#### Returns

`FragmentShader`

#### Defined in

[src/core/Program.ts:429](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;1f7cbec#line&#x3D;429)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Resource.gl

#### Defined in

[src/core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1f7cbec#line&#x3D;16)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Inherited from

Resource.handle

#### Defined in

[src/core/Resource.ts:47](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;47)

___

### rendererState

• `get` **rendererState**(): [`State`](State.md)

获取渲染状态

#### Returns

[`State`](State.md)

#### Inherited from

Resource.rendererState

#### Defined in

[src/core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1f7cbec#line&#x3D;23)

___

### uniformLocations

• `get` **uniformLocations**(): `Map`<`any`, `any`\>

#### Returns

`Map`<`any`, `any`\>

#### Defined in

[src/core/Program.ts:411](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;1f7cbec#line&#x3D;411)

___

### vertexShader

• `get` **vertexShader**(): `VertexShader`

获取 `VertexShader` 对象

#### Returns

`VertexShader`

#### Defined in

[src/core/Program.ts:422](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;1f7cbec#line&#x3D;422)

## Methods

### applyState

▸ **applyState**(): `void`

#### Returns

`void`

#### Defined in

[src/core/Program.ts:518](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;1f7cbec#line&#x3D;518)

___

### bind

▸ **bind**(): `void`

使用此 Program

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[bind](Resource.md#bind)

#### Defined in

[src/core/Program.ts:536](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;1f7cbec#line&#x3D;536)

___

### createHandle

▸ **createHandle**(): ``null`` \| `WebGLProgram`

#### Returns

``null`` \| `WebGLProgram`

#### Overrides

[Resource](Resource.md).[createHandle](Resource.md#createhandle)

#### Defined in

[src/core/Program.ts:547](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;1f7cbec#line&#x3D;547)

___

### delete

▸ **delete**(`«destructured»?`): [`Program`](Program.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `deleteChildren` | `undefined` \| `boolean` |

#### Returns

[`Program`](Program.md)

#### Inherited from

[Resource](Resource.md).[delete](Resource.md#delete)

#### Defined in

[src/core/Resource.ts:74](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;74)

___

### deleteHandle

▸ **deleteHandle**(): `void`

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[deleteHandle](Resource.md#deletehandle)

#### Defined in

[src/core/Program.ts:551](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;1f7cbec#line&#x3D;551)

___

### destroy

▸ **destroy**(): `void`

销毁此`Program`

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[destroy](Resource.md#destroy)

#### Defined in

[src/core/Program.ts:601](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;1f7cbec#line&#x3D;601)

___

### removeStats

▸ **removeStats**(): `void`

#### Returns

`void`

#### Inherited from

[Resource](Resource.md).[removeStats](Resource.md#removestats)

#### Defined in

[src/core/Resource.ts:99](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;99)

___

### restoreHandle

▸ **restoreHandle**(): `void`

恢复为原有 `handle`

#### Returns

`void`

#### Inherited from

[Resource](Resource.md).[restoreHandle](Resource.md#restorehandle)

#### Defined in

[src/core/Resource.ts:63](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;63)

___

### setStates

▸ **setStates**(`states`, `merge?`): `void`

设置 Program 的 render state

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `states` | `Partial`<[`ProgramRenderState`](../interfaces/ProgramRenderState.md)\> | `undefined` |  |
| `merge` | `boolean` | `true` | 是否使用合并模式，如果为 `false` 则直接替换 |

#### Returns

`void`

#### Defined in

[src/core/Program.ts:495](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;1f7cbec#line&#x3D;495)

___

### setUniform

▸ **setUniform**(`key`, `value`): `void`

设置对应的 Uniform 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[src/core/Program.ts:527](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;1f7cbec#line&#x3D;527)

___

### swapHandle

▸ **swapHandle**(`handle`): `void`

交换为新的 `handle`（一般我们会用在虚拟 webgl 环境中）

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `any` |

#### Returns

`void`

#### Inherited from

[Resource](Resource.md).[swapHandle](Resource.md#swaphandle)

#### Defined in

[src/core/Resource.ts:55](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;55)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Resource](Resource.md).[toString](Resource.md#tostring)

#### Defined in

[src/core/Resource.ts:111](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;111)

___

### unbind

▸ **unbind**(): `void`

取消使用此 `Program`

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[unbind](Resource.md#unbind)

#### Defined in

[src/core/Program.ts:543](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;1f7cbec#line&#x3D;543)

___

### use

▸ **use**(): `void`

#### Returns

`void`

#### Defined in

[src/core/Program.ts:436](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;1f7cbec#line&#x3D;436)
