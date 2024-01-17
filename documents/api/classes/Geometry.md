[vis-engine - v1.5.1](../index.md) / Geometry

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

[src/core/Geometry.ts:65](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L65)

## Properties

### drawMode

• **drawMode**: `number`

#### Defined in

[src/core/Geometry.ts:59](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L59)

___

### drawRange

• **drawRange**: `any`

#### Defined in

[src/core/Geometry.ts:53](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L53)

___

### instancedCount

• **instancedCount**: `number`

#### Defined in

[src/core/Geometry.ts:55](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L55)

___

### isInstanced

• **isInstanced**: `boolean`

#### Defined in

[src/core/Geometry.ts:57](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L57)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

Base.renderer

#### Defined in

[src/core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Base.ts#L7)

## Accessors

### attributes

• `get` **attributes**(): `Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

获取全部的属性信息

#### Returns

`Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

#### Defined in

[src/core/Geometry.ts:112](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L112)

___

### attributesData

• `get` **attributesData**(): [`Attributes`](../interfaces/Attributes.md)

获取属性数据

#### Returns

[`Attributes`](../interfaces/Attributes.md)

#### Defined in

[src/core/Geometry.ts:119](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L119)

___

### bounds

• `get` **bounds**(): `any`

获取当前几何体的包围盒

#### Returns

`any`

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

#### Defined in

[src/core/Geometry.ts:151](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L151)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Base.gl

#### Defined in

[src/core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Base.ts#L16)

___

### id

• `get` **id**(): `string`

获取当前几何体数据的唯一标识

#### Returns

`string`

#### Defined in

[src/core/Geometry.ts:105](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L105)

___

### index

• `get` **index**(): `undefined` \| [`BufferAttribute`](BufferAttribute.md)

获取顶点索引属性

#### Returns

`undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Defined in

[src/core/Geometry.ts:136](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L136)

___

### rendererState

• `get` **rendererState**(): [`State`](State.md)

获取渲染状态

#### Returns

[`State`](State.md)

#### Inherited from

Base.rendererState

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

#### Defined in

[src/core/Geometry.ts:363](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L363)

___

### clone

▸ **clone**(): [`Geometry`](Geometry.md)

克隆此几何体对象

#### Returns

[`Geometry`](Geometry.md)

#### Defined in

[src/core/Geometry.ts:540](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L540)

___

### computeBoundingBox

▸ **computeBoundingBox**(`vertices?`): `any`

计算当前几何体的的矩形边界（立方体包围盒）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vertices?` | `number`[] \| [`DataType`](../index.md#datatype) | 外部传入的顶点数据 |

#### Returns

`any`

#### Defined in

[src/core/Geometry.ts:402](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L402)

___

### computeBoundingSphere

▸ **computeBoundingSphere**(`vertices?`): `void`

计算当前几何体的的球形边界（球形包围盒）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vertices?` | `number`[] \| [`DataType`](../index.md#datatype) | 外部传入的顶点数据 |

#### Returns

`void`

#### Defined in

[src/core/Geometry.ts:437](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L437)

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

#### Defined in

[src/core/Geometry.ts:350](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L350)

___

### destroy

▸ **destroy**(): `void`

销毁几何体对象

#### Returns

`void`

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

#### Defined in

[src/core/Geometry.ts:212](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Geometry.ts#L212)
