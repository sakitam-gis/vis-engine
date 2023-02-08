---
id: "RenderBuffer"
title: "Class: RenderBuffer"
sidebar_label: "RenderBuffer"
sidebar_position: 0
custom_edit_url: null
---

渲染缓冲区对象。
由于渲染缓冲区对象是只写的，因此它们通常用作深度和模板关联对象。

实例代码：
```ts
const renderBuffer = new RenderBuffer(renderer, {
  format: renderer.gl.DEPTH_COMPONENT16,
  width: 1920,
  height: 1080,
});

renderBuffer.bind();
renderBuffer.unbind();
```

## Hierarchy

- [`Resource`](Resource.md)<[`RenderBufferOptions`](../interfaces/RenderBufferOptions.md)\>

  ↳ **`RenderBuffer`**

## Constructors

### constructor

• **new RenderBuffer**(`renderer`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) |
| `options` | [`RenderBufferOptions`](../interfaces/RenderBufferOptions.md) |

#### Overrides

[Resource](Resource.md).[constructor](Resource.md#constructor)

#### Defined in

[src/core/RenderBuffer.ts:50](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;1f7cbec#line&#x3D;50)

## Properties

### byteLength

• **byteLength**: `number`

#### Inherited from

[Resource](Resource.md).[byteLength](Resource.md#bytelength)

#### Defined in

[src/core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;28)

___

### height

• **height**: `number`

渲染缓冲区高度

#### Defined in

[src/core/RenderBuffer.ts:46](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;1f7cbec#line&#x3D;46)

___

### id

• **id**: `string`

#### Inherited from

[Resource](Resource.md).[id](Resource.md#id)

#### Defined in

[src/core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;21)

___

### name

• **name**: `WithUndef`<`string`\>

#### Inherited from

[Resource](Resource.md).[name](Resource.md#name)

#### Defined in

[src/core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;23)

___

### options

• **options**: `Partial`<[`ResourceOptions`](../interfaces/ResourceOptions.md) & [`RenderBufferOptions`](../interfaces/RenderBufferOptions.md)\>

#### Inherited from

[Resource](Resource.md).[options](Resource.md#options)

#### Defined in

[src/core/Resource.ts:30](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;30)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Resource](Resource.md).[renderer](Resource.md#renderer)

#### Defined in

[src/core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1f7cbec#line&#x3D;7)

___

### userData

• **userData**: `any`

#### Inherited from

[Resource](Resource.md).[userData](Resource.md#userdata)

#### Defined in

[src/core/Resource.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;25)

___

### width

• **width**: `number`

渲染缓冲区宽度

#### Defined in

[src/core/RenderBuffer.ts:41](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;1f7cbec#line&#x3D;41)

## Accessors

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Resource.gl

#### Defined in

[src/core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1f7cbec#line&#x3D;16)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Inherited from

Resource.handle

#### Defined in

[src/core/Resource.ts:47](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;47)

___

### rendererState

• `get` **rendererState**(): [`State`](State.md)

获取渲染状态

#### Returns

[`State`](State.md)

#### Inherited from

Resource.rendererState

#### Defined in

[src/core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1f7cbec#line&#x3D;23)

## Methods

### bind

▸ **bind**(): `void`

绑定渲染缓冲

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[bind](Resource.md#bind)

#### Defined in

[src/core/RenderBuffer.ts:91](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;1f7cbec#line&#x3D;91)

___

### createHandle

▸ **createHandle**(): ``null`` \| `WebGLRenderbuffer`

创建 `RBO`

#### Returns

``null`` \| `WebGLRenderbuffer`

#### Overrides

[Resource](Resource.md).[createHandle](Resource.md#createhandle)

#### Defined in

[src/core/RenderBuffer.ts:116](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;1f7cbec#line&#x3D;116)

___

### delete

▸ **delete**(`«destructured»?`): [`RenderBuffer`](RenderBuffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `deleteChildren` | `undefined` \| `boolean` |

#### Returns

[`RenderBuffer`](RenderBuffer.md)

#### Inherited from

[Resource](Resource.md).[delete](Resource.md#delete)

#### Defined in

[src/core/Resource.ts:74](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;74)

___

### deleteHandle

▸ **deleteHandle**(): `void`

移除 `RBO`

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[deleteHandle](Resource.md#deletehandle)

#### Defined in

[src/core/RenderBuffer.ts:123](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;1f7cbec#line&#x3D;123)

___

### destroy

▸ **destroy**(): `void`

销毁此渲染对象

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[destroy](Resource.md#destroy)

#### Defined in

[src/core/RenderBuffer.ts:108](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;1f7cbec#line&#x3D;108)

___

### removeStats

▸ **removeStats**(): `void`

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[removeStats](Resource.md#removestats)

#### Defined in

[src/core/RenderBuffer.ts:103](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;1f7cbec#line&#x3D;103)

___

### resize

▸ **resize**(`width`, `height`): `void`

设置此渲染对象的的大小

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `any` |
| `height` | `any` |

#### Returns

`void`

#### Defined in

[src/core/RenderBuffer.ts:79](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;1f7cbec#line&#x3D;79)

___

### restoreHandle

▸ **restoreHandle**(): `void`

恢复为原有 `handle`

#### Returns

`void`

#### Inherited from

[Resource](Resource.md).[restoreHandle](Resource.md#restorehandle)

#### Defined in

[src/core/Resource.ts:63](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;63)

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

[src/core/Resource.ts:55](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;55)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Resource](Resource.md).[toString](Resource.md#tostring)

#### Defined in

[src/core/Resource.ts:111](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;111)

___

### unbind

▸ **unbind**(): `void`

解绑渲染缓冲

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[unbind](Resource.md#unbind)

#### Defined in

[src/core/RenderBuffer.ts:98](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;1f7cbec#line&#x3D;98)
