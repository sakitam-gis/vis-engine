[vis-engine - v1.0.0](../index.md) / Geometry

# Class: Geometry

几何体对象

## Hierarchy

- `default`

  ↳ **`Geometry`**

  ↳↳ [`Plane`](Plane.md)

## Table of contents

### Constructors

- [constructor](Geometry.md#constructor)

### Properties

- [drawMode](Geometry.md#drawmode)
- [drawRange](Geometry.md#drawrange)
- [instancedCount](Geometry.md#instancedcount)
- [isInstanced](Geometry.md#isinstanced)
- [renderer](Geometry.md#renderer)

### Accessors

- [attributes](Geometry.md#attributes)
- [bounds](Geometry.md#bounds)
- [gl](Geometry.md#gl)
- [id](Geometry.md#id)
- [index](Geometry.md#index)
- [rendererState](Geometry.md#rendererstate)

### Methods

- [addAttribute](Geometry.md#addattribute)
- [bindAttributes](Geometry.md#bindattributes)
- [clone](Geometry.md#clone)
- [computeBoundingBox](Geometry.md#computeboundingbox)
- [computeBoundingSphere](Geometry.md#computeboundingsphere)
- [createVAO](Geometry.md#createvao)
- [destroy](Geometry.md#destroy)
- [draw](Geometry.md#draw)
- [getAttribute](Geometry.md#getattribute)
- [removeAttribute](Geometry.md#removeattribute)
- [setAttributeData](Geometry.md#setattributedata)
- [setColors](Geometry.md#setcolors)
- [setDrawRange](Geometry.md#setdrawrange)
- [setIndex](Geometry.md#setindex)
- [setInstancedCount](Geometry.md#setinstancedcount)
- [setNormals](Geometry.md#setnormals)
- [setUVs](Geometry.md#setuvs)
- [setVertices](Geometry.md#setvertices)
- [updateAttribute](Geometry.md#updateattribute)

## Constructors

### constructor

• **new Geometry**(`renderer`, `attributes?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) | 渲染器 |
| `attributes` | [`Attributes`](../interfaces/Attributes.md) | 顶点数据 |

#### Overrides

Base.constructor

#### Defined in

[core/Geometry.ts:39](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;39)

## Properties

### drawMode

• **drawMode**: `number`

#### Defined in

[core/Geometry.ts:33](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;33)

___

### drawRange

• **drawRange**: `any`

#### Defined in

[core/Geometry.ts:27](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;27)

___

### instancedCount

• **instancedCount**: `number`

#### Defined in

[core/Geometry.ts:29](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;29)

___

### isInstanced

• **isInstanced**: `boolean`

#### Defined in

[core/Geometry.ts:31](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;31)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

Base.renderer

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;01a57c5#line&#x3D;7)

## Accessors

### attributes

• `get` **attributes**(): `Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

#### Returns

`Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

#### Defined in

[core/Geometry.ts:80](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;80)

___

### bounds

• `get` **bounds**(): `any`

#### Returns

`any`

#### Defined in

[core/Geometry.ts:88](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;88)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Base.gl

#### Defined in

[core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;01a57c5#line&#x3D;16)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[core/Geometry.ts:76](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;76)

___

### index

• `get` **index**(): `undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Returns

`undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Defined in

[core/Geometry.ts:84](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;84)

___

### rendererState

• `get` **rendererState**(): `any`

获取渲染状态

#### Returns

`any`

#### Inherited from

Base.rendererState

#### Defined in

[core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;01a57c5#line&#x3D;23)

## Methods

### addAttribute

▸ **addAttribute**(`name`, `attribute`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `attribute` | [`BufferAttribute`](BufferAttribute.md) |

#### Returns

`void`

#### Defined in

[core/Geometry.ts:93](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;93)

___

### bindAttributes

▸ **bindAttributes**(`program`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`Program`](Program.md) |

#### Returns

`void`

#### Defined in

[core/Geometry.ts:217](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;217)

___

### clone

▸ **clone**(): [`Geometry`](Geometry.md)

#### Returns

[`Geometry`](Geometry.md)

#### Defined in

[core/Geometry.ts:346](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;346)

___

### computeBoundingBox

▸ **computeBoundingBox**(): `any`

计算当前几何体的的边界矩形

#### Returns

`any`

#### Defined in

[core/Geometry.ts:255](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;255)

___

### computeBoundingSphere

▸ **computeBoundingSphere**(): `void`

计算当前几何体的的边界球形

#### Returns

`void`

#### Defined in

[core/Geometry.ts:293](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;293)

___

### createVAO

▸ **createVAO**(`program`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`Program`](Program.md) |

#### Returns

`void`

#### Defined in

[core/Geometry.ts:209](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;209)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[core/Geometry.ts:356](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;356)

___

### draw

▸ **draw**(`program`, `drawMode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `any` |
| `drawMode` | `number` |

#### Returns

`void`

#### Defined in

[core/Geometry.ts:312](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;312)

___

### getAttribute

▸ **getAttribute**(`name`): `undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Returns

`undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Defined in

[core/Geometry.ts:118](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;118)

___

### removeAttribute

▸ **removeAttribute**(`attribute`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `any` |

#### Returns

`void`

#### Defined in

[core/Geometry.ts:139](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;139)

___

### setAttributeData

▸ **setAttributeData**(`name`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[core/Geometry.ts:122](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;122)

___

### setColors

▸ **setColors**(`colors`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | `any` |

#### Returns

`void`

#### Defined in

[core/Geometry.ts:185](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;185)

___

### setDrawRange

▸ **setDrawRange**(`start`, `count`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `count` | `number` |

#### Returns

`void`

#### Defined in

[core/Geometry.ts:200](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;200)

___

### setIndex

▸ **setIndex**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `any` |

#### Returns

`void`

#### Defined in

[core/Geometry.ts:143](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;143)

___

### setInstancedCount

▸ **setInstancedCount**(`count`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`void`

#### Defined in

[core/Geometry.ts:205](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;205)

___

### setNormals

▸ **setNormals**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[core/Geometry.ts:171](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;171)

___

### setUVs

▸ **setUVs**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[core/Geometry.ts:178](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;178)

___

### setVertices

▸ **setVertices**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[core/Geometry.ts:158](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;158)

___

### updateAttribute

▸ **updateAttribute**(`attribute`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `any` |

#### Returns

`void`

#### Defined in

[core/Geometry.ts:130](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;130)
