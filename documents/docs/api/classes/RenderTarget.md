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
renderer.setViewport(0, 0, width, height);
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

[src/core/RenderTarget.ts:131](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;131)

## Properties

### byteLength

• **byteLength**: `number`

#### Inherited from

[Resource](Resource.md).[byteLength](Resource.md#bytelength)

#### Defined in

[src/core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;28)

___

### depth

• **depth**: `boolean`

#### Defined in

[src/core/RenderTarget.ts:85](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;85)

___

### drawBuffers

• **drawBuffers**: `number`[]

绘制缓存(绘制缓存设置了上一次绑定帧缓存状态，如果没有帧缓存可用的话，则用绘制缓存)

#### Defined in

[src/core/RenderTarget.ts:110](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;110)

___

### drawBuffersChanged

• **drawBuffersChanged**: `boolean`

绘制对象是否变化

#### Defined in

[src/core/RenderTarget.ts:105](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;105)

___

### height

• **height**: `number`

`RenderTarget` 高度

#### Defined in

[src/core/RenderTarget.ts:95](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;95)

___

### id

• **id**: `string`

#### Inherited from

[Resource](Resource.md).[id](Resource.md#id)

#### Defined in

[src/core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;21)

___

### name

• **name**: `WithUndef`<`string`\>

#### Inherited from

[Resource](Resource.md).[name](Resource.md#name)

#### Defined in

[src/core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;23)

___

### options

• **options**: `Partial`<[`ResourceOptions`](../interfaces/ResourceOptions.md) & [`RenderTargetOptions`](../interfaces/RenderTargetOptions.md)\>

#### Inherited from

[Resource](Resource.md).[options](Resource.md#options)

#### Defined in

[src/core/Resource.ts:30](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;30)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Resource](Resource.md).[renderer](Resource.md#renderer)

#### Defined in

[src/core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;5cce138#line&#x3D;7)

___

### userData

• **userData**: `any`

#### Inherited from

[Resource](Resource.md).[userData](Resource.md#userdata)

#### Defined in

[src/core/Resource.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;25)

___

### viewport

• **viewport**: [`Vector4`](Vector4.md)

`RenderTarget` 视图大小，默认是一个四维向量

#### Defined in

[src/core/RenderTarget.ts:100](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;100)

___

### width

• **width**: `number`

`RenderTarget` 宽度

#### Defined in

[src/core/RenderTarget.ts:90](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;90)

## Accessors

### clearColors

• `get` **clearColors**(): [`number`, `number`, `number`, `number`][]

获取清屏颜色值

#### Returns

[`number`, `number`, `number`, `number`][]

#### Defined in

[src/core/RenderTarget.ts:244](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;244)

• `set` **clearColors**(`colors`): `void`

设置清屏颜色值

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`number`, `number`, `number`, `number`][] |

#### Returns

`void`

#### Defined in

[src/core/RenderTarget.ts:237](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;237)

___

### clearDepth

• `get` **clearDepth**(): `number`

获取深度缓冲区的深度值

#### Returns

`number`

#### Defined in

[src/core/RenderTarget.ts:259](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;259)

• `set` **clearDepth**(`depth`): `void`

设置清除深度缓冲区的深度值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `depth` | `number` | 深度值 |

#### Returns

`void`

#### Defined in

[src/core/RenderTarget.ts:252](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;252)

___

### clearStencil

• `get` **clearStencil**(): `number`

获取缓冲区的默认值

#### Returns

`number`

#### Defined in

[src/core/RenderTarget.ts:274](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;274)

• `set` **clearStencil**(`stencil`): `void`

设置清除模版缓冲区的默认值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stencil` | `number` | 模版缓冲区默认值 |

#### Returns

`void`

#### Defined in

[src/core/RenderTarget.ts:267](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;267)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Resource.gl

#### Defined in

[src/core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;5cce138#line&#x3D;16)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Inherited from

Resource.handle

#### Defined in

[src/core/Resource.ts:47](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;47)

___

### rendererState

• `get` **rendererState**(): [`State`](State.md)

获取渲染状态

#### Returns

[`State`](State.md)

#### Inherited from

Resource.rendererState

#### Defined in

[src/core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;5cce138#line&#x3D;23)

___

### texture

• `get` **texture**(): `any`

#### Returns

`any`

#### Defined in

[src/core/RenderTarget.ts:229](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;229)

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

[src/core/RenderTarget.ts:411](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;411)

___

### clear

▸ **clear**(): `void`

清空此帧缓冲区

#### Returns

`void`

#### Defined in

[src/core/RenderTarget.ts:355](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;355)

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

[src/core/RenderTarget.ts:282](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;282)

___

### createHandle

▸ **createHandle**(): ``null`` \| `WebGLFramebuffer`

创建帧缓冲区

#### Returns

``null`` \| `WebGLFramebuffer`

#### Overrides

[Resource](Resource.md).[createHandle](Resource.md#createhandle)

#### Defined in

[src/core/RenderTarget.ts:442](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;442)

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

[src/core/Resource.ts:74](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;74)

___

### deleteHandle

▸ **deleteHandle**(): `void`

移除帧缓冲区

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[deleteHandle](Resource.md#deletehandle)

#### Defined in

[src/core/RenderTarget.ts:449](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;449)

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

[src/core/RenderTarget.ts:429](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;429)

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

[src/core/RenderTarget.ts:379](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;379)

___

### removeStats

▸ **removeStats**(): `void`

#### Returns

`void`

#### Inherited from

[Resource](Resource.md).[removeStats](Resource.md#removestats)

#### Defined in

[src/core/Resource.ts:99](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;99)

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

[src/core/RenderTarget.ts:388](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;388)

___

### restoreHandle

▸ **restoreHandle**(): `void`

恢复为原有 `handle`

#### Returns

`void`

#### Inherited from

[Resource](Resource.md).[restoreHandle](Resource.md#restorehandle)

#### Defined in

[src/core/Resource.ts:63](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;63)

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

[src/core/Resource.ts:55](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;55)

___

### toString

▸ **toString**(): `string`

将此实例转换为字符串标识

#### Returns

`string`

#### Overrides

[Resource](Resource.md).[toString](Resource.md#tostring)

#### Defined in

[src/core/RenderTarget.ts:456](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;456)

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

[src/core/RenderTarget.ts:419](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;5cce138#line&#x3D;419)
