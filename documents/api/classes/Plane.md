[vis-engine - v1.0.0](../index.md) / Plane

# Class: Plane

平面几何体

代码示例：
```ts
const plane - new Plane(renderer);

const plane = new Mesh(renderer, { geometry: planeGeometry, program });
scene.add(plane);
```

## Hierarchy

- [`Geometry`](Geometry.md)

  ↳ **`Plane`**

## Table of contents

### Constructors

- [constructor](Plane.md#constructor)

### Properties

- [drawMode](Plane.md#drawmode)
- [drawRange](Plane.md#drawrange)
- [instancedCount](Plane.md#instancedcount)
- [isInstanced](Plane.md#isinstanced)
- [renderer](Plane.md#renderer)

### Accessors

- [attributes](Plane.md#attributes)
- [bounds](Plane.md#bounds)
- [gl](Plane.md#gl)
- [id](Plane.md#id)
- [index](Plane.md#index)
- [rendererState](Plane.md#rendererstate)

### Methods

- [addAttribute](Plane.md#addattribute)
- [bindAttributes](Plane.md#bindattributes)
- [clone](Plane.md#clone)
- [computeBoundingBox](Plane.md#computeboundingbox)
- [computeBoundingSphere](Plane.md#computeboundingsphere)
- [createVAO](Plane.md#createvao)
- [destroy](Plane.md#destroy)
- [draw](Plane.md#draw)
- [getAttribute](Plane.md#getattribute)
- [removeAttribute](Plane.md#removeattribute)
- [setAttributeData](Plane.md#setattributedata)
- [setColors](Plane.md#setcolors)
- [setDrawRange](Plane.md#setdrawrange)
- [setIndex](Plane.md#setindex)
- [setInstancedCount](Plane.md#setinstancedcount)
- [setNormals](Plane.md#setnormals)
- [setUVs](Plane.md#setuvs)
- [setVertices](Plane.md#setvertices)
- [updateAttribute](Plane.md#updateattribute)

## Constructors

### constructor

• **new Plane**(`renderer`, `«destructured»?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) | 渲染器 |
| `«destructured»` | `Partial`<[`PlaneOptions`](../interfaces/PlaneOptions.md)\> | - |

#### Overrides

[Geometry](Geometry.md).[constructor](Geometry.md#constructor)

#### Defined in

[geometries/Plane.ts:125](https://github.com/sakitam-gis/vis-engine/blob/master/src/geometries/Plane.ts?at&#x3D;01a57c5#line&#x3D;125)

## Properties

### drawMode

• **drawMode**: `number`

#### Inherited from

[Geometry](Geometry.md).[drawMode](Geometry.md#drawmode)

#### Defined in

[core/Geometry.ts:33](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;33)

___

### drawRange

• **drawRange**: `any`

#### Inherited from

[Geometry](Geometry.md).[drawRange](Geometry.md#drawrange)

#### Defined in

[core/Geometry.ts:27](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;27)

___

### instancedCount

• **instancedCount**: `number`

#### Inherited from

[Geometry](Geometry.md).[instancedCount](Geometry.md#instancedcount)

#### Defined in

[core/Geometry.ts:29](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;29)

___

### isInstanced

• **isInstanced**: `boolean`

#### Inherited from

[Geometry](Geometry.md).[isInstanced](Geometry.md#isinstanced)

#### Defined in

[core/Geometry.ts:31](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;31)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Geometry](Geometry.md).[renderer](Geometry.md#renderer)

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;01a57c5#line&#x3D;7)

## Accessors

### attributes

• `get` **attributes**(): `Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

#### Returns

`Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

#### Inherited from

Geometry.attributes

#### Defined in

[core/Geometry.ts:80](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;80)

___

### bounds

• `get` **bounds**(): `any`

#### Returns

`any`

#### Inherited from

Geometry.bounds

#### Defined in

[core/Geometry.ts:88](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;88)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Geometry.gl

#### Defined in

[core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;01a57c5#line&#x3D;16)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

Geometry.id

#### Defined in

[core/Geometry.ts:76](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;76)

___

### index

• `get` **index**(): `undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Returns

`undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Inherited from

Geometry.index

#### Defined in

[core/Geometry.ts:84](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;84)

___

### rendererState

• `get` **rendererState**(): `any`

获取渲染状态

#### Returns

`any`

#### Inherited from

Geometry.rendererState

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

#### Inherited from

[Geometry](Geometry.md).[addAttribute](Geometry.md#addattribute)

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

#### Inherited from

[Geometry](Geometry.md).[bindAttributes](Geometry.md#bindattributes)

#### Defined in

[core/Geometry.ts:217](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;217)

___

### clone

▸ **clone**(): [`Geometry`](Geometry.md)

#### Returns

[`Geometry`](Geometry.md)

#### Inherited from

[Geometry](Geometry.md).[clone](Geometry.md#clone)

#### Defined in

[core/Geometry.ts:346](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;346)

___

### computeBoundingBox

▸ **computeBoundingBox**(): `any`

计算当前几何体的的边界矩形

#### Returns

`any`

#### Inherited from

[Geometry](Geometry.md).[computeBoundingBox](Geometry.md#computeboundingbox)

#### Defined in

[core/Geometry.ts:255](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;255)

___

### computeBoundingSphere

▸ **computeBoundingSphere**(): `void`

计算当前几何体的的边界球形

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[computeBoundingSphere](Geometry.md#computeboundingsphere)

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

#### Inherited from

[Geometry](Geometry.md).[createVAO](Geometry.md#createvao)

#### Defined in

[core/Geometry.ts:209](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;209)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[destroy](Geometry.md#destroy)

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

#### Inherited from

[Geometry](Geometry.md).[draw](Geometry.md#draw)

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

#### Inherited from

[Geometry](Geometry.md).[getAttribute](Geometry.md#getattribute)

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

#### Inherited from

[Geometry](Geometry.md).[removeAttribute](Geometry.md#removeattribute)

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

#### Inherited from

[Geometry](Geometry.md).[setAttributeData](Geometry.md#setattributedata)

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

#### Inherited from

[Geometry](Geometry.md).[setColors](Geometry.md#setcolors)

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

#### Inherited from

[Geometry](Geometry.md).[setDrawRange](Geometry.md#setdrawrange)

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

#### Inherited from

[Geometry](Geometry.md).[setIndex](Geometry.md#setindex)

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

#### Inherited from

[Geometry](Geometry.md).[setInstancedCount](Geometry.md#setinstancedcount)

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

#### Inherited from

[Geometry](Geometry.md).[setNormals](Geometry.md#setnormals)

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

#### Inherited from

[Geometry](Geometry.md).[setUVs](Geometry.md#setuvs)

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

#### Inherited from

[Geometry](Geometry.md).[setVertices](Geometry.md#setvertices)

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

#### Inherited from

[Geometry](Geometry.md).[updateAttribute](Geometry.md#updateattribute)

#### Defined in

[core/Geometry.ts:130](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;01a57c5#line&#x3D;130)
