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

- [gl](State.md#gl)
- [rendererState](State.md#rendererstate)
- [state](State.md#state)
- [viewport](State.md#viewport)
- [textureUnits](State.md#textureunits)
- [activeTextureUnit](State.md#activetextureunit)
- [currentProgramId](State.md#currentprogramid)
- [activeGeometryId](State.md#activegeometryid)
- [flipY](State.md#flipy)
- [unpackAlignment](State.md#unpackalignment)
- [premultiplyAlpha](State.md#premultiplyalpha)
- [boundBuffer](State.md#boundbuffer)
- [anisotropy](State.md#anisotropy)

### Methods

- [apply](State.md#apply)
- [enable](State.md#enable)
- [disable](State.md#disable)
- [setViewport](State.md#setviewport)
- [setMask](State.md#setmask)
- [setBlending](State.md#setblending)
- [setBlendFunc](State.md#setblendfunc)
- [setBlendEquation](State.md#setblendequation)
- [setClearAlpha](State.md#setclearalpha)
- [setClearColor](State.md#setclearcolor)
- [setCullFace](State.md#setcullface)
- [setFrontFace](State.md#setfrontface)
- [setDepthMask](State.md#setdepthmask)
- [setDepthFunc](State.md#setdepthfunc)
- [setDepthTest](State.md#setdepthtest)
- [setStencilFunc](State.md#setstencilfunc)
- [setStencilOp](State.md#setstencilop)
- [setStencilMask](State.md#setstencilmask)
- [setActiveTexture](State.md#setactivetexture)
- [setLineWidth](State.md#setlinewidth)
- [setPolygonOffset](State.md#setpolygonoffset)
- [bindFramebuffer](State.md#bindframebuffer)
- [setActiveGeometry](State.md#setactivegeometry)
- [reset](State.md#reset)

## Constructors

### constructor

• **new State**(`renderer`, `options?`): [`State`](State.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) |
| `options?` | `Partial`\<`StateOptions`\> |

#### Returns

[`State`](State.md)

#### Overrides

Base.constructor

#### Defined in

[src/core/State.ts:113](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L113)

## Properties

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

Base.renderer

#### Defined in

[src/core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts#L7)

## Accessors

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Base.gl

#### Defined in

[src/core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts#L16)

___

### rendererState

• `get` **rendererState**(): [`State`](State.md)

获取渲染状态

#### Returns

[`State`](State.md)

#### Inherited from

Base.rendererState

#### Defined in

[src/core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts#L23)

___

### state

• `get` **state**(): `IState`

获取所有状态

#### Returns

`IState`

#### Defined in

[src/core/State.ts:162](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L162)

___

### viewport

• `get` **viewport**(): `Object`

获取视图

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Defined in

[src/core/State.ts:169](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L169)

___

### textureUnits

• `get` **textureUnits**(): (`string` \| `number`)[]

获取当前 `gl` 的纹理单位

#### Returns

(`string` \| `number`)[]

#### Defined in

[src/core/State.ts:176](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L176)

___

### activeTextureUnit

• `get` **activeTextureUnit**(): `number`

获取已激活的纹理

#### Returns

`number`

#### Defined in

[src/core/State.ts:183](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L183)

• `set` **activeTextureUnit**(`activeTextureUnit`): `void`

设置当前激活的纹理

#### Parameters

| Name | Type |
| :------ | :------ |
| `activeTextureUnit` | `number` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:191](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L191)

___

### currentProgramId

• `get` **currentProgramId**(): `string` \| `number`

获取当前的 `Program` id

#### Returns

`string` \| `number`

#### Defined in

[src/core/State.ts:198](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L198)

• `set` **currentProgramId**(`id`): `void`

设置当前的 `Program` id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:206](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L206)

___

### activeGeometryId

• `get` **activeGeometryId**(): `string` \| `number`

获取当前激活的几何体 id

#### Returns

`string` \| `number`

#### Defined in

[src/core/State.ts:213](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L213)

• `set` **activeGeometryId**(`id`): `void`

设置当前激活的几何体 id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:221](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L221)

___

### flipY

• `get` **flipY**(): `boolean`

获取 `flipY` 配置

#### Returns

`boolean`

#### Defined in

[src/core/State.ts:236](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L236)

• `set` **flipY**(`flipY`): `void`

设置 `flipY`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flipY` | `boolean` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:229](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L229)

___

### unpackAlignment

• `get` **unpackAlignment**(): `number`

获取 `unpackAlignment` 配置

#### Returns

`number`

#### Defined in

[src/core/State.ts:251](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L251)

• `set` **unpackAlignment**(`unpackAlignment`): `void`

设置 `unpackAlignment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unpackAlignment` | `number` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:244](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L244)

___

### premultiplyAlpha

• `get` **premultiplyAlpha**(): `boolean`

获取 `premultipliedAlpha` 配置

#### Returns

`boolean`

#### Defined in

[src/core/State.ts:266](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L266)

• `set` **premultiplyAlpha**(`premultiplyAlpha`): `void`

设置 `premultipliedAlpha`

#### Parameters

| Name | Type |
| :------ | :------ |
| `premultiplyAlpha` | `boolean` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:259](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L259)

___

### boundBuffer

• `get` **boundBuffer**(): ``null`` \| `WebGLBuffer`

获取最后一次绑定的顶点数据

#### Returns

``null`` \| `WebGLBuffer`

#### Defined in

[src/core/State.ts:281](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L281)

• `set` **boundBuffer**(`boundBuffer`): `void`

设置最后一次绑定的顶点数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundBuffer` | ``null`` \| `WebGLBuffer` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:274](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L274)

___

### anisotropy

• `get` **anisotropy**(): `number`

获取 `anisotropy` 配置

#### Returns

`number`

#### Defined in

[src/core/State.ts:296](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L296)

• `set` **anisotropy**(`anisotropy`): `void`

配置 `anisotropy`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anisotropy` | `number` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:289](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L289)

## Methods

### apply

▸ **apply**(`options`): `void`

apply options 并且更新状态

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`\<`StateOptions`\> |

#### Returns

`void`

#### Defined in

[src/core/State.ts:304](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L304)

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

[src/core/State.ts:357](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L357)

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

[src/core/State.ts:368](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L368)

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

[src/core/State.ts:382](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L382)

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

[src/core/State.ts:400](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L400)

___

### setBlending

▸ **setBlending**(`blending`, `options?`): `void`

指定渲染时的颜色混合方式
https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc

#### Parameters

| Name | Type |
| :------ | :------ |
| `blending` | [`BlendType`](../enums/BlendType.md) |
| `options?` | `Partial`\<`StateOptions`\> |

#### Returns

`void`

#### Defined in

[src/core/State.ts:413](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L413)

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

[src/core/State.ts:490](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L490)

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

[src/core/State.ts:520](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L520)

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

[src/core/State.ts:542](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L542)

___

### setClearColor

▸ **setClearColor**(`color`, `alpha?`): `void`

设置清屏颜色和透明度值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorLike`](../types/ColorLike.md) | 颜色 |
| `alpha?` | `number` | 透明度 |

#### Returns

`void`

#### Defined in

[src/core/State.ts:553](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L553)

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

[src/core/State.ts:569](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L569)

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

[src/core/State.ts:587](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L587)

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

[src/core/State.ts:598](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L598)

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

[src/core/State.ts:609](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L609)

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

[src/core/State.ts:620](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L620)

___

### setStencilFunc

▸ **setStencilFunc**(`cmp`, `ref`, `mask`, `face?`): `void`

设置模板缓冲测试方式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmp` | `number` | 指定比较方式 |
| `ref` | `number` | 用来做stencil测试的参考值 |
| `mask` | `number` | 指定操作掩码，在测试的时候会先将ref与mask进行与运算 |
| `face?` | `number` |  |

#### Returns

`void`

#### Defined in

[src/core/State.ts:638](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L638)

___

### setStencilOp

▸ **setStencilOp**(`fail`, `zFail`, `zPass`, `face?`): `undefined` \| `boolean`

设置模板测试的操作

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fail` | `any` | 指定模板测试失败时要使用的操作。默认值为 `gl.KEEP` |
| `zFail` | `any` | 指定模板测试通过但深度测试失败时要使用的操作。默认值为 `gl.KEEP` |
| `zPass` | `any` | 指定当模板测试和深度测试都通过时使用的操作，或者当模板测试通过但没有深度缓冲区或深度测试被禁用时使用的操作。默认值为 `gl.KEEP` |
| `face?` | `number` |  |

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/core/State.ts:670](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L670)

___

### setStencilMask

▸ **setStencilMask**(`mask`, `face?`): `void`

设置模版测试的操作掩码

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `any` |
| `face?` | `number` |

#### Returns

`void`

#### Defined in

[src/core/State.ts:743](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L743)

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

[src/core/State.ts:761](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L761)

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

[src/core/State.ts:772](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L772)

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

[src/core/State.ts:790](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L790)

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

[src/core/State.ts:808](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L808)

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

[src/core/State.ts:820](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L820)

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

[src/core/State.ts:828](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/State.ts#L828)
