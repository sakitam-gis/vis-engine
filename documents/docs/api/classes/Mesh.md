---
id: "Mesh"
title: "Class: Mesh"
sidebar_label: "Mesh"
sidebar_position: 0
custom_edit_url: null
---

网格渲染对象

代码示例：

```ts
const points = new Mesh(renderer, { mode: renderer.gl.POINTS, geometry, program });
points.setParent(scene);
points.position.set(-1, 1, 0);
```

## Hierarchy

- [`Object3D`](Object3D.md)

  ↳ **`Mesh`**

## Constructors

### constructor

• **new Mesh**(`renderer`, `options?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `any` | 渲染器 |
| `options` | [`MeshOptions`](../interfaces/MeshOptions.md) | MeshOptions |

#### Overrides

[Object3D](Object3D.md).[constructor](Object3D.md#constructor)

#### Defined in

[objects/Mesh.ts:121](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;121)

## Properties

### children

• **children**: [`Object3D`](Object3D.md)[]

#### Inherited from

[Object3D](Object3D.md).[children](Object3D.md#children)

#### Defined in

[objects/Object3D.ts:39](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;39)

___

### frustumCulled

• **frustumCulled**: `boolean`

#### Defined in

[objects/Mesh.ts:99](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;99)

___

### gl

• **gl**: `WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Defined in

[objects/Mesh.ts:89](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;89)

___

### localMatrix

• **localMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

局部变换矩阵

#### Inherited from

[Object3D](Object3D.md).[localMatrix](Object3D.md#localmatrix)

#### Defined in

[objects/Object3D.ts:20](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;20)

___

### matrixAutoUpdate

• **matrixAutoUpdate**: `boolean`

#### Inherited from

[Object3D](Object3D.md).[matrixAutoUpdate](Object3D.md#matrixautoupdate)

#### Defined in

[objects/Object3D.ts:27](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;27)

___

### mode

• **mode**: `number`

#### Defined in

[objects/Mesh.ts:101](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;101)

___

### modelViewMatrix

• **modelViewMatrix**: [`Matrix4`](Matrix4.md)

#### Defined in

[objects/Mesh.ts:91](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;91)

___

### normalMatrix

• **normalMatrix**: [`Matrix3`](Matrix3.md)

#### Defined in

[objects/Mesh.ts:93](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;93)

___

### parent

• **parent**: `WithNull`<[`Object3D`](Object3D.md)\>

#### Inherited from

[Object3D](Object3D.md).[parent](Object3D.md#parent)

#### Defined in

[objects/Object3D.ts:41](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;41)

___

### position

• **position**: [`Vector3`](Vector3.md)

#### Inherited from

[Object3D](Object3D.md).[position](Object3D.md#position)

#### Defined in

[objects/Object3D.ts:29](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;29)

___

### quaternion

• **quaternion**: [`Quaternion`](Quaternion.md)

#### Inherited from

[Object3D](Object3D.md).[quaternion](Object3D.md#quaternion)

#### Defined in

[objects/Object3D.ts:35](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;35)

___

### renderOrder

• **renderOrder**: `number`

#### Defined in

[objects/Mesh.ts:95](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;95)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Defined in

[objects/Mesh.ts:103](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;103)

___

### rotation

• **rotation**: [`Euler`](Euler.md)

#### Inherited from

[Object3D](Object3D.md).[rotation](Object3D.md#rotation)

#### Defined in

[objects/Object3D.ts:33](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;33)

___

### scale

• **scale**: [`Vector3`](Vector3.md)

#### Inherited from

[Object3D](Object3D.md).[scale](Object3D.md#scale)

#### Defined in

[objects/Object3D.ts:31](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;31)

___

### up

• **up**: [`Vector3`](Vector3.md)

#### Inherited from

[Object3D](Object3D.md).[up](Object3D.md#up)

#### Defined in

[objects/Object3D.ts:37](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;37)

___

### visible

• **visible**: `boolean`

是否可见

#### Inherited from

[Object3D](Object3D.md).[visible](Object3D.md#visible)

#### Defined in

[objects/Object3D.ts:15](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;15)

___

### worldMatrix

• **worldMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

物体的世界变换矩阵

#### Inherited from

[Object3D](Object3D.md).[worldMatrix](Object3D.md#worldmatrix)

#### Defined in

[objects/Object3D.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;25)

___

### worldMatrixNeedsUpdate

• **worldMatrixNeedsUpdate**: `boolean`

#### Inherited from

[Object3D](Object3D.md).[worldMatrixNeedsUpdate](Object3D.md#worldmatrixneedsupdate)

#### Defined in

[objects/Object3D.ts:43](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;43)

___

### zDepth

• **zDepth**: `number`

#### Defined in

[objects/Mesh.ts:97](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;97)

## Accessors

### geometry

• `get` **geometry**(): [`Geometry`](Geometry.md)

获取当前 `Mesh` 的几何体信息

#### Returns

[`Geometry`](Geometry.md)

#### Defined in

[objects/Mesh.ts:158](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;158)

___

### id

• `get` **id**(): `string`

获取当前 `Mesh` 的 `id`

#### Returns

`string`

#### Defined in

[objects/Mesh.ts:151](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;151)

___

### program

• `get` **program**(): [`Program`](Program.md)

获取当前 `Mesh` 的 `program` 对象

#### Returns

[`Program`](Program.md)

#### Defined in

[objects/Mesh.ts:165](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;165)

___

### wireframe

• `get` **wireframe**(): `boolean`

获取是否是网格渲染

#### Returns

`boolean`

#### Defined in

[objects/Mesh.ts:184](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;184)

• `set` **wireframe**(`wireframe`): `void`

设置是否是网格渲染

#### Parameters

| Name | Type |
| :------ | :------ |
| `wireframe` | `boolean` |

#### Returns

`void`

#### Defined in

[objects/Mesh.ts:173](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;173)

## Methods

### add

▸ **add**(`object`, `p?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | `any` | `undefined` |
| `p` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[add](Object3D.md#add)

#### Defined in

[objects/Object3D.ts:66](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;66)

___

### clone

▸ **clone**(): [`Mesh`](Mesh.md)

克隆 `Mesh` 对象

#### Returns

[`Mesh`](Mesh.md)

#### Overrides

[Object3D](Object3D.md).[clone](Object3D.md#clone)

#### Defined in

[objects/Mesh.ts:298](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;298)

___

### contains

▸ **contains**(`object`): `boolean`

判断此渲染对象的子集是否包含传入的渲染对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

`boolean`

#### Inherited from

[Object3D](Object3D.md).[contains](Object3D.md#contains)

#### Defined in

[objects/Object3D.ts:88](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;88)

___

### copy

▸ **copy**(`mesh`, `recursive?`): [`Mesh`](Mesh.md)

将给定的 `Mesh` 对象复制到此对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `mesh` | `any` | `undefined` | 源对象 |
| `recursive` | `boolean` | `true` | 设置是否复制子对象 |

#### Returns

[`Mesh`](Mesh.md)

#### Overrides

[Object3D](Object3D.md).[copy](Object3D.md#copy)

#### Defined in

[objects/Mesh.ts:313](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;313)

___

### decompose

▸ **decompose**(): `void`

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[decompose](Object3D.md#decompose)

#### Defined in

[objects/Object3D.ts:159](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;159)

___

### destroy

▸ **destroy**(): `void`

销毁此 `Mesh`

#### Returns

`void`

#### Defined in

[objects/Mesh.ts:290](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;290)

___

### draw

▸ **draw**(`options?`): `void`

执行`Mesh` 的渲染，一般由`Renderer` 渲染器进行调度。

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MeshDrawOptions`](../interfaces/MeshDrawOptions.md) |

#### Returns

`void`

#### Defined in

[objects/Mesh.ts:192](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;192)

___

### lookAt

▸ **lookAt**(`eye`, `isCamera?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eye` | [`Vector3`](Vector3.md) |
| `isCamera?` | `boolean` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[lookAt](Object3D.md#lookat)

#### Defined in

[objects/Object3D.ts:115](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;115)

___

### remove

▸ **remove**(`object`, `p?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | `any` | `undefined` |
| `p` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[remove](Object3D.md#remove)

#### Defined in

[objects/Object3D.ts:75](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;75)

___

### setParent

▸ **setParent**(`object`, `notifyParent?`): `void`

设置此渲染对象的父集

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `object` | `any` | `undefined` | 渲染对象 |
| `notifyParent` | `boolean` | `true` | 设置是否将此渲染对象添加到传入的渲染对象中 |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[setParent](Object3D.md#setparent)

#### Defined in

[objects/Object3D.ts:97](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;97)

___

### traverse

▸ **traverse**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[traverse](Object3D.md#traverse)

#### Defined in

[objects/Object3D.ts:107](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;107)

___

### updateGeometry

▸ **updateGeometry**(`geometry`, `destroy?`): `void`

更新几何体信息，如果开启了 `wireframe` 还需要更新 `WireframeGeometry`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `geometry` | `any` | `undefined` | 几何体 |
| `destroy` | `boolean` | `true` | 是否销毁上一个几何体 |

#### Returns

`void`

#### Defined in

[objects/Mesh.ts:267](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;267)

___

### updateMatrix

▸ **updateMatrix**(): `void`

更新局部变换矩阵

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[updateMatrix](Object3D.md#updatematrix)

#### Defined in

[objects/Object3D.ts:154](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;154)

___

### updateMatrixWorld

▸ **updateMatrixWorld**(`force?`): `void`

更新渲染对象的世界矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `force?` | `boolean` | 是否更新次渲染对象的子集 |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[updateMatrixWorld](Object3D.md#updatematrixworld)

#### Defined in

[objects/Object3D.ts:129](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;1f0fb3d#line&#x3D;129)

___

### updateProgram

▸ **updateProgram**(`program`, `destroy?`): `void`

更新 `Program` 对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `program` | `any` | `undefined` |  |
| `destroy` | `boolean` | `true` | 是否销毁上一个 program |

#### Returns

`void`

#### Defined in

[objects/Mesh.ts:280](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;280)

___

### updateWireframeGeometry

▸ **updateWireframeGeometry**(`wireframe`, `force?`): `void`

更新网格几何体数据，主要是顶点索引数据

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `wireframe` | `any` | `undefined` | 是否更新索引数据为网格数据 |
| `force` | `boolean` | `false` | 是否强制更新 |

#### Returns

`void`

#### Defined in

[objects/Mesh.ts:230](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;1f0fb3d#line&#x3D;230)