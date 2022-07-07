---
id: "RenderTarget"
title: "Class: RenderTarget"
sidebar_label: "RenderTarget"
sidebar_position: 0
custom_edit_url: null
---

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
renderer.viewport(0, 0, width, height);
mesh.updateMatrixWorld();
mesh.draw();
current.unbind();
```

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

[core/RenderTarget.ts:131](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;131)

## Properties

### byteLength

• **byteLength**: `number`

#### Inherited from

[Resource](Resource.md).[byteLength](Resource.md#bytelength)

#### Defined in

[core/Resource.ts:26](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;444ba1d#line&#x3D;26)

___

### depth

• **depth**: `boolean`

#### Defined in

[core/RenderTarget.ts:85](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;85)

___

### drawBuffers

• **drawBuffers**: `number`[]

绘制缓存(绘制缓存设置了上一次绑定帧缓存状态，如果没有帧缓存可用的话，则用绘制缓存)

#### Defined in

[core/RenderTarget.ts:110](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;110)

___

### drawBuffersChanged

• **drawBuffersChanged**: `boolean`

绘制对象是否变化

#### Defined in

[core/RenderTarget.ts:105](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;105)

___

### height

• **height**: `number`

`RenderTarget` 高度

#### Defined in

[core/RenderTarget.ts:95](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;95)

___

### id

• **id**: `string`

#### Inherited from

[Resource](Resource.md).[id](Resource.md#id)

#### Defined in

[core/Resource.ts:19](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;444ba1d#line&#x3D;19)

___

### name

• **name**: `WithUndef`<`string`\>

#### Inherited from

[Resource](Resource.md).[name](Resource.md#name)

#### Defined in

[core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;444ba1d#line&#x3D;21)

___

### options

• **options**: `Partial`<[`ResourceOptions`](../interfaces/ResourceOptions.md) & [`RenderTargetOptions`](../interfaces/RenderTargetOptions.md)\>

#### Inherited from

[Resource](Resource.md).[options](Resource.md#options)

#### Defined in

[core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;444ba1d#line&#x3D;28)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Resource](Resource.md).[renderer](Resource.md#renderer)

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;444ba1d#line&#x3D;7)

___

### userData

• **userData**: `any`

#### Inherited from

[Resource](Resource.md).[userData](Resource.md#userdata)

#### Defined in

[core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;444ba1d#line&#x3D;23)

___

### viewport

• **viewport**: [`Vector4`](Vector4.md)

`RenderTarget` 视图大小，默认是一个四维向量

#### Defined in

[core/RenderTarget.ts:100](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;100)

___

### width

• **width**: `number`

`RenderTarget` 宽度

#### Defined in

[core/RenderTarget.ts:90](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;90)

## Accessors

### clearColors

• `get` **clearColors**(): [`number`, `number`, `number`, `number`][]

获取清屏颜色值

#### Returns

[`number`, `number`, `number`, `number`][]

#### Defined in

[core/RenderTarget.ts:241](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;241)

• `set` **clearColors**(`colors`): `void`

设置清屏颜色值

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`number`, `number`, `number`, `number`][] |

#### Returns

`void`

#### Defined in

[core/RenderTarget.ts:234](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;234)

___

### clearDepth

• `get` **clearDepth**(): `number`

获取深度缓冲区的深度值

#### Returns

`number`

#### Defined in

[core/RenderTarget.ts:256](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;256)

• `set` **clearDepth**(`depth`): `void`

设置清除深度缓冲区的深度值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `depth` | `number` | 深度值 |

#### Returns

`void`

#### Defined in

[core/RenderTarget.ts:249](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;249)

___

### clearStencil

• `get` **clearStencil**(): `number`

获取缓冲区的默认值

#### Returns

`number`

#### Defined in

[core/RenderTarget.ts:271](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;271)

• `set` **clearStencil**(`stencil`): `void`

设置清除模版缓冲区的默认值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stencil` | `number` | 模版缓冲区默认值 |

#### Returns

`void`

#### Defined in

[core/RenderTarget.ts:264](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;264)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Resource.gl

#### Defined in

[core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;444ba1d#line&#x3D;16)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Inherited from

Resource.handle

#### Defined in

[core/Resource.ts:45](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;444ba1d#line&#x3D;45)

___

### rendererState

• `get` **rendererState**(): `any`

获取渲染状态

#### Returns

`any`

#### Inherited from

Resource.rendererState

#### Defined in

[core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;444ba1d#line&#x3D;23)

___

### texture

• `get` **texture**(): `any`

#### Returns

`any`

#### Defined in

[core/RenderTarget.ts:226](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;226)

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

[core/RenderTarget.ts:397](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;397)

___

### clear

▸ **clear**(): `void`

清空此帧缓冲区

#### Returns

`void`

#### Defined in

[core/RenderTarget.ts:341](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;341)

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

[core/RenderTarget.ts:279](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;279)

___

### createHandle

▸ **createHandle**(): ``null`` \| `WebGLFramebuffer`

创建帧缓冲区

#### Returns

``null`` \| `WebGLFramebuffer`

#### Overrides

[Resource](Resource.md).[createHandle](Resource.md#createhandle)

#### Defined in

[core/RenderTarget.ts:428](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;428)

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

[core/Resource.ts:56](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;444ba1d#line&#x3D;56)

___

### deleteHandle

▸ **deleteHandle**(): `void`

移除帧缓冲区

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[deleteHandle](Resource.md#deletehandle)

#### Defined in

[core/RenderTarget.ts:435](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;435)

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

[core/RenderTarget.ts:415](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;415)

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

[core/RenderTarget.ts:365](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;365)

___

### removeStats

▸ **removeStats**(): `void`

#### Returns

`void`

#### Inherited from

[Resource](Resource.md).[removeStats](Resource.md#removestats)

#### Defined in

[core/Resource.ts:81](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;444ba1d#line&#x3D;81)

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

[core/RenderTarget.ts:374](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;374)

___

### toString

▸ **toString**(): `string`

将此实例转换为字符串标识

#### Returns

`string`

#### Overrides

[Resource](Resource.md).[toString](Resource.md#tostring)

#### Defined in

[core/RenderTarget.ts:442](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;442)

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

[core/RenderTarget.ts:405](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;405)
