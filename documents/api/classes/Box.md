[vis-engine - v1.0.0](../index.md) / Box

# Class: Box

立方体，通常用来创建立方体或者不规则四边形。

代码示例：
```ts
const boxGeometry - new Box(renderer);

const box = new Mesh(renderer, { geometry: boxGeometry, program });
scene.add(box);
```

## Hierarchy

- [`Geometry`](Geometry.md)

  ↳ **`Box`**

## Table of contents

### Constructors

- [constructor](Box.md#constructor)

### Properties

- [drawMode](Box.md#drawmode)
- [drawRange](Box.md#drawrange)
- [instancedCount](Box.md#instancedcount)
- [isInstanced](Box.md#isinstanced)
- [renderer](Box.md#renderer)

### Accessors

- [attributes](Box.md#attributes)
- [attributesData](Box.md#attributesdata)
- [bounds](Box.md#bounds)
- [gl](Box.md#gl)
- [id](Box.md#id)
- [index](Box.md#index)
- [rendererState](Box.md#rendererstate)

### Methods

- [addAttribute](Box.md#addattribute)
- [bindAttributes](Box.md#bindattributes)
- [clone](Box.md#clone)
- [computeBoundingBox](Box.md#computeboundingbox)
- [computeBoundingSphere](Box.md#computeboundingsphere)
- [copy](Box.md#copy)
- [createVAO](Box.md#createvao)
- [destroy](Box.md#destroy)
- [draw](Box.md#draw)
- [getAttribute](Box.md#getattribute)
- [removeAttribute](Box.md#removeattribute)
- [setAttributeData](Box.md#setattributedata)
- [setColors](Box.md#setcolors)
- [setDrawRange](Box.md#setdrawrange)
- [setIndex](Box.md#setindex)
- [setInstancedCount](Box.md#setinstancedcount)
- [setNormals](Box.md#setnormals)
- [setUVs](Box.md#setuvs)
- [setVertices](Box.md#setvertices)
- [updateAttribute](Box.md#updateattribute)

## Constructors

### constructor

• **new Box**(`renderer`, `«destructured»?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) | 渲染器 |
| `«destructured»` | `Partial`<[`BoxOptions`](../interfaces/BoxOptions.md)\> | - |

#### Overrides

[Geometry](Geometry.md).[constructor](Geometry.md#constructor)

#### Defined in

[geometries/Box.ts:65](https://github.com/sakitam-gis/vis-engine/blob/master/src/geometries/Box.ts?at&#x3D;1dddf76#line&#x3D;65)

## Properties

### drawMode

• **drawMode**: `number`

#### Inherited from

[Geometry](Geometry.md).[drawMode](Geometry.md#drawmode)

#### Defined in

[core/Geometry.ts:59](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;59)

___

### drawRange

• **drawRange**: `any`

#### Inherited from

[Geometry](Geometry.md).[drawRange](Geometry.md#drawrange)

#### Defined in

[core/Geometry.ts:53](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;53)

___

### instancedCount

• **instancedCount**: `number`

#### Inherited from

[Geometry](Geometry.md).[instancedCount](Geometry.md#instancedcount)

#### Defined in

[core/Geometry.ts:55](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;55)

___

### isInstanced

• **isInstanced**: `boolean`

#### Inherited from

[Geometry](Geometry.md).[isInstanced](Geometry.md#isinstanced)

#### Defined in

[core/Geometry.ts:57](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;57)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Geometry](Geometry.md).[renderer](Geometry.md#renderer)

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1dddf76#line&#x3D;7)

## Accessors

### attributes

• `get` **attributes**(): `Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

获取全部的属性信息

#### Returns

`Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

#### Inherited from

Geometry.attributes

#### Defined in

[core/Geometry.ts:112](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;112)

___

### attributesData

• `get` **attributesData**(): [`Attributes`](../interfaces/Attributes.md)

获取属性数据

#### Returns

[`Attributes`](../interfaces/Attributes.md)

#### Inherited from

Geometry.attributesData

#### Defined in

[core/Geometry.ts:119](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;119)

___

### bounds

• `get` **bounds**(): `any`

获取当前几何体的包围盒

#### Returns

`any`

#### Inherited from

Geometry.bounds

#### Defined in

[core/Geometry.ts:140](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;140)

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

[core/Geometry.ts:148](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;148)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Geometry.gl

#### Defined in

[core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1dddf76#line&#x3D;16)

___

### id

• `get` **id**(): `string`

获取当前几何体数据的唯一标识

#### Returns

`string`

#### Inherited from

Geometry.id

#### Defined in

[core/Geometry.ts:105](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;105)

___

### index

• `get` **index**(): `undefined` \| [`BufferAttribute`](BufferAttribute.md)

获取顶点索引属性

#### Returns

`undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Inherited from

Geometry.index

#### Defined in

[core/Geometry.ts:133](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;133)

___

### rendererState

• `get` **rendererState**(): `any`

获取渲染状态

#### Returns

`any`

#### Inherited from

Geometry.rendererState

#### Defined in

[core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;1dddf76#line&#x3D;23)

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

[core/Geometry.ts:157](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;157)

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

[core/Geometry.ts:336](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;336)

___

### clone

▸ **clone**(): [`Geometry`](Geometry.md)

克隆此几何体对象

#### Returns

[`Geometry`](Geometry.md)

#### Inherited from

[Geometry](Geometry.md).[clone](Geometry.md#clone)

#### Defined in

[core/Geometry.ts:514](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;514)

___

### computeBoundingBox

▸ **computeBoundingBox**(): `any`

计算当前几何体的的矩形边界（立方体包围盒）

#### Returns

`any`

#### Inherited from

[Geometry](Geometry.md).[computeBoundingBox](Geometry.md#computeboundingbox)

#### Defined in

[core/Geometry.ts:374](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;374)

___

### computeBoundingSphere

▸ **computeBoundingSphere**(): `void`

计算当前几何体的的球形边界（球形包围盒）

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[computeBoundingSphere](Geometry.md#computeboundingsphere)

#### Defined in

[core/Geometry.ts:412](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;412)

___

### copy

▸ **copy**(`source`): [`Box`](Box.md)

将传入的几何体对象的属性值拷贝到此对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`Geometry`](Geometry.md) | 源几何体对象 |

#### Returns

[`Box`](Box.md)

#### Inherited from

[Geometry](Geometry.md).[copy](Geometry.md#copy)

#### Defined in

[core/Geometry.ts:476](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;476)

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

[core/Geometry.ts:323](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;323)

___

### destroy

▸ **destroy**(): `void`

销毁几何体对象

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[destroy](Geometry.md#destroy)

#### Defined in

[core/Geometry.ts:523](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;523)

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

[core/Geometry.ts:436](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;436)

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

[core/Geometry.ts:186](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;186)

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

[core/Geometry.ts:220](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;220)

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

[core/Geometry.ts:195](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;195)

___

### setColors

▸ **setColors**(`colors`): `void`

设置顶点颜色数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | (`Float32Array` \| `number`[] \| [`Vector3`](Vector3.md) \| [`Vector4`](Vector4.md))[] |

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[setColors](Geometry.md#setcolors)

#### Defined in

[core/Geometry.ts:286](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;286)

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

[core/Geometry.ts:306](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;306)

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

[core/Geometry.ts:228](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;228)

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

[core/Geometry.ts:315](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;315)

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

[core/Geometry.ts:264](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;264)

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

[core/Geometry.ts:275](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;275)

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

[core/Geometry.ts:247](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;247)

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

[core/Geometry.ts:207](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;1dddf76#line&#x3D;207)