---
id: "PerspectiveCamera"
title: "Class: PerspectiveCamera"
sidebar_label: "PerspectiveCamera"
sidebar_position: 0
custom_edit_url: null
---

透视相机

代码示例：
```ts
const camera = new PerspectiveCamera(45, width / height, 1, 1000)
scene.add(camera);
```

## Hierarchy

- [`Camera`](Camera.md)

  ↳ **`PerspectiveCamera`**

## Constructors

### constructor

• **new PerspectiveCamera**(`fov`, `aspect`, `near`, `far`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fov` | `any` |
| `aspect` | `any` |
| `near` | `any` |
| `far` | `any` |

#### Overrides

[Camera](Camera.md).[constructor](Camera.md#constructor)

#### Defined in

[cameras/PerspectiveCamera.ts:13](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/PerspectiveCamera.ts?at&#x3D;8558d24#line&#x3D;13)

## Properties

### aspect

• **aspect**: `number`

相机视锥体的纵横比

#### Inherited from

[Camera](Camera.md).[aspect](Camera.md#aspect)

#### Defined in

[cameras/Camera.ts:117](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;117)

___

### bounds

• **bounds**: `WithUndef`<[`Bounds`](../#bounds)\>

像机视锥体配置

#### Inherited from

[Camera](Camera.md).[bounds](Camera.md#bounds)

#### Defined in

[cameras/Camera.ts:127](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;127)

___

### cameraType

• **cameraType**: [`CameraType`](../#cameratype)

相机类型（默认有两种相机：perspective和orthographic）

#### Inherited from

[Camera](Camera.md).[cameraType](Camera.md#cameratype)

#### Defined in

[cameras/Camera.ts:77](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;77)

___

### children

• **children**: [`Object3D`](Object3D.md)[]

#### Inherited from

[Camera](Camera.md).[children](Camera.md#children)

#### Defined in

[objects/Object3D.ts:39](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;39)

___

### far

• **far**: `number`

像机的远端面，默认值是 100

#### Inherited from

[Camera](Camera.md).[far](Camera.md#far)

#### Defined in

[cameras/Camera.ts:107](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;107)

___

### fov

• **fov**: `number`

摄像机视锥体垂直视野角度，从视图的底部到顶部，以角度来表示

#### Inherited from

[Camera](Camera.md).[fov](Camera.md#fov)

#### Defined in

[cameras/Camera.ts:112](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;112)

___

### frustum

• **frustum**: [`Matrix4`](Matrix4.md)

#### Inherited from

[Camera](Camera.md).[frustum](Camera.md#frustum)

#### Defined in

[cameras/Camera.ts:129](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;129)

___

### localMatrix

• **localMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

局部变换矩阵

#### Inherited from

[Camera](Camera.md).[localMatrix](Camera.md#localmatrix)

#### Defined in

[objects/Object3D.ts:20](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;20)

___

### matrixAutoUpdate

• **matrixAutoUpdate**: `boolean`

#### Inherited from

[Camera](Camera.md).[matrixAutoUpdate](Camera.md#matrixautoupdate)

#### Defined in

[objects/Object3D.ts:27](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;27)

___

### near

• **near**: `number`

像机的近端面，默认值是0.1

#### Inherited from

[Camera](Camera.md).[near](Camera.md#near)

#### Defined in

[cameras/Camera.ts:102](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;102)

___

### parent

• **parent**: `WithNull`<[`Object3D`](Object3D.md)\>

#### Inherited from

[Camera](Camera.md).[parent](Camera.md#parent)

#### Defined in

[objects/Object3D.ts:41](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;41)

___

### position

• **position**: [`Vector3`](Vector3.md)

#### Inherited from

[Camera](Camera.md).[position](Camera.md#position)

#### Defined in

[objects/Object3D.ts:29](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;29)

___

### projectionMatrix

• **projectionMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

投影矩阵

#### Inherited from

[Camera](Camera.md).[projectionMatrix](Camera.md#projectionmatrix)

#### Defined in

[cameras/Camera.ts:82](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;82)

___

### projectionViewMatrix

• **projectionViewMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

pv矩阵，它是 `projectionMatrix`和`viewMatrix` 的乘积

#### Inherited from

[Camera](Camera.md).[projectionViewMatrix](Camera.md#projectionviewmatrix)

#### Defined in

[cameras/Camera.ts:92](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;92)

___

### quaternion

• **quaternion**: [`Quaternion`](Quaternion.md)

#### Inherited from

[Camera](Camera.md).[quaternion](Camera.md#quaternion)

#### Defined in

[objects/Object3D.ts:35](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;35)

___

### rotation

• **rotation**: [`Euler`](Euler.md)

#### Inherited from

[Camera](Camera.md).[rotation](Camera.md#rotation)

#### Defined in

[objects/Object3D.ts:33](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;33)

___

### scale

• **scale**: [`Vector3`](Vector3.md)

#### Inherited from

[Camera](Camera.md).[scale](Camera.md#scale)

#### Defined in

[objects/Object3D.ts:31](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;31)

___

### up

• **up**: [`Vector3`](Vector3.md)

#### Inherited from

[Camera](Camera.md).[up](Camera.md#up)

#### Defined in

[objects/Object3D.ts:37](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;37)

___

### viewMatrix

• **viewMatrix**: [`Matrix4`](Matrix4.md)

视图矩阵

#### Inherited from

[Camera](Camera.md).[viewMatrix](Camera.md#viewmatrix)

#### Defined in

[cameras/Camera.ts:87](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;87)

___

### visible

• **visible**: `boolean`

是否可见

#### Inherited from

[Camera](Camera.md).[visible](Camera.md#visible)

#### Defined in

[objects/Object3D.ts:15](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;15)

___

### worldMatrix

• **worldMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

物体的世界变换矩阵

#### Inherited from

[Camera](Camera.md).[worldMatrix](Camera.md#worldmatrix)

#### Defined in

[objects/Object3D.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;25)

___

### worldMatrixNeedsUpdate

• **worldMatrixNeedsUpdate**: `boolean`

#### Inherited from

[Camera](Camera.md).[worldMatrixNeedsUpdate](Camera.md#worldmatrixneedsupdate)

#### Defined in

[objects/Object3D.ts:43](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;43)

___

### worldPosition

• **worldPosition**: [`Vector3`](Vector3.md)

世界位置坐标

#### Inherited from

[Camera](Camera.md).[worldPosition](Camera.md#worldposition)

#### Defined in

[cameras/Camera.ts:97](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;97)

___

### zoom

• **zoom**: `number`

相机缩放倍数

#### Inherited from

[Camera](Camera.md).[zoom](Camera.md#zoom)

#### Defined in

[cameras/Camera.ts:122](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;122)

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

[Camera](Camera.md).[add](Camera.md#add)

#### Defined in

[objects/Object3D.ts:66](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;66)

___

### clone

▸ **clone**(): [`Object3D`](Object3D.md)

克隆此渲染对象

#### Returns

[`Object3D`](Object3D.md)

#### Inherited from

[Camera](Camera.md).[clone](Camera.md#clone)

#### Defined in

[objects/Object3D.ts:169](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;169)

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

[Camera](Camera.md).[contains](Camera.md#contains)

#### Defined in

[objects/Object3D.ts:88](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;88)

___

### copy

▸ **copy**(`object`, `recursive?`): [`PerspectiveCamera`](PerspectiveCamera.md)

复制给定的对象到这个对象中

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object3D`](Object3D.md) | 渲染对象 |
| `recursive?` | `boolean` | 设置是否复制子对象 |

