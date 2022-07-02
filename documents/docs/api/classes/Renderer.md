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

[core/Renderer.ts:146](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;146)

## Properties

### bindVertexArray

• **bindVertexArray**: `any`

#### Defined in

[core/Renderer.ts:139](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;139)

___

### createVertexArray

• **createVertexArray**: `any`

#### Defined in

[core/Renderer.ts:138](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;138)

___

### deleteVertexArray

• **deleteVertexArray**: `any`

#### Defined in

[core/Renderer.ts:140](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;140)

___

### drawArraysInstanced

• **drawArraysInstanced**: `any`

#### Defined in

[core/Renderer.ts:136](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;136)

___

### drawElementsInstanced

• **drawElementsInstanced**: `any`

#### Defined in

[core/Renderer.ts:137](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;137)

___

### height

• **height**: `number`

#### Defined in

[core/Renderer.ts:144](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;144)

___

### vertexAttribDivisor

• **vertexAttribDivisor**: `any`

#### Defined in

[core/Renderer.ts:135](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;135)

___

### width

• **width**: `number`

#### Defined in

[core/Renderer.ts:142](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;142)

## Accessors

### canvas

• `get` **canvas**(): `HTMLCanvasElement` \| `OffscreenCanvas`

获取 canvas 实例

#### Returns

`HTMLCanvasElement` \| `OffscreenCanvas`

#### Defined in

[core/Renderer.ts:234](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;234)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 gl 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Defined in

[core/Renderer.ts:227](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;227)

___

### isWebGL

• `get` **isWebGL**(): `boolean`

判断是否是 `webgl1`

#### Returns

`boolean`

#### Defined in

[core/Renderer.ts:241](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;241)

___

### isWebGL2

• `get` **isWebGL2**(): `boolean`

判断是否是 `webgl2`

#### Returns

`boolean`

#### Defined in

[core/Renderer.ts:248](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;248)

___

### premultipliedAlpha

• `get` **premultipliedAlpha**(): `WithUndef`<`boolean`\>

获取 `premultipliedAlpha` 配置

#### Returns

`WithUndef`<`boolean`\>

#### Defined in

[core/Renderer.ts:272](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;272)

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

[core/Renderer.ts:255](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;255)

___

### state

• `get` **state**(): `any`

获取 `renderState`

#### Returns

`any`

#### Defined in

[core/Renderer.ts:265](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;265)

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

[core/Renderer.ts:322](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;322)

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

[core/Renderer.ts:343](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;343)

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

[core/Renderer.ts:281](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;281)

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

[core/Renderer.ts:296](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Renderer.ts?at&#x3D;92e1850#line&#x3D;296)
