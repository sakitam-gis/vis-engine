[vis-engine - v1.5.1](../index.md) / Resource

# Class: Resource<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ResourceOptions`](../interfaces/ResourceOptions.md) |

## Hierarchy

- `default`

  ↳ **`Resource`**

  ↳↳ [`RenderBuffer`](RenderBuffer.md)

  ↳↳ [`RenderTarget`](RenderTarget.md)

  ↳↳ [`Program`](Program.md)

  ↳↳ [`Texture`](Texture.md)

## Table of contents

### Constructors

- [constructor](Resource.md#constructor)

### Properties

- [byteLength](Resource.md#bytelength)
- [id](Resource.md#id)
- [name](Resource.md#name)
- [options](Resource.md#options)
- [renderer](Resource.md#renderer)
- [userData](Resource.md#userdata)

### Accessors

- [gl](Resource.md#gl)
- [handle](Resource.md#handle)
- [rendererState](Resource.md#rendererstate)

### Methods

- [bind](Resource.md#bind)
- [createHandle](Resource.md#createhandle)
- [delete](Resource.md#delete)
- [deleteHandle](Resource.md#deletehandle)
- [destroy](Resource.md#destroy)
- [removeStats](Resource.md#removestats)
- [restoreHandle](Resource.md#restorehandle)
- [swapHandle](Resource.md#swaphandle)
- [toString](Resource.md#tostring)
- [unbind](Resource.md#unbind)

## Constructors

### constructor

• **new Resource**<`T`\>(`renderer`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ResourceOptions`](../interfaces/ResourceOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) |
| `options` | `Partial`<`T`\> |

#### Overrides

Base.constructor

#### Defined in

[src/core/Resource.ts:32](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L32)

## Properties

### byteLength

• **byteLength**: `number`

#### Defined in

[src/core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L28)

___

### id

• **id**: `string`

#### Defined in

[src/core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L21)

___

### name

• **name**: `WithUndef`<`string`\>

#### Defined in

[src/core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L23)

___

### options

• **options**: `Partial`<`T`\>

#### Defined in

[src/core/Resource.ts:30](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L30)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

Base.renderer

#### Defined in

[src/core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Base.ts#L7)

___

### userData

• **userData**: `any`

#### Defined in

[src/core/Resource.ts:25](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L25)

## Accessors

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Base.gl

#### Defined in

[src/core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Base.ts#L16)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Defined in

[src/core/Resource.ts:47](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L47)

___

### rendererState

• `get` **rendererState**(): [`State`](State.md)

获取渲染状态

#### Returns

[`State`](State.md)

#### Inherited from

Base.rendererState

#### Defined in

[src/core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Base.ts#L23)

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

[src/core/Resource.ts:91](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L91)

___

### createHandle

▸ **createHandle**(): `void`

#### Returns

`void`

#### Defined in

[src/core/Resource.ts:103](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L103)

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

[src/core/Resource.ts:74](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L74)

___

### deleteHandle

▸ **deleteHandle**(): `void`

#### Returns

`void`

#### Defined in

[src/core/Resource.ts:107](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L107)

___

### destroy

▸ **destroy**(): `void`

销毁相关资源

#### Returns

`void`

#### Defined in

[src/core/Resource.ts:70](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L70)

___

### removeStats

▸ **removeStats**(): `void`

#### Returns

`void`

#### Defined in

[src/core/Resource.ts:99](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L99)

___

### restoreHandle

▸ **restoreHandle**(): `void`

恢复为原有 `handle`

#### Returns

`void`

#### Defined in

[src/core/Resource.ts:63](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L63)

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

[src/core/Resource.ts:55](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L55)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/core/Resource.ts:111](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L111)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/core/Resource.ts:95](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L95)
