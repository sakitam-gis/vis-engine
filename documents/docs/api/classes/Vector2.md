---
id: "Vector2"
title: "Class: Vector2"
sidebar_label: "Vector2"
sidebar_position: 0
custom_edit_url: null
---

二维向量

代码示例:
```ts
const a = new Vector2(0, 1);

const b = new Vector2();

const d = a.distanceTo(b);
```

## Hierarchy

- `default`

  ↳ **`Vector2`**

## Constructors

### constructor

• **new Vector2**(`x?`, `y?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | 向量的x值，默认为0 |
| `y` | `number` | `0` | 向量的y值，默认为0 |

#### Overrides

Vector.constructor

#### Defined in

[src/math/Vector2.ts:46](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;46)

## Properties

### elements

• **elements**: `Float32Array` \| `Float64Array`

#### Overrides

Vector.elements

#### Defined in

[src/math/Vector2.ts:40](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;40)

## Accessors

### x

• `get` **x**(): `number`

获取向量 x 值

#### Returns

`number`

number;

#### Defined in

[src/math/Vector2.ts:57](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;57)

• `set` **x**(`x`): `void`

设置向量 x 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Vector2.ts:65](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;65)

___

### y

• `get` **y**(): `number`

获取向量 y 值

#### Returns

`number`

number;

#### Defined in

[src/math/Vector2.ts:73](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;73)

• `set` **y**(`y`): `void`

设置向量 y 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Vector2.ts:81](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;81)

## Methods

### add

▸ **add**(`vec`): [`Vector2`](Vector2.md)

将传入的向量vec和这个向量相加

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector2`](Vector2.md) | 传入的 Vector2 |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:129](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;129)

___

### addScalar

▸ **addScalar**(`v`): [`Vector2`](Vector2.md)

将传入的标量 v 和这个向量相加，默认构建一个二维向量 [v, v]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 标量值 |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:138](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;138)

___

### angle

▸ **angle**(): `any`

计算此向量相对于正 x 轴的弧度角

#### Returns

`any`

#### Defined in

[src/math/Vector2.ts:232](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;232)

___

### angleTo

▸ **angleTo**(`v`): `any`

以弧度返回该向量与向量 v 之间的角度

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2`](Vector2.md) |

#### Returns

`any`

#### Defined in

[src/math/Vector2.ts:239](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;239)

___

### applyMatrix3

▸ **applyMatrix3**(`matrix`): [`Vector2`](Vector2.md)

将此向量（隐含的 1 作为第三个分量）乘以 Matrix3

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`Matrix3`](Matrix3.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:306](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;306)

___

### applyMatrix4

▸ **applyMatrix4**(`matrix`): [`Vector2`](Vector2.md)

将此向量乘以 Matrix4

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`Matrix4`](Matrix4.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:315](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;315)

___

### clone

▸ **clone**(): [`Vector2`](Vector2.md)

克隆此向量

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:333](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;333)

___

### copy

▸ **copy**(`vec2`): [`Vector2`](Vector2.md)

将传递的 vec2 的 x 和 y 属性的值复制到此 Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec2` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:324](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;324)

___

### cross

▸ **cross**(`vec`): [`Vector2`](Vector2.md)

将该向量设置为它本身与传入的vec的叉积

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:263](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;263)

___

### distanceTo

▸ **distanceTo**(`vec`): `any`

计算该向量到所传入的 v 间的距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector2`](Vector2.md) |

#### Returns

`any`

#### Defined in

[src/math/Vector2.ts:210](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;210)

___

### distanceToSquared

▸ **distanceToSquared**(`v`): `any`

计算该向量到传入的v的平方距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2`](Vector2.md) |

#### Returns

`any`

#### Defined in

[src/math/Vector2.ts:225](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;225)

___

### divide

▸ **divide**(`vec`): [`Vector2`](Vector2.md)

将此向量与 vec 向量相除

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:183](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;183)

___

### divideScalar

▸ **divideScalar**(`v`): [`Vector2`](Vector2.md)

从此向量各分量与标量 v 相除，默认构建一个二维向量 [v, v]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 标量值 |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:192](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;192)

