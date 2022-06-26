---
id: "RenderTarget"
title: "Class: RenderTarget"
sidebar_label: "RenderTarget"
sidebar_position: 0
custom_edit_url: null
---

`RenderTarget` 是一种用于将场景渲染到纹理的方法，主要用于做离屏渲染和后处理等效果。

## Hierarchy

- [`Resource`](Resource.md)<[`RenderTargetOptions`](../interfaces/RenderTargetOptions.md)\>

  ↳ **`RenderTarget`**

## Constructors

### constructor

• **new RenderTarget**(`renderer`, `options?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) | `Renderer` 对象 |
| `options` | `Partial`<[`RenderTargetOptions`](../interfaces/RenderTargetOptions.md)\> | 配置项，详见 #RenderTargetOptions |

#### Overrides

[Resource](Resource.md).[constructor](Resource.md#constructor)

#### Defined in

[core/RenderTarget.ts:113](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;113)

## Properties

### byteLength

• **byteLength**: `number`

#### Inherited from

[Resource](Resource.md).[byteLength](Resource.md#bytelength)

#### Defined in

[core/Resource.ts:26](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;26)

___

### depth

• **depth**: `boolean`

#### Defined in

[core/RenderTarget.ts:67](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;67)

___

### drawBuffers

• **drawBuffers**: `number`[]

绘制缓存(绘制缓存设置了上一次绑定帧缓存状态，如果没有帧缓存可用的话，则用绘制缓存)

#### Defined in

[core/RenderTarget.ts:92](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;92)

___

### drawBuffersChanged

• **drawBuffersChanged**: `boolean`

绘制对象是否变化

#### Defined in

[core/RenderTarget.ts:87](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;87)

___

### height

• **height**: `number`

`RenderTarget` 高度

#### Defined in

[core/RenderTarget.ts:77](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;77)

___

### id

• **id**: `string`

#### Inherited from

[Resource](Resource.md).[id](Resource.md#id)

#### Defined in

[core/Resource.ts:19](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;19)

___

### name

• **name**: `WithUndef`<`string`\>

#### Inherited from

[Resource](Resource.md).[name](Resource.md#name)

#### Defined in

[core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;21)

___

### options

• **options**: `Partial`<[`ResourceOptions`](../interfaces/ResourceOptions.md) & [`RenderTargetOptions`](../interfaces/RenderTargetOptions.md)\>

#### Inherited from

[Resource](Resource.md).[options](Resource.md#options)

#### Defined in

[core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;28)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Resource](Resource.md).[renderer](Resource.md#renderer)

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;8558d24#line&#x3D;7)

___

### userData

• **userData**: `any`

#### Inherited from

[Resource](Resource.md).[userData](Resource.md#userdata)

#### Defined in

[core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;23)

___

### viewport

• **viewport**: [`Vector4`](Vector4.md)

`RenderTarget` 视图大小，默认是一个四维向量

#### Defined in

[core/RenderTarget.ts:82](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;82)

___

### width

• **width**: `number`

`RenderTarget` 宽度

#### Defined in

[core/RenderTarget.ts:72](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;72)

## Accessors

### clearColors

• `get` **clearColors**(): [`number`, `number`, `number`, `number`][]

获取清屏颜色值

#### Returns

[`number`, `number`, `number`, `number`][]

#### Defined in

[core/RenderTarget.ts:223](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;223)

• `set` **clearColors**(`colors`): `void`

设置清屏颜色值

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`number`, `number`, `number`, `number`][] |

#### Returns

`void`

#### Defined in

[core/RenderTarget.ts:216](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;216)

___

### clearDepth

• `get` **clearDepth**(): `number`

获取深度缓冲区的深度值

#### Returns

`number`

#### Defined in

[core/RenderTarget.ts:238](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;238)

• `set` **clearDepth**(`depth`): `void`

设置清除深度缓冲区的深度值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `depth` | `number` | 深度值 |

#### Returns

`void`

#### Defined in

[core/RenderTarget.ts:231](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;231)

___

### clearStencil

• `get` **clearStencil**(): `number`

获取缓冲区的默认值

#### Returns

`number`

#### Defined in

[core/RenderTarget.ts:253](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;253)

• `set` **clearStencil**(`stencil`): `void`

设置清除模版缓冲区的默认值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stencil` | `number` | 模版缓冲区默认值 |

#### Returns

`void`

#### Defined in

[core/RenderTarget.ts:246](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;246)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Resource.gl

#### Defined in

[core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;8558d24#line&#x3D;16)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Inherited from

Resource.handle

#### Defined in

[core/Resource.ts:45](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;45)

___

### rendererState

• `get` **rendererState**(): `any`

获取渲染状态

#### Returns

`any`

#### Inherited from

Resource.rendererState

#### Defined in

[core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;8558d24#line&#x3D;23)

___

### texture

• `get` **texture**(): `any`

#### Returns

`any`

#### Defined in

[core/RenderTarget.ts:208](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;208)

## Methods

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

[core/RenderTarget.ts:379](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;379)

___

### clear

▸ **clear**(): `void`

清空此帧缓冲区

#### Returns

`void`

#### Defined in

[core/RenderTarget.ts:323](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;323)

___

### create

▸ **create**(`attachments`): `any`

创建帧缓冲关联对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachments` | [`Attachment`](../#attachment)[] |

#### Returns

`any`

#### Defined in

[core/RenderTarget.ts:261](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;261)

___

### createHandle

▸ **createHandle**(): ``null`` \| `WebGLFramebuffer`

创建帧缓冲区

#### Returns

``null`` \| `WebGLFramebuffer`

#### Overrides

[Resource](Resource.md).[createHandle](Resource.md#createhandle)

#### Defined in

[core/RenderTarget.ts:410](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;410)

___

### delete

▸ **delete**(`«destructured»?`): [`RenderTarget`](RenderTarget.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `deleteChildren` | `undefined` \| `boolean` |

#### Returns

[`RenderTarget`](RenderTarget.md)

#### Inherited from

[Resource](Resource.md).[delete](Resource.md#delete)

#### Defined in

[core/Resource.ts:56](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;56)

___

### deleteHandle

▸ **deleteHandle**(): `void`

移除帧缓冲区

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[deleteHandle](Resource.md#deletehandle)

#### Defined in

[core/RenderTarget.ts:417](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;417)

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

[core/RenderTarget.ts:397](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;397)

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

[core/RenderTarget.ts:347](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;347)

___

### removeStats

▸ **removeStats**(): `void`

#### Returns

`void`

#### Inherited from

[Resource](Resource.md).[removeStats](Resource.md#removestats)

#### Defined in

[core/Resource.ts:81](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;81)

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

[core/RenderTarget.ts:356](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;356)

___

### toString

▸ **toString**(): `string`

将此实例转换为字符串标识

#### Returns

`string`

#### Overrides

[Resource](Resource.md).[toString](Resource.md#tostring)

#### Defined in

[core/RenderTarget.ts:424](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;424)

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

[core/RenderTarget.ts:387](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;8558d24#line&#x3D;387)
