---
id: "Matrix4"
title: "Class: Matrix4"
sidebar_label: "Matrix4"
sidebar_position: 0
custom_edit_url: null
---

一个表示 4*4 的矩阵
1--0--0--0
|  |  |  |
0--1--0--0
|  |  |  |
0--0--1--0
|  |  |  |
0--0--0--1
```ts
const m = new Matrix4();
```

## Hierarchy

- `default`

  ↳ **`Matrix4`**

  ↳↳ [`ProjectionMatrix`](ProjectionMatrix.md)

## Constructors

### constructor

• **new Matrix4**(`m00?`, `m01?`, `m02?`, `m03?`, `m10?`, `m11?`, `m12?`, `m13?`, `m20?`, `m21?`, `m22?`, `m23?`, `m30?`, `m31?`, `m32?`, `m33?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `m00` | `number` | `1` | 第一行第一列，默认是 1 |
| `m01` | `number` | `0` | 第一行第二列，默认是 0 |
| `m02` | `number` | `0` | 第一行第三列，默认是 0 |
| `m03` | `number` | `0` | 第一行第四列，默认是 0 |
| `m10` | `number` | `0` | 第二行第一列，默认是 0 |
| `m11` | `number` | `1` | 第二行第二列，默认是 1 |
| `m12` | `number` | `0` | 第二行第三列，默认是 0 |
| `m13` | `number` | `0` | 第二行第四列，默认是 0 |
| `m20` | `number` | `0` | 第三行第一列，默认是 0 |
| `m21` | `number` | `0` | 第三行第二列，默认是 0 |
| `m22` | `number` | `1` | 第三行第三列，默认是 1 |
| `m23` | `number` | `0` | 第三行第四列，默认是 0 |
| `m30` | `number` | `0` | 第四行第一列，默认是 0 |
| `m31` | `number` | `0` | 第四行第二列，默认是 0 |
| `m32` | `number` | `0` | 第四行第三列，默认是 0 |
| `m33` | `number` | `1` | 第四行第四列，默认是 1 |

#### Overrides

Matrix.constructor

#### Defined in

[math/Matrix4.ts:78](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;78)

## Properties

### elements

• **elements**: `Float32Array`

#### Overrides

Matrix.elements

#### Defined in

[math/Matrix4.ts:58](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;58)

## Accessors

### w

• `get` **w**(): `number`

获取向量 w 值

#### Returns

`number`

number;

#### Defined in

[math/Matrix4.ts:148](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;148)

___

### x

• `get` **x**(): `number`

获取向量 x 值

#### Returns

`number`

number;

#### Defined in

[math/Matrix4.ts:124](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;124)

___

### y

• `get` **y**(): `number`

获取向量 y 值

#### Returns

`number`

number;

#### Defined in

[math/Matrix4.ts:132](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;132)

___

### z

• `get` **z**(): `number`

获取向量 z 值

#### Returns

`number`

number;

#### Defined in

[math/Matrix4.ts:140](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;140)

___

### identity

• `Static` `get` **identity**(): [`Matrix4`](Matrix4.md)

获取单位矩阵

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:155](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;155)

## Methods

### add

▸ **add**(`a`, `b?`): [`Matrix4`](Matrix4.md)

将两个 Matrix4 矩阵相加

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4`](Matrix4.md) |  |
| `b?` | [`Matrix4`](Matrix4.md) | 如果不传，计算 this 和 a 的和 |

#### Returns

[`Matrix4`](Matrix4.md)

this

#### Defined in

[math/Matrix4.ts:225](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;225)

___

### adjoint

▸ **adjoint**(`m?`): [`Matrix4`](Matrix4.md)

计算此矩阵的伴随矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Matrix4`](Matrix4.md) | 默认为当前实例 |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:206](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;206)

___

### clone

▸ **clone**(): [`Matrix4`](Matrix4.md)

从此矩阵创建一个新的 4*4 矩阵

#### Returns

[`Matrix4`](Matrix4.md)

a new Matrix4

#### Defined in

[math/Matrix4.ts:529](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;529)

___

### compose

▸ **compose**(`v`, `q`, `s`): [`Matrix4`](Matrix4.md)

从四元数旋转、平移和缩放创建矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |
| `q` | [`Quaternion`](Quaternion.md) |
| `s` | [`Vector3`](Vector3.md) |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:499](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;499)

___

### copy

▸ **copy**(`m`): [`Matrix4`](Matrix4.md)

将传入的 Matrix4 复制到此矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Matrix4`](Matrix4.md) | 源矩阵 |

#### Returns

[`Matrix4`](Matrix4.md)

this

#### Defined in

[math/Matrix4.ts:520](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;520)

___

