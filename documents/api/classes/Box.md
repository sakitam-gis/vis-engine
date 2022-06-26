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

- [attributesConfig](Box.md#attributesconfig)
- [drawMode](Box.md#drawmode)
- [drawRange](Box.md#drawrange)
- [instancedCount](Box.md#instancedcount)
- [isInstanced](Box.md#isinstanced)
- [renderer](Box.md#renderer)

### Accessors

- [attributes](Box.md#attributes)
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

[geometries/Box.ts:65](https://github.com/sakitam-gis/vis-engine/blob/master/src/geometries/Box.ts?at&#x3D;8558d24#line&#x3D;65)

## Properties

### attributesConfig

• **attributesConfig**: [`Attributes`](../interfaces/Attributes.md)

#### Inherited from

[Geometry](Geometry.md).[attributesConfig](Geometry.md#attributesconfig)

#### Defined in

[core/Geometry.ts:58](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;58)

___

### drawMode

• **drawMode**: `number`

#### Inherited from

[Geometry](Geometry.md).[drawMode](Geometry.md#drawmode)

#### Defined in

[core/Geometry.ts:56](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;56)

___

### drawRange

• **drawRange**: `any`

#### Inherited from

[Geometry](Geometry.md).[drawRange](Geometry.md#drawrange)

#### Defined in

[core/Geometry.ts:50](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;50)

___

### instancedCount

• **instancedCount**: `number`

#### Inherited from

[Geometry](Geometry.md).[instancedCount](Geometry.md#instancedcount)

#### Defined in

[core/Geometry.ts:52](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;52)

___

### isInstanced

• **isInstanced**: `boolean`

#### Inherited from

[Geometry](Geometry.md).[isInstanced](Geometry.md#isinstanced)

#### Defined in

[core/Geometry.ts:54](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;54)

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

[core/Geometry.ts:106](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;106)

___

### bounds

• `get` **bounds**(): `any`

#### Returns

`any`

#### Inherited from

Geometry.bounds

#### Defined in

[core/Geometry.ts:114](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;114)

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

[core/Geometry.ts:102](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;102)

___

### index

• `get` **index**(): `undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Returns

`undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Inherited from

Geometry.index

#### Defined in

[core/Geometry.ts:110](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;110)

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

[core/Geometry.ts:119](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;119)

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

[core/Geometry.ts:268](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;268)

___

### clone

▸ **clone**(): [`Geometry`](Geometry.md)

克隆此几何体对象

#### Returns

[`Geometry`](Geometry.md)

#### Inherited from

[Geometry](Geometry.md).[clone](Geometry.md#clone)

#### Defined in

[core/Geometry.ts:405](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;405)

___

### computeBoundingBox

▸ **computeBoundingBox**(): `any`

计算当前几何体的的边界矩形

#### Returns

`any`

#### Inherited from

[Geometry](Geometry.md).[computeBoundingBox](Geometry.md#computeboundingbox)

#### Defined in

[core/Geometry.ts:306](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;306)

___

### computeBoundingSphere

▸ **computeBoundingSphere**(): `void`

计算当前几何体的的边界球形

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[computeBoundingSphere](Geometry.md#computeboundingsphere)

#### Defined in

[core/Geometry.ts:344](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;344)

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

[core/Geometry.ts:255](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;255)

___

### destroy

▸ **destroy**(): `void`

销毁几何体对象

#### Returns

`void`

#### Inherited from

[Geometry](Geometry.md).[destroy](Geometry.md#destroy)

#### Defined in

[core/Geometry.ts:418](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;418)

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

[core/Geometry.ts:368](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;368)

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

[core/Geometry.ts:144](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;144)

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

[core/Geometry.ts:165](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;165)

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

[core/Geometry.ts:148](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;148)

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

[core/Geometry.ts:223](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;223)

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

[core/Geometry.ts:238](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;238)

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

[core/Geometry.ts:169](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;169)

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

[core/Geometry.ts:247](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;247)

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

[core/Geometry.ts:201](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;201)

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

[core/Geometry.ts:212](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;212)

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

[core/Geometry.ts:188](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;188)

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

[core/Geometry.ts:156](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;8558d24#line&#x3D;156)
