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

• **new Matrix4**(`m00?`, `m01?`, `m02?`, `m03?`, `m10?`, `m11?`, `m12?`, `m13?`, `m20?`, `m21?`, `m22?`, `m23?`, `m30?`, `m31?`, `m32?`, `m33?`): [`Matrix4`](Matrix4.md)

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

#### Returns

[`Matrix4`](Matrix4.md)

#### Overrides

Matrix.constructor

#### Defined in

[src/math/Matrix4.ts:77](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L77)

## Properties

### elements

• **elements**: `Float32Array` \| `Float64Array`

#### Overrides

Matrix.elements

#### Defined in

[src/math/Matrix4.ts:57](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L57)

## Accessors

### x

• `get` **x**(): `number`

获取向量 x 值

#### Returns

`number`

number;

#### Defined in

[src/math/Matrix4.ts:123](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L123)

___

### y

• `get` **y**(): `number`

获取向量 y 值

#### Returns

`number`

number;

#### Defined in

[src/math/Matrix4.ts:131](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L131)

___

### z

• `get` **z**(): `number`

获取向量 z 值

#### Returns

`number`

number;

#### Defined in

[src/math/Matrix4.ts:139](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L139)

___

### w

• `get` **w**(): `number`

获取向量 w 值

#### Returns

`number`

number;

#### Defined in

[src/math/Matrix4.ts:147](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L147)

___

### identity

• `get` **identity**(): [`Matrix4`](Matrix4.md)

获取单位矩阵

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/math/Matrix4.ts:154](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L154)

## Methods

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

[src/math/Matrix.ts:15](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix.ts#L15)

___

### toArray

▸ **toArray**(`out?`, `offset?`): `Float32Array` \| `Float64Array` \| `number`[]

从矩阵转换到数组

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `out` | `Float32Array` \| `Float64Array` \| `number`[] | `[]` | 输出数据 |
| `offset` | `number` | `0` | 偏移量 |

#### Returns

`Float32Array` \| `Float64Array` \| `number`[]

#### Inherited from

Matrix.toArray

#### Defined in

[src/math/Matrix.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix.ts#L28)

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

[src/math/Matrix4.ts:177](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L177)

___

### transpose

▸ **transpose**(): [`Matrix4`](Matrix4.md)

将此矩阵转换为转置矩阵

#### Returns

[`Matrix4`](Matrix4.md)

this

#### Defined in

[src/math/Matrix4.ts:186](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L186)

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

[src/math/Matrix4.ts:196](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L196)

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

[src/math/Matrix4.ts:205](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L205)

___

### determinant

▸ **determinant**(): `any`

计算行列式

#### Returns

`any`

#### Defined in

[src/math/Matrix4.ts:214](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L214)

___

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

[src/math/Matrix4.ts:224](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L224)

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

[src/math/Matrix4.ts:240](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L240)

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

[src/math/Matrix4.ts:255](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L255)

___

### multiplyScalar

▸ **multiplyScalar**(`a?`, `b?`): [`Matrix4`](Matrix4.md)

计算 Matrix4 与标量的乘积

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4`](Matrix4.md) | 如果不传，计算 this 和 b 的乘积 |
| `b?` | `number` |  |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/math/Matrix4.ts:269](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L269)

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

[src/math/Matrix4.ts:280](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L280)

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

[src/math/Matrix4.ts:294](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L294)

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

[src/math/Matrix4.ts:304](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L304)

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

[src/math/Matrix4.ts:313](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L313)

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

[src/math/Matrix4.ts:322](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L322)

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

[src/math/Matrix4.ts:331](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L331)

___

### fromRotation

▸ **fromRotation**(`rad`, `axis`): [`Matrix4`](Matrix4.md)

从给定轴和旋转角度创建矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rad` | `number` | 弧度 |
| `axis` | `any` | 轴 |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/math/Matrix4.ts:341](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L341)

___

### fromRotationX

▸ **fromRotationX**(`rad`): [`Matrix4`](Matrix4.md)

从绕 X 轴的给定角度创建矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `rad` | `number` |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/math/Matrix4.ts:350](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L350)

___

### fromRotationY

▸ **fromRotationY**(`rad`): [`Matrix4`](Matrix4.md)

从绕 Y 轴的给定角度创建矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `rad` | `number` |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/math/Matrix4.ts:359](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L359)

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

[src/math/Matrix4.ts:368](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L368)

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

[src/math/Matrix4.ts:377](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L377)

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

[src/math/Matrix4.ts:387](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L387)

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

[src/math/Matrix4.ts:399](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L399)

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

[src/math/Matrix4.ts:413](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L413)

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

[src/math/Matrix4.ts:422](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L422)

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

[src/math/Matrix4.ts:431](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L431)

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

[src/math/Matrix4.ts:439](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L439)

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

[src/math/Matrix4.ts:449](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L449)

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

[src/math/Matrix4.ts:459](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L459)

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

[src/math/Matrix4.ts:469](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L469)

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

[src/math/Matrix4.ts:478](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L478)

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

[src/math/Matrix4.ts:487](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L487)

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

[src/math/Matrix4.ts:498](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L498)

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

[src/math/Matrix4.ts:506](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L506)

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

[src/math/Matrix4.ts:519](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L519)

___

### clone

▸ **clone**(): [`Matrix4`](Matrix4.md)

从此矩阵创建一个新的 4*4 矩阵

#### Returns

[`Matrix4`](Matrix4.md)

a new Matrix4

#### Defined in

[src/math/Matrix4.ts:528](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L528)

___

### toString

▸ **toString**(): `string`

转换为字符串

#### Returns

`string`

#### Defined in

[src/math/Matrix4.ts:535](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix4.ts#L535)
