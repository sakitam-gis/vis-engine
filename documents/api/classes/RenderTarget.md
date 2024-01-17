# Class: RenderTarget

`RenderTarget` 是一种用于将场景渲染到纹理的方法，主要用于做离屏渲染和后处理等效果。

示例代码：
```ts
const options = {
  width: 256,
  height: 256,
  minFilter: renderer.gl.NEAREST,
  magFilter: renderer.gl.NEAREST
};
const current = new RenderTarget(renderer, options);

current.resize(width, height);
current.bind();
renderer.setViewport(0, 0, width, height);
mesh.updateMatrixWorld();
mesh.draw();
current.unbind();
```

## Hierarchy

- [`Resource`](Resource.md)\<[`RenderTargetOptions`](../interfaces/RenderTargetOptions.md)\>

  ↳ **`RenderTarget`**

## Table of contents

### Constructors

- [constructor](RenderTarget.md#constructor)

### Properties

- [renderer](RenderTarget.md#renderer)
- [depth](RenderTarget.md#depth)
- [width](RenderTarget.md#width)
- [height](RenderTarget.md#height)
- [viewport](RenderTarget.md#viewport)
- [drawBuffersChanged](RenderTarget.md#drawbufferschanged)
- [drawBuffers](RenderTarget.md#drawbuffers)
- [id](RenderTarget.md#id)
- [name](RenderTarget.md#name)
- [userData](RenderTarget.md#userdata)
- [byteLength](RenderTarget.md#bytelength)
- [options](RenderTarget.md#options)

### Accessors

- [gl](RenderTarget.md#gl)
- [rendererState](RenderTarget.md#rendererstate)
- [texture](RenderTarget.md#texture)
- [clearColors](RenderTarget.md#clearcolors)
- [clearDepth](RenderTarget.md#cleardepth)
- [clearStencil](RenderTarget.md#clearstencil)
- [handle](RenderTarget.md#handle)

### Methods

- [create](RenderTarget.md#create)
- [clear](RenderTarget.md#clear)
- [getTexture](RenderTarget.md#gettexture)
- [resize](RenderTarget.md#resize)
- [bind](RenderTarget.md#bind)
- [unbind](RenderTarget.md#unbind)
- [removeStats](RenderTarget.md#removestats)
- [destroy](RenderTarget.md#destroy)
- [createHandle](RenderTarget.md#createhandle)
- [deleteHandle](RenderTarget.md#deletehandle)
- [toString](RenderTarget.md#tostring)
- [swapHandle](RenderTarget.md#swaphandle)
- [restoreHandle](RenderTarget.md#restorehandle)
- [delete](RenderTarget.md#delete)

## Constructors

### constructor

• **new RenderTarget**(`renderer`, `options?`): [`RenderTarget`](RenderTarget.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) | `Renderer` 对象 |
| `options` | `Partial`\<[`RenderTargetOptions`](../interfaces/RenderTargetOptions.md)\> | 配置项，详见 #RenderTargetOptions |

#### Returns

[`RenderTarget`](RenderTarget.md)

#### Overrides

[Resource](Resource.md).[constructor](Resource.md#constructor)

#### Defined in

[src/core/RenderTarget.ts:131](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L131)

## Properties

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Resource](Resource.md).[renderer](Resource.md#renderer)

#### Defined in

[src/core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts#L7)

___

### depth

• **depth**: `boolean`

#### Defined in

[src/core/RenderTarget.ts:85](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L85)

___

### width

• **width**: `number`

`RenderTarget` 宽度

#### Defined in

[src/core/RenderTarget.ts:90](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L90)

___

### height

• **height**: `number`

`RenderTarget` 高度

#### Defined in

[src/core/RenderTarget.ts:95](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L95)

___

### viewport

• **viewport**: [`Vector4`](Vector4.md)

`RenderTarget` 视图大小，默认是一个四维向量

#### Defined in

[src/core/RenderTarget.ts:100](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L100)

___

### drawBuffersChanged

• **drawBuffersChanged**: `boolean`

绘制对象是否变化

#### Defined in

[src/core/RenderTarget.ts:105](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L105)

___

### drawBuffers

• **drawBuffers**: `number`[]

绘制缓存(绘制缓存设置了上一次绑定帧缓存状态，如果没有帧缓存可用的话，则用绘制缓存)

#### Defined in

[src/core/RenderTarget.ts:110](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L110)

___

### id

• **id**: `string`

#### Inherited from

[Resource](Resource.md).[id](Resource.md#id)

#### Defined in

[src/core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L21)

___

### name

• **name**: `WithUndef`\<`string`\>

#### Inherited from

[Resource](Resource.md).[name](Resource.md#name)

#### Defined in

[src/core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L23)

___

### userData

• **userData**: `any`

#### Inherited from

[Resource](Resource.md).[userData](Resource.md#userdata)

#### Defined in

[src/core/Resource.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L25)

___

### byteLength

• **byteLength**: `number`

#### Inherited from

[Resource](Resource.md).[byteLength](Resource.md#bytelength)

#### Defined in

[src/core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L28)

___

### options

• **options**: `Partial`\<[`RenderTargetOptions`](../interfaces/RenderTargetOptions.md)\>

#### Inherited from

[Resource](Resource.md).[options](Resource.md#options)

#### Defined in

[src/core/Resource.ts:30](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L30)

## Accessors

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Resource.gl

#### Defined in

[src/core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts#L16)

___

### rendererState

• `get` **rendererState**(): [`State`](State.md)

获取渲染状态

#### Returns

[`State`](State.md)

#### Inherited from

Resource.rendererState

#### Defined in

[src/core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts#L23)

___

### texture

• `get` **texture**(): `any`

#### Returns

`any`

#### Defined in

[src/core/RenderTarget.ts:232](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L232)

___

### clearColors

• `get` **clearColors**(): [`number`, `number`, `number`, `number`][]

获取清屏颜色值

#### Returns

[`number`, `number`, `number`, `number`][]

#### Defined in

[src/core/RenderTarget.ts:247](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L247)

• `set` **clearColors**(`colors`): `void`

设置清屏颜色值

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`number`, `number`, `number`, `number`][] |

#### Returns

`void`

#### Defined in

[src/core/RenderTarget.ts:240](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L240)

___

### clearDepth

• `get` **clearDepth**(): `number`

获取深度缓冲区的深度值

#### Returns

`number`

#### Defined in

[src/core/RenderTarget.ts:262](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L262)

• `set` **clearDepth**(`depth`): `void`

设置清除深度缓冲区的深度值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `depth` | `number` | 深度值 |

#### Returns

`void`

#### Defined in

[src/core/RenderTarget.ts:255](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L255)

___

### clearStencil

• `get` **clearStencil**(): `number`

获取缓冲区的默认值

#### Returns

`number`

#### Defined in

[src/core/RenderTarget.ts:277](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L277)

• `set` **clearStencil**(`stencil`): `void`

设置清除模版缓冲区的默认值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stencil` | `number` | 模版缓冲区默认值 |

#### Returns

`void`

#### Defined in

[src/core/RenderTarget.ts:270](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L270)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Inherited from

Resource.handle

#### Defined in

[src/core/Resource.ts:47](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L47)

## Methods

### create

▸ **create**(`attachments`): `any`

创建帧缓冲关联对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachments` | [`Attachment`](../types/Attachment.md)[] |

#### Returns

`any`

#### Defined in

[src/core/RenderTarget.ts:285](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L285)

___

### clear

▸ **clear**(): `void`

清空此帧缓冲区

#### Returns

`void`

#### Defined in

[src/core/RenderTarget.ts:370](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L370)

___

### getTexture

▸ **getTexture**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`any`

#### Defined in

[src/core/RenderTarget.ts:394](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L394)

___

### resize

▸ **resize**(`width`, `height`): `void`

重新设置此帧缓冲区的大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | 宽度 |
| `height` | `number` | 高度 |

#### Returns

`void`

#### Defined in

[src/core/RenderTarget.ts:403](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L403)

___

### bind

▸ **bind**(`fbo?`): `void`

绑定帧缓冲区

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fbo` | `number` | 如果未传入 `fbo`，默认是此 `RenderTarget` 创建的帧缓冲 |

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[bind](Resource.md#bind)

#### Defined in

[src/core/RenderTarget.ts:426](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L426)

___

### unbind

▸ **unbind**(`fbo?`): `void`

解绑帧缓冲区

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fbo` | `number` | 如果未传入 `fbo`，默认是此 `RenderTarget` 创建的帧缓冲 |

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[unbind](Resource.md#unbind)

#### Defined in

[src/core/RenderTarget.ts:434](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L434)

___

### removeStats

▸ **removeStats**(): `void`

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[removeStats](Resource.md#removestats)

#### Defined in

[src/core/RenderTarget.ts:439](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L439)

___

### destroy

▸ **destroy**(): `void`

销毁此 `RenderTarget`
- 销毁关联的纹理缓冲区
- 销毁关联的渲染缓冲区
- 销毁帧缓冲区

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[destroy](Resource.md#destroy)

#### Defined in

[src/core/RenderTarget.ts:447](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L447)

___

### createHandle

▸ **createHandle**(): ``null`` \| `WebGLFramebuffer`

创建帧缓冲区

#### Returns

``null`` \| `WebGLFramebuffer`

#### Overrides

[Resource](Resource.md).[createHandle](Resource.md#createhandle)

#### Defined in

[src/core/RenderTarget.ts:460](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L460)

___

### deleteHandle

▸ **deleteHandle**(): `void`

移除帧缓冲区

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[deleteHandle](Resource.md#deletehandle)

#### Defined in

[src/core/RenderTarget.ts:467](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L467)

___

### toString

▸ **toString**(): `string`

将此实例转换为字符串标识

#### Returns

`string`

#### Overrides

[Resource](Resource.md).[toString](Resource.md#tostring)

#### Defined in

[src/core/RenderTarget.ts:474](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L474)

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

[src/core/Resource.ts:55](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L55)

___

### restoreHandle

▸ **restoreHandle**(): `void`

恢复为原有 `handle`

#### Returns

`void`

#### Inherited from

[Resource](Resource.md).[restoreHandle](Resource.md#restorehandle)

#### Defined in

[src/core/Resource.ts:63](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L63)

___

### delete

▸ **delete**(`«destructured»?`): [`RenderTarget`](RenderTarget.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `{}` |
| › `deleteChildren` | `undefined` \| `boolean` | `false` |

#### Returns

[`RenderTarget`](RenderTarget.md)

#### Inherited from

[Resource](Resource.md).[delete](Resource.md#delete)

#### Defined in

[src/core/Resource.ts:74](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L74)
