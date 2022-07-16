---
id: "Resource"
title: "Class: Resource<T>"
sidebar_label: "Resource"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `default`

  ↳ **`Resource`**

  ↳↳ [`RenderBuffer`](RenderBuffer.md)

  ↳↳ [`RenderTarget`](RenderTarget.md)

  ↳↳ [`Program`](Program.md)

  ↳↳ [`Texture`](Texture.md)

## Constructors

### constructor

• **new Resource**<`T`\>(`renderer`, `options?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) |
| `options` | `Partial`<[`ResourceOptions`](../interfaces/ResourceOptions.md) & `T`\> |

#### Overrides

Base.constructor

#### Defined in

[core/Resource.ts:30](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;30)

## Properties

### byteLength

• **byteLength**: `number`

#### Defined in

[core/Resource.ts:26](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;26)

___

### id

• **id**: `string`

#### Defined in

[core/Resource.ts:19](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;19)

___

### name

• **name**: `WithUndef`<`string`\>

#### Defined in

[core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;21)

___

### options

• **options**: `Partial`<[`ResourceOptions`](../interfaces/ResourceOptions.md) & `T`\>

#### Defined in

[core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;28)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

Base.renderer

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1dddf76#line&#x3D;7)

___

### userData

• **userData**: `any`

#### Defined in

[core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;23)

## Accessors

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

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Defined in

[core/Resource.ts:45](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;45)

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

## Methods

### bind

▸ **bind**(`funcOrHandle?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `funcOrHandle` | `any` |

#### Returns

`void`

#### Defined in

[core/Resource.ts:73](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;73)

___

### createHandle

▸ **createHandle**(): `void`

#### Returns

`void`

#### Defined in

[core/Resource.ts:85](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;85)

___

### delete

▸ **delete**(`«destructured»?`): [`Resource`](Resource.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `deleteChildren` | `undefined` \| `boolean` |

#### Returns

[`Resource`](Resource.md)<`T`\>

#### Defined in

[core/Resource.ts:56](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;56)

___

### deleteHandle

▸ **deleteHandle**(): `void`

#### Returns

`void`

#### Defined in

[core/Resource.ts:89](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;89)

___

### destroy

▸ **destroy**(): `void`

销毁相关资源

#### Returns

`void`

#### Defined in

[core/Resource.ts:52](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;52)

___

### removeStats

▸ **removeStats**(): `void`

#### Returns

`void`

#### Defined in

[core/Resource.ts:81](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;81)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[core/Resource.ts:93](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;93)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[core/Resource.ts:77](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;77)
