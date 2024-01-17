[vis-engine - v1.5.1](../index.md) / Texture

# Class: Texture<T\>

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

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TextureOptions`](../interfaces/TextureOptions.md) = [`TextureOptions`](../interfaces/TextureOptions.md) |

## Hierarchy

- [`Resource`](Resource.md)<`T`\>

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
- [target](Texture.md#target)
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
- [restoreHandle](Texture.md#restorehandle)
- [setData](Texture.md#setdata)
- [setOptions](Texture.md#setoptions)
- [swapHandle](Texture.md#swaphandle)
- [toString](Texture.md#tostring)
- [unbind](Texture.md#unbind)
- [update](Texture.md#update)

## Constructors

### constructor

• **new Texture**<`T`\>(`renderer`, `options?`, `needsUpdate?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TextureOptions`](../interfaces/TextureOptions.md) = [`TextureOptions`](../interfaces/TextureOptions.md) |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) | `undefined` | Renderer 对象 |
| `options` | `Partial`<`T`\> | `{}` | 配置项 |
| `needsUpdate` | `boolean` | `true` | 是否需要`update` |

#### Overrides

[Resource](Resource.md).[constructor](Resource.md#constructor)

#### Defined in

[src/core/Texture.ts:180](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L180)

## Properties

### byteLength

• **byteLength**: `number`

#### Inherited from

[Resource](Resource.md).[byteLength](Resource.md#bytelength)

#### Defined in

[src/core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L28)

___

### height

• **height**: `number`

纹理高度

#### Defined in

[src/core/Texture.ts:166](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L166)

___

### id

• **id**: `string`

#### Inherited from

[Resource](Resource.md).[id](Resource.md#id)

#### Defined in

[src/core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L21)

___

### image

• **image**: `any`

纹理数据

#### Defined in

[src/core/Texture.ts:156](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L156)

___

### name

• **name**: `WithUndef`<`string`\>

#### Inherited from

[Resource](Resource.md).[name](Resource.md#name)

#### Defined in

[src/core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L23)

___

### needsUpdate

• **needsUpdate**: `boolean` = `false`

设置纹理是否需要更新，一般我们会在纹理数据或者配置变更时将此配置项设置为 `true`
这样会在下一次渲染时应用对应的纹理数据和配置。

#### Defined in

[src/core/Texture.ts:146](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L146)

___

### options

• **options**: `Partial`<`T`\>

#### Inherited from

[Resource](Resource.md).[options](Resource.md#options)

#### Defined in

[src/core/Resource.ts:30](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L30)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Resource](Resource.md).[renderer](Resource.md#renderer)

#### Defined in

[src/core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Base.ts#L7)

___

### target

• **target**: `number`

`texImage2D` target

#### Defined in

[src/core/Texture.ts:171](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L171)

___

### textureUnit

• **textureUnit**: `number` = `0`

设置纹理单位

#### Defined in

[src/core/Texture.ts:151](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L151)

___

### userData

• **userData**: `any`

#### Inherited from

[Resource](Resource.md).[userData](Resource.md#userdata)

#### Defined in

[src/core/Resource.ts:25](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L25)

___

### width

• **width**: `number`

纹理宽度

#### Defined in

[src/core/Texture.ts:161](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L161)

## Accessors

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Resource.gl

#### Defined in

[src/core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Base.ts#L16)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Inherited from

Resource.handle

#### Defined in

[src/core/Resource.ts:47](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L47)

___

### rendererState

• `get` **rendererState**(): [`State`](State.md)

获取渲染状态

#### Returns

[`State`](State.md)

#### Inherited from

Resource.rendererState

#### Defined in

[src/core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Base.ts#L23)

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

[src/core/Texture.ts:458](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L458)

___

### delete

▸ **delete**(`«destructured»?`): [`Texture`](Texture.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `deleteChildren` | `undefined` \| `boolean` |

#### Returns

[`Texture`](Texture.md)<`T`\>

#### Inherited from

[Resource](Resource.md).[delete](Resource.md#delete)

#### Defined in

[src/core/Resource.ts:74](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L74)

___

### destroy

▸ **destroy**(): `void`

销毁纹理

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[destroy](Resource.md#destroy)

#### Defined in

[src/core/Texture.ts:477](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L477)

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

[src/core/Texture.ts:241](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L241)

___

### removeStats

▸ **removeStats**(): `void`

移除相关状态

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[removeStats](Resource.md#removestats)

#### Defined in

[src/core/Texture.ts:485](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L485)

___

### restoreHandle

▸ **restoreHandle**(): `void`

恢复为原有 `handle`

#### Returns

`void`

#### Inherited from

[Resource](Resource.md).[restoreHandle](Resource.md#restorehandle)

#### Defined in

[src/core/Resource.ts:63](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L63)

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

[src/core/Texture.ts:219](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L219)

___

### setOptions

▸ **setOptions**(`options`): `void`

设置纹理配置（默认进行合并）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Partial`<`T`\> | 配置项 |

#### Returns

`void`

#### Defined in

[src/core/Texture.ts:230](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L230)

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

[src/core/Resource.ts:55](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L55)

___

### toString

▸ **toString**(): `string`

获取字符串数据

#### Returns

`string`

#### Overrides

[Resource](Resource.md).[toString](Resource.md#tostring)

#### Defined in

[src/core/Texture.ts:511](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L511)

___

### unbind

▸ **unbind**(): `void`

解绑纹理

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[unbind](Resource.md#unbind)

#### Defined in

[src/core/Texture.ts:468](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L468)

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

[src/core/Texture.ts:260](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L260)
