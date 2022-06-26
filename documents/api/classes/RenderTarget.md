[vis-engine - v1.0.0](../index.md) / RenderTarget

# Class: RenderTarget

## Hierarchy

- `default`<`RenderTargetOptions`\>

  ↳ **`RenderTarget`**

## Table of contents

### Constructors

- [constructor](RenderTarget.md#constructor)

### Properties

- [byteLength](RenderTarget.md#bytelength)
- [clearColors](RenderTarget.md#clearcolors)
- [clearDepth](RenderTarget.md#cleardepth)
- [clearStencil](RenderTarget.md#clearstencil)
- [depth](RenderTarget.md#depth)
- [drawBuffers](RenderTarget.md#drawbuffers)
- [drawBuffersChanged](RenderTarget.md#drawbufferschanged)
- [height](RenderTarget.md#height)
- [id](RenderTarget.md#id)
- [name](RenderTarget.md#name)
- [options](RenderTarget.md#options)
- [renderer](RenderTarget.md#renderer)
- [userData](RenderTarget.md#userdata)
- [viewport](RenderTarget.md#viewport)
- [width](RenderTarget.md#width)

### Accessors

- [gl](RenderTarget.md#gl)
- [handle](RenderTarget.md#handle)
- [rendererState](RenderTarget.md#rendererstate)
- [texture](RenderTarget.md#texture)

### Methods

- [bind](RenderTarget.md#bind)
- [clear](RenderTarget.md#clear)
- [create](RenderTarget.md#create)
- [createHandle](RenderTarget.md#createhandle)
- [delete](RenderTarget.md#delete)
- [deleteHandle](RenderTarget.md#deletehandle)
- [destroy](RenderTarget.md#destroy)
- [getTexture](RenderTarget.md#gettexture)
- [removeStats](RenderTarget.md#removestats)
- [resize](RenderTarget.md#resize)
- [toString](RenderTarget.md#tostring)
- [unbind](RenderTarget.md#unbind)

## Constructors

### constructor

• **new RenderTarget**(`renderer`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) |
| `options` | `Partial`<`RenderTargetOptions`\> |

#### Overrides

Resource&lt;RenderTargetOptions\&gt;.constructor

#### Defined in

[core/RenderTarget.ts:45](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;45)

## Properties

### byteLength

• **byteLength**: `number`

#### Inherited from

Resource.byteLength

#### Defined in

[core/Resource.ts:26](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;01a57c5#line&#x3D;26)

___

### clearColors

• **clearColors**: [`number`, `number`, `number`, `number`][]

#### Defined in

[core/RenderTarget.ts:39](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;39)

___

### clearDepth

• **clearDepth**: `number`

#### Defined in

[core/RenderTarget.ts:41](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;41)

___

### clearStencil

• **clearStencil**: `number`

#### Defined in

[core/RenderTarget.ts:43](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;43)

___

### depth

• **depth**: `boolean`

#### Defined in

[core/RenderTarget.ts:27](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;27)

___

### drawBuffers

• **drawBuffers**: `number`[]

#### Defined in

[core/RenderTarget.ts:37](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;37)

___

### drawBuffersChanged

• **drawBuffersChanged**: `boolean`

#### Defined in

[core/RenderTarget.ts:35](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;35)

___

### height

• **height**: `number`

#### Defined in

[core/RenderTarget.ts:31](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;31)

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

• **options**: `Partial`<`IResourceOptions` & `RenderTargetOptions`\>

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

### viewport

• **viewport**: [`Vector4`](Vector4.md)

#### Defined in

[core/RenderTarget.ts:33](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;33)

___

### width

• **width**: `number`

#### Defined in

[core/RenderTarget.ts:29](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;29)

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

___

### texture

• `get` **texture**(): `any`

#### Returns

`any`

#### Defined in

[core/RenderTarget.ts:133](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;133)

## Methods

### bind

▸ **bind**(`fbo?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fbo` | `number` |

#### Returns

`void`

#### Overrides

Resource.bind

#### Defined in

[core/RenderTarget.ts:215](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;215)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[core/RenderTarget.ts:170](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;170)

___

### create

▸ **create**(`attachments`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachments` | `any` |

#### Returns

`any`

#### Defined in

[core/RenderTarget.ts:137](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;137)

___

### createHandle

▸ **createHandle**(): ``null`` \| `WebGLFramebuffer`

#### Returns

``null`` \| `WebGLFramebuffer`

#### Overrides

Resource.createHandle

#### Defined in

[core/RenderTarget.ts:233](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;233)

___

### delete

▸ **delete**(`«destructured»?`): [`RenderTarget`](RenderTarget.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `deleteChildren` | `undefined` \| `boolean` |

#### Returns

[`RenderTarget`](RenderTarget.md)

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

[core/RenderTarget.ts:237](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;237)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

Resource.destroy

#### Defined in

[core/RenderTarget.ts:223](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;223)

___

### getTexture

▸ **getTexture**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`any`

#### Defined in

[core/RenderTarget.ts:194](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;194)

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

[core/RenderTarget.ts:198](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;198)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

Resource.toString

#### Defined in

[core/RenderTarget.ts:241](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;241)

___

### unbind

▸ **unbind**(`fbo?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fbo` | `number` |

#### Returns

`void`

#### Overrides

Resource.unbind

#### Defined in

[core/RenderTarget.ts:219](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;01a57c5#line&#x3D;219)
