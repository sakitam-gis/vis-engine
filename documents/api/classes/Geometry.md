[vis-engine - v1.0.0](../index.md) / Geometry

# Class: Geometry

几何体对象，包含了顶点位置，面片索引、法向量、颜色值、UV 坐标和自定义缓存属性值等，这些数据最终会上传到`GPU`中。

示例代码：

```ts
const geometry = new ve.Geometry(renderer, {
    position: {
      size: 3,
      data: new Float32Array([
        -0.5, 0.5, 0,
        -0.5, -0.5, 0,
        0.5, 0.5, 0,
        0.5, -0.5, 0
      ])
    },
    uv: {
      size: 2,
      data: new Float32Array([0, 1, 1, 1, 0, 0, 1, 0])
    },
    index: {
      data: new Uint16Array([0, 1, 2, 1, 3, 2])
    },
  });
```

## Hierarchy

- `default`

  ↳ **`Geometry`**

  ↳↳ [`Box`](Box.md)

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
- [attributesData](Geometry.md#attributesdata)
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
- [copy](Geometry.md#copy)
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
| `attributes` | [`Attributes`](../interfaces/Attributes.md) | 属性信息（顶点数据） |

#### Overrides

Base.constructor

#### Defined in

[core/Geometry.ts:65](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;65)

## Properties

### drawMode

• **drawMode**: `number`

#### Defined in

[core/Geometry.ts:59](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;59)

___

### drawRange

• **drawRange**: `any`

#### Defined in

[core/Geometry.ts:53](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;53)

___

### instancedCount

• **instancedCount**: `number`

#### Defined in

[core/Geometry.ts:55](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;55)

___

### isInstanced

• **isInstanced**: `boolean`

#### Defined in

[core/Geometry.ts:57](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;57)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

Base.renderer

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;92e1850#line&#x3D;7)

## Accessors

### attributes

• `get` **attributes**(): `Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

获取全部的属性信息

#### Returns

`Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

#### Defined in

[core/Geometry.ts:112](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;112)

___

### attributesData

• `get` **attributesData**(): [`Attributes`](../interfaces/Attributes.md)

获取属性数据

#### Returns

[`Attributes`](../interfaces/Attributes.md)

#### Defined in

[core/Geometry.ts:119](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;119)

___

### bounds

• `get` **bounds**(): `any`

获取当前几何体的包围盒

#### Returns

`any`

#### Defined in

[core/Geometry.ts:140](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;140)

• `set` **bounds**(`bounds`): `void`

手动设置包围盒，一般我们只需要内部计算

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `any` |

#### Returns

`void`

#### Defined in

[core/Geometry.ts:148](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;148)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Base.gl

#### Defined in

[core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;92e1850#line&#x3D;16)

___

### id

• `get` **id**(): `string`

获取当前几何体数据的唯一标识

#### Returns

`string`

#### Defined in

[core/Geometry.ts:105](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;105)

___

### index

• `get` **index**(): `undefined` \| [`BufferAttribute`](BufferAttribute.md)

获取顶点索引属性

#### Returns

`undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Defined in

[core/Geometry.ts:133](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;133)

___

### rendererState

• `get` **rendererState**(): `any`

获取渲染状态

#### Returns

`any`

#### Inherited from

Base.rendererState

#### Defined in

[core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;92e1850#line&#x3D;23)

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

#### Defined in

[core/Geometry.ts:157](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;157)

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

#### Defined in

[core/Geometry.ts:336](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;336)

___

### clone

▸ **clone**(): [`Geometry`](Geometry.md)

克隆此几何体对象

#### Returns

[`Geometry`](Geometry.md)

#### Defined in

[core/Geometry.ts:513](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;513)

___

### computeBoundingBox

▸ **computeBoundingBox**(): `any`

计算当前几何体的的矩形边界（立方体包围盒）

#### Returns

`any`

#### Defined in

[core/Geometry.ts:374](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;374)

___

### computeBoundingSphere

▸ **computeBoundingSphere**(): `void`

计算当前几何体的的球形边界（球形包围盒）

#### Returns

`void`

#### Defined in

[core/Geometry.ts:412](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;412)

___

### copy

▸ **copy**(`source`): [`Geometry`](Geometry.md)

将传入的几何体对象的属性值拷贝到此对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`Geometry`](Geometry.md) | 源几何体对象 |

#### Returns

[`Geometry`](Geometry.md)

#### Defined in

[core/Geometry.ts:475](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;475)

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

[core/Geometry.ts:323](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;323)

___

### destroy

▸ **destroy**(): `void`

销毁几何体对象

#### Returns

`void`

#### Defined in

[core/Geometry.ts:522](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;522)

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

[core/Geometry.ts:436](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;436)

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

#### Defined in

[core/Geometry.ts:186](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;186)

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

#### Defined in

[core/Geometry.ts:220](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;220)

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

#### Defined in

[core/Geometry.ts:195](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;195)

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

#### Defined in

[core/Geometry.ts:286](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;286)

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

#### Defined in

[core/Geometry.ts:306](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;306)

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

#### Defined in

[core/Geometry.ts:228](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;228)

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

[core/Geometry.ts:315](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;315)

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

#### Defined in

[core/Geometry.ts:264](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;264)

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

#### Defined in

[core/Geometry.ts:275](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;275)

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

[core/Geometry.ts:247](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;247)

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

#### Defined in

[core/Geometry.ts:207](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;92e1850#line&#x3D;207)
