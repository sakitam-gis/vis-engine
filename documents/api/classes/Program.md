[vis-engine - v1.0.0](../index.md) / Program

# Class: Program

## Hierarchy

- `default`<`ProgramOptions`\>

  ↳ **`Program`**

## Table of contents

### Constructors

- [constructor](Program.md#constructor)

### Properties

- [attributeOrder](Program.md#attributeorder)
- [byteLength](Program.md#bytelength)
- [id](Program.md#id)
- [name](Program.md#name)
- [options](Program.md#options)
- [renderer](Program.md#renderer)
- [uniforms](Program.md#uniforms)
- [userData](Program.md#userdata)

### Accessors

- [attributeLocations](Program.md#attributelocations)
- [fragmentShader](Program.md#fragmentshader)
- [gl](Program.md#gl)
- [handle](Program.md#handle)
- [rendererState](Program.md#rendererstate)
- [uniformLocations](Program.md#uniformlocations)
- [vertexShader](Program.md#vertexshader)

### Methods

- [applyState](Program.md#applystate)
- [bind](Program.md#bind)
- [createHandle](Program.md#createhandle)
- [delete](Program.md#delete)
- [deleteHandle](Program.md#deletehandle)
- [destroy](Program.md#destroy)
- [removeStats](Program.md#removestats)
- [setStates](Program.md#setstates)
- [setUniform](Program.md#setuniform)
- [toString](Program.md#tostring)
- [unbind](Program.md#unbind)
- [use](Program.md#use)

## Constructors

### constructor

• **new Program**(`renderer`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `any` |
| `options` | `Partial`<`ProgramOptions`\> |

#### Overrides

Resource&lt;ProgramOptions\&gt;.constructor

#### Defined in

[core/Program.ts:191](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;01a57c5#line&#x3D;191)

## Properties

### attributeOrder

• **attributeOrder**: `string`

#### Defined in

[core/Program.ts:177](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;01a57c5#line&#x3D;177)

___

### byteLength

• **byteLength**: `number`

#### Inherited from

Resource.byteLength

#### Defined in

[core/Resource.ts:26](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;01a57c5#line&#x3D;26)

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

• **options**: `Partial`<`IResourceOptions` & `ProgramOptions`\>

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

### uniforms

• **uniforms**: `any`

#### Defined in

[core/Program.ts:179](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;01a57c5#line&#x3D;179)

___

### userData

• **userData**: `any`

#### Inherited from

Resource.userData

#### Defined in

[core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;01a57c5#line&#x3D;23)

## Accessors

### attributeLocations

• `get` **attributeLocations**(): `Map`<`any`, `any`\>

#### Returns

`Map`<`any`, `any`\>

#### Defined in

[core/Program.ts:272](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;01a57c5#line&#x3D;272)

___

### fragmentShader

• `get` **fragmentShader**(): `FragmentShader`

获取 `FragmentShader` 对象

#### Returns

`FragmentShader`

#### Defined in

[core/Program.ts:286](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;01a57c5#line&#x3D;286)

___

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

### uniformLocations

• `get` **uniformLocations**(): `Map`<`any`, `any`\>

#### Returns

`Map`<`any`, `any`\>

#### Defined in

[core/Program.ts:268](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;01a57c5#line&#x3D;268)

___

### vertexShader

• `get` **vertexShader**(): `VertexShader`

获取 `VertexShader` 对象

#### Returns

`VertexShader`

#### Defined in

[core/Program.ts:279](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;01a57c5#line&#x3D;279)

## Methods

### applyState

▸ **applyState**(): `void`

#### Returns

`void`

#### Defined in

[core/Program.ts:371](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;01a57c5#line&#x3D;371)

___

### bind

▸ **bind**(): `void`

使用此 Program

#### Returns

`void`

#### Overrides

Resource.bind

#### Defined in

[core/Program.ts:389](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;01a57c5#line&#x3D;389)

___

### createHandle

▸ **createHandle**(): ``null`` \| `WebGLProgram`

#### Returns

``null`` \| `WebGLProgram`

#### Overrides

Resource.createHandle

#### Defined in

[core/Program.ts:400](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;01a57c5#line&#x3D;400)

___

### delete

▸ **delete**(`«destructured»?`): [`Program`](Program.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `deleteChildren` | `undefined` \| `boolean` |

#### Returns

[`Program`](Program.md)

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

[core/Program.ts:404](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;01a57c5#line&#x3D;404)

___

### destroy

▸ **destroy**(): `void`

销毁此`Program`

#### Returns

`void`

#### Overrides

Resource.destroy

#### Defined in

[core/Program.ts:454](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;01a57c5#line&#x3D;454)

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

### setStates

▸ **setStates**(`states`, `merge?`): `void`

设置 Program 的 render state

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `states` | `Partial`<`IProgramRenderState`\> | `undefined` |  |
| `merge` | `boolean` | `true` | 是否使用合并模式，如果为 `false` 则直接替换 |

#### Returns

`void`

#### Defined in

[core/Program.ts:352](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;01a57c5#line&#x3D;352)

___

### setUniform

▸ **setUniform**(`key`, `value`): `void`

设置对应的 Uniform 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[core/Program.ts:380](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;01a57c5#line&#x3D;380)

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

取消使用此 `Program`

#### Returns

`void`

#### Overrides

Resource.unbind

#### Defined in

[core/Program.ts:396](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;01a57c5#line&#x3D;396)

___

### use

▸ **use**(): `void`

#### Returns

`void`

#### Defined in

[core/Program.ts:293](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;01a57c5#line&#x3D;293)