### decompose

▸ **decompose**(): `Object`

从矩阵转换到四元数、平移和缩放向量

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `rotation` | [`Quaternion`](Quaternion.md) |
| `scale` | [`Vector3`](Vector3.md) |
| `translation` | [`Vector3`](Vector3.md) |

#### Defined in

[math/Matrix4.ts:507](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;507)

___

### determinant

▸ **determinant**(): `any`

计算行列式

#### Returns

`any`

#### Defined in

[math/Matrix4.ts:215](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;215)

___

### equals

▸ **equals**(`mat4`): `any`

判断两个矩阵是否近似相等

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat4` | `any` |

#### Returns

`any`

#### Defined in

[math/Matrix4.ts:432](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;432)

___

### fromArray

▸ **fromArray**(`array`, `offset?`): [`Matrix4`](Matrix4.md)

从数组构建矩阵

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `any` | `undefined` | 原始数组 |
| `offset` | `number` | `0` | 数组偏移量 |

#### Returns

[`Matrix4`](Matrix4.md)

#### Inherited from

Matrix.fromArray

#### Defined in

[math/Matrix.ts:13](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix.ts?at&#x3D;1f0fb3d#line&#x3D;13)

___

### fromOrthogonal

▸ **fromOrthogonal**(`left`, `right`, `bottom`, `top`, `near`, `far`): [`Matrix4`](Matrix4.md)

创建一个正交投影矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `any` |
| `right` | `any` |
| `bottom` | `any` |
| `top` | `any` |
| `near` | `any` |
| `far` | `any` |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:414](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;414)

___

### fromPerspective

▸ **fromPerspective**(`fov`, `aspect`, `near`, `far`): [`Matrix4`](Matrix4.md)

创建一个透视投影矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `fov` | `any` |
| `aspect` | `any` |
| `near` | `any` |
| `far` | `any` |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:400](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;400)

___

### fromQuat

▸ **fromQuat**(`q`): [`Matrix4`](Matrix4.md)

从给定的四元数计算矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:423](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;423)

___

### fromRotation

▸ **fromRotation**(`rad`, `axis`): [`Matrix4`](Matrix4.md)

从给定轴和旋转角度创建矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rad` | `any` | 弧度 |
| `axis` | `any` | 轴 |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:342](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;342)

___

### fromRotationTranslation

▸ **fromRotationTranslation**(`quat`, `v`): [`Matrix4`](Matrix4.md)

从平移向量和四元数计算矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `quat` | [`Quaternion`](Quaternion.md) |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:388](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;388)

___

### fromRotationX

▸ **fromRotationX**(`rad`): [`Matrix4`](Matrix4.md)

从绕 X 轴的给定角度创建矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `rad` | `any` |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:351](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;351)

___

### fromRotationY

▸ **fromRotationY**(`rad`): [`Matrix4`](Matrix4.md)

从绕 Y 轴的给定角度创建矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `rad` | `any` |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:360](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;360)

___

### fromRotationZ

▸ **fromRotationZ**(`rad`): [`Matrix4`](Matrix4.md)

从绕 Z 轴的给定角度创建矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `rad` | `any` |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:369](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;369)

___

### fromScale

▸ **fromScale**(`vec`): [`Matrix4`](Matrix4.md)

从缩放向量计算矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector3`](Vector3.md) |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:378](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;378)

___

### fromTranslation

▸ **fromTranslation**(`vec`): [`Matrix4`](Matrix4.md)

从平移向量创建矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector3`](Vector3.md) |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:332](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;332)

___

### getRotation

▸ **getRotation**(`q?`): [`Quaternion`](Quaternion.md)

获取旋转向量

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[math/Matrix4.ts:440](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;440)

___

### getScale

▸ **getScale**(`v?`): [`Vector3`](Vector3.md)

获取缩放向量

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[math/Matrix4.ts:450](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;450)

___

### getTranslation

▸ **getTranslation**(`v?`): [`Vector3`](Vector3.md)

获取平移向量

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[math/Matrix4.ts:460](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;460)

___

### invert

▸ **invert**(`m?`): [`Matrix4`](Matrix4.md)

将此矩阵转换为逆矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Matrix4`](Matrix4.md) | 默认为当前实例 |

#### Returns

[`Matrix4`](Matrix4.md)

Matrix4

#### Defined in

[math/Matrix4.ts:197](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;197)

___

### multiply

▸ **multiply**(`a`, `b?`): [`Matrix4`](Matrix4.md)

计算两个 Matrix4 矩阵的乘积

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4`](Matrix4.md) |  |
| `b?` | [`Matrix4`](Matrix4.md) | 如果不传，计算 this 和 a 的乘积 |

