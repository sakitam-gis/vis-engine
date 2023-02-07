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

[src/core/Resource.ts:32](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;32)

## Properties

### byteLength

• **byteLength**: `number`

#### Defined in

[src/core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;28)

___

### id

• **id**: `string`

#### Defined in

[src/core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;21)

___

### name

• **name**: `WithUndef`<`string`\>

#### Defined in

[src/core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;23)

___

### options

• **options**: `Partial`<[`ResourceOptions`](../interfaces/ResourceOptions.md) & `T`\>

#### Defined in

[src/core/Resource.ts:30](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;30)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

Base.renderer

#### Defined in

[src/core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;5cce138#line&#x3D;7)

___

### userData

• **userData**: `any`

#### Defined in

[src/core/Resource.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;25)

## Accessors

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Base.gl

#### Defined in

[src/core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;5cce138#line&#x3D;16)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Defined in

[src/core/Resource.ts:47](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;47)

___

### rendererState

• `get` **rendererState**(): [`State`](State.md)

获取渲染状态

#### Returns

[`State`](State.md)

#### Inherited from

Base.rendererState

#### Defined in

[src/core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;5cce138#line&#x3D;23)

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

[src/core/Resource.ts:91](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;91)

___

### createHandle

▸ **createHandle**(): `void`

#### Returns

`void`

#### Defined in

[src/core/Resource.ts:103](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;103)

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

[src/core/Resource.ts:74](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;74)

___

### deleteHandle

▸ **deleteHandle**(): `void`

#### Returns

`void`

#### Defined in

[src/core/Resource.ts:107](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;107)

___

### destroy

▸ **destroy**(): `void`

销毁相关资源

#### Returns

`void`

#### Defined in

[src/core/Resource.ts:70](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;70)

___

### removeStats

▸ **removeStats**(): `void`

#### Returns

`void`

#### Defined in

[src/core/Resource.ts:99](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;99)

___

### restoreHandle

▸ **restoreHandle**(): `void`

恢复为原有 `handle`

#### Returns

`void`

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

#### Defined in

[src/core/Resource.ts:55](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;55)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/core/Resource.ts:111](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;111)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/core/Resource.ts:95](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;5cce138#line&#x3D;95)
