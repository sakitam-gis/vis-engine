[vis-engine - v1.0.0](../index.md) / RenderBuffer

# Class: RenderBuffer

## Hierarchy

- `default`<`RenderBufferOptions`\>

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
| `options` | `RenderBufferOptions` |

#### Overrides

Resource&lt;RenderBufferOptions\&gt;.constructor

#### Defined in

[core/RenderBuffer.ts:18](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;01a57c5#line&#x3D;18)

## Properties

### byteLength

• **byteLength**: `number`

#### Inherited from

Resource.byteLength

#### Defined in

[core/Resource.ts:26](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;01a57c5#line&#x3D;26)

___

### height

• **height**: `number`

#### Defined in

[core/RenderBuffer.ts:14](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;01a57c5#line&#x3D;14)

___

### id

• **id**: `string`

#### Inherited from

Resource.id

#### Defined in

[core/Resource.ts:19](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;01a57c5#line&#x3D;19)

___

### name

• **name**: `WithUndef`<`string`\>

#### Inherited from

Resource.name

#### Defined in

[core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;01a57c5#line&#x3D;21)

___

### options

• **options**: `Partial`<`IResourceOptions` & `RenderBufferOptions`\>

#### Inherited from

Resource.options

#### Defined in

[core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;01a57c5#line&#x3D;28)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

Resource.renderer

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;01a57c5#line&#x3D;7)

___

### userData

• **userData**: `any`

#### Inherited from

Resource.userData

#### Defined in

[core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;01a57c5#line&#x3D;23)

___

### width

• **width**: `number`

#### Defined in

[core/RenderBuffer.ts:12](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;01a57c5#line&#x3D;12)

## Accessors

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Resource.gl

#### Defined in

[core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;01a57c5#line&#x3D;16)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Inherited from

Resource.handle

#### Defined in

[core/Resource.ts:45](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;01a57c5#line&#x3D;45)

___

### rendererState

• `get` **rendererState**(): `any`

获取渲染状态

#### Returns

`any`

#### Inherited from

Resource.rendererState

#### Defined in

[core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;01a57c5#line&#x3D;23)

## Methods

### bind

▸ **bind**(): `void`

#### Returns

`void`

#### Overrides

Resource.bind

#### Defined in

[core/RenderBuffer.ts:44](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;01a57c5#line&#x3D;44)

___

### createHandle

▸ **createHandle**(): ``null`` \| `WebGLRenderbuffer`

#### Returns

``null`` \| `WebGLRenderbuffer`

#### Overrides

Resource.createHandle

#### Defined in

[core/RenderBuffer.ts:57](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;01a57c5#line&#x3D;57)

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

Resource.delete

#### Defined in

[core/Resource.ts:56](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;01a57c5#line&#x3D;56)

___

### deleteHandle

▸ **deleteHandle**(): `void`

#### Returns

`void`

#### Overrides

Resource.deleteHandle

#### Defined in

[core/RenderBuffer.ts:61](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;01a57c5#line&#x3D;61)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

Resource.destroy

#### Defined in

[core/RenderBuffer.ts:52](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;01a57c5#line&#x3D;52)

___

### removeStats

▸ **removeStats**(): `void`

#### Returns

`void`

#### Inherited from

Resource.removeStats

#### Defined in

[core/Resource.ts:81](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;01a57c5#line&#x3D;81)

___

### resize

▸ **resize**(`width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `any` |
| `height` | `any` |

#### Returns

`void`

#### Defined in

[core/RenderBuffer.ts:37](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;01a57c5#line&#x3D;37)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

Resource.toString

#### Defined in

[core/Resource.ts:93](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;01a57c5#line&#x3D;93)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Overrides

Resource.unbind

#### Defined in

[core/RenderBuffer.ts:48](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderBuffer.ts?at&#x3D;01a57c5#line&#x3D;48)
