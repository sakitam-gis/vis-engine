---
id: "Texture3D"
title: "Class: Texture3D"
sidebar_label: "Texture3D"
sidebar_position: 0
custom_edit_url: null
---

纹理
一般在 `webgl` 中会将纹理用于贴图，或者作为 `renderTarget`
代码示例：
```ts
const texture = new ve.Texture3D(renderer, {
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

- [`Texture`](Texture.md)

  ↳ **`Texture3D`**

## Constructors

### constructor

• **new Texture3D**(`renderer`, `options?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) | Renderer 对象 |
| `options` | `Partial`<[`Texture3DOptions`](../interfaces/Texture3DOptions.md)\> | 配置项 |

#### Overrides

[Texture](Texture.md).[constructor](Texture.md#constructor)

#### Defined in

[core/Texture3D.ts:158](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at&#x3D;1dddf76#line&#x3D;158)

## Properties

### byteLength

• **byteLength**: `number`

#### Inherited from

[Texture](Texture.md).[byteLength](Texture.md#bytelength)

#### Defined in

[core/Resource.ts:26](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;26)

___

### depth

• **depth**: `number`

纹理深度

#### Defined in

[core/Texture3D.ts:150](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at&#x3D;1dddf76#line&#x3D;150)

___

### height

• **height**: `number`

纹理高度

#### Inherited from

[Texture](Texture.md).[height](Texture.md#height)

#### Defined in

[core/Texture.ts:160](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1dddf76#line&#x3D;160)

___

### id

• **id**: `string`

#### Inherited from

[Texture](Texture.md).[id](Texture.md#id)

#### Defined in

[core/Resource.ts:19](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;19)

___

### image

• **image**: `any`

纹理数据

#### Inherited from

[Texture](Texture.md).[image](Texture.md#image)

#### Defined in

[core/Texture.ts:150](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1dddf76#line&#x3D;150)

___

### name

• **name**: `WithUndef`<`string`\>

#### Inherited from

[Texture](Texture.md).[name](Texture.md#name)

#### Defined in

[core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;21)

___

### needsUpdate

• **needsUpdate**: `boolean` = `false`

设置纹理是否需要更新，一般我们会在纹理数据或者配置变更时将此配置项设置为 `true`
这样会在下一次渲染时应用对应的纹理数据和配置。

#### Overrides

[Texture](Texture.md).[needsUpdate](Texture.md#needsupdate)

#### Defined in

[core/Texture3D.ts:140](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at&#x3D;1dddf76#line&#x3D;140)

___

### options

• **options**: `Partial`<[`ResourceOptions`](../interfaces/ResourceOptions.md) & [`TextureOptions`](../interfaces/TextureOptions.md)\>

#### Inherited from

[Texture](Texture.md).[options](Texture.md#options)

#### Defined in

[core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;28)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Texture](Texture.md).[renderer](Texture.md#renderer)

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1dddf76#line&#x3D;7)

___

### textureUnit

• **textureUnit**: `number` = `0`

设置纹理单位

#### Overrides

[Texture](Texture.md).[textureUnit](Texture.md#textureunit)

#### Defined in

[core/Texture3D.ts:145](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at&#x3D;1dddf76#line&#x3D;145)

___

### userData

• **userData**: `any`

#### Inherited from

[Texture](Texture.md).[userData](Texture.md#userdata)

#### Defined in

[core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;23)

___

### width

• **width**: `number`

纹理宽度

#### Inherited from

[Texture](Texture.md).[width](Texture.md#width)

#### Defined in

[core/Texture.ts:155](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1dddf76#line&#x3D;155)

## Accessors

### gl

• `get` **gl**(): `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGL2RenderingContext`

#### Overrides

Texture.gl

#### Defined in

[core/Texture3D.ts:188](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at&#x3D;1dddf76#line&#x3D;188)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Inherited from

Texture.handle

#### Defined in

[core/Resource.ts:45](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;45)

___

### rendererState

• `get` **rendererState**(): `any`

获取渲染状态

#### Returns

`any`

#### Inherited from

Texture.rendererState

#### Defined in

[core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1dddf76#line&#x3D;23)

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

[Texture](Texture.md).[bind](Texture.md#bind)

#### Defined in

[core/Texture3D.ts:347](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at&#x3D;1dddf76#line&#x3D;347)

___

### delete

▸ **delete**(`«destructured»?`): [`Texture3D`](Texture3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `deleteChildren` | `undefined` \| `boolean` |

#### Returns

[`Texture3D`](Texture3D.md)

#### Inherited from

[Texture](Texture.md).[delete](Texture.md#delete)

#### Defined in

[core/Resource.ts:56](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;56)

___

### destroy

▸ **destroy**(): `void`

销毁纹理

#### Returns

`void`

#### Overrides

[Texture](Texture.md).[destroy](Texture.md#destroy)

#### Defined in

[core/Texture3D.ts:366](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at&#x3D;1dddf76#line&#x3D;366)

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

[core/Texture.ts:228](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;1dddf76#line&#x3D;228)

___

### removeStats

▸ **removeStats**(): `void`

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[removeStats](Texture.md#removestats)

#### Defined in

[core/Resource.ts:81](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;1dddf76#line&#x3D;81)

___

### setData

▸ **setData**(`image`, `width?`, `height?`, `depth?`): `void`

设置纹理数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `image` | `any` | 纹理数据 |
| `width` | `number` | 纹理宽度，默认为原始宽度 |
| `height` | `number` | 纹理高度，默认为原始高度 |
| `depth` | `number` |  |

#### Returns

`void`

#### Overrides

[Texture](Texture.md).[setData](Texture.md#setdata)

#### Defined in

[core/Texture3D.ts:199](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at&#x3D;1dddf76#line&#x3D;199)

___

### setOptions

▸ **setOptions**(`options`): `void`

设置纹理配置（默认进行合并）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Partial`<[`Texture3DOptions`](../interfaces/Texture3DOptions.md)\> | 配置项 |

#### Returns

`void`

#### Overrides

[Texture](Texture.md).[setOptions](Texture.md#setoptions)

#### Defined in

[core/Texture3D.ts:211](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at&#x3D;1dddf76#line&#x3D;211)

___

### toString

▸ **toString**(): `string`

获取字符串数据

#### Returns

`string`

#### Overrides

[Texture](Texture.md).[toString](Texture.md#tostring)

#### Defined in

[core/Texture3D.ts:374](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at&#x3D;1dddf76#line&#x3D;374)

___

### unbind

▸ **unbind**(): `void`

解绑纹理

#### Returns

`void`

#### Overrides

[Texture](Texture.md).[unbind](Texture.md#unbind)

#### Defined in

[core/Texture3D.ts:357](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at&#x3D;1dddf76#line&#x3D;357)

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

#### Overrides

[Texture](Texture.md).[update](Texture.md#update)

#### Defined in

[core/Texture3D.ts:223](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts?at&#x3D;1dddf76#line&#x3D;223)
