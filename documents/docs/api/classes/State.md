---
id: "State"
title: "Class: State"
sidebar_label: "State"
sidebar_position: 0
custom_edit_url: null
---

渲染状态管理，目的是减少CPU与GPU的交互，一般我们不需要主动创建，它默认包含在 `Renderer` 实例中。

## Hierarchy

- `default`

  ↳ **`State`**

## Constructors

### constructor

• **new State**(`renderer`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) |
| `options?` | `Partial`<`StateOptions`\> |

#### Overrides

Base.constructor

#### Defined in

[core/State.ts:98](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;98)

## Properties

### locked

• **locked**: `boolean`

#### Defined in

[core/State.ts:96](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;96)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

Base.renderer

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1dddf76#line&#x3D;7)

## Accessors

### activeGeometryId

• `get` **activeGeometryId**(): `string` \| `number`

获取当前激活的几何体 id

#### Returns

`string` \| `number`

#### Defined in

[core/State.ts:189](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;189)

• `set` **activeGeometryId**(`id`): `void`

设置当前激活的几何体 id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[core/State.ts:197](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;197)

___

### activeTextureUnit

• `get` **activeTextureUnit**(): `number`

获取已激活的纹理

#### Returns

`number`

#### Defined in

[core/State.ts:159](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;159)

• `set` **activeTextureUnit**(`activeTextureUnit`): `void`

设置当前激活的纹理

#### Parameters

| Name | Type |
| :------ | :------ |
| `activeTextureUnit` | `number` |

#### Returns

`void`

#### Defined in

[core/State.ts:167](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;167)

___

### currentProgramId

• `get` **currentProgramId**(): `string` \| `number`

获取当前的 `Program` id

#### Returns

`string` \| `number`

#### Defined in

[core/State.ts:174](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;174)

• `set` **currentProgramId**(`id`): `void`

设置当前的 `Program` id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[core/State.ts:182](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;182)

___

### flipY

• `get` **flipY**(): `boolean`

获取 `flipY` 配置

#### Returns

`boolean`

#### Defined in

[core/State.ts:212](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;212)

• `set` **flipY**(`flipY`): `void`

设置 `flipY`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flipY` | `boolean` |

#### Returns

`void`

#### Defined in

[core/State.ts:205](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;205)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Base.gl

#### Defined in

[core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1dddf76#line&#x3D;16)

___

### premultiplyAlpha

• `get` **premultiplyAlpha**(): `boolean`

获取 `premultipliedAlpha` 配置

#### Returns

`boolean`

#### Defined in

[core/State.ts:242](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;242)

• `set` **premultiplyAlpha**(`premultiplyAlpha`): `void`

设置 `premultipliedAlpha`

#### Parameters

| Name | Type |
| :------ | :------ |
| `premultiplyAlpha` | `boolean` |

#### Returns

`void`

#### Defined in

[core/State.ts:235](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;235)

___

### rendererState

• `get` **rendererState**(): `any`

获取渲染状态

#### Returns

`any`

#### Inherited from

Base.rendererState

#### Defined in

[core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1dddf76#line&#x3D;23)

___

### state

• `get` **state**(): `IState`

获取所有状态

#### Returns

`IState`

#### Defined in

[core/State.ts:138](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;138)

___

### textureUnits

• `get` **textureUnits**(): `number`[]

获取当前 `gl` 的纹理单位

#### Returns

`number`[]

#### Defined in

[core/State.ts:152](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;152)

___

### unpackAlignment

• `get` **unpackAlignment**(): `number`

获取 `unpackAlignment` 配置

#### Returns

`number`

#### Defined in

[core/State.ts:227](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;227)

• `set` **unpackAlignment**(`unpackAlignment`): `void`

设置 `unpackAlignment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unpackAlignment` | `number` |

#### Returns

`void`

#### Defined in

[core/State.ts:220](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;220)

___

### viewport

• `get` **viewport**(): `Object`

获取视图

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[core/State.ts:145](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;145)

## Methods

### apply

▸ **apply**(`options`): `void`

apply options 并且更新状态

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`StateOptions`\> |

#### Returns

`void`

#### Defined in

[core/State.ts:250](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;250)

___

### bindFramebuffer

▸ **bindFramebuffer**(`v?`): `void`

绑定或者解绑 FBO

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `FBOData` |

#### Returns

`void`

#### Defined in

[core/State.ts:633](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;633)

___

### disable

▸ **disable**(`id`): `void`

关闭诸如 `DEPTH_TEST`、`BLEND` 等功能

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |

#### Returns

`void`

#### Defined in

[core/State.ts:322](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;322)

___

### enable

▸ **enable**(`id`): `void`

开启诸如 `DEPTH_TEST`、`BLEND` 等功能

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |

#### Returns

`void`

#### Defined in

[core/State.ts:311](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;311)

___

### setActiveGeometry

▸ **setActiveGeometry**(`id`): `void`

设置当前激活的 Geometry

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |

#### Returns

`void`

#### Defined in

[core/State.ts:648](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;648)

___

### setActiveTexture

▸ **setActiveTexture**(`unit`): `void`

设置当前激活的纹理单位

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | `any` |

#### Returns

`void`

#### Defined in

[core/State.ts:586](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;586)

___

### setBlendEquation

▸ **setBlendEquation**(`modeRGB`, `modeAlpha?`): `void`

设置 blendEquation
gl.FUNC_ADD：相加处理
gl.FUNC_SUBTRACT：相减处理
gl.FUNC_REVERSE_SUBSTRACT：反向相减处理，即 dest 减去 source

#### Parameters

| Name | Type |
| :------ | :------ |
| `modeRGB` | `number` |
| `modeAlpha?` | `number` |

#### Returns

`void`

#### Defined in

[core/State.ts:457](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;457)

___

### setBlendFunc

▸ **setBlendFunc**(`src`, `dst`, `srcAlpha?`, `dstAlpha?`): `void`

设置混合方式

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `number` |
| `dst` | `number` |
| `srcAlpha?` | `number` |
| `dstAlpha?` | `number` |

#### Returns

`void`

#### Defined in

[core/State.ts:427](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;427)

___

### setBlending

▸ **setBlending**(`blending`): `void`

指定渲染时的颜色混合方式
https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc

#### Parameters

| Name | Type |
| :------ | :------ |
| `blending` | `blendType` |

#### Returns

`void`

#### Defined in

[core/State.ts:374](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;374)

___

### setClearAlpha

▸ **setClearAlpha**(`alpha`): `void`

设置当前 State 下的清屏的透明度

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | `number` |

#### Returns

`void`

#### Defined in

[core/State.ts:476](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;476)

___

### setClearColor

▸ **setClearColor**(`color`, `alpha?`): `void`

设置清屏颜色和透明度值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorLike`](../#colorlike) | 颜色 |
| `alpha?` | `number` | 透明度 |

#### Returns

`void`

#### Defined in

[core/State.ts:487](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;487)

___

### setCullFace

▸ **setCullFace**(`cullFace`): `void`

设置背面剔除方式

#### Parameters

| Name | Type |
| :------ | :------ |
| `cullFace` | `number` |

#### Returns

`void`

#### Defined in

[core/State.ts:503](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;503)

___

### setDepthFunc

▸ **setDepthFunc**(`func`): `void`

指定将输入像素深度与当前深度缓冲区值进行比较的函数

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `number` |

#### Returns

`void`

#### Defined in

[core/State.ts:543](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;543)

___

### setDepthMask

▸ **setDepthMask**(`mask`): `void`

设置深度缓冲区的写入操作方式（只读或者可写）

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `boolean` |

#### Returns

`void`

#### Defined in

[core/State.ts:532](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;532)

___

### setDepthTest

▸ **setDepthTest**(`state`): `void`

设置是否开启深度测试

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Defined in

[core/State.ts:554](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;554)

___

### setFrontFace

▸ **setFrontFace**(`frontFace`): `void`

设置正面三角形顶点顺序
绘制立体图形时会使用三角形的顶点顺序来决定三角形的面是否朝向观察者，背向观察者的三角形一般不进行光栅化处理，绘制时会被剔除

#### Parameters

| Name | Type |
| :------ | :------ |
| `frontFace` | `number` |

#### Returns

`void`

#### Defined in

[core/State.ts:521](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;521)

___

### setLineWidth

▸ **setLineWidth**(`width`): `void`

设置 webgl 的线宽（注意大部分浏览器下是有 BUG 的）

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `any` |

#### Returns

`void`

#### Defined in

[core/State.ts:597](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;597)

___

### setLocked

▸ **setLocked**(`lock`): `void`

设置 State 是否锁定

#### Parameters

| Name | Type |
| :------ | :------ |
| `lock` | `boolean` |

#### Returns

`void`

#### Defined in

[core/State.ts:351](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;351)

___

### setMask

▸ **setMask**(`colorMask`): `void`

设置颜色缓冲的状态
模板缓冲可以实现渲染剔除，需要遮罩的话，可能希望只绘制模板缓冲而不绘制颜色缓冲
gl.colorMask(false, false, false, false)：关闭颜色缓冲的所有通道
gl.colorMask(true, true, true, true)：开启颜色缓冲的所有通道

#### Parameters

| Name | Type |
| :------ | :------ |
| `colorMask` | `boolean` |

#### Returns

`void`

#### Defined in

[core/State.ts:362](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;362)

___

### setPolygonOffset

▸ **setPolygonOffset**(`polygonOffset`, `factor`, `units`): `void`

设置深度值的偏移量，主要可以用于解决当几何图形或物体的两个表面非常接近时会出现的深度冲突(Z fighting)。
原因是因为两个表面过于接近，深度缓冲区有限的精度无法区分哪个在前哪个在后。

gl.polygonOffset(factor, units)方法指定加到每个顶点绘制后Z值上的偏移量，
偏移量按照公式 `m*factor+r*units` 计算，其中m表示顶点所在表面相对于观察者的视线的角度，
而r表示硬件能够区分两个Z值之差的最小值

#### Parameters

| Name | Type |
| :------ | :------ |
| `polygonOffset` | `any` |
| `factor` | `any` |
| `units` | `any` |

#### Returns

`void`

#### Defined in

[core/State.ts:615](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;615)

___

### setStencil

▸ **setStencil**(`func`, `ref`, `mask`): `void`

设置模板缓冲

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `number` |
| `ref` | `number` |
| `mask` | `number` |

#### Returns

`void`

#### Defined in

[core/State.ts:571](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;571)

___

### setViewport

▸ **setViewport**(`width`, `height`, `x?`, `y?`): `void`

设置 Viewport

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

[core/State.ts:336](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;1dddf76#line&#x3D;336)
