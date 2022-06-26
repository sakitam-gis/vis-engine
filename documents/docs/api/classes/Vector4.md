---
id: "Vector4"
title: "Class: Vector4"
sidebar_label: "Vector4"
sidebar_position: 0
custom_edit_url: null
---

四维向量，四维向量表示的是一个有顺序的、四个为一组的数字组合，可以用来描述：
- 一个位于四维空间中的点。
- 一个在四维空间中的方向与长度的定义。
```ts
const a = new Vector4(0, 1, 0);

const b = new Vector4(0, 0, 0);

const d = a.distanceTo(b);
```

## Hierarchy

- `default`

  ↳ **`Vector4`**

## Constructors

### constructor

• **new Vector4**(`x?`, `y?`, `z?`, `w?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | 向量的x值，默认为0 |
| `y` | `number` | `0` | 向量的y值，默认为0 |
| `z` | `number` | `0` | 向量的z值，默认为0 |
| `w` | `number` | `0` | 向量的w值，默认为0 |

#### Overrides

Vector.constructor

#### Defined in

[math/Vector4.ts:49](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;49)

## Properties

### elements

• **elements**: `Float32Array`

#### Overrides

Vector.elements

#### Defined in

[math/Vector4.ts:41](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;41)

## Accessors

### w

• `get` **w**(): `number`

获取向量 w 值

#### Returns

`number`

number;

#### Defined in

[math/Vector4.ts:110](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;110)

• `set` **w**(`w`): `void`

设置向量 w 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `w` | `number` |

#### Returns

`void`

#### Defined in

[math/Vector4.ts:118](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;118)

___

### x

• `get` **x**(): `number`

获取向量 x 值

#### Returns

`number`

number;

#### Defined in

[math/Vector4.ts:62](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;62)

• `set` **x**(`x`): `void`

设置向量 x 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Defined in

[math/Vector4.ts:70](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;70)

___

### y

• `get` **y**(): `number`

获取向量 y 值

#### Returns

`number`

number;

#### Defined in

[math/Vector4.ts:78](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;78)

• `set` **y**(`y`): `void`

设置向量 y 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[math/Vector4.ts:86](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;86)

___

### z

• `get` **z**(): `number`

获取向量 z 值

#### Returns

`number`

number;

#### Defined in

[math/Vector4.ts:94](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;94)

• `set` **z**(`z`): `void`

设置向量 z 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

`void`

#### Defined in

[math/Vector4.ts:102](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;102)

## Methods

### add

▸ **add**(`vec`): [`Vector4`](Vector4.md)

将传入的向量vec和这个向量相加，会改变当前向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) | 传入的 Vector4 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:171](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;171)

___

### addScalar

▸ **addScalar**(`v`): [`Vector4`](Vector4.md)

将传入的标量量 v 和这个向量相加，会改变当前向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `any` | 传入的 标量值 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:180](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;180)

___

### applyMatrix4

▸ **applyMatrix4**(`matrix`): [`Vector4`](Vector4.md)

将此向量乘以 Matrix4

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`Matrix4`](Matrix4.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:354](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;354)

___

### applyQuaternion

▸ **applyQuaternion**(`quaternion`): [`Vector4`](Vector4.md)

将 Quaternion 变换应用到该向量

#### Parameters

| Name | Type |
| :------ | :------ |
| `quaternion` | [`Quaternion`](Quaternion.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:363](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;363)

___

### clone

▸ **clone**(): [`Vector4`](Vector4.md)

克隆此向量

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:383](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;383)

___

### copy

▸ **copy**(`vec4`): [`Vector4`](Vector4.md)

将传递的 Vector4 的 x 、y、 z、w 属性的值复制到此 Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec4` | [`Vector4`](Vector4.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:372](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;372)

___

### cross

▸ **cross**(`vec`): [`Vector4`](Vector4.md)

将该向量设置为它本身与传入的vec的叉积

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:311](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;311)

___

### distanceTo

▸ **distanceTo**(`vec`): `any`

计算该向量到所传入的 v 间的距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) |

#### Returns

`any`

#### Defined in

[math/Vector4.ts:272](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;272)

___

### distanceToSquared

▸ **distanceToSquared**(`vec`): `any`

计算两个 Vector4 之间的平方距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) |

#### Returns

`any`

#### Defined in

[math/Vector4.ts:280](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;280)

___

### divide

▸ **divide**(`vec`): [`Vector4`](Vector4.md)

将此向量与 vec 向量相除

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:235](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;235)

___

### divideScalar

▸ **divideScalar**(`v`): [`Vector4`](Vector4.md)

从此向量各分量与标量 v 相除，默认构建一个四维向量 [v, v, v, v]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `any` | 标量值 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:244](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;244)