___

### dot

▸ **dot**(`vec`): `any`

计算此向量与 vec 向量的点积

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector2`](Vector2.md) |

#### Returns

`any`

#### Defined in

[src/math/Vector2.ts:247](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;247)

___

### equals

▸ **equals**(`vec`): `any`

判断传入的向量 vec 与此向量是否相等

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector2`](Vector2.md) |

#### Returns

`any`

#### Defined in

[src/math/Vector2.ts:255](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;255)

___

### fromArray

▸ **fromArray**(`array`, `offset?`): [`Vector2`](Vector2.md)

从数组构建向量数据

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `any` | `undefined` | 原始数组 |
| `offset` | `number` | `0` | 数组偏移量 |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

Vector.fromArray

#### Defined in

[src/math/Vector.ts:15](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector.ts?at&#x3D;5cce138#line&#x3D;15)

___

### fromObject

▸ **fromObject**(`object`): [`Vector2`](Vector2.md)

从对象赋值 Vector2 的 x、y 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:89](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;89)

___

### inverse

▸ **inverse**(): [`Vector2`](Vector2.md)

针对此向量取倒数

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:279](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;279)

___

### length

▸ **length**(): `any`

计算从 `[0, 0]` 到此向量的直线距离

#### Returns

`any`

#### Defined in

[src/math/Vector2.ts:217](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;217)

___

### lerp

▸ **lerp**(`vec`, `t`): [`Vector2`](Vector2.md)

从此向量到 vec 向量进行插值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector2`](Vector2.md) | 目标向量 |
| `t` | `number` | 插值因数，范围一般在[0-1]，通常在这两个值之间 |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:289](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;289)

___

### multiply

▸ **multiply**(`vec`): [`Vector2`](Vector2.md)

将此向量与 vec 向量相乘

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:165](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;165)

___

### multiplyScalar

▸ **multiplyScalar**(`v`): [`Vector2`](Vector2.md)

从此向量各分量与标量 v 相乘，默认构建一个二维向量 [v, v]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 标量值 |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:174](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;174)

___

### negate

▸ **negate**(): [`Vector2`](Vector2.md)

针对此向量取反

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:271](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;271)

___

### normalize

▸ **normalize**(): [`Vector2`](Vector2.md)

将此向量转换为单位向量 (将其设置为与此向量具有相同方向但长度为 1 的向量)

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:297](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;297)

___

### scale

▸ **scale**(`s`): [`Vector2`](Vector2.md)

缩放此向量

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:201](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;201)

___

### set

▸ **set**(`x`, `y`): [`Vector2`](Vector2.md)

设置向量的 x 和 y 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |
| `y` | `any` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:111](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;111)

___

### setScalar

▸ **setScalar**(`s`): [`Vector2`](Vector2.md)

将向量的每个值设置为标量 s

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `any` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:121](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;121)

___

### subtract

▸ **subtract**(`vec`): [`Vector2`](Vector2.md)

从此向量减去 vec 二维向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector2`](Vector2.md) | 传入的 Vector2 |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:147](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;147)

___

### subtractScalar

▸ **subtractScalar**(`v`): [`Vector2`](Vector2.md)

从此向量各分量减去标量 v，默认构建一个二维向量 [v, v]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 标量值 |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:156](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;156)

___

### toArray

▸ **toArray**(`out?`, `offset?`): `Float32Array` \| `Float64Array` \| `number`[]

从向量转换到数组

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `out` | `Float32Array` \| `Float64Array` \| `number`[] | `[]` | 输出数据 |
| `offset` | `number` | `0` | 偏移量 |

#### Returns

`Float32Array` \| `Float64Array` \| `number`[]

#### Inherited from

Vector.toArray

#### Defined in

[src/math/Vector.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector.ts?at&#x3D;5cce138#line&#x3D;28)

___

### toObject

▸ **toObject**(): `Object`

转换到对象

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[src/math/Vector2.ts:99](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;99)

___

### toString

▸ **toString**(): `string`

转换为字符串

#### Returns

`string`

#### Defined in

[src/math/Vector2.ts:340](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;5cce138#line&#x3D;340)