#### Returns

[`Matrix4`](Matrix4.md)

this

#### Defined in

[math/Matrix4.ts:256](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;256)

___

### multiplyScalar

▸ **multiplyScalar**(`a?`, `b`): [`Matrix4`](Matrix4.md)

计算 Matrix4 与标量的乘积

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4`](Matrix4.md) | 如果不传，计算 this 和 b 的乘积 |
| `b` | `number` |  |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:270](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;270)

___

### premultiply

▸ **premultiply**(`a`, `b?`): [`Matrix4`](Matrix4.md)

左乘

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4`](Matrix4.md) |  |
| `b?` | [`Matrix4`](Matrix4.md) | 如果不传，计算 this 和 a 的左乘 |

#### Returns

[`Matrix4`](Matrix4.md)

this

#### Defined in

[math/Matrix4.ts:281](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;281)

___

### rotate

▸ **rotate**(`rad`): [`Matrix4`](Matrix4.md)

旋转此矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rad` | `number` | 弧度 |

#### Returns

[`Matrix4`](Matrix4.md)

this

#### Defined in

[math/Matrix4.ts:305](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;305)

___

### rotateX

▸ **rotateX**(`rad`): [`Matrix4`](Matrix4.md)

围绕 X 轴按给定弧度旋转矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `rad` | `any` |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:470](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;470)

___

### rotateY

▸ **rotateY**(`rad`): [`Matrix4`](Matrix4.md)

围绕 Y 轴按给定弧度旋转矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `rad` | `any` |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:479](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;479)

___

### rotateZ

▸ **rotateZ**(`rad`): [`Matrix4`](Matrix4.md)

围绕 Z 轴按给定弧度旋转矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `rad` | `any` |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:488](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;488)

___

### scale

▸ **scale**(`vec3`): [`Matrix4`](Matrix4.md)

通过给定的 Vector3 向量缩放此矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec3` | [`Vector3`](Vector3.md) |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:314](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;314)

___

### scaleScalar

▸ **scaleScalar**(`s`): [`Matrix4`](Matrix4.md)

通过标量 s 缩放此矩阵，默认在内部构建一个三维向量 [s, s, s]

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:323](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;323)

___

### set

▸ **set**(`m00`, `m01`, `m02`, `m03`, `m10`, `m11`, `m12`, `m13`, `m20`, `m21`, `m22`, `m23`, `m30`, `m31`, `m32`, `m33`): [`Matrix4`](Matrix4.md)

将此矩阵的每一项设置为给定的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `m00` | `any` |
| `m01` | `any` |
| `m02` | `any` |
| `m03` | `any` |
| `m10` | `any` |
| `m11` | `any` |
| `m12` | `any` |
| `m13` | `any` |
| `m20` | `any` |
| `m21` | `any` |
| `m22` | `any` |
| `m23` | `any` |
| `m30` | `any` |
| `m31` | `any` |
| `m32` | `any` |
| `m33` | `any` |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[math/Matrix4.ts:178](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;178)

___

### subtract

▸ **subtract**(`a`, `b?`): [`Matrix4`](Matrix4.md)

将两个 Matrix4 矩阵相减

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4`](Matrix4.md) |  |
| `b?` | [`Matrix4`](Matrix4.md) | 如果不传，计算 this 和 a 的差 |

#### Returns

[`Matrix4`](Matrix4.md)

this

#### Defined in

[math/Matrix4.ts:241](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;241)

___

### toArray

▸ **toArray**(`out?`, `offset?`): `Float32Array` \| `number`[]

从矩阵转换到数组

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `out` | `Float32Array` \| `number`[] | `[]` | 输出数据 |
| `offset` | `number` | `0` | 偏移量 |

#### Returns

`Float32Array` \| `number`[]

#### Inherited from

Matrix.toArray

#### Defined in

[math/Matrix.ts:26](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix.ts?at&#x3D;1f0fb3d#line&#x3D;26)

___

### toString

▸ **toString**(): `any`

转换为字符串

#### Returns

`any`

#### Defined in

[math/Matrix4.ts:536](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;536)

___

### translate

▸ **translate**(`v`): [`Matrix4`](Matrix4.md)

通过给定的向量 Vector3 平移此矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | 向量 |

#### Returns

[`Matrix4`](Matrix4.md)

this

#### Defined in

[math/Matrix4.ts:295](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;295)

___

### transpose

▸ **transpose**(): [`Matrix4`](Matrix4.md)

将此矩阵转换为转置矩阵

#### Returns

[`Matrix4`](Matrix4.md)

this

#### Defined in

[math/Matrix4.ts:187](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts?at&#x3D;1f0fb3d#line&#x3D;187)
