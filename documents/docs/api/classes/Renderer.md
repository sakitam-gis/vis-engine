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

• **new Renderer**(`gl`, `opts?`): [`Renderer`](Renderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | `WebGLRenderingContext` \| `WebGL2RenderingContext` \| `HTMLCanvasElement` |
| `opts` | `Partial`\<[`RendererOptions`](../interfaces/RendererOptions.md)\> |

#### Returns

[`Renderer`](Renderer.md)

#### Defined in

[src/core/Renderer.ts:228](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L228)

## Properties

### vertexAttribDivisor

• **vertexAttribDivisor**: (`index`: `number`, `divisor`: `number`) => `void` \| (`index`: `number`, `divisor`: `number`) => `void`

#### Defined in

[src/core/Renderer.ts:205](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L205)

___

### drawArraysInstanced

• **drawArraysInstanced**: (`mode`: `number`, `first`: `number`, `count`: `number`, `primcount`: `number`) => `void` \| (`mode`: `number`, `first`: `number`, `count`: `number`, `instanceCount`: `number`) => `void`

#### Defined in

[src/core/Renderer.ts:208](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L208)

___

### drawElementsInstanced

• **drawElementsInstanced**: (`mode`: `number`, `count`: `number`, `type`: `number`, `offset`: `number`, `primcount`: `number`) => `void` \| (`mode`: `number`, `count`: `number`, `type`: `number`, `offset`: `number`, `instanceCount`: `number`) => `void`

#### Defined in

[src/core/Renderer.ts:211](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L211)

___

### createVertexArray

• **createVertexArray**: () => ``null`` \| `WebGLVertexArrayObjectOES` \| () => ``null`` \| `WebGLVertexArrayObject`

#### Defined in

[src/core/Renderer.ts:214](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L214)

___

### bindVertexArray

• **bindVertexArray**: (`arrayObject`: ``null`` \| `WebGLVertexArrayObjectOES`) => `void` \| (`array`: ``null`` \| `WebGLVertexArrayObject`) => `void`

#### Defined in

[src/core/Renderer.ts:217](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L217)

___

### deleteVertexArray

• **deleteVertexArray**: (`arrayObject`: ``null`` \| `WebGLVertexArrayObjectOES`) => `void` \| (`vertexArray`: ``null`` \| `WebGLVertexArrayObject`) => `void`

#### Defined in

[src/core/Renderer.ts:220](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L220)

___

### width

• **width**: `number`

#### Defined in

[src/core/Renderer.ts:224](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L224)

___

### height

• **height**: `number`

#### Defined in

[src/core/Renderer.ts:226](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L226)

## Accessors

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 gl 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Defined in

[src/core/Renderer.ts:383](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L383)

___

### attributes

• `get` **attributes**(): `Object`

获取 `Renderer` 的内部属性值

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dpr` | `number` |
| `flipY` | `boolean` |
| `depth` | `WithUndef`\<`boolean`\> |
| `color` | `boolean` |
| `antialias` | `WithUndef`\<`boolean`\> |
| `alpha` | `WithUndef`\<`boolean`\> |
| `stencil` | `WithUndef`\<`boolean`\> |
| `autoClear` | `boolean` |
| `frustumCull` | `boolean` |
| `premultipliedAlpha` | `WithUndef`\<`boolean`\> |
| `preserveDrawingBuffer` | `WithUndef`\<`boolean`\> |

#### Defined in

[src/core/Renderer.ts:390](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L390)

___

### canvas

• `get` **canvas**(): `HTMLCanvasElement` \| `OffscreenCanvas`

获取 canvas 实例

#### Returns

`HTMLCanvasElement` \| `OffscreenCanvas`

#### Defined in

[src/core/Renderer.ts:409](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L409)

___

### isWebGL

• `get` **isWebGL**(): `boolean`

判断是否是 `webgl1`

#### Returns

`boolean`

#### Defined in

[src/core/Renderer.ts:416](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L416)

___

### isWebGL2

• `get` **isWebGL2**(): `boolean`

判断是否是 `webgl2`

#### Returns

`boolean`

#### Defined in

[src/core/Renderer.ts:423](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L423)

___

### extensions

• `get` **extensions**(): `Object`

获取已开启的扩展

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ANGLE_instanced_arrays` | `Extensions` |
| `EXT_texture_filter_anisotropic` | `Extensions` |
| `EXT_blend_minmax` | `Extensions` |
| `EXT_color_buffer_float` | `Extensions` |
| `EXT_color_buffer_half_float` | `Extensions` |
| `EXT_frag_depth` | `Extensions` |
| `EXT_shader_texture_lod` | `Extensions` |
| `OES_element_index_uint` | `Extensions` |
| `OES_standard_derivatives` | `Extensions` |
| `OES_texture_float` | `Extensions` |
| `OES_texture_float_linear` | `Extensions` |
| `OES_texture_half_float` | `Extensions` |
| `OES_texture_half_float_linear` | `Extensions` |
| `OES_vertex_array_object` | `Extensions` |
| `WEBGL_color_buffer_float` | `Extensions` |
| `WEBGL_debug_renderer_info` | `Extensions` |
| `WEBGL_depth_texture` | `Extensions` |
| `WEBGL_draw_buffers` | `Extensions` |
| `WEBGL_lose_context` | `Extensions` |

#### Defined in

[src/core/Renderer.ts:430](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L430)

___

### size

• `get` **size**(): `Object`

获取 canvas 画布大小

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Defined in

[src/core/Renderer.ts:445](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L445)

___

### state

• `get` **state**(): [`State`](State.md)

获取 `renderState`

#### Returns

[`State`](State.md)

#### Defined in

[src/core/Renderer.ts:455](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L455)

___

### premultipliedAlpha

• `get` **premultipliedAlpha**(): `WithUndef`\<`boolean`\>

获取 `premultipliedAlpha` 配置

#### Returns

`WithUndef`\<`boolean`\>

#### Defined in

[src/core/Renderer.ts:462](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L462)

## Methods

### extension

▸ **extension**(`key`): `Extensions`

获取指定的扩展

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ExtensionKeys` |

#### Returns

`Extensions`

#### Defined in

[src/core/Renderer.ts:438](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L438)

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

[src/core/Renderer.ts:471](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L471)

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

[src/core/Renderer.ts:486](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L486)

___

### getRenderList

▸ **getRenderList**(`«destructured»`): `any`[]

获取渲染列表（排序先不实现）

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `scene` | `any` |
| › `camera` | `any` |

#### Returns

`any`[]

#### Defined in

[src/core/Renderer.ts:512](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L512)

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

[src/core/Renderer.ts:533](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L533)

___

### clear

▸ **clear**(`color?`, `depth?`, `stencil?`): `void`

清空画布

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `boolean` | 颜色 |
| `depth` | `WithUndef`\<`boolean`\> | 深度 |
| `stencil` | `WithUndef`\<`boolean`\> | 模板 |

#### Returns

`void`

#### Defined in

[src/core/Renderer.ts:583](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L583)

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
| `vao` | `WithNull`\<`WebGLVertexArrayObject` \| `WebGLVertexArrayObjectOES`\> | `null` |  |

#### Returns

`void`

#### Defined in

[src/core/Renderer.ts:601](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts#L601)
