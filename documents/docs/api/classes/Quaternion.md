---
id: "Quaternion"
title: "Class: Quaternion"
sidebar_label: "Quaternion"
sidebar_position: 0
custom_edit_url: null
---

四元数，主要用于在三维世界描述旋转
```ts
const a = new Quaternion(0, 0, 0, 0);
```

## Hierarchy

- `default`

  ↳ **`Quaternion`**

## Constructors

### constructor

• **new Quaternion**(`x?`, `y?`, `z?`, `w?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | x 坐标，默认为 0 |
| `y` | `number` | `0` | y 坐标，默认为 0 |
| `z` | `number` | `0` | z 坐标，默认为 0 |
| `w` | `number` | `0` | w 坐标，默认为 0 |

#### Overrides

Vector.constructor

#### Defined in

[math/Quaternion.ts:45](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;45)

## Properties

### elements

• **elements**: `Float32Array`

#### Overrides

Vector.elements

#### Defined in

[math/Quaternion.ts:35](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;35)

## Accessors

### w

• `get` **w**(): `number`

获取 w 值

#### Returns

`number`

number;

#### Defined in

[math/Quaternion.ts:109](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;109)

• `set` **w**(`w`): `void`

设置 w 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `w` | `number` |

#### Returns

`void`

#### Defined in

[math/Quaternion.ts:117](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;117)

___

### x

• `get` **x**(): `number`

获取 x 值

#### Returns

`number`

number;

#### Defined in

[math/Quaternion.ts:58](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;58)

• `set` **x**(`x`): `void`

设置 x 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Defined in

[math/Quaternion.ts:66](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;66)

___

### y

• `get` **y**(): `number`

获取 y 值

#### Returns

`number`

number;

#### Defined in

[math/Quaternion.ts:75](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;75)

• `set` **y**(`y`): `void`

设置 y 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[math/Quaternion.ts:83](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;83)

___

### z

• `get` **z**(): `number`

获取 z 值

#### Returns

`number`

number;

#### Defined in

[math/Quaternion.ts:92](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;92)

• `set` **z**(`z`): `void`

设置 z 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

`void`

#### Defined in

[math/Quaternion.ts:100](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;100)

## Methods

### angleTo

▸ **angleTo**(`q`): `any`

以弧度返回该四元数与四元数 q 之间的夹角。

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) |

#### Returns

`any`

#### Defined in

[math/Quaternion.ts:268](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;268)

___

### clone

▸ **clone**(): [`Quaternion`](Quaternion.md)

创建一个与该四元数具有相同x、y、z和w 属性的四元数

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[math/Quaternion.ts:275](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;275)

___

### conjugate

▸ **conjugate**(): [`Quaternion`](Quaternion.md)

计算此四元数的旋转共轭（围绕旋转轴在相反方向上的旋转）

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[math/Quaternion.ts:241](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;241)

___

### copy

▸ **copy**(`q`): [`Quaternion`](Quaternion.md)

复制四元数 q 的 x、y、z 和 w 属性到该四元数中。

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[math/Quaternion.ts:283](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;283)

___

### dot

▸ **dot**(`q`): `any`

计算四元数 q 与当前四元数的点积

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) |

#### Returns

`any`

#### Defined in

[math/Quaternion.ts:260](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;260)

___

### equals

▸ **equals**(`q`): `any`

比较两个四元数是否相同

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) |

#### Returns

`any`

#### Defined in

[math/Quaternion.ts:293](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;293)

___

### fromArray

▸ **fromArray**(`array`, `offset?`): [`Quaternion`](Quaternion.md)

从数组构建向量数据

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `any` | `undefined` | 原始数组 |
| `offset` | `number` | `0` | 数组偏移量 |

#### Returns

[`Quaternion`](Quaternion.md)

#### Inherited from

Vector.fromArray

#### Defined in

[math/Vector.ts:13](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector.ts?at&#x3D;444ba1d#line&#x3D;13)

___

### fromAxisAngle

▸ **fromAxisAngle**(`axis`, `rad`): [`Quaternion`](Quaternion.md)

给定的角度和旋转轴设置此四元数的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`Vector3`](Vector3.md) |
| `rad` | `number` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[math/Quaternion.ts:154](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;154)

___

### fromEuler

▸ **fromEuler**(`e`): [`Quaternion`](Quaternion.md)

从给定的欧拉角 e 创建四元数

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`Euler`](Euler.md) |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[math/Quaternion.ts:174](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;174)

___

### fromMat3

▸ **fromMat3**(`m`): [`Quaternion`](Quaternion.md)

从给定的 3x3 旋转矩阵创建四元数

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Matrix3`](Matrix3.md) |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[math/Quaternion.ts:184](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;184)

___

### fromObject

▸ **fromObject**(`object`): [`Quaternion`](Quaternion.md)

从对象赋值 Quaternion 的 x、y、z、w 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[math/Quaternion.ts:126](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;126)

___

### getAxisAngle

▸ **getAxisAngle**(`axis?`): `any`

从此四元数获取旋转轴和旋转角度

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`Vector3`](Vector3.md) |

#### Returns

`any`

#### Defined in

[math/Quaternion.ts:164](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;164)

___

### invert

▸ **invert**(): [`Quaternion`](Quaternion.md)

翻转该四元数

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[math/Quaternion.ts:232](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;232)

___

### length

▸ **length**(): `any`

计算四元数的直线长度

#### Returns

`any`

#### Defined in

[math/Quaternion.ts:198](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;198)

___

### multiply

▸ **multiply**(`a`, `b?`): [`Quaternion`](Quaternion.md)

计算四元数的乘积

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Quaternion`](Quaternion.md) |
| `b?` | [`Quaternion`](Quaternion.md) |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[math/Quaternion.ts:207](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;207)

___

### normalize

▸ **normalize**(): [`Quaternion`](Quaternion.md)

（归一化）四元数。 即计算与该四元数具有相同旋转、但长度为1的四元数

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[math/Quaternion.ts:250](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;250)

___

### onChange

▸ **onChange**(`fn`): `void`

监听四元数变更

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `ICallback` | 回调函数 |

#### Returns

`void`

#### Defined in

[math/Quaternion.ts:301](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;301)

___

### set

▸ **set**(`x`, `y`, `z`, `w`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |
| `y` | `any` |
| `z` | `any` |
| `w` | `any` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[math/Quaternion.ts:189](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;189)

___

### slerp

▸ **slerp**(`q`, `t`): [`Quaternion`](Quaternion.md)

处理四元数之间的球面线性插值

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) |
| `t` | `number` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[math/Quaternion.ts:223](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;223)

___

### toArray

▸ **toArray**(`out?`, `offset?`): `Float32Array` \| `number`[]

从向量转换到数组

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `out` | `Float32Array` \| `number`[] | `[]` | 输出数据 |
| `offset` | `number` | `0` | 偏移量 |

#### Returns

`Float32Array` \| `number`[]

#### Inherited from

Vector.toArray

#### Defined in

[math/Vector.ts:26](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector.ts?at&#x3D;444ba1d#line&#x3D;26)

___

### toObject

▸ **toObject**(): `Object`

转换到对象

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `w` | `number` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Defined in

[math/Quaternion.ts:140](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;140)

___

### triggerChange

▸ **triggerChange**(): `void`

触发所有的回调函数

#### Returns

`void`

#### Defined in

[math/Quaternion.ts:310](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts?at&#x3D;444ba1d#line&#x3D;310)
