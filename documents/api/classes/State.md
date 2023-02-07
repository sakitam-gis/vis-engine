[vis-engine - v1.3.1](../index.md) / State

# Class: State

渲染状态管理，目的是减少CPU与GPU的交互，一般我们不需要主动创建，它默认包含在 `Renderer` 实例中。

## Hierarchy

- `default`

  ↳ **`State`**

## Table of contents

### Constructors

- [constructor](State.md#constructor)

### Properties

- [renderer](State.md#renderer)

### Accessors

- [activeGeometryId](State.md#activegeometryid)
- [activeTextureUnit](State.md#activetextureunit)
- [boundBuffer](State.md#boundbuffer)
- [currentProgramId](State.md#currentprogramid)
- [flipY](State.md#flipy)
- [gl](State.md#gl)
- [premultiplyAlpha](State.md#premultiplyalpha)
- [rendererState](State.md#rendererstate)
- [state](State.md#state)
- [textureUnits](State.md#textureunits)
- [unpackAlignment](State.md#unpackalignment)
- [viewport](State.md#viewport)

### Methods

- [apply](State.md#apply)
- [bindFramebuffer](State.md#bindframebuffer)
- [disable](State.md#disable)
- [enable](State.md#enable)
- [reset](State.md#reset)
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

[src/core/State.ts:98](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;98)

## Properties

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

Base.renderer

#### Defined in

[src/core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;bbe6a01#line&#x3D;7)

## Accessors

### activeGeometryId

• `get` **activeGeometryId**(): `string` \| `number`

获取当前激活的几何体 id

#### Returns

`string` \| `number`

#### Defined in

[src/core/State.ts:193](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;193)

• `set` **activeGeometryId**(`id`): `void`

设置当前激活的几何体 id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:201](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;201)

___

### activeTextureUnit

• `get` **activeTextureUnit**(): `number`

获取已激活的纹理

#### Returns

`number`

#### Defined in

[src/core/State.ts:163](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;163)

• `set` **activeTextureUnit**(`activeTextureUnit`): `void`

设置当前激活的纹理

#### Parameters

| Name | Type |
| :------ | :------ |
| `activeTextureUnit` | `number` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:171](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;171)

___

### boundBuffer

• `get` **boundBuffer**(): ``null`` \| `WebGLBuffer`

获取最后一次绑定的顶点数据

#### Returns

``null`` \| `WebGLBuffer`

#### Defined in

[src/core/State.ts:261](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;261)

• `set` **boundBuffer**(`boundBuffer`): `void`

设置最后一次绑定的顶点数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundBuffer` | ``null`` \| `WebGLBuffer` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:254](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;254)

___

### currentProgramId

• `get` **currentProgramId**(): `string` \| `number`

获取当前的 `Program` id

#### Returns

`string` \| `number`

#### Defined in

[src/core/State.ts:178](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;178)

• `set` **currentProgramId**(`id`): `void`

设置当前的 `Program` id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:186](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;186)

___

### flipY

• `get` **flipY**(): `boolean`

获取 `flipY` 配置

#### Returns

`boolean`

#### Defined in

[src/core/State.ts:216](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;216)

• `set` **flipY**(`flipY`): `void`

设置 `flipY`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flipY` | `boolean` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:209](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;209)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Base.gl

#### Defined in

[src/core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;bbe6a01#line&#x3D;16)

___

### premultiplyAlpha

• `get` **premultiplyAlpha**(): `boolean`

获取 `premultipliedAlpha` 配置

#### Returns

`boolean`

#### Defined in

[src/core/State.ts:246](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;246)

• `set` **premultiplyAlpha**(`premultiplyAlpha`): `void`

设置 `premultipliedAlpha`

#### Parameters

| Name | Type |
| :------ | :------ |
| `premultiplyAlpha` | `boolean` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:239](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;239)

___

### rendererState

• `get` **rendererState**(): [`State`](State.md)

获取渲染状态

#### Returns

[`State`](State.md)

#### Inherited from

Base.rendererState

#### Defined in

[src/core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;bbe6a01#line&#x3D;23)

___

### state

• `get` **state**(): `IState`

获取所有状态

#### Returns

`IState`

#### Defined in

[src/core/State.ts:142](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;142)

___

### textureUnits

• `get` **textureUnits**(): (`string` \| `number`)[]

获取当前 `gl` 的纹理单位

#### Returns

(`string` \| `number`)[]

#### Defined in

[src/core/State.ts:156](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;156)

___

### unpackAlignment

• `get` **unpackAlignment**(): `number`

获取 `unpackAlignment` 配置

#### Returns

`number`

#### Defined in

[src/core/State.ts:231](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;231)

• `set` **unpackAlignment**(`unpackAlignment`): `void`

设置 `unpackAlignment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unpackAlignment` | `number` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:224](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;224)

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

[src/core/State.ts:149](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;149)

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

[src/core/State.ts:269](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;269)

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

[src/core/State.ts:658](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;658)

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

[src/core/State.ts:333](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;333)

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

[src/core/State.ts:322](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;322)

___

### reset

▸ **reset**(`force?`): `void`

重置 `State`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:678](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;678)

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

[src/core/State.ts:670](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;670)

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

[src/core/State.ts:611](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;611)

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

[src/core/State.ts:475](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;475)

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

[src/core/State.ts:445](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;445)

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

[src/core/State.ts:377](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;377)

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

[src/core/State.ts:497](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;497)

___

### setClearColor

▸ **setClearColor**(`color`, `alpha?`): `void`

设置清屏颜色和透明度值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorLike`](../index.md#colorlike) | 颜色 |
| `alpha?` | `number` | 透明度 |

#### Returns

`void`

#### Defined in

[src/core/State.ts:508](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;508)

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

[src/core/State.ts:524](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;524)

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

[src/core/State.ts:564](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;564)

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

[src/core/State.ts:553](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;553)

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

[src/core/State.ts:575](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;575)

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

[src/core/State.ts:542](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;542)

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

[src/core/State.ts:622](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;622)

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

[src/core/State.ts:365](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;365)

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

[src/core/State.ts:640](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;640)

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

[src/core/State.ts:592](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;592)

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

[src/core/State.ts:347](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts?at&#x3D;bbe6a01#line&#x3D;347)