#### Returns

[`PerspectiveCamera`](PerspectiveCamera.md)

#### Inherited from

[Camera](Camera.md).[copy](Camera.md#copy)

#### Defined in

[objects/Object3D.ts:178](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;178)

___

### decompose

▸ **decompose**(): `void`

#### Returns

`void`

#### Inherited from

[Camera](Camera.md).[decompose](Camera.md#decompose)

#### Defined in

[objects/Object3D.ts:159](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;159)

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

#### Inherited from

[Camera](Camera.md).[frustumIntersectsMesh](Camera.md#frustumintersectsmesh)

#### Defined in

[cameras/Camera.ts:245](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;245)

___

### lookAt

▸ **lookAt**(`t`): [`PerspectiveCamera`](PerspectiveCamera.md)

设置相机的朝向

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `any` | 朝向位置，是一个三维向量 |

#### Returns

[`PerspectiveCamera`](PerspectiveCamera.md)

#### Inherited from

[Camera](Camera.md).[lookAt](Camera.md#lookat)

#### Defined in

[cameras/Camera.ts:222](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;222)

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

#### Inherited from

[Camera](Camera.md).[orthographic](Camera.md#orthographic)

#### Defined in

[cameras/Camera.ts:197](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;197)

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

#### Inherited from

[Camera](Camera.md).[perspective](Camera.md#perspective)

#### Defined in

[cameras/Camera.ts:177](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;177)

___

### project

▸ **project**(`v`): [`PerspectiveCamera`](PerspectiveCamera.md)

转换到世界坐标

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

[`PerspectiveCamera`](PerspectiveCamera.md)

#### Inherited from

[Camera](Camera.md).[project](Camera.md#project)

#### Defined in

[cameras/Camera.ts:281](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;281)

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

[Camera](Camera.md).[remove](Camera.md#remove)

#### Defined in

[objects/Object3D.ts:75](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;75)

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

[Camera](Camera.md).[setParent](Camera.md#setparent)

#### Defined in

[objects/Object3D.ts:97](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;97)

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

[Camera](Camera.md).[traverse](Camera.md#traverse)

#### Defined in

[objects/Object3D.ts:107](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;107)

___

### unproject

▸ **unproject**(`v`): [`PerspectiveCamera`](PerspectiveCamera.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

[`PerspectiveCamera`](PerspectiveCamera.md)

#### Inherited from

[Camera](Camera.md).[unproject](Camera.md#unproject)

#### Defined in

[cameras/Camera.ts:287](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;287)

___

### updateMatrix

▸ **updateMatrix**(): `void`

更新局部变换矩阵

#### Returns

`void`

#### Inherited from

[Camera](Camera.md).[updateMatrix](Camera.md#updatematrix)

#### Defined in

[objects/Object3D.ts:154](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;8558d24#line&#x3D;154)

___

### updateMatrixWorld

▸ **updateMatrixWorld**(): [`PerspectiveCamera`](PerspectiveCamera.md)

用于更新一个对象的世界矩阵。
每个可视对象都有一个叫做 `worldMatrix` 的矩阵，表示这个对象在世界坐标系中的位置和方向。
当您修改对象的位置、旋转或缩放时，对象的 `worldMatrix` 矩阵会发生变化。如果您希望将这些变化反映到场景中，就需要调用 `updateMatrixWorld` 函数。

#### Returns

[`PerspectiveCamera`](PerspectiveCamera.md)

#### Inherited from

[Camera](Camera.md).[updateMatrixWorld](Camera.md#updatematrixworld)

#### Defined in

[cameras/Camera.ts:232](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;8558d24#line&#x3D;232)

___

### updateProjectionMatrix

▸ **updateProjectionMatrix**(): `void`

更新投影矩阵

#### Returns

`void`

#### Overrides

[Camera](Camera.md).[updateProjectionMatrix](Camera.md#updateprojectionmatrix)

#### Defined in

[cameras/PerspectiveCamera.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/PerspectiveCamera.ts?at&#x3D;8558d24#line&#x3D;25)