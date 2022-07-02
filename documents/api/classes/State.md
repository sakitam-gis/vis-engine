[vis-engine - v1.0.0](../index.md) / State

# Class: State

渲染状态管理，目的是减少CPU与GPU的交互，一般我们不需要主动创建，它默认包含在 `Renderer` 实例中。

## Hierarchy

- `default`

  ↳ **`State`**

## Table of contents

### Constructors

- [constructor](State.md#constructor)

### Properties

- [locked](State.md#locked)
- [renderer](State.md#renderer)

### Accessors

- [activeGeometryId](State.md#activegeometryid)
- [activeTextureUnit](State.md#activetextureunit)
- [currentProgramId](State.md#currentprogramid)
- [gl](State.md#gl)
- [rendererState](State.md#rendererstate)
- [state](State.md#state)
- [textureUnits](State.md#textureunits)
- [viewport](State.md#viewport)

### Methods

- [apply](State.md#apply)
- [bindFramebuffer](State.md#bindframebuffer)
- [disable](State.md#disable)
- [enable](State.md#enable)
- [setActiveGeometry](State.md#setactivegeometry)
- [setActiveTexture](State.md#setactivetexture)
- [setBlendEquation](State.md#setblendequation)
- [setBlendFunc](State.md#setblendfunc)
- [setBlending](State.md#setblending)
- [setClearAlpha](State.md#setclearalpha)
- [setClearColor](State.md#setclearcolor)
- [setCullFace](State.md#setcullface)
- [setDepthFunc](State.md#setdepthfunc)
- [setDepthMask](State.md#setdepthmask)
- [setDepthTest](State.md#setdepthtest)
- [setFrontFace](State.md#setfrontface)
- [setLineWidth](State.md#setlinewidth)
- [setLocked](State.md#setlocked)
- [setMask](State.md#setmask)
- [setPolygonOffset](State.md#setpolygonoffset)
- [setStencil](State.md#setstencil)
- [setViewport](State.md#setviewport)

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

[core/State.ts:98](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;98)

## Properties

### locked

• **locked**: `boolean`

#### Defined in

[core/State.ts:96](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;96)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

Base.renderer

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;92e1850#line&#x3D;7)

## Accessors

### activeGeometryId

• `get` **activeGeometryId**(): `string` \| `number`

#### Returns

`string` \| `number`

#### Defined in

[core/State.ts:163](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;163)

• `set` **activeGeometryId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[core/State.ts:167](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;167)

___

### activeTextureUnit

• `get` **activeTextureUnit**(): `number`

#### Returns

`number`

#### Defined in

[core/State.ts:147](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;147)

• `set` **activeTextureUnit**(`activeTextureUnit`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activeTextureUnit` | `number` |

#### Returns

`void`

#### Defined in

[core/State.ts:151](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;151)

___

### currentProgramId

• `get` **currentProgramId**(): `string` \| `number`

#### Returns

`string` \| `number`

#### Defined in

[core/State.ts:155](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;155)

• `set` **currentProgramId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[core/State.ts:159](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;159)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Base.gl

#### Defined in

[core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;92e1850#line&#x3D;16)

___

### rendererState

• `get` **rendererState**(): `any`

获取渲染状态

#### Returns

`any`

#### Inherited from

Base.rendererState

#### Defined in

[core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;92e1850#line&#x3D;23)

___

### state

• `get` **state**(): `IState`

#### Returns

`IState`

#### Defined in

[core/State.ts:135](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;135)

___

### textureUnits

• `get` **textureUnits**(): `number`[]

#### Returns

`number`[]

#### Defined in

[core/State.ts:143](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;143)

___

### viewport

• `get` **viewport**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[core/State.ts:139](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;139)

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

[core/State.ts:175](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;175)

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

[core/State.ts:550](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;550)

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

[core/State.ts:247](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;247)

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

[core/State.ts:236](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;236)

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

[core/State.ts:565](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;565)

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

[core/State.ts:503](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;503)

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

[core/State.ts:382](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;382)

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

[core/State.ts:352](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;352)

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

[core/State.ts:299](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;299)

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

[core/State.ts:401](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;401)

___

### setClearColor

▸ **setClearColor**(`color`, `alpha`): `void`

设置清屏颜色和透明度值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](Color.md) | 颜色 |
| `alpha` | `number` | 透明度 |

#### Returns

`void`

#### Defined in

[core/State.ts:410](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;410)

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

[core/State.ts:420](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;420)

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

[core/State.ts:460](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;460)

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

[core/State.ts:449](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;449)

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

[core/State.ts:471](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;471)

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

[core/State.ts:438](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;438)

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

[core/State.ts:514](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;514)

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

[core/State.ts:276](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;276)

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

[core/State.ts:287](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;287)

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

[core/State.ts:532](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;532)

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

[core/State.ts:488](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;488)

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

[core/State.ts:261](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;92e1850#line&#x3D;261)
