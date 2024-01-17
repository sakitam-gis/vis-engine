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

[src/geometries/Plane.ts:139](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/geometries/Plane.ts#L139)

## Properties

### drawMode

• **drawMode**: `number`

#### Inherited from

[Geometry](Geometry.md).[drawMode](Geometry.md#drawmode)

#### Defined in

[src/core/Geometry.ts:59](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L59)

___

### drawRange

• **drawRange**: `any`

#### Inherited from

[Geometry](Geometry.md).[drawRange](Geometry.md#drawrange)

#### Defined in

[src/core/Geometry.ts:53](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L53)

___

### instancedCount

• **instancedCount**: `number`

#### Inherited from

[Geometry](Geometry.md).[instancedCount](Geometry.md#instancedcount)

#### Defined in

[src/core/Geometry.ts:55](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L55)

___

### isInstanced

• **isInstanced**: `boolean`

#### Inherited from

[Geometry](Geometry.md).[isInstanced](Geometry.md#isinstanced)

#### Defined in

[src/core/Geometry.ts:57](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L57)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Geometry](Geometry.md).[renderer](Geometry.md#renderer)

#### Defined in

[src/core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Base.ts#L7)

## Accessors

### attributes

• `get` **attributes**(): `Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

获取全部的属性信息

#### Returns

`Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

#### Inherited from

Geometry.attributes

#### Defined in

[src/core/Geometry.ts:112](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L112)

___

### attributesData

• `get` **attributesData**(): [`Attributes`](../interfaces/Attributes.md)

获取属性数据

#### Returns

[`Attributes`](../interfaces/Attributes.md)

#### Inherited from

Geometry.attributesData

#### Defined in

[src/core/Geometry.ts:119](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L119)

___

### bounds

• `get` **bounds**(): `any`

获取当前几何体的包围盒

#### Returns

`any`

#### Inherited from

Geometry.bounds

#### Defined in

[src/core/Geometry.ts:143](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L143)

• `set` **bounds**(`bounds`): `void`

手动设置包围盒，一般我们只需要内部计算

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `any` |

#### Returns

`void`

#### Inherited from

Geometry.bounds

#### Defined in

[src/core/Geometry.ts:151](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L151)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Geometry.gl

#### Defined in

[src/core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Base.ts#L16)

___

### id

• `get` **id**(): `string`

获取当前几何体数据的唯一标识

#### Returns

`string`

#### Inherited from

Geometry.id

#### Defined in

[src/core/Geometry.ts:105](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L105)

___

### index

• `get` **index**(): `undefined` \| [`BufferAttribute`](BufferAttribute.md)

获取顶点索引属性

#### Returns

`undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Inherited from

Geometry.index

#### Defined in

[src/core/Geometry.ts:136](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L136)

___

### rendererState

• `get` **rendererState**(): [`State`](State.md)

获取渲染状态

#### Returns

[`State`](State.md)

#### Inherited from

Geometry.rendererState

#### Defined in

[src/core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Base.ts#L23)

## Methods

### addAttribute

▸ **addAttribute**(`name`, `attribute`): `void`

添加对应的属性信息（顶点数据）

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

[src/core/Geometry.ts:160](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L160)

___

### bindAttributes

▸ **bindAttributes**(`program`): `void`

绑定顶点属性数据
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

[src/core/Geometry.ts:363](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L363)

___

### clone

▸ **clone**(): [`Geometry`](Geometry.md)

克隆此几何体对象

#### Returns

[`Geometry`](Geometry.md)

#### Inherited from

[Geometry](Geometry.md).[clone](Geometry.md#clone)

#### Defined in

[src/core/Geometry.ts:540](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L540)

___

### computeBoundingBox

▸ **computeBoundingBox**(`vertices?`): `any`

计算当前几何体的的矩形边界（立方体包围盒）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vertices?` | `number`[] \| [`DataType`](../#datatype) | 外部传入的顶点数据 |

#### Returns

`any`

#### Inherited from

[Geometry](Geometry.md).[computeBoundingBox](Geometry.md#computeboundingbox)

#### Defined in

[src/core/Geometry.ts:402](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L402)

___

### computeBoundingSphere

▸ **computeBoundingSphere**(`vertices?`): `void`

计算当前几何体的的球形边界（球形包围盒）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vertices?` | `number`[] \| [`DataType`](../#datatype) | 外部传入的顶点数据 |

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[computeBoundingSphere](Geometry.md#computeboundingsphere)

#### Defined in

[src/core/Geometry.ts:437](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L437)

___

### copy

▸ **copy**(`source`): [`Plane`](Plane.md)

将传入的几何体对象的属性值拷贝到此对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`Geometry`](Geometry.md) | 源几何体对象 |

#### Returns

[`Plane`](Plane.md)

#### Inherited from

[Geometry](Geometry.md).[copy](Geometry.md#copy)

#### Defined in

[src/core/Geometry.ts:502](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L502)

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

[src/core/Geometry.ts:350](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L350)

___

### destroy

▸ **destroy**(): `void`

销毁几何体对象

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[destroy](Geometry.md#destroy)

#### Defined in

[src/core/Geometry.ts:549](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L549)

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

[src/core/Geometry.ts:458](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L458)

___

### getAttribute

▸ **getAttribute**(`name`): `undefined` \| [`BufferAttribute`](BufferAttribute.md)

获取对应的属性信息（顶点数据）

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Returns

`undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Inherited from

[Geometry](Geometry.md).[getAttribute](Geometry.md#getattribute)

#### Defined in

[src/core/Geometry.ts:191](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L191)

___

### removeAttribute

▸ **removeAttribute**(`attribute`): `void`

移除属性信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `any` |

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[removeAttribute](Geometry.md#removeattribute)

#### Defined in

[src/core/Geometry.ts:235](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L235)

___

### setAttributeData

▸ **setAttributeData**(`name`, `data`): `void`

设置对应的属性数据

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

[src/core/Geometry.ts:200](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L200)

___

### setColors

▸ **setColors**(`colors`): `void`

设置顶点颜色数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | (`Float32Array` \| `Float64Array` \| `number`[] \| [`Vector3`](Vector3.md) \| [`Vector4`](Vector4.md))[] |

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[setColors](Geometry.md#setcolors)

#### Defined in

[src/core/Geometry.ts:310](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L310)

___

### setDrawRange

▸ **setDrawRange**(`start`, `count`): `void`

设置顶点渲染的开始索引和数量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | 开始索引 |
| `count` | `number` | 数量 |

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[setDrawRange](Geometry.md#setdrawrange)

#### Defined in

[src/core/Geometry.ts:333](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L333)

___

### setIndex

▸ **setIndex**(`index`): `void`

设置顶点索引数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `any` |

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[setIndex](Geometry.md#setindex)

#### Defined in

[src/core/Geometry.ts:243](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L243)

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

[src/core/Geometry.ts:342](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L342)

___

### setNormals

▸ **setNormals**(`data`): `void`

设置顶点法向量数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[setNormals](Geometry.md#setnormals)

#### Defined in

[src/core/Geometry.ts:282](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L282)

___

### setUVs

▸ **setUVs**(`data`): `void`

设置纹理 UV 数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[setUVs](Geometry.md#setuvs)

#### Defined in

[src/core/Geometry.ts:296](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L296)

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

[src/core/Geometry.ts:262](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L262)

___

### updateAttribute

▸ **updateAttribute**(`attribute`): `void`

更新顶点属性数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `any` |

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[updateAttribute](Geometry.md#updateattribute)

#### Defined in

[src/core/Geometry.ts:212](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L212)
