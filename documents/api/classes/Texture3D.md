# Class: Texture3D

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

- [`Texture`](Texture.md)\<[`Texture3DOptions`](../interfaces/Texture3DOptions.md)\>

  ↳ **`Texture3D`**

## Table of contents

### Constructors

- [constructor](Texture3D.md#constructor)

### Properties

- [renderer](Texture3D.md#renderer)
- [id](Texture3D.md#id)
- [name](Texture3D.md#name)
- [userData](Texture3D.md#userdata)
- [byteLength](Texture3D.md#bytelength)
- [options](Texture3D.md#options)
- [image](Texture3D.md#image)
- [width](Texture3D.md#width)
- [height](Texture3D.md#height)
- [target](Texture3D.md#target)
- [needsUpdate](Texture3D.md#needsupdate)
- [textureUnit](Texture3D.md#textureunit)
- [depth](Texture3D.md#depth)

### Accessors

- [rendererState](Texture3D.md#rendererstate)
- [handle](Texture3D.md#handle)
- [gl](Texture3D.md#gl)

### Methods

- [swapHandle](Texture3D.md#swaphandle)
- [restoreHandle](Texture3D.md#restorehandle)
- [delete](Texture3D.md#delete)
- [fromSrc](Texture3D.md#fromsrc)
- [bind](Texture3D.md#bind)
- [unbind](Texture3D.md#unbind)
- [destroy](Texture3D.md#destroy)
- [setData](Texture3D.md#setdata)
- [setOptions](Texture3D.md#setoptions)
- [update](Texture3D.md#update)
- [removeStats](Texture3D.md#removestats)
- [toString](Texture3D.md#tostring)

## Constructors

### constructor

• **new Texture3D**(`renderer`, `options?`): [`Texture3D`](Texture3D.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) | Renderer 对象 |
| `options` | `Partial`\<[`Texture3DOptions`](../interfaces/Texture3DOptions.md)\> | 配置项 |

#### Returns

[`Texture3D`](Texture3D.md)

#### Overrides

[Texture](Texture.md).[constructor](Texture.md#constructor)

#### Defined in

[src/core/Texture3D.ts:94](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L94)

## Properties

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Texture](Texture.md).[renderer](Texture.md#renderer)

#### Defined in

[src/core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts#L7)

___

### id

• **id**: `string`

#### Inherited from

[Texture](Texture.md).[id](Texture.md#id)

#### Defined in

[src/core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L21)

___

### name

• **name**: `WithUndef`\<`string`\>

#### Inherited from

[Texture](Texture.md).[name](Texture.md#name)

#### Defined in

[src/core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L23)

___

### userData

• **userData**: `any`

#### Inherited from

[Texture](Texture.md).[userData](Texture.md#userdata)

#### Defined in

[src/core/Resource.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L25)

___

### byteLength

• **byteLength**: `number`

#### Inherited from

[Texture](Texture.md).[byteLength](Texture.md#bytelength)

#### Defined in

[src/core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L28)

___

### options

• **options**: `Partial`\<[`Texture3DOptions`](../interfaces/Texture3DOptions.md)\>

#### Inherited from

[Texture](Texture.md).[options](Texture.md#options)

#### Defined in

[src/core/Resource.ts:30](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L30)

___

### image

• **image**: `any`

纹理数据

#### Inherited from

[Texture](Texture.md).[image](Texture.md#image)

#### Defined in

[src/core/Texture.ts:156](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L156)

___

### width

• **width**: `number`

纹理宽度

#### Inherited from

[Texture](Texture.md).[width](Texture.md#width)

#### Defined in

[src/core/Texture.ts:161](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L161)

___

### height

• **height**: `number`

纹理高度

#### Inherited from

[Texture](Texture.md).[height](Texture.md#height)

#### Defined in

[src/core/Texture.ts:166](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L166)

___

### target

• **target**: `number`

`texImage2D` target

#### Inherited from

[Texture](Texture.md).[target](Texture.md#target)

#### Defined in

[src/core/Texture.ts:171](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L171)

___

### needsUpdate

• **needsUpdate**: `boolean` = `false`

设置纹理是否需要更新，一般我们会在纹理数据或者配置变更时将此配置项设置为 `true`
这样会在下一次渲染时应用对应的纹理数据和配置。

#### Overrides

[Texture](Texture.md).[needsUpdate](Texture.md#needsupdate)

#### Defined in

[src/core/Texture3D.ts:76](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L76)

___

### textureUnit

• **textureUnit**: `number` = `0`

设置纹理单位

#### Overrides

[Texture](Texture.md).[textureUnit](Texture.md#textureunit)

#### Defined in

[src/core/Texture3D.ts:81](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L81)

___

### depth

• **depth**: `number`

纹理深度

#### Defined in

[src/core/Texture3D.ts:86](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L86)

## Accessors

### rendererState

• `get` **rendererState**(): [`State`](State.md)

获取渲染状态

#### Returns

[`State`](State.md)

#### Inherited from

Texture.rendererState

#### Defined in

[src/core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts#L23)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Inherited from

Texture.handle

#### Defined in

[src/core/Resource.ts:47](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L47)

___

### gl

• `get` **gl**(): `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGL2RenderingContext`

#### Overrides

Texture.gl

#### Defined in

[src/core/Texture3D.ts:126](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L126)

## Methods

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

[src/core/Resource.ts:55](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L55)

___

### restoreHandle

▸ **restoreHandle**(): `void`

恢复为原有 `handle`

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[restoreHandle](Texture.md#restorehandle)

#### Defined in

[src/core/Resource.ts:63](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L63)

___

### delete

▸ **delete**(`«destructured»?`): [`Texture3D`](Texture3D.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `{}` |
| › `deleteChildren` | `undefined` \| `boolean` | `false` |

#### Returns

[`Texture3D`](Texture3D.md)

#### Inherited from

[Texture](Texture.md).[delete](Texture.md#delete)

#### Defined in

[src/core/Resource.ts:74](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L74)

___

### fromSrc

▸ **fromSrc**(`url`): `Promise`\<`unknown`\>

从 Url 设置纹理对象的数据，会默认标记为需要更新 `needsUpdate = true`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[Texture](Texture.md).[fromSrc](Texture.md#fromsrc)

#### Defined in

[src/core/Texture.ts:241](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L241)

___

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

[src/core/Texture.ts:458](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L458)

___

### unbind

▸ **unbind**(): `void`

解绑纹理

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[unbind](Texture.md#unbind)

#### Defined in

[src/core/Texture.ts:468](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L468)

___

### destroy

▸ **destroy**(): `void`

销毁纹理

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[destroy](Texture.md#destroy)

#### Defined in

[src/core/Texture.ts:477](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L477)

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

[src/core/Texture3D.ts:137](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L137)

___

### setOptions

▸ **setOptions**(`options`): `void`

设置纹理配置（默认进行合并）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Partial`\<[`Texture3DOptions`](../interfaces/Texture3DOptions.md)\> | 配置项 |

#### Returns

`void`

#### Overrides

[Texture](Texture.md).[setOptions](Texture.md#setoptions)

#### Defined in

[src/core/Texture3D.ts:149](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L149)

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

[src/core/Texture3D.ts:161](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L161)

___

### removeStats

▸ **removeStats**(): `void`

移除相关状态

#### Returns

`void`

#### Overrides

[Texture](Texture.md).[removeStats](Texture.md#removestats)

#### Defined in

[src/core/Texture3D.ts:341](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L341)

___

### toString

▸ **toString**(): `string`

获取字符串数据

#### Returns

`string`

#### Overrides

[Texture](Texture.md).[toString](Texture.md#tostring)

#### Defined in

[src/core/Texture3D.ts:350](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L350)
