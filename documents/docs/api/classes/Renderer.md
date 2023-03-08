---
id: "Renderer"
title: "Class: Renderer"
sidebar_label: "Renderer"
sidebar_position: 0
custom_edit_url: null
---

渲染器

## Constructors

### constructor

• **new Renderer**(`gl`, `opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | `WebGLRenderingContext` \| `WebGL2RenderingContext` \| `HTMLCanvasElement` |
| `opts` | `Partial`<[`RendererOptions`](../interfaces/RendererOptions.md)\> |

#### Defined in

[src/core/Renderer.ts:158](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L158)

## Properties

### bindVertexArray

• **bindVertexArray**: (`arrayObject`: ``null`` \| `WebGLVertexArrayObjectOES`) => `void` \| (`array`: ``null`` \| `WebGLVertexArrayObject`) => `void`

#### Defined in

[src/core/Renderer.ts:147](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L147)

___

### createVertexArray

• **createVertexArray**: () => ``null`` \| `WebGLVertexArrayObjectOES` \| () => ``null`` \| `WebGLVertexArrayObject`

#### Defined in

[src/core/Renderer.ts:144](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L144)

___

### deleteVertexArray

• **deleteVertexArray**: (`arrayObject`: ``null`` \| `WebGLVertexArrayObjectOES`) => `void` \| (`vertexArray`: ``null`` \| `WebGLVertexArrayObject`) => `void`

#### Defined in

[src/core/Renderer.ts:150](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L150)

___

### drawArraysInstanced

• **drawArraysInstanced**: (`mode`: `number`, `first`: `number`, `count`: `number`, `primcount`: `number`) => `void` \| (`mode`: `number`, `first`: `number`, `count`: `number`, `instanceCount`: `number`) => `void`

#### Defined in

[src/core/Renderer.ts:138](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L138)

___

### drawElementsInstanced

• **drawElementsInstanced**: (`mode`: `number`, `count`: `number`, `type`: `number`, `offset`: `number`, `primcount`: `number`) => `void` \| (`mode`: `number`, `count`: `number`, `type`: `number`, `offset`: `number`, `instanceCount`: `number`) => `void`

#### Defined in

[src/core/Renderer.ts:141](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L141)

___

### height

• **height**: `number`

#### Defined in

[src/core/Renderer.ts:156](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L156)

___

### vertexAttribDivisor

• **vertexAttribDivisor**: (`index`: `number`, `divisor`: `number`) => `void` \| (`index`: `number`, `divisor`: `number`) => `void`

#### Defined in

[src/core/Renderer.ts:135](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L135)

___

### width

• **width**: `number`

#### Defined in

[src/core/Renderer.ts:154](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L154)

## Accessors

### attributes

• `get` **attributes**(): `Object`

获取 `Renderer` 的内部属性值

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `alpha` | `WithUndef`<`boolean`\> |
| `antialias` | `WithUndef`<`boolean`\> |
| `autoClear` | `boolean` |
| `color` | `boolean` |
| `depth` | `WithUndef`<`boolean`\> |
| `dpr` | `number` |
| `flipY` | `boolean` |
| `frustumCull` | `boolean` |
| `premultipliedAlpha` | `WithUndef`<`boolean`\> |
| `preserveDrawingBuffer` | `WithUndef`<`boolean`\> |
| `stencil` | `WithUndef`<`boolean`\> |

#### Defined in

[src/core/Renderer.ts:284](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L284)

___

### canvas

• `get` **canvas**(): `HTMLCanvasElement` \| `OffscreenCanvas`

获取 canvas 实例

#### Returns

`HTMLCanvasElement` \| `OffscreenCanvas`

#### Defined in

[src/core/Renderer.ts:303](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L303)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 gl 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Defined in

[src/core/Renderer.ts:277](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L277)

___

### isWebGL

• `get` **isWebGL**(): `boolean`

判断是否是 `webgl1`

#### Returns

`boolean`

#### Defined in

[src/core/Renderer.ts:310](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L310)

___

### isWebGL2

• `get` **isWebGL2**(): `boolean`

判断是否是 `webgl2`

#### Returns

`boolean`

#### Defined in

[src/core/Renderer.ts:317](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L317)

___

### premultipliedAlpha

• `get` **premultipliedAlpha**(): `WithUndef`<`boolean`\>

获取 `premultipliedAlpha` 配置

#### Returns

`WithUndef`<`boolean`\>

#### Defined in

[src/core/Renderer.ts:341](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L341)

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

[src/core/Renderer.ts:324](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L324)

___

### state

• `get` **state**(): [`State`](State.md)

获取 `renderState`

#### Returns

[`State`](State.md)

#### Defined in

[src/core/Renderer.ts:334](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L334)

## Methods

### clear

▸ **clear**(`color?`, `depth?`, `stencil?`): `void`

清空画布

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `boolean` | 颜色 |
| `depth` | `WithUndef`<`boolean`\> | 深度 |
| `stencil` | `WithUndef`<`boolean`\> | 模板 |

#### Returns

`void`

#### Defined in

[src/core/Renderer.ts:462](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L462)

___

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

[src/core/Renderer.ts:391](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L391)

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

[src/core/Renderer.ts:412](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L412)

___

### resetState

▸ **resetState**(`force?`, `vao?`): `void`

重置内部 `WebGL` 状态。
需要注意的是一般单独使用时我们不需要去重置状态，但是在跨多个 `WebGL` 库共享单个 `WebGL` 上下文时我们需要关注此方法。默认情况下
我们会重置所有的状态，但是当我们确认多个共享库使用的状态完全相同时我们可以考虑仅重置部分状态以提高性能。但是有可能会出现无法预料的情况
请在你确认状态完全匹配时使用 `force = false` 重置部分状态。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `force` | `boolean` | `true` | 是否强制重置所用状态，默认是 `true` |
| `vao` | `WithNull`<`WebGLVertexArrayObject` \| `WebGLVertexArrayObjectOES`\> | `null` |  |

#### Returns

`void`

#### Defined in

[src/core/Renderer.ts:480](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L480)

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

[src/core/Renderer.ts:350](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L350)

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

[src/core/Renderer.ts:365](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Renderer.ts#L365)
