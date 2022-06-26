---
id: "Plane"
title: "Class: Plane"
sidebar_label: "Plane"
sidebar_position: 0
custom_edit_url: null
---

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

[geometries/Plane.ts:122](https://github.com/sakitam-gis/vis-engine/blob/master/src/geometries/Plane.ts?at&#x3D;8558d24#line&#x3D;122)

## Properties

### drawMode

• **drawMode**: `number`

#### Inherited from

[Geometry](Geometry.md).[drawMode](Geometry.md#drawmode)

#### Defined in

[core/Geometry.ts:33](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;33)

___

### drawRange

• **drawRange**: `any`

#### Inherited from

[Geometry](Geometry.md).[drawRange](Geometry.md#drawrange)

#### Defined in

[core/Geometry.ts:27](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;27)

___

### instancedCount

• **instancedCount**: `number`

#### Inherited from

[Geometry](Geometry.md).[instancedCount](Geometry.md#instancedcount)

#### Defined in

[core/Geometry.ts:29](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;29)

___

### isInstanced

• **isInstanced**: `boolean`

#### Inherited from

[Geometry](Geometry.md).[isInstanced](Geometry.md#isinstanced)

#### Defined in

[core/Geometry.ts:31](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;31)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Geometry](Geometry.md).[renderer](Geometry.md#renderer)

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;8558d24#line&#x3D;7)

## Accessors

### attributes

• `get` **attributes**(): `Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

#### Returns

`Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

#### Inherited from

Geometry.attributes

#### Defined in

[core/Geometry.ts:80](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;80)

___

### bounds

• `get` **bounds**(): `any`

#### Returns

`any`

#### Inherited from

Geometry.bounds

#### Defined in

[core/Geometry.ts:88](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;88)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Geometry.gl

#### Defined in

[core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;8558d24#line&#x3D;16)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

Geometry.id

#### Defined in

[core/Geometry.ts:76](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;76)

___

### index

• `get` **index**(): `undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Returns

`undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Inherited from

Geometry.index

#### Defined in

[core/Geometry.ts:84](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;84)

___

### rendererState

• `get` **rendererState**(): `any`

获取渲染状态

#### Returns

`any`

#### Inherited from

Geometry.rendererState

#### Defined in

[core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;8558d24#line&#x3D;23)

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

[core/Geometry.ts:93](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;93)

___

### bindAttributes

▸ **bindAttributes**(`program`): `void`

绑定顶点数据
https://devdocs.io/dom/webgl2renderingcontext/vertexattribipointer

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`Program`](Program.md) |

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[bindAttributes](Geometry.md#bindattributes)

#### Defined in

[core/Geometry.ts:242](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;242)

___

### clone

▸ **clone**(): [`Geometry`](Geometry.md)

克隆此几何体对象

#### Returns

[`Geometry`](Geometry.md)

#### Inherited from

[Geometry](Geometry.md).[clone](Geometry.md#clone)

#### Defined in

[core/Geometry.ts:379](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;379)

___

### computeBoundingBox

▸ **computeBoundingBox**(): `any`

计算当前几何体的的边界矩形

#### Returns

`any`

#### Inherited from

[Geometry](Geometry.md).[computeBoundingBox](Geometry.md#computeboundingbox)

#### Defined in

[core/Geometry.ts:280](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;280)

___

### computeBoundingSphere

▸ **computeBoundingSphere**(): `void`

计算当前几何体的的边界球形

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[computeBoundingSphere](Geometry.md#computeboundingsphere)

#### Defined in

[core/Geometry.ts:318](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;318)

___

### createVAO

▸ **createVAO**(`program`): `void`

创建 Vao

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`Program`](Program.md) |

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[createVAO](Geometry.md#createvao)

#### Defined in

[core/Geometry.ts:229](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;229)

___

### destroy

▸ **destroy**(): `void`

销毁几何体对象

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[destroy](Geometry.md#destroy)

#### Defined in

[core/Geometry.ts:392](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;392)

___

### draw

▸ **draw**(`program`, `drawMode?`): `void`

执行绘制

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `any` | Program 对象 |
| `drawMode` | `number` | 绘制模式 |

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[draw](Geometry.md#draw)

#### Defined in

[core/Geometry.ts:342](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;342)

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

[core/Geometry.ts:118](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;118)

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

[core/Geometry.ts:139](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;139)

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

[core/Geometry.ts:122](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;122)

___

### setColors

▸ **setColors**(`colors`): `void`

设置顶点颜色

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | `any` |

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[setColors](Geometry.md#setcolors)

#### Defined in

[core/Geometry.ts:197](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;197)

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

[core/Geometry.ts:212](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;212)

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

[core/Geometry.ts:143](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;143)

___

### setInstancedCount

▸ **setInstancedCount**(`count`): `void`

设置实例化渲染的数量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | 数量 |

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[setInstancedCount](Geometry.md#setinstancedcount)

#### Defined in

[core/Geometry.ts:221](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;221)

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

[core/Geometry.ts:175](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;175)

___

### setUVs

▸ **setUVs**(`data`): `void`

设置纹理 UV

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[setUVs](Geometry.md#setuvs)

#### Defined in

[core/Geometry.ts:186](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;186)

___

### setVertices

▸ **setVertices**(`data`): `void`

设置顶点数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[setVertices](Geometry.md#setvertices)

#### Defined in

[core/Geometry.ts:162](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;162)

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

[core/Geometry.ts:130](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;130)
