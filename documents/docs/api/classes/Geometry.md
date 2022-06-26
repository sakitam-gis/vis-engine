---
id: "Geometry"
title: "Class: Geometry"
sidebar_label: "Geometry"
sidebar_position: 0
custom_edit_url: null
---

几何体对象

## Hierarchy

- `default`

  ↳ **`Geometry`**

  ↳↳ [`Plane`](Plane.md)

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

[core/Geometry.ts:39](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;39)

## Properties

### drawMode

• **drawMode**: `number`

#### Defined in

[core/Geometry.ts:33](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;33)

___

### drawRange

• **drawRange**: `any`

#### Defined in

[core/Geometry.ts:27](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;27)

___

### instancedCount

• **instancedCount**: `number`

#### Defined in

[core/Geometry.ts:29](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;29)

___

### isInstanced

• **isInstanced**: `boolean`

#### Defined in

[core/Geometry.ts:31](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;31)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

Base.renderer

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;8558d24#line&#x3D;7)

## Accessors

### attributes

• `get` **attributes**(): `Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

#### Returns

`Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

#### Defined in

[core/Geometry.ts:80](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;80)

___

### bounds

• `get` **bounds**(): `any`

#### Returns

`any`

#### Defined in

[core/Geometry.ts:88](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;88)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Base.gl

#### Defined in

[core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;8558d24#line&#x3D;16)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[core/Geometry.ts:76](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;76)

___

### index

• `get` **index**(): `undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Returns

`undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Defined in

[core/Geometry.ts:84](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;84)

___

### rendererState

• `get` **rendererState**(): `any`

获取渲染状态

#### Returns

`any`

#### Inherited from

Base.rendererState

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

#### Defined in

[core/Geometry.ts:242](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;242)

___

### clone

▸ **clone**(): [`Geometry`](Geometry.md)

克隆此几何体对象

#### Returns

[`Geometry`](Geometry.md)

#### Defined in

[core/Geometry.ts:379](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;379)

___

### computeBoundingBox

▸ **computeBoundingBox**(): `any`

计算当前几何体的的边界矩形

#### Returns

`any`

#### Defined in

[core/Geometry.ts:280](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;280)

___

### computeBoundingSphere

▸ **computeBoundingSphere**(): `void`

计算当前几何体的的边界球形

#### Returns

`void`

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

#### Defined in

[core/Geometry.ts:229](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;229)

___

### destroy

▸ **destroy**(): `void`

销毁几何体对象

#### Returns

`void`

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

#### Defined in

[core/Geometry.ts:130](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;130)
