[vis-engine - v1.0.0](../index.md) / RenderBuffer

# Class: RenderBuffer

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

## Table of contents

### Constructors

- [constructor](RenderBuffer.md#constructor)

### Properties

- [byteLength](RenderBuffer.md#bytelength)
- [height](RenderBuffer.md#height)
- [id](RenderBuffer.md#id)
- [name](RenderBuffer.md#name)
- [options](RenderBuffer.md#options)
- [renderer](RenderBuffer.md#renderer)
- [userData](RenderBuffer.md#userdata)
- [width](RenderBuffer.md#width)

### Accessors

- [gl](RenderBuffer.md#gl)
- [handle](RenderBuffer.md#handle)
- [rendererState](RenderBuffer.md#rendererstate)

### Methods

- [bind](RenderBuffer.md#bind)
- [createHandle](RenderBuffer.md#createhandle)
- [delete](RenderBuffer.md#delete)
- [deleteHandle](RenderBuffer.md#deletehandle)
- [destroy](RenderBuffer.md#destroy)
- [removeStats](RenderBuffer.md#removestats)
- [resize](RenderBuffer.md#resize)
- [toString](RenderBuffer.md#tostring)
- [unbind](RenderBuffer.md#unbind)

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

[core/RenderBuffer.ts:50](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;92e1850#line&#x3D;50)

## Properties

### byteLength

• **byteLength**: `number`

#### Inherited from

[Resource](Resource.md).[byteLength](Resource.md#bytelength)

#### Defined in

[core/Resource.ts:26](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;92e1850#line&#x3D;26)

___

### height

• **height**: `number`

渲染缓冲区高度

#### Defined in

[core/RenderBuffer.ts:46](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;92e1850#line&#x3D;46)

___

### id

• **id**: `string`

#### Inherited from

[Resource](Resource.md).[id](Resource.md#id)

#### Defined in

[core/Resource.ts:19](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;92e1850#line&#x3D;19)

___

### name

• **name**: `WithUndef`<`string`\>

#### Inherited from

[Resource](Resource.md).[name](Resource.md#name)

#### Defined in

[core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;92e1850#line&#x3D;21)

___

### options

• **options**: `Partial`<[`ResourceOptions`](../interfaces/ResourceOptions.md) & [`RenderBufferOptions`](../interfaces/RenderBufferOptions.md)\>

#### Inherited from

[Resource](Resource.md).[options](Resource.md#options)

#### Defined in

[core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;92e1850#line&#x3D;28)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Resource](Resource.md).[renderer](Resource.md#renderer)

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;92e1850#line&#x3D;7)

___

### userData

• **userData**: `any`

#### Inherited from

[Resource](Resource.md).[userData](Resource.md#userdata)

#### Defined in

[core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;92e1850#line&#x3D;23)

___

### width

• **width**: `number`

渲染缓冲区宽度

#### Defined in

[core/RenderBuffer.ts:41](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;92e1850#line&#x3D;41)

## Accessors

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Resource.gl

#### Defined in

[core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;92e1850#line&#x3D;16)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Inherited from

Resource.handle

#### Defined in

[core/Resource.ts:45](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;92e1850#line&#x3D;45)

___

### rendererState

• `get` **rendererState**(): `any`

获取渲染状态

#### Returns

`any`

#### Inherited from

Resource.rendererState

#### Defined in

[core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;92e1850#line&#x3D;23)

## Methods

### bind

▸ **bind**(): `void`

绑定渲染缓冲

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[bind](Resource.md#bind)

#### Defined in

[core/RenderBuffer.ts:86](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;92e1850#line&#x3D;86)

___

### createHandle

▸ **createHandle**(): ``null`` \| `WebGLRenderbuffer`

创建 `RBO`

#### Returns

``null`` \| `WebGLRenderbuffer`

#### Overrides

[Resource](Resource.md).[createHandle](Resource.md#createhandle)

#### Defined in

[core/RenderBuffer.ts:108](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;92e1850#line&#x3D;108)

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

[core/Resource.ts:56](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;92e1850#line&#x3D;56)

___

### deleteHandle

▸ **deleteHandle**(): `void`

移除 `RBO`

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[deleteHandle](Resource.md#deletehandle)

#### Defined in

[core/RenderBuffer.ts:115](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;92e1850#line&#x3D;115)

___

### destroy

▸ **destroy**(): `void`

销毁此渲染对象

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[destroy](Resource.md#destroy)

#### Defined in

[core/RenderBuffer.ts:100](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;92e1850#line&#x3D;100)

___

### removeStats

▸ **removeStats**(): `void`

#### Returns

`void`

#### Inherited from

[Resource](Resource.md).[removeStats](Resource.md#removestats)

#### Defined in

[core/Resource.ts:81](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;92e1850#line&#x3D;81)

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

[core/RenderBuffer.ts:74](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;92e1850#line&#x3D;74)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Resource](Resource.md).[toString](Resource.md#tostring)

#### Defined in

[core/Resource.ts:93](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;92e1850#line&#x3D;93)

___

### unbind

▸ **unbind**(): `void`

解绑渲染缓冲

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[unbind](Resource.md#unbind)

#### Defined in

[core/RenderBuffer.ts:93](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;92e1850#line&#x3D;93)
