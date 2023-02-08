---
id: "Texture"
title: "Class: Texture"
sidebar_label: "Texture"
sidebar_position: 0
custom_edit_url: null
---

纹理
一般在 `webgl` 中会将纹理用于贴图，或者作为 `renderTarget`

代码示例：
```ts
const texture = new ve.Texture(renderer, {
  generateMipmaps: true,
  flipY: true,
});

const image = new Image();

image.onload = () => {
  texture.setData(image, image.width, image.height);
};

image.src = './assets/posx.jpg';
```

## Hierarchy

- [`Resource`](Resource.md)<[`TextureOptions`](../interfaces/TextureOptions.md)\>

  ↳ **`Texture`**

  ↳↳ [`Texture3D`](Texture3D.md)

  ↳↳ [`DataTexture`](DataTexture.md)

## Constructors

### constructor

• **new Texture**(`renderer`, `options?`, `needsUpdate?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) | `undefined` | Renderer 对象 |
| `options` | `Partial`<[`TextureOptions`](../interfaces/TextureOptions.md)\> | `{}` | 配置项 |
| `needsUpdate` | `boolean` | `true` | 是否需要`update` |

#### Overrides

[Resource](Resource.md).[constructor](Resource.md#constructor)

#### Defined in

[src/core/Texture.ts:169](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;169)

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

纹理高度

#### Defined in

[src/core/Texture.ts:160](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;160)

___

### id

• **id**: `string`

#### Inherited from

[Resource](Resource.md).[id](Resource.md#id)

#### Defined in

[src/core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;21)

___

### image

• **image**: `any`

纹理数据

#### Defined in

[src/core/Texture.ts:150](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;150)

___

### name

• **name**: `WithUndef`<`string`\>

#### Inherited from

[Resource](Resource.md).[name](Resource.md#name)

#### Defined in

[src/core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;23)

___

### needsUpdate

• **needsUpdate**: `boolean` = `false`

设置纹理是否需要更新，一般我们会在纹理数据或者配置变更时将此配置项设置为 `true`
这样会在下一次渲染时应用对应的纹理数据和配置。

#### Defined in

[src/core/Texture.ts:140](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;140)

___

### options

• **options**: `Partial`<[`ResourceOptions`](../interfaces/ResourceOptions.md) & [`TextureOptions`](../interfaces/TextureOptions.md)\>

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

### textureUnit

• **textureUnit**: `number` = `0`

设置纹理单位

#### Defined in

[src/core/Texture.ts:145](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;145)

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

纹理宽度

#### Defined in

[src/core/Texture.ts:155](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;155)

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

▸ **bind**(`unit?`): `void`

绑定纹理

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unit` | `number` | 纹理单位，默认为 `this.textureUnit` |

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[bind](Resource.md#bind)

#### Defined in

[src/core/Texture.ts:381](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;381)

___

### delete

▸ **delete**(`«destructured»?`): [`Texture`](Texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `deleteChildren` | `undefined` \| `boolean` |

#### Returns

[`Texture`](Texture.md)

#### Inherited from

[Resource](Resource.md).[delete](Resource.md#delete)

#### Defined in

[src/core/Resource.ts:74](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;74)

___

### destroy

▸ **destroy**(): `void`

销毁纹理

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[destroy](Resource.md#destroy)

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

#### Defined in

[src/core/Texture.ts:228](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;228)

___

### removeStats

▸ **removeStats**(): `void`

移除相关状态

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[removeStats](Resource.md#removestats)

#### Defined in

[src/core/Texture.ts:408](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;408)

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

[Resource](Resource.md).[swapHandle](Resource.md#swaphandle)

#### Defined in

[src/core/Resource.ts:55](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1f7cbec#line&#x3D;55)

___

### toString

▸ **toString**(): `string`

获取字符串数据

#### Returns

`string`

#### Overrides

[Resource](Resource.md).[toString](Resource.md#tostring)

#### Defined in

[src/core/Texture.ts:434](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;434)

___

### unbind

▸ **unbind**(): `void`

解绑纹理

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[unbind](Resource.md#unbind)

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

#### Defined in

[src/core/Texture.ts:247](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1f7cbec#line&#x3D;247)
