---
id: "ProjectionMatrix"
title: "Class: ProjectionMatrix"
sidebar_label: "ProjectionMatrix"
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

- [`Matrix4`](Matrix4.md)

  ↳ **`ProjectionMatrix`**

## Constructors

### constructor

• **new ProjectionMatrix**(`m00?`, `m01?`, `m02?`, `m03?`, `m10?`, `m11?`, `m12?`, `m13?`, `m20?`, `m21?`, `m22?`, `m23?`, `m30?`, `m31?`, `m32?`, `m33?`)

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

#### Inherited from

[Matrix4](Matrix4.md).[constructor](Matrix4.md#constructor)

#### Defined in

[src/math/Matrix4.ts:77](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L77)

## Properties

### elements

• **elements**: `Float32Array` \| `Float64Array`

#### Inherited from

[Matrix4](Matrix4.md).[elements](Matrix4.md#elements)

#### Defined in

[src/math/Matrix4.ts:57](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L57)

## Accessors

### w

• `get` **w**(): `number`

获取向量 w 值

#### Returns

`number`

number;

#### Inherited from

Matrix4.w

#### Defined in

[src/math/Matrix4.ts:147](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L147)

___

### x

• `get` **x**(): `number`

获取向量 x 值

#### Returns

`number`

number;

#### Inherited from

Matrix4.x

#### Defined in

[src/math/Matrix4.ts:123](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L123)

___

### y

• `get` **y**(): `number`

获取向量 y 值

#### Returns

`number`

number;

#### Inherited from

Matrix4.y

#### Defined in

[src/math/Matrix4.ts:131](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L131)

___

### z

• `get` **z**(): `number`

获取向量 z 值

#### Returns

`number`

number;

#### Inherited from

Matrix4.z

#### Defined in

[src/math/Matrix4.ts:139](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L139)

___

### identity

• `Static` `get` **identity**(): [`Matrix4`](Matrix4.md)

获取单位矩阵

#### Returns

[`Matrix4`](Matrix4.md)

#### Inherited from

Matrix4.identity

#### Defined in

[src/math/Matrix4.ts:154](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L154)

## Methods

### add

▸ **add**(`a`, `b?`): [`ProjectionMatrix`](ProjectionMatrix.md)

将两个 Matrix4 矩阵相加

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4`](Matrix4.md) |  |
| `b?` | [`Matrix4`](Matrix4.md) | 如果不传，计算 this 和 a 的和 |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

this

#### Inherited from

[Matrix4](Matrix4.md).[add](Matrix4.md#add)

#### Defined in

[src/math/Matrix4.ts:224](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L224)

___

### adjoint

▸ **adjoint**(`m?`): [`ProjectionMatrix`](ProjectionMatrix.md)

计算此矩阵的伴随矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`ProjectionMatrix`](ProjectionMatrix.md) | 默认为当前实例 |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[adjoint](Matrix4.md#adjoint)

#### Defined in

[src/math/Matrix4.ts:205](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L205)

___

### clone

▸ **clone**(): [`Matrix4`](Matrix4.md)

从此矩阵创建一个新的 4*4 矩阵

#### Returns

[`Matrix4`](Matrix4.md)

a new Matrix4

#### Inherited from

[Matrix4](Matrix4.md).[clone](Matrix4.md#clone)

#### Defined in

[src/math/Matrix4.ts:528](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L528)

___

### compose

▸ **compose**(`v`, `q`, `s`): [`ProjectionMatrix`](ProjectionMatrix.md)

从四元数旋转、平移和缩放创建矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |
| `q` | [`Quaternion`](Quaternion.md) |
| `s` | [`Vector3`](Vector3.md) |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[compose](Matrix4.md#compose)

#### Defined in

[src/math/Matrix4.ts:498](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L498)

___

### copy

▸ **copy**(`m`): [`ProjectionMatrix`](ProjectionMatrix.md)

将传入的 Matrix4 复制到此矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Matrix4`](Matrix4.md) | 源矩阵 |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

this

#### Inherited from

[Matrix4](Matrix4.md).[copy](Matrix4.md#copy)

#### Defined in

[src/math/Matrix4.ts:519](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L519)

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

#### Inherited from

[Matrix4](Matrix4.md).[decompose](Matrix4.md#decompose)

#### Defined in

[src/math/Matrix4.ts:506](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L506)

___

### determinant

▸ **determinant**(): `any`

计算行列式

#### Returns

`any`

#### Inherited from

[Matrix4](Matrix4.md).[determinant](Matrix4.md#determinant)

#### Defined in

[src/math/Matrix4.ts:214](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L214)

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

#### Inherited from

[Matrix4](Matrix4.md).[equals](Matrix4.md#equals)

#### Defined in

[src/math/Matrix4.ts:431](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L431)

___

### fromArray

▸ **fromArray**(`array`, `offset?`): [`ProjectionMatrix`](ProjectionMatrix.md)

从数组构建矩阵

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `any` | `undefined` | 原始数组 |
| `offset` | `number` | `0` | 数组偏移量 |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[fromArray](Matrix4.md#fromarray)

#### Defined in

[src/math/Matrix.ts:15](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix.ts#L15)

___

### fromOrthogonal

▸ **fromOrthogonal**(`left`, `right`, `bottom`, `top`, `near`, `far`): [`ProjectionMatrix`](ProjectionMatrix.md)

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

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[fromOrthogonal](Matrix4.md#fromorthogonal)

#### Defined in

[src/math/Matrix4.ts:413](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L413)

___

### fromPerspective

▸ **fromPerspective**(`fov`, `aspect`, `near`, `far`): [`ProjectionMatrix`](ProjectionMatrix.md)

创建一个透视投影矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `fov` | `any` |
| `aspect` | `any` |
| `near` | `any` |
| `far` | `any` |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[fromPerspective](Matrix4.md#fromperspective)

#### Defined in

[src/math/Matrix4.ts:399](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L399)

___

### fromQuat

▸ **fromQuat**(`q`): [`ProjectionMatrix`](ProjectionMatrix.md)

从给定的四元数计算矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[fromQuat](Matrix4.md#fromquat)

#### Defined in

[src/math/Matrix4.ts:422](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L422)

___

### fromRotation

▸ **fromRotation**(`rad`, `axis`): [`ProjectionMatrix`](ProjectionMatrix.md)

从给定轴和旋转角度创建矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rad` | `number` | 弧度 |
| `axis` | `any` | 轴 |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[fromRotation](Matrix4.md#fromrotation)

#### Defined in

[src/math/Matrix4.ts:341](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L341)

___

### fromRotationTranslation

▸ **fromRotationTranslation**(`quat`, `v`): [`ProjectionMatrix`](ProjectionMatrix.md)

从平移向量和四元数计算矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `quat` | [`Quaternion`](Quaternion.md) |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[fromRotationTranslation](Matrix4.md#fromrotationtranslation)

#### Defined in

[src/math/Matrix4.ts:387](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L387)

___

### fromRotationX

▸ **fromRotationX**(`rad`): [`ProjectionMatrix`](ProjectionMatrix.md)

从绕 X 轴的给定角度创建矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `rad` | `number` |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[fromRotationX](Matrix4.md#fromrotationx)

#### Defined in

[src/math/Matrix4.ts:350](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L350)

___

### fromRotationY

▸ **fromRotationY**(`rad`): [`ProjectionMatrix`](ProjectionMatrix.md)

从绕 Y 轴的给定角度创建矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `rad` | `number` |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[fromRotationY](Matrix4.md#fromrotationy)

#### Defined in

[src/math/Matrix4.ts:359](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L359)

___

### fromRotationZ

▸ **fromRotationZ**(`rad`): [`ProjectionMatrix`](ProjectionMatrix.md)

从绕 Z 轴的给定角度创建矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `rad` | `any` |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[fromRotationZ](Matrix4.md#fromrotationz)

#### Defined in

[src/math/Matrix4.ts:368](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L368)

___

### fromScale

▸ **fromScale**(`vec`): [`ProjectionMatrix`](ProjectionMatrix.md)

从缩放向量计算矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector3`](Vector3.md) |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[fromScale](Matrix4.md#fromscale)

#### Defined in

[src/math/Matrix4.ts:377](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L377)

___

### fromTranslation

▸ **fromTranslation**(`vec`): [`ProjectionMatrix`](ProjectionMatrix.md)

从平移向量创建矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector3`](Vector3.md) |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[fromTranslation](Matrix4.md#fromtranslation)

#### Defined in

[src/math/Matrix4.ts:331](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L331)

___

### frustum

▸ **frustum**(`mat4`, `left`, `right`, `top`, `bottom`, `near`, `far`): [`ProjectionMatrix`](ProjectionMatrix.md)

一般用于生成相机的视椎体，用来做视椎剔除加速渲染

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat4` | `any` |
| `left` | `any` |
| `right` | `any` |
| `top` | `any` |
| `bottom` | `any` |
| `near` | `any` |
| `far` | `any` |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Defined in

[src/math/ProjectionMatrix.ts:17](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/ProjectionMatrix.ts#L17)

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

#### Inherited from

[Matrix4](Matrix4.md).[getRotation](Matrix4.md#getrotation)

#### Defined in

[src/math/Matrix4.ts:439](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L439)

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

#### Inherited from

[Matrix4](Matrix4.md).[getScale](Matrix4.md#getscale)

#### Defined in

[src/math/Matrix4.ts:449](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L449)

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

#### Inherited from

[Matrix4](Matrix4.md).[getTranslation](Matrix4.md#gettranslation)

#### Defined in

[src/math/Matrix4.ts:459](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L459)

___

### invert

▸ **invert**(`m?`): [`ProjectionMatrix`](ProjectionMatrix.md)

将此矩阵转换为逆矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`ProjectionMatrix`](ProjectionMatrix.md) | 默认为当前实例 |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

Matrix4

#### Inherited from

[Matrix4](Matrix4.md).[invert](Matrix4.md#invert)

#### Defined in

[src/math/Matrix4.ts:196](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L196)

___

### lookAt

▸ **lookAt**(`eye`, `target?`, `up?`): [`ProjectionMatrix`](ProjectionMatrix.md)

设置物体的朝向

#### Parameters

| Name | Type |
| :------ | :------ |
| `eye` | `any` |
| `target` | [`Vector3`](Vector3.md) |
| `up` | [`Vector3`](Vector3.md) |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Defined in

[src/math/ProjectionMatrix.ts:54](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/ProjectionMatrix.ts#L54)

___

### multiply

▸ **multiply**(`a`, `b?`): [`ProjectionMatrix`](ProjectionMatrix.md)

计算两个 Matrix4 矩阵的乘积

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4`](Matrix4.md) |  |
| `b?` | [`Matrix4`](Matrix4.md) | 如果不传，计算 this 和 a 的乘积 |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

this

#### Inherited from

[Matrix4](Matrix4.md).[multiply](Matrix4.md#multiply)

#### Defined in

[src/math/Matrix4.ts:255](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L255)

___

### multiplyScalar

▸ **multiplyScalar**(`a?`, `b?`): [`ProjectionMatrix`](ProjectionMatrix.md)

计算 Matrix4 与标量的乘积

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4`](Matrix4.md) | 如果不传，计算 this 和 b 的乘积 |
| `b?` | `number` |  |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[multiplyScalar](Matrix4.md#multiplyscalar)

#### Defined in

[src/math/Matrix4.ts:269](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L269)

___

### orthographic

▸ **orthographic**(`left`, `right`, `top`, `bottom`, `near`, `far`): [`ProjectionMatrix`](ProjectionMatrix.md)

生成平面相机投影矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `any` |
| `right` | `any` |
| `top` | `any` |
| `bottom` | `any` |
| `near` | `any` |
| `far` | `any` |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Defined in

[src/math/ProjectionMatrix.ts:31](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/ProjectionMatrix.ts#L31)

___

### perspective

▸ **perspective**(`fovy`, `aspect`, `near`, `far`): [`ProjectionMatrix`](ProjectionMatrix.md)

生成透视相机投影矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `fovy` | `any` |
| `aspect` | `any` |
| `near` | `any` |
| `far` | `any` |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Defined in

[src/math/ProjectionMatrix.ts:43](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/ProjectionMatrix.ts#L43)

___

### premultiply

▸ **premultiply**(`a`, `b?`): [`ProjectionMatrix`](ProjectionMatrix.md)

左乘

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4`](Matrix4.md) |  |
| `b?` | [`Matrix4`](Matrix4.md) | 如果不传，计算 this 和 a 的左乘 |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

this

#### Inherited from

[Matrix4](Matrix4.md).[premultiply](Matrix4.md#premultiply)

#### Defined in

[src/math/Matrix4.ts:280](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L280)

___

### rotate

▸ **rotate**(`rad`): [`ProjectionMatrix`](ProjectionMatrix.md)

旋转此矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rad` | `number` | 弧度 |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

this

#### Inherited from

[Matrix4](Matrix4.md).[rotate](Matrix4.md#rotate)

#### Defined in

[src/math/Matrix4.ts:304](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L304)

___

### rotateX

▸ **rotateX**(`rad`): [`ProjectionMatrix`](ProjectionMatrix.md)

围绕 X 轴按给定弧度旋转矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `rad` | `any` |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[rotateX](Matrix4.md#rotatex)

#### Defined in

[src/math/Matrix4.ts:469](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L469)

___

### rotateY

▸ **rotateY**(`rad`): [`ProjectionMatrix`](ProjectionMatrix.md)

围绕 Y 轴按给定弧度旋转矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `rad` | `any` |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[rotateY](Matrix4.md#rotatey)

#### Defined in

[src/math/Matrix4.ts:478](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L478)

___

### rotateZ

▸ **rotateZ**(`rad`): [`ProjectionMatrix`](ProjectionMatrix.md)

围绕 Z 轴按给定弧度旋转矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `rad` | `any` |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[rotateZ](Matrix4.md#rotatez)

#### Defined in

[src/math/Matrix4.ts:487](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L487)

___

### scale

▸ **scale**(`vec3`): [`ProjectionMatrix`](ProjectionMatrix.md)

通过给定的 Vector3 向量缩放此矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec3` | [`Vector3`](Vector3.md) |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[scale](Matrix4.md#scale)

#### Defined in

[src/math/Matrix4.ts:313](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L313)

___

### scaleScalar

▸ **scaleScalar**(`s`): [`ProjectionMatrix`](ProjectionMatrix.md)

通过标量 s 缩放此矩阵，默认在内部构建一个三维向量 [s, s, s]

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[scaleScalar](Matrix4.md#scalescalar)

#### Defined in

[src/math/Matrix4.ts:322](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L322)

___

### set

▸ **set**(`m00`, `m01`, `m02`, `m03`, `m10`, `m11`, `m12`, `m13`, `m20`, `m21`, `m22`, `m23`, `m30`, `m31`, `m32`, `m33`): [`ProjectionMatrix`](ProjectionMatrix.md)

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

[`ProjectionMatrix`](ProjectionMatrix.md)

#### Inherited from

[Matrix4](Matrix4.md).[set](Matrix4.md#set)

#### Defined in

[src/math/Matrix4.ts:177](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L177)

___

### subtract

▸ **subtract**(`a`, `b?`): [`ProjectionMatrix`](ProjectionMatrix.md)

将两个 Matrix4 矩阵相减

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4`](Matrix4.md) |  |
| `b?` | [`Matrix4`](Matrix4.md) | 如果不传，计算 this 和 a 的差 |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

this

#### Inherited from

[Matrix4](Matrix4.md).[subtract](Matrix4.md#subtract)

#### Defined in

[src/math/Matrix4.ts:240](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L240)

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

[Matrix4](Matrix4.md).[toArray](Matrix4.md#toarray)

#### Defined in

[src/math/Matrix.ts:28](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix.ts#L28)

___

### toString

▸ **toString**(): `string`

转换为字符串

#### Returns

`string`

#### Overrides

[Matrix4](Matrix4.md).[toString](Matrix4.md#tostring)

#### Defined in

[src/math/ProjectionMatrix.ts:62](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/ProjectionMatrix.ts#L62)

___

### translate

▸ **translate**(`v`): [`ProjectionMatrix`](ProjectionMatrix.md)

通过给定的向量 Vector3 平移此矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | 向量 |

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

this

#### Inherited from

[Matrix4](Matrix4.md).[translate](Matrix4.md#translate)

#### Defined in

[src/math/Matrix4.ts:294](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L294)

___

### transpose

▸ **transpose**(): [`ProjectionMatrix`](ProjectionMatrix.md)

将此矩阵转换为转置矩阵

#### Returns

[`ProjectionMatrix`](ProjectionMatrix.md)

this

#### Inherited from

[Matrix4](Matrix4.md).[transpose](Matrix4.md#transpose)

#### Defined in

[src/math/Matrix4.ts:186](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/math/Matrix4.ts#L186)
