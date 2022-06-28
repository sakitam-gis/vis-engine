[vis-engine - v1.0.0](../index.md) / Geometry

# Class: Geometry

几何体对象，包含了顶点位置，面片索引、法相量、颜色值、UV 坐标和自定义缓存属性值等，这些数据最终会上传到`GPU`中。

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

- [attributesConfig](Geometry.md#attributesconfig)
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

[core/Geometry.ts:64](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;64)

## Properties

### attributesConfig

• **attributesConfig**: [`Attributes`](../interfaces/Attributes.md)

#### Defined in

[core/Geometry.ts:58](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;58)

___

### drawMode

• **drawMode**: `number`

#### Defined in

[core/Geometry.ts:56](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;56)

___

### drawRange

• **drawRange**: `any`

#### Defined in

[core/Geometry.ts:50](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;50)

___

### instancedCount

• **instancedCount**: `number`

#### Defined in

[core/Geometry.ts:52](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;52)

___

### isInstanced

• **isInstanced**: `boolean`

#### Defined in

[core/Geometry.ts:54](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;54)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

Base.renderer

#### Defined in

[core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;4193568#line&#x3D;7)

## Accessors

### attributes

• `get` **attributes**(): `Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

#### Returns

`Map`<`string`, [`BufferAttribute`](BufferAttribute.md)\>

#### Defined in

[core/Geometry.ts:106](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;106)

___

### bounds

• `get` **bounds**(): `any`

#### Returns

`any`

#### Defined in

[core/Geometry.ts:114](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;114)

___

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Base.gl

#### Defined in

[core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;4193568#line&#x3D;16)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[core/Geometry.ts:102](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;102)

___

### index

• `get` **index**(): `undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Returns

`undefined` \| [`BufferAttribute`](BufferAttribute.md)

#### Defined in

[core/Geometry.ts:110](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;110)

___

### rendererState

• `get` **rendererState**(): `any`

获取渲染状态

#### Returns

`any`

#### Inherited from

Base.rendererState

#### Defined in

[core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts?at&#x3D;4193568#line&#x3D;23)

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

[core/Geometry.ts:119](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;119)

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

[core/Geometry.ts:268](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;268)

___

### clone

▸ **clone**(): [`Geometry`](Geometry.md)

克隆此几何体对象

#### Returns

[`Geometry`](Geometry.md)

#### Defined in

[core/Geometry.ts:405](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;405)

___

### computeBoundingBox

▸ **computeBoundingBox**(): `any`

计算当前几何体的的边界矩形

#### Returns

`any`

#### Defined in

[core/Geometry.ts:306](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;306)

___

### computeBoundingSphere

▸ **computeBoundingSphere**(): `void`

计算当前几何体的的边界球形

#### Returns

`void`

#### Defined in

[core/Geometry.ts:344](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;344)

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

[core/Geometry.ts:255](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;255)

___

### destroy

▸ **destroy**(): `void`

销毁几何体对象

#### Returns

`void`

#### Defined in

[core/Geometry.ts:418](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;418)

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

[core/Geometry.ts:368](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;368)

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

[core/Geometry.ts:144](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;144)

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

[core/Geometry.ts:165](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;165)

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

[core/Geometry.ts:148](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;148)

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

[core/Geometry.ts:223](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;223)

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

[core/Geometry.ts:238](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;238)

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

[core/Geometry.ts:169](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;169)

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

[core/Geometry.ts:247](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;247)

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

[core/Geometry.ts:201](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;201)

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

[core/Geometry.ts:212](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;212)

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

[core/Geometry.ts:188](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;188)

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

[core/Geometry.ts:156](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Geometry.ts?at&#x3D;4193568#line&#x3D;156)
