[vis-engine - v1.0.0](../index.md) / Renderer

# Class: Renderer

渲染器

## Table of contents

### Constructors

- [constructor](Renderer.md#constructor)

### Properties

- [bindVertexArray](Renderer.md#bindvertexarray)
- [createVertexArray](Renderer.md#createvertexarray)
- [deleteVertexArray](Renderer.md#deletevertexarray)
- [drawArraysInstanced](Renderer.md#drawarraysinstanced)
- [drawElementsInstanced](Renderer.md#drawelementsinstanced)
- [height](Renderer.md#height)
- [vertexAttribDivisor](Renderer.md#vertexattribdivisor)
- [width](Renderer.md#width)

### Accessors

- [canvas](Renderer.md#canvas)
- [gl](Renderer.md#gl)
- [isWebGL](Renderer.md#iswebgl)
- [isWebGL2](Renderer.md#iswebgl2)
- [premultipliedAlpha](Renderer.md#premultipliedalpha)
- [size](Renderer.md#size)
- [state](Renderer.md#state)

### Methods

- [getRenderList](Renderer.md#getrenderlist)
- [render](Renderer.md#render)
- [setSize](Renderer.md#setsize)
- [setViewport](Renderer.md#setviewport)

## Constructors

### constructor

• **new Renderer**(`gl`, `opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | `WebGLRenderingContext` \| `WebGL2RenderingContext` \| `HTMLCanvasElement` |
| `opts` | `Partial`<[`RendererOptions`](../interfaces/RendererOptions.md)\> |

#### Defined in

[core/Renderer.ts:146](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;146)

## Properties

### bindVertexArray

• **bindVertexArray**: `any`

#### Defined in

[core/Renderer.ts:139](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;139)

___

### createVertexArray

• **createVertexArray**: `any`

#### Defined in

[core/Renderer.ts:138](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;138)

___

### deleteVertexArray

• **deleteVertexArray**: `any`

#### Defined in

[core/Renderer.ts:140](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;140)

___

### drawArraysInstanced

• **drawArraysInstanced**: `any`

#### Defined in

[core/Renderer.ts:136](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;136)

___

### drawElementsInstanced

• **drawElementsInstanced**: `any`

#### Defined in

[core/Renderer.ts:137](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;137)

___

### height

• **height**: `number`

#### Defined in

[core/Renderer.ts:144](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;144)

___

### vertexAttribDivisor

• **vertexAttribDivisor**: `any`

#### Defined in

[core/Renderer.ts:135](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;135)

___

### width

• **width**: `number`

#### Defined in

[core/Renderer.ts:142](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;142)

## Accessors

### canvas

• `get` **canvas**(): `HTMLCanvasElement` \| `OffscreenCanvas`

获取 canvas 实例

#### Returns

`HTMLCanvasElement` \| `OffscreenCanvas`

#### Defined in

[core/Renderer.ts:236](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;236)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 gl 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Defined in

[core/Renderer.ts:229](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;229)

___

### isWebGL

• `get` **isWebGL**(): `boolean`

判断是否是 `webgl1`

#### Returns

`boolean`

#### Defined in

[core/Renderer.ts:243](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;243)

___

### isWebGL2

• `get` **isWebGL2**(): `boolean`

判断是否是 `webgl2`

#### Returns

`boolean`

#### Defined in

[core/Renderer.ts:250](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;250)

___

### premultipliedAlpha

• `get` **premultipliedAlpha**(): `WithUndef`<`boolean`\>

获取 `premultipliedAlpha` 配置

#### Returns

`WithUndef`<`boolean`\>

#### Defined in

[core/Renderer.ts:274](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;274)

___

### size

• `get` **size**(): `Object`

获取 canvas 画布大小

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

#### Defined in

[core/Renderer.ts:257](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;257)

___

### state

• `get` **state**(): `any`

获取 `renderState`

#### Returns

`any`

#### Defined in

[core/Renderer.ts:267](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;267)

## Methods

### getRenderList

▸ **getRenderList**(`«destructured»`): `any`[]

获取渲染列表（排序先不实现）

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |

#### Returns

`any`[]

#### Defined in

[core/Renderer.ts:324](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;324)

___

### render

▸ **render**(`params`): `void`

渲染函数，一般会在每一帧中调用此方法

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `RenderParams` |

#### Returns

`void`

#### Defined in

[core/Renderer.ts:345](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;345)

___

### setSize

▸ **setSize**(`width`, `height`): `void`

设置画布宽高

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | 宽 |
| `height` | `number` | 高 |

#### Returns

`void`

#### Defined in

[core/Renderer.ts:283](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;283)

___

### setViewport

▸ **setViewport**(`width`, `height`, `x?`, `y?`): `void`

设置 `webgl` 的 `viewport`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `width` | `any` | `undefined` |
| `height` | `any` | `undefined` |
| `x` | `number` | `0` |
| `y` | `number` | `0` |

#### Returns

`void`

#### Defined in

[core/Renderer.ts:298](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;1dddf76#line&#x3D;298)
