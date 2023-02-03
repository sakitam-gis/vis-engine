---
id: "Camera"
title: "Class: Camera"
sidebar_label: "Camera"
sidebar_position: 0
custom_edit_url: null
---

相机基类

## Hierarchy

- [`Object3D`](Object3D.md)

  ↳ **`Camera`**

  ↳↳ [`PerspectiveCamera`](PerspectiveCamera.md)

  ↳↳ [`OrthographicCamera`](OrthographicCamera.md)

## Constructors

### constructor

• **new Camera**(`«destructured»?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`CameraOptions`](../interfaces/CameraOptions.md) |

#### Overrides

[Object3D](Object3D.md).[constructor](Object3D.md#constructor)

#### Defined in

[cameras/Camera.ts:130](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;130)

## Properties

### cameraType

• **cameraType**: [`CameraType`](../#cameratype)

相机类型（默认有两种相机：perspective和orthographic）

#### Defined in

[cameras/Camera.ts:76](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;76)

___

### children

• **children**: [`Object3D`](Object3D.md)[]

对象子级

#### Inherited from

[Object3D](Object3D.md).[children](Object3D.md#children)

#### Defined in

[objects/Object3D.ts:59](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;59)

___

### frustum

• **frustum**: [`Matrix4`](Matrix4.md)

#### Defined in

[cameras/Camera.ts:128](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;128)

___

### localMatrix

• **localMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

局部变换矩阵

#### Inherited from

[Object3D](Object3D.md).[localMatrix](Object3D.md#localmatrix)

#### Defined in

[objects/Object3D.ts:19](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;19)

___

### matrixAutoUpdate

• **matrixAutoUpdate**: `boolean`

当这个属性设置了之后，它将计算每一帧的位移、旋转（四元变换）和缩放矩阵，并重新计算 `worldMatrix` 属性

#### Inherited from

[Object3D](Object3D.md).[matrixAutoUpdate](Object3D.md#matrixautoupdate)

#### Defined in

[objects/Object3D.ts:29](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;29)

___

### parent

• **parent**: `WithNull`<[`Object3D`](Object3D.md)\>

对象父级

#### Inherited from

[Object3D](Object3D.md).[parent](Object3D.md#parent)

#### Defined in

[objects/Object3D.ts:64](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;64)

___

### position

• **position**: [`Vector3`](Vector3.md)

物体局部位置

#### Inherited from

[Object3D](Object3D.md).[position](Object3D.md#position)

#### Defined in

[objects/Object3D.ts:34](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;34)

___

### projectionMatrix

• **projectionMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

投影矩阵

#### Defined in

[cameras/Camera.ts:81](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;81)

___

### projectionViewMatrix

• **projectionViewMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

pv矩阵，它是 `projectionMatrix`和`viewMatrix` 的乘积

#### Defined in

[cameras/Camera.ts:91](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;91)

___

### quaternion

• **quaternion**: [`Quaternion`](Quaternion.md)

物体的局部旋转

#### Inherited from

[Object3D](Object3D.md).[quaternion](Object3D.md#quaternion)

#### Defined in

[objects/Object3D.ts:49](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;49)

___

### rotation

• **rotation**: [`Euler`](Euler.md)

物体的局部旋转

#### Inherited from

[Object3D](Object3D.md).[rotation](Object3D.md#rotation)

#### Defined in

[objects/Object3D.ts:44](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;44)

___

### scale

• **scale**: [`Vector3`](Vector3.md)

物体的局部缩放

#### Inherited from

[Object3D](Object3D.md).[scale](Object3D.md#scale)

#### Defined in

[objects/Object3D.ts:39](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;39)

___

### up

• **up**: [`Vector3`](Vector3.md)

物体的朝向

#### Inherited from

[Object3D](Object3D.md).[up](Object3D.md#up)

#### Defined in

[objects/Object3D.ts:54](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;54)

___

### viewMatrix

• **viewMatrix**: [`Matrix4`](Matrix4.md)

视图矩阵

#### Defined in

[cameras/Camera.ts:86](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;86)

___

### visible

• **visible**: `boolean`

是否可见

#### Inherited from

[Object3D](Object3D.md).[visible](Object3D.md#visible)

#### Defined in

[objects/Object3D.ts:14](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;14)

___

### worldMatrix

• **worldMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

物体的世界变换矩阵 (如果没有父级，那么他和局部变化矩阵相同)

#### Inherited from

[Object3D](Object3D.md).[worldMatrix](Object3D.md#worldmatrix)

#### Defined in

[objects/Object3D.ts:24](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;24)

___

### worldMatrixNeedsUpdate

• **worldMatrixNeedsUpdate**: `boolean`

当这个属性设置了之后，它将计算在那一帧中的 `worldMatrix`，并将这个值重置为false。默认值为false

#### Inherited from

[Object3D](Object3D.md).[worldMatrixNeedsUpdate](Object3D.md#worldmatrixneedsupdate)

#### Defined in

[objects/Object3D.ts:69](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;69)

___

### worldPosition

• **worldPosition**: [`Vector3`](Vector3.md)

世界位置坐标

#### Defined in

[cameras/Camera.ts:96](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;96)

## Accessors

### aspect

• `get` **aspect**(): `number`

获取相机视锥体的纵横比

#### Returns

`number`

#### Defined in

[cameras/Camera.ts:220](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;220)

• `set` **aspect**(`aspect`): `void`

设置相机视锥体的纵横比，并更新摄像机投影矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `aspect` | `number` |

#### Returns

`void`

#### Defined in

[cameras/Camera.ts:228](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;228)

___

### bounds

• `get` **bounds**(): `WithUndef`<[`Bounds`](../#bounds)\>

获取像机视锥体的范围

#### Returns

`WithUndef`<[`Bounds`](../#bounds)\>

#### Defined in

[cameras/Camera.ts:252](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;252)

• `set` **bounds**(`bounds`): `void`

设置相机像机视锥体的范围，并更新摄像机投影矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `WithUndef`<[`Bounds`](../#bounds)\> |

#### Returns

`void`

#### Defined in

[cameras/Camera.ts:260](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;260)

___

### far

• `get` **far**(): `number`

获取像机的远端面

#### Returns

`number`

#### Defined in

[cameras/Camera.ts:188](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;188)

• `set` **far**(`f`): `void`

设置像机的远端面，并更新摄像机投影矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `number` |

#### Returns

`void`

#### Defined in

[cameras/Camera.ts:196](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;196)

___

### fov

• `get` **fov**(): `number`

获取摄像机视锥体垂直视野角度

#### Returns

`number`

#### Defined in

[cameras/Camera.ts:204](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;204)

• `set` **fov**(`f`): `void`

设置摄像机视锥体垂直视野角度，并更新摄像机投影矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `number` | 角度值 |

#### Returns

`void`

#### Defined in

[cameras/Camera.ts:212](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;212)

___

### near

• `get` **near**(): `number`

获取像机的近端面

#### Returns

`number`

#### Defined in

[cameras/Camera.ts:172](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;172)

• `set` **near**(`n`): `void`

设置像机的近端面，并更新摄像机投影矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | near |

#### Returns

`void`

#### Defined in

[cameras/Camera.ts:180](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;180)

___

### zoom

• `get` **zoom**(): `number`

获取相机的缩放倍数

#### Returns

`number`

#### Defined in

[cameras/Camera.ts:236](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;236)

• `set` **zoom**(`zoom`): `void`

设置相机的缩放倍数，并更新摄像机投影矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoom` | `number` |

#### Returns

`void`

#### Defined in

[cameras/Camera.ts:244](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;244)

## Methods

### add

▸ **add**(`object`, `notifyChild?`): `void`

添加对象到这个对象的子级

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | [`Object3D`](Object3D.md) | `undefined` |
| `notifyChild` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[add](Object3D.md#add)

#### Defined in

[objects/Object3D.ts:97](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;97)

___

### clone

▸ **clone**(): [`Object3D`](Object3D.md)

克隆此渲染对象

#### Returns

[`Object3D`](Object3D.md)

#### Inherited from

[Object3D](Object3D.md).[clone](Object3D.md#clone)

#### Defined in

[objects/Object3D.ts:218](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;218)

___

### contains

▸ **contains**(`object`): `boolean`

判断此渲染对象的子集是否包含传入的渲染对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Object3D`](Object3D.md) |

#### Returns

`boolean`

#### Inherited from

[Object3D](Object3D.md).[contains](Object3D.md#contains)

#### Defined in

[objects/Object3D.ts:124](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;124)

___

### copy

▸ **copy**(`object`, `recursive?`): [`Camera`](Camera.md)

复制给定的对象到这个对象中

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object3D`](Object3D.md) | 渲染对象 |
| `recursive?` | `boolean` | 设置是否复制子对象 |

#### Returns

[`Camera`](Camera.md)

#### Inherited from

[Object3D](Object3D.md).[copy](Object3D.md#copy)

#### Defined in

[objects/Object3D.ts:227](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;227)

___

### decompose

▸ **decompose**(): `void`

从局部矩阵计算位置，旋转和缩放

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[decompose](Object3D.md#decompose)

#### Defined in

[objects/Object3D.ts:208](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;208)

___

### frustumIntersectsMesh

▸ **frustumIntersectsMesh**(`node`, `worldMatrix?`): `boolean`

判断 mesh 是否在相机视椎体内

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `node` | `any` | `undefined` |
| `worldMatrix` | `any` | `node.worldMatrix` |

#### Returns

`boolean`

#### Defined in

[cameras/Camera.ts:340](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;340)

___

### lookAt

▸ **lookAt**(`t`): [`Camera`](Camera.md)

设置相机的朝向

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `any` | 朝向位置，是一个三维向量 |

#### Returns

[`Camera`](Camera.md)

#### Overrides

[Object3D](Object3D.md).[lookAt](Object3D.md#lookat)

#### Defined in

[cameras/Camera.ts:317](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;317)

___

### orthographic

▸ **orthographic**(`left`, `right`, `top`, `bottom`, `near?`, `far?`, `zoom?`): `void`

创建或者更新 `projectionMatrix` 平面相机矩阵

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `left` | `any` | `undefined` |
| `right` | `any` | `undefined` |
| `top` | `any` | `undefined` |
| `bottom` | `any` | `undefined` |
| `near` | `number` | `undefined` |
| `far` | `number` | `undefined` |
| `zoom` | `number` | `1` |

#### Returns

`void`

#### Defined in

[cameras/Camera.ts:292](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;292)

___

### perspective

▸ **perspective**(`fov?`, `aspect?`, `near?`, `far?`): `void`

创建或者更新 `projectionMatrix` 透视相机矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `fov` | `number` |
| `aspect` | `number` |
| `near` | `number` |
| `far` | `number` |

#### Returns

`void`

#### Defined in

[cameras/Camera.ts:272](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;272)

___

### project

▸ **project**(`v`): [`Camera`](Camera.md)

转换到世界坐标

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

[`Camera`](Camera.md)

#### Defined in

[cameras/Camera.ts:376](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;376)

___

### remove

▸ **remove**(`object`, `notifyChild?`): `void`

从此对象移除传入的对象（如果存在）

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | [`Object3D`](Object3D.md) | `undefined` |
| `notifyChild` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[remove](Object3D.md#remove)

#### Defined in

[objects/Object3D.ts:111](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;111)

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

[objects/Object3D.ts:133](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;133)

___

### traverse

▸ **traverse**(`callback`): `void`

遍历此对象（包含子对象）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `any` | 回调函数 |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[traverse](Object3D.md#traverse)

#### Defined in

[objects/Object3D.ts:147](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;147)

___

### unproject

▸ **unproject**(`v`): [`Camera`](Camera.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

[`Camera`](Camera.md)

#### Defined in

[cameras/Camera.ts:382](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;382)

___

### updateMatrix

▸ **updateMatrix**(): `void`

更新局部变换矩阵

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[updateMatrix](Object3D.md#updatematrix)

#### Defined in

[objects/Object3D.ts:200](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;b6d63c9#line&#x3D;200)

___

### updateMatrixWorld

▸ **updateMatrixWorld**(): [`Camera`](Camera.md)

用于更新一个对象的世界矩阵。
每个可视对象都有一个叫做 `worldMatrix` 的矩阵，表示这个对象在世界坐标系中的位置和方向。
当您修改对象的位置、旋转或缩放时，对象的 `worldMatrix` 矩阵会发生变化。如果您希望将这些变化反映到场景中，就需要调用 `updateMatrixWorld` 函数。

#### Returns

[`Camera`](Camera.md)

#### Overrides

[Object3D](Object3D.md).[updateMatrixWorld](Object3D.md#updatematrixworld)

#### Defined in

[cameras/Camera.ts:327](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;327)

___

### updateProjectionMatrix

▸ **updateProjectionMatrix**(): `void`

更新摄像机投影矩阵，必须由子类实现

#### Returns

`void`

#### Defined in

[cameras/Camera.ts:391](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;b6d63c9#line&#x3D;391)
