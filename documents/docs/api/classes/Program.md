---
id: "Program"
title: "Class: Program"
sidebar_label: "Program"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Resource`](Resource.md)<[`ProgramOptions`](../interfaces/ProgramOptions.md)\>

  ↳ **`Program`**

## Constructors

### constructor

• **new Program**(`renderer`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `any` |
| `options` | `Partial`<[`ProgramOptions`](../interfaces/ProgramOptions.md)\> |

#### Overrides

[Resource](Resource.md).[constructor](Resource.md#constructor)

#### Defined in

[core/Program.ts:191](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;8558d24#line&#x3D;191)

## Properties

### attributeOrder

• **attributeOrder**: `string`

#### Defined in

[core/Program.ts:177](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;8558d24#line&#x3D;177)

___

### byteLength

• **byteLength**: `number`

#### Inherited from

[Resource](Resource.md).[byteLength](Resource.md#bytelength)

#### Defined in

[core/Resource.ts:26](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;26)

___

### id

• **id**: `string`

#### Inherited from

[Resource](Resource.md).[id](Resource.md#id)

#### Defined in

[core/Resource.ts:19](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;19)

___

### name

• **name**: `WithUndef`<`string`\>

#### Inherited from

[Resource](Resource.md).[name](Resource.md#name)

#### Defined in

[core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;21)

___

### options

• **options**: `Partial`<[`ResourceOptions`](../interfaces/ResourceOptions.md) & [`ProgramOptions`](../interfaces/ProgramOptions.md)\>

#### Inherited from

[Resource](Resource.md).[options](Resource.md#options)

#### Defined in

[core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;28)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Resource](Resource.md).[renderer](Resource.md#renderer)

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;8558d24#line&#x3D;7)

___

### uniforms

• **uniforms**: `any`

#### Defined in

[core/Program.ts:179](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;8558d24#line&#x3D;179)

___

### userData

• **userData**: `any`

#### Inherited from

[Resource](Resource.md).[userData](Resource.md#userdata)

#### Defined in

[core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;23)

## Accessors

### attributeLocations

• `get` **attributeLocations**(): `Map`<`any`, `any`\>

#### Returns

`Map`<`any`, `any`\>

#### Defined in

[core/Program.ts:272](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;8558d24#line&#x3D;272)

___

### fragmentShader

• `get` **fragmentShader**(): `FragmentShader`

获取 `FragmentShader` 对象

#### Returns

`FragmentShader`

#### Defined in

[core/Program.ts:286](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;8558d24#line&#x3D;286)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Resource.gl

#### Defined in

[core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;8558d24#line&#x3D;16)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Inherited from

Resource.handle

#### Defined in

[core/Resource.ts:45](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;45)

___

### rendererState

• `get` **rendererState**(): `any`

获取渲染状态

#### Returns

`any`

#### Inherited from

Resource.rendererState

#### Defined in

[core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;8558d24#line&#x3D;23)

___

### uniformLocations

• `get` **uniformLocations**(): `Map`<`any`, `any`\>

#### Returns

`Map`<`any`, `any`\>

#### Defined in

[core/Program.ts:268](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;8558d24#line&#x3D;268)

___

### vertexShader

• `get` **vertexShader**(): `VertexShader`

获取 `VertexShader` 对象

#### Returns

`VertexShader`

#### Defined in

[core/Program.ts:279](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;8558d24#line&#x3D;279)

## Methods

### applyState

▸ **applyState**(): `void`

#### Returns

`void`

#### Defined in

[core/Program.ts:371](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;8558d24#line&#x3D;371)

___

### bind

▸ **bind**(): `void`

使用此 Program

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[bind](Resource.md#bind)

#### Defined in

[core/Program.ts:389](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;8558d24#line&#x3D;389)

___

### createHandle

▸ **createHandle**(): ``null`` \| `WebGLProgram`

#### Returns

``null`` \| `WebGLProgram`

#### Overrides

[Resource](Resource.md).[createHandle](Resource.md#createhandle)

#### Defined in

[core/Program.ts:400](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;8558d24#line&#x3D;400)

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

[Resource](Resource.md).[delete](Resource.md#delete)

#### Defined in

[core/Resource.ts:56](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;56)

___

### deleteHandle

▸ **deleteHandle**(): `void`

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[deleteHandle](Resource.md#deletehandle)

#### Defined in

[core/Program.ts:404](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;8558d24#line&#x3D;404)

___

### destroy

▸ **destroy**(): `void`

销毁此`Program`

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[destroy](Resource.md#destroy)

#### Defined in

[core/Program.ts:454](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;8558d24#line&#x3D;454)

___

### removeStats

▸ **removeStats**(): `void`

#### Returns

`void`

#### Inherited from

[Resource](Resource.md).[removeStats](Resource.md#removestats)

#### Defined in

[core/Resource.ts:81](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;81)

___

### setStates

▸ **setStates**(`states`, `merge?`): `void`

设置 Program 的 render state

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `states` | `Partial`<[`ProgramRenderState`](../interfaces/ProgramRenderState.md)\> | `undefined` |  |
| `merge` | `boolean` | `true` | 是否使用合并模式，如果为 `false` 则直接替换 |

#### Returns

`void`

#### Defined in

[core/Program.ts:352](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;8558d24#line&#x3D;352)

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

[core/Program.ts:380](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;8558d24#line&#x3D;380)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Resource](Resource.md).[toString](Resource.md#tostring)

#### Defined in

[core/Resource.ts:93](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts?at&#x3D;8558d24#line&#x3D;93)

___

### unbind

▸ **unbind**(): `void`

取消使用此 `Program`

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[unbind](Resource.md#unbind)

#### Defined in

[core/Program.ts:396](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;8558d24#line&#x3D;396)

___

### use

▸ **use**(): `void`

#### Returns

`void`

#### Defined in

[core/Program.ts:293](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;8558d24#line&#x3D;293)