___

### dot

▸ **dot**(`vec`): `any`

计算此向量与 vec 向量的点积

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) |

#### Returns

`any`

#### Defined in

[math/Vector4.ts:295](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;295)

___

### equals

▸ **equals**(`vec`): `any`

判断传入的向量 vec 与此向量是否相等

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) |

#### Returns

`any`

#### Defined in

[math/Vector4.ts:303](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;303)

___

### fromArray

▸ **fromArray**(`array`, `offset?`): [`Vector4`](Vector4.md)

从数组构建向量数据

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `any` | `undefined` | 原始数组 |
| `offset` | `number` | `0` | 数组偏移量 |

#### Returns

[`Vector4`](Vector4.md)

#### Inherited from

Vector.fromArray

#### Defined in

[math/Vector.ts:13](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector.ts?at&#x3D;8558d24#line&#x3D;13)

___

### fromObject

▸ **fromObject**(`object`): [`Vector4`](Vector4.md)

从对象赋值 Vector3 的 x、y、z、w 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:126](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;126)

___

### inverse

▸ **inverse**(): [`Vector4`](Vector4.md)

针对此向量取倒数

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:327](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;327)

___

### length

▸ **length**(): `any`

计算从 `[0, 0, 0, 0]` 到此向量的直线距离

#### Returns

`any`

#### Defined in

[math/Vector4.ts:287](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;287)

___

### lerp

▸ **lerp**(`vec`, `t`): [`Vector4`](Vector4.md)

从此向量到 vec 向量进行插值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) | 目标向量 |
| `t` | `number` | 插值因数，范围一般在[0-1]，通常在这两个值之间 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:337](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;337)

___

### multiply

▸ **multiply**(`vec`): [`Vector4`](Vector4.md)

将此向量与 vec 向量相乘

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:217](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;217)

___

### multiplyScalar

▸ **multiplyScalar**(`v`): [`Vector4`](Vector4.md)

从此向量各分量与标量 v 相乘，默认构建一个四维向量 [v, v, v, v]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 标量值 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:226](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;226)

___

### negate

▸ **negate**(): [`Vector4`](Vector4.md)

针对此向量取反

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:319](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;319)

___

### normalize

▸ **normalize**(): [`Vector4`](Vector4.md)

将此向量转换为单位向量 (将其设置为与此向量具有相同方向但长度为 1 的向量)

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:345](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;345)

___

### scale

▸ **scale**(`s`): [`Vector4`](Vector4.md)

缩放此向量

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:253](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;253)

___

### scaleAndAdd

▸ **scaleAndAdd**(`v`, `s`): [`Vector4`](Vector4.md)

按标量缩放 v 向量后与此向量相加

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector4`](Vector4.md) |
| `s` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:263](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;263)

___

### set

▸ **set**(`x`, `y`, `z`, `w`): [`Vector4`](Vector4.md)

设置向量的 x、y、z、w

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |
| `y` | `any` |
| `z` | `any` |
| `w` | `any` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:154](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;154)

___

### setScalar

▸ **setScalar**(`s`): [`Vector4`](Vector4.md)

将向量的每个值设置为标量 s

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `any` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:163](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;163)

___

### subVectors

▸ **subVectors**(`a`, `b`): [`Vector4`](Vector4.md)

将向量 a 与向量 b 相减后的向量赋值给此向量

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector4`](Vector4.md) |
| `b` | [`Vector4`](Vector4.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:208](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;208)

___

### subtract

▸ **subtract**(`vec`): [`Vector4`](Vector4.md)

从此向量减去 vec 四维向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) | 传入的 Vector4 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:189](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;189)

___

### subtractScalar

▸ **subtractScalar**(`v`): [`Vector4`](Vector4.md)

从此向量各分量减去标量 v，默认构建一个四维向量 [v, v, v, v]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `any` | 标量值 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector4.ts:198](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;198)

___

### toArray

▸ **toArray**(`out?`, `offset?`): `number`[] \| `Float32Array`

从向量转换到数组

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `out` | `number`[] \| `Float32Array` | `[]` | 输出数据 |
| `offset` | `number` | `0` | 偏移量 |

#### Returns

`number`[] \| `Float32Array`

#### Inherited from

Vector.toArray

#### Defined in

[math/Vector.ts:26](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector.ts?at&#x3D;8558d24#line&#x3D;26)

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

[math/Vector4.ts:138](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;138)

___

### toString

▸ **toString**(): `any`

转换为字符串

#### Returns

`any`

#### Defined in

[math/Vector4.ts:390](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts?at&#x3D;8558d24#line&#x3D;390)
