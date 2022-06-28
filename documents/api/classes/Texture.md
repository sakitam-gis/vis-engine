[vis-engine - v1.0.0](../index.md) / Texture

# Class: Texture

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

## Table of contents

### Constructors

- [constructor](Texture.md#constructor)

### Properties

- [byteLength](Texture.md#bytelength)
- [height](Texture.md#height)
- [id](Texture.md#id)
- [image](Texture.md#image)
- [name](Texture.md#name)
- [needsUpdate](Texture.md#needsupdate)
- [options](Texture.md#options)
- [renderer](Texture.md#renderer)
- [textureUnit](Texture.md#textureunit)
- [userData](Texture.md#userdata)
- [width](Texture.md#width)

### Accessors

- [gl](Texture.md#gl)
- [handle](Texture.md#handle)
- [rendererState](Texture.md#rendererstate)

### Methods

- [bind](Texture.md#bind)
- [delete](Texture.md#delete)
- [destroy](Texture.md#destroy)
- [fromSrc](Texture.md#fromsrc)
- [removeStats](Texture.md#removestats)
- [setData](Texture.md#setdata)
- [setOptions](Texture.md#setoptions)
- [toString](Texture.md#tostring)
- [unbind](Texture.md#unbind)
- [update](Texture.md#update)

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

[core/Texture.ts:169](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;4193568#line&#x3D;169)

## Properties

### byteLength

• **byteLength**: `number`

#### Inherited from

[Resource](Resource.md).[byteLength](Resource.md#bytelength)

#### Defined in

[core/Resource.ts:26](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;4193568#line&#x3D;26)

___

### height

• **height**: `number`

纹理高度

#### Defined in

[core/Texture.ts:160](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;4193568#line&#x3D;160)

___

### id

• **id**: `string`

#### Inherited from

[Resource](Resource.md).[id](Resource.md#id)

#### Defined in

[core/Resource.ts:19](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;4193568#line&#x3D;19)

___

### image

• **image**: `any`

纹理数据

#### Defined in

[core/Texture.ts:150](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;4193568#line&#x3D;150)

___

### name

• **name**: `WithUndef`<`string`\>

#### Inherited from

[Resource](Resource.md).[name](Resource.md#name)

#### Defined in

[core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;4193568#line&#x3D;21)

___

### needsUpdate

• **needsUpdate**: `boolean` = `false`

设置纹理是否需要更新，一般我们会在纹理数据或者配置变更时将此配置项设置为 `true`
这样会在下一次渲染时应用对应的纹理数据和配置。

#### Defined in

[core/Texture.ts:140](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;4193568#line&#x3D;140)

___

### options

• **options**: `Partial`<[`ResourceOptions`](../interfaces/ResourceOptions.md) & [`TextureOptions`](../interfaces/TextureOptions.md)\>

#### Inherited from

[Resource](Resource.md).[options](Resource.md#options)

#### Defined in

[core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;4193568#line&#x3D;28)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Resource](Resource.md).[renderer](Resource.md#renderer)

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;4193568#line&#x3D;7)

___

### textureUnit

• **textureUnit**: `number` = `0`

设置纹理单位

#### Defined in

[core/Texture.ts:145](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;4193568#line&#x3D;145)

___

### userData

• **userData**: `any`

#### Inherited from

[Resource](Resource.md).[userData](Resource.md#userdata)

#### Defined in

[core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;4193568#line&#x3D;23)

___

### width

• **width**: `number`

纹理宽度

#### Defined in

[core/Texture.ts:155](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;4193568#line&#x3D;155)

## Accessors

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Resource.gl

#### Defined in

[core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;4193568#line&#x3D;16)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Inherited from

Resource.handle

#### Defined in

[core/Resource.ts:45](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;4193568#line&#x3D;45)

___

### rendererState

• `get` **rendererState**(): `any`

获取渲染状态

#### Returns

`any`

#### Inherited from

Resource.rendererState

#### Defined in

[core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;4193568#line&#x3D;23)

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

[core/Texture.ts:360](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;4193568#line&#x3D;360)

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

[core/Resource.ts:56](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;4193568#line&#x3D;56)

___

### destroy

▸ **destroy**(): `void`

销毁纹理

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[destroy](Resource.md#destroy)

#### Defined in

[core/Texture.ts:379](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;4193568#line&#x3D;379)

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

[core/Texture.ts:228](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;4193568#line&#x3D;228)

___

### removeStats

▸ **removeStats**(): `void`

#### Returns

`void`

#### Inherited from

[Resource](Resource.md).[removeStats](Resource.md#removestats)

#### Defined in

[core/Resource.ts:81](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;4193568#line&#x3D;81)

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

[core/Texture.ts:206](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;4193568#line&#x3D;206)

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

[core/Texture.ts:217](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;4193568#line&#x3D;217)

___

### toString

▸ **toString**(): `string`

获取字符串数据

#### Returns

`string`

#### Overrides

[Resource](Resource.md).[toString](Resource.md#tostring)

#### Defined in

[core/Texture.ts:404](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;4193568#line&#x3D;404)

___

### unbind

▸ **unbind**(): `void`

解绑纹理

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[unbind](Resource.md#unbind)

#### Defined in

[core/Texture.ts:370](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;4193568#line&#x3D;370)

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

[core/Texture.ts:247](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;4193568#line&#x3D;247)
