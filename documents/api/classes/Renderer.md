[vis-engine - v1.2.0](../index.md) / Renderer

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
- [resetState](Renderer.md#resetstate)
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

[src/core/Renderer.ts:158](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;158)

## Properties

### bindVertexArray

• **bindVertexArray**: (`arrayObject`: ``null`` \| `WebGLVertexArrayObjectOES`) => `void` \| (`array`: ``null`` \| `WebGLVertexArrayObject`) => `void`

#### Defined in

[src/core/Renderer.ts:147](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;147)

___

### createVertexArray

• **createVertexArray**: () => ``null`` \| `WebGLVertexArrayObjectOES` \| () => ``null`` \| `WebGLVertexArrayObject`

#### Defined in

[src/core/Renderer.ts:144](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;144)

___

### deleteVertexArray

• **deleteVertexArray**: (`arrayObject`: ``null`` \| `WebGLVertexArrayObjectOES`) => `void` \| (`vertexArray`: ``null`` \| `WebGLVertexArrayObject`) => `void`

#### Defined in

[src/core/Renderer.ts:150](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;150)

___

### drawArraysInstanced

• **drawArraysInstanced**: (`mode`: `number`, `first`: `number`, `count`: `number`, `primcount`: `number`) => `void` \| (`mode`: `number`, `first`: `number`, `count`: `number`, `instanceCount`: `number`) => `void`

#### Defined in

[src/core/Renderer.ts:138](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;138)

___

### drawElementsInstanced

• **drawElementsInstanced**: (`mode`: `number`, `count`: `number`, `type`: `number`, `offset`: `number`, `primcount`: `number`) => `void` \| (`mode`: `number`, `count`: `number`, `type`: `number`, `offset`: `number`, `instanceCount`: `number`) => `void`

#### Defined in

[src/core/Renderer.ts:141](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;141)

___

### height

• **height**: `number`

#### Defined in

[src/core/Renderer.ts:156](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;156)

___

### vertexAttribDivisor

• **vertexAttribDivisor**: (`index`: `number`, `divisor`: `number`) => `void` \| (`index`: `number`, `divisor`: `number`) => `void`

#### Defined in

[src/core/Renderer.ts:135](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;135)

___

### width

• **width**: `number`

#### Defined in

[src/core/Renderer.ts:154](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;154)

## Accessors

### canvas

• `get` **canvas**(): `HTMLCanvasElement` \| `OffscreenCanvas`

获取 canvas 实例

#### Returns

`HTMLCanvasElement` \| `OffscreenCanvas`

#### Defined in

[src/core/Renderer.ts:282](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;282)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 gl 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Defined in

[src/core/Renderer.ts:275](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;275)

___

### isWebGL

• `get` **isWebGL**(): `boolean`

判断是否是 `webgl1`

#### Returns

`boolean`

#### Defined in

[src/core/Renderer.ts:289](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;289)

___

### isWebGL2

• `get` **isWebGL2**(): `boolean`

判断是否是 `webgl2`

#### Returns

`boolean`

#### Defined in

[src/core/Renderer.ts:296](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;296)

___

### premultipliedAlpha

• `get` **premultipliedAlpha**(): `WithUndef`<`boolean`\>

获取 `premultipliedAlpha` 配置

#### Returns

`WithUndef`<`boolean`\>

#### Defined in

[src/core/Renderer.ts:320](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;320)

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

[src/core/Renderer.ts:303](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;303)

___

### state

• `get` **state**(): [`State`](State.md)

获取 `renderState`

#### Returns

[`State`](State.md)

#### Defined in

[src/core/Renderer.ts:313](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;313)

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

[src/core/Renderer.ts:370](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;370)

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

[src/core/Renderer.ts:391](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;391)

___

### resetState

▸ **resetState**(`force?`): `void`

重置内部 `WebGL` 状态。
需要注意的是一般单独使用时我们不需要去重置状态，但是在跨多个 `WebGL` 库共享单个 `WebGL` 上下文时我们需要关注此方法。默认情况下
我们会重置所有的状态，但是当我们确认多个共享库使用的状态完全相同时我们可以考虑仅重置部分状态以提高性能。但是有可能会出现无法预料的情况
请在你确认状态完全匹配时使用 `force = false` 重置部分状态。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `force` | `boolean` | `true` | 是否强制重置所用状态，默认是 `true` |

#### Returns

`void`

#### Defined in

[src/core/Renderer.ts:441](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;441)

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

[src/core/Renderer.ts:329](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;329)

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

[src/core/Renderer.ts:344](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;4124c8d#line&#x3D;344)
