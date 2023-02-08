---
id: "DataTexture"
title: "Class: DataTexture"
sidebar_label: "DataTexture"
sidebar_position: 0
custom_edit_url: null
---

数据纹理对象，常用于结构化数据的纹理对象。

代码实例：

```ts
const texture = new DataTexture(renderer, opt);
```

## Hierarchy

- [`Texture`](Texture.md)

  ↳ **`DataTexture`**

## Constructors

### constructor

• **new DataTexture**(`renderer`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `any` |
| `options` | `Partial`<[`DataTextureOptions`](../interfaces/DataTextureOptions.md)\> |

#### Overrides

[Texture](Texture.md).[constructor](Texture.md#constructor)

#### Defined in

[src/core/DataTexture.ts:18](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/DataTexture.ts?at&#x3D;1f7cbec#line&#x3D;18)

## Properties

### byteLength

• **byteLength**: `number`

#### Inherited from

[Texture](Texture.md).[byteLength](Texture.md#bytelength)

#### Defined in

[src/core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;28)

___

### height

• **height**: `number`

纹理高度

#### Inherited from

[Texture](Texture.md).[height](Texture.md#height)

#### Defined in

[src/core/Texture.ts:160](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;160)

___

### id

• **id**: `string`

#### Inherited from

[Texture](Texture.md).[id](Texture.md#id)

#### Defined in

[src/core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;21)

___

### image

• **image**: `any`

纹理数据

#### Inherited from

[Texture](Texture.md).[image](Texture.md#image)

#### Defined in

[src/core/Texture.ts:150](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;150)

___

### name

• **name**: `WithUndef`<`string`\>

#### Inherited from

[Texture](Texture.md).[name](Texture.md#name)

#### Defined in

[src/core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;23)

___

### needsUpdate

• **needsUpdate**: `boolean` = `false`

设置纹理是否需要更新，一般我们会在纹理数据或者配置变更时将此配置项设置为 `true`
这样会在下一次渲染时应用对应的纹理数据和配置。

#### Inherited from

[Texture](Texture.md).[needsUpdate](Texture.md#needsupdate)

#### Defined in

[src/core/Texture.ts:140](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;140)

___

### options

• **options**: `Partial`<[`ResourceOptions`](../interfaces/ResourceOptions.md) & [`TextureOptions`](../interfaces/TextureOptions.md)\>

#### Inherited from

[Texture](Texture.md).[options](Texture.md#options)

#### Defined in

[src/core/Resource.ts:30](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;30)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Texture](Texture.md).[renderer](Texture.md#renderer)

#### Defined in

[src/core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1f7cbec#line&#x3D;7)

___

### textureUnit

• **textureUnit**: `number` = `0`

设置纹理单位

#### Inherited from

[Texture](Texture.md).[textureUnit](Texture.md#textureunit)

#### Defined in

[src/core/Texture.ts:145](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;145)

___

### userData

• **userData**: `any`

#### Inherited from

[Texture](Texture.md).[userData](Texture.md#userdata)

#### Defined in

[src/core/Resource.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;25)

___

### width

• **width**: `number`

纹理宽度

#### Inherited from

[Texture](Texture.md).[width](Texture.md#width)

#### Defined in

[src/core/Texture.ts:155](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;155)

## Accessors

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Texture.gl

#### Defined in

[src/core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1f7cbec#line&#x3D;16)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Inherited from

Texture.handle

#### Defined in

[src/core/Resource.ts:47](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;47)

___

### rendererState

• `get` **rendererState**(): [`State`](State.md)

获取渲染状态

#### Returns

[`State`](State.md)

#### Inherited from

Texture.rendererState

#### Defined in

[src/core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1f7cbec#line&#x3D;23)

## Methods

### bind

▸ **bind**(`unit?`): `void`

绑定纹理

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unit` | `number` | 纹理单位，默认为 `this.textureUnit` |

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[bind](Texture.md#bind)

#### Defined in

[src/core/Texture.ts:381](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;381)

___

### delete

▸ **delete**(`«destructured»?`): [`DataTexture`](DataTexture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `deleteChildren` | `undefined` \| `boolean` |

#### Returns

[`DataTexture`](DataTexture.md)

#### Inherited from

[Texture](Texture.md).[delete](Texture.md#delete)

#### Defined in

[src/core/Resource.ts:74](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;74)

___

### destroy

▸ **destroy**(): `void`

销毁纹理

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[destroy](Texture.md#destroy)

#### Defined in

[src/core/Texture.ts:400](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;400)

___

### fromSrc

▸ **fromSrc**(`url`): `Promise`<`unknown`\>

从 Url 设置纹理对象的数据，会默认标记为需要更新 `needsUpdate = true`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Inherited from

[Texture](Texture.md).[fromSrc](Texture.md#fromsrc)

#### Defined in

[src/core/Texture.ts:228](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;228)

___

### removeStats

▸ **removeStats**(): `void`

移除相关状态

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[removeStats](Texture.md#removestats)

#### Defined in

[src/core/Texture.ts:408](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;408)

___

### restoreHandle

▸ **restoreHandle**(): `void`

恢复为原有 `handle`

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[restoreHandle](Texture.md#restorehandle)

#### Defined in

[src/core/Resource.ts:63](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;63)

___

### setData

▸ **setData**(`image`, `width?`, `height?`): `void`

设置纹理数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `image` | `any` | 纹理数据 |
| `width` | `number` | 纹理宽度，默认为原始宽度 |
| `height` | `number` | 纹理高度，默认为原始高度 |

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[setData](Texture.md#setdata)

#### Defined in

[src/core/Texture.ts:206](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;206)

___

### setOptions

▸ **setOptions**(`options`): `void`

设置纹理配置（默认进行合并）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Partial`<[`TextureOptions`](../interfaces/TextureOptions.md)\> | 配置项 |

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[setOptions](Texture.md#setoptions)

#### Defined in

[src/core/Texture.ts:217](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;217)

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

[Texture](Texture.md).[swapHandle](Texture.md#swaphandle)

#### Defined in

[src/core/Resource.ts:55](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;55)

___

### toString

▸ **toString**(): `string`

获取字符串数据

#### Returns

`string`

#### Inherited from

[Texture](Texture.md).[toString](Texture.md#tostring)

#### Defined in

[src/core/Texture.ts:434](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;434)

___

### unbind

▸ **unbind**(): `void`

解绑纹理

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[unbind](Texture.md#unbind)

#### Defined in

[src/core/Texture.ts:391](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;391)

___

### update

▸ **update**(`units?`): `void`

更新纹理数据或者纹理相关配置

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `units` | `number` | `0` | 纹理单位，默认为 0 |

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[update](Texture.md#update)

#### Defined in

[src/core/Texture.ts:247](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;247)
