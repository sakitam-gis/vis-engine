[vis-engine - v1.5.1](../index.md) / Vector3

# Class: Vector3

三维向量，三维向量表示的是一个有顺序的、三个为一组的数字组合，可以用来描述：
- 一个位于三维空间中的点。
- 一个在三维空间中的方向与长度的定义
```ts
const a = new Vector3(0, 1, 0);

const b = new Vector3(0, 0, 0);

const d = a.distanceTo(b);
```

## Hierarchy

- `default`

  ↳ **`Vector3`**

## Table of contents

### Constructors

- [constructor](Vector3.md#constructor)

### Properties

- [elements](Vector3.md#elements)

### Accessors

- [x](Vector3.md#x)
- [y](Vector3.md#y)
- [z](Vector3.md#z)

### Methods

- [add](Vector3.md#add)
- [addScalar](Vector3.md#addscalar)
- [angle](Vector3.md#angle)
- [angleTo](Vector3.md#angleto)
- [applyEuler](Vector3.md#applyeuler)
- [applyMatrix3](Vector3.md#applymatrix3)
- [applyMatrix4](Vector3.md#applymatrix4)
- [applyQuaternion](Vector3.md#applyquaternion)
- [clone](Vector3.md#clone)
- [copy](Vector3.md#copy)
- [cross](Vector3.md#cross)
- [distanceTo](Vector3.md#distanceto)
- [distanceToSquared](Vector3.md#distancetosquared)
- [divide](Vector3.md#divide)
- [divideScalar](Vector3.md#dividescalar)
- [dot](Vector3.md#dot)
- [equals](Vector3.md#equals)
- [fromArray](Vector3.md#fromarray)
- [fromObject](Vector3.md#fromobject)
- [inverse](Vector3.md#inverse)
- [length](Vector3.md#length)
- [lerp](Vector3.md#lerp)
- [multiply](Vector3.md#multiply)
- [multiplyScalar](Vector3.md#multiplyscalar)
- [negate](Vector3.md#negate)
- [normalize](Vector3.md#normalize)
- [scale](Vector3.md#scale)
- [scaleAndAdd](Vector3.md#scaleandadd)
- [set](Vector3.md#set)
- [setScalar](Vector3.md#setscalar)
- [subVectors](Vector3.md#subvectors)
- [subtract](Vector3.md#subtract)
- [subtractScalar](Vector3.md#subtractscalar)
- [toArray](Vector3.md#toarray)
- [toObject](Vector3.md#toobject)
- [toString](Vector3.md#tostring)

## Constructors

### constructor

• **new Vector3**(`x?`, `y?`, `z?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | 向量的x值，默认为0 |
| `y` | `number` | `0` | 向量的y值，默认为0 |
| `z` | `number` | `0` | 向量的z值，默认为0 |

#### Overrides

Vector.constructor

#### Defined in

[src/math/Vector3.ts:52](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L52)

## Properties

### elements

• **elements**: `Float32Array` \| `Float64Array`

#### Overrides

Vector.elements

#### Defined in

[src/math/Vector3.ts:45](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L45)

## Accessors

### x

• `get` **x**(): `number`

获取向量 x 值

#### Returns

`number`

number;

#### Defined in

[src/math/Vector3.ts:64](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L64)

• `set` **x**(`x`): `void`

设置向量 x 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Vector3.ts:72](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L72)

___

### y

• `get` **y**(): `number`

获取向量 y 值

#### Returns

`number`

number;

#### Defined in

[src/math/Vector3.ts:80](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L80)

• `set` **y**(`y`): `void`

设置向量 y 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Vector3.ts:88](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L88)

___

### z

• `get` **z**(): `number`

获取向量 z 值

#### Returns

`number`

number;

#### Defined in

[src/math/Vector3.ts:96](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L96)

• `set` **z**(`z`): `void`

设置向量 z 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Vector3.ts:105](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L105)

## Methods

### add

▸ **add**(`vec`): [`Vector3`](Vector3.md)

将传入的向量vec和这个向量相加，会改变当前向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector3`](Vector3.md) | 传入的 Vector3 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:162](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L162)

___

### addScalar

▸ **addScalar**(`v`): [`Vector3`](Vector3.md)

将传入的标量量 v 和这个向量相加，会改变当前向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 传入的 标量值 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:171](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L171)

___

### angle

▸ **angle**(`vector`): `any`

计算此向量相对于正 x 轴的弧度角

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector3`](Vector3.md) |

#### Returns

`any`

#### Defined in

[src/math/Vector3.ts:279](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L279)

___

### angleTo

▸ **angleTo**(`vector`): `any`

以弧度返回该向量与向量 v 之间的角度

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector3`](Vector3.md) |

#### Returns

`any`

#### Defined in

[src/math/Vector3.ts:286](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L286)

___

### applyEuler

▸ **applyEuler**(`euler`): [`Vector3`](Vector3.md)

通过将Euler（欧拉）对象转换为Quaternion（四元数）并应用， 将欧拉变换应用到此向量上

#### Parameters

| Name | Type |
| :------ | :------ |
| `euler` | `any` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:353](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L353)

___

### applyMatrix3

▸ **applyMatrix3**(`matrix`): [`Vector3`](Vector3.md)

将此向量乘以 Matrix3

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`Matrix3`](Matrix3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:362](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L362)

___

### applyMatrix4

▸ **applyMatrix4**(`matrix`): [`Vector3`](Vector3.md)

将此向量乘以 Matrix4

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`Matrix4`](Matrix4.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:371](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L371)

___

### applyQuaternion

▸ **applyQuaternion**(`quaternion`): [`Vector3`](Vector3.md)

将 Quaternion 变换应用到该向量

#### Parameters

| Name | Type |
| :------ | :------ |
| `quaternion` | [`Quaternion`](Quaternion.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:380](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L380)

___

### clone

▸ **clone**(): [`Vector3`](Vector3.md)

克隆此向量

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:399](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L399)

___

### copy

▸ **copy**(`vec3`): [`Vector3`](Vector3.md)

将传递的 Vector3 的 x 和 y, z 属性的值复制到此 Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec3` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:389](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L389)

___

### cross

▸ **cross**(`vec`): [`Vector3`](Vector3.md)

将该向量设置为它本身与传入的vec的叉积

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:310](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L310)

___

### distanceTo

▸ **distanceTo**(`vec`): `any`

计算该向量到所传入的 vec 间的距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector3`](Vector3.md) |

#### Returns

`any`

#### Defined in

[src/math/Vector3.ts:263](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L263)

___

### distanceToSquared

▸ **distanceToSquared**(`vec`): `any`

计算两个 vec3 之间的平方距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector3`](Vector3.md) |

#### Returns

`any`

#### Defined in

[src/math/Vector3.ts:271](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L271)

___

### divide

▸ **divide**(`vec`): [`Vector3`](Vector3.md)

将此向量与 vec 向量相除

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | `any` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:226](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L226)

___

### divideScalar

▸ **divideScalar**(`v`): [`Vector3`](Vector3.md)

从此向量各分量与标量 v 相除，默认构建一个三维向量 [v, v, v]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `any` | 标量值 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:235](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L235)

___

### dot

▸ **dot**(`vec`): `any`

计算此向量与 vec 向量的点积

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector3`](Vector3.md) |

#### Returns

`any`

#### Defined in

[src/math/Vector3.ts:294](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L294)

___

### equals

▸ **equals**(`vec`): `any`

判断传入的向量 vec 与此向量是否相等

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector3`](Vector3.md) |

#### Returns

`any`

#### Defined in

[src/math/Vector3.ts:302](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L302)

___

### fromArray

▸ **fromArray**(`array`, `offset?`): [`Vector3`](Vector3.md)

从数组构建向量数据

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `any` | `undefined` | 原始数组 |
| `offset` | `number` | `0` | 数组偏移量 |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector.fromArray

#### Defined in

[src/math/Vector.ts:15](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector.ts#L15)

___

### fromObject

▸ **fromObject**(`object`): [`Vector3`](Vector3.md)

从对象赋值 Vector3 的 x、y、z 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:113](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L113)

___

### inverse

▸ **inverse**(): [`Vector3`](Vector3.md)

针对此向量取倒数

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:326](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L326)

___

### length

▸ **length**(): `any`

计算从 `[0, 0, 0]` 到此向量的直线距离

#### Returns

`any`

#### Defined in

[src/math/Vector3.ts:154](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L154)

___

### lerp

▸ **lerp**(`vec`, `t`): [`Vector3`](Vector3.md)

从此向量到 vec 向量进行插值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector3`](Vector3.md) | 目标向量 |
| `t` | `number` | 插值因数，范围一般在[0-1]，通常在这两个值之间 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:336](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L336)

___

### multiply

▸ **multiply**(`vec`): [`Vector3`](Vector3.md)

将此向量与 vec 向量相乘

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:208](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L208)

___

### multiplyScalar

▸ **multiplyScalar**(`v`): [`Vector3`](Vector3.md)

从此向量各分量与标量 v 相乘，默认构建一个三维向量 [v, v, v]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 标量值 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:217](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L217)

___

### negate

▸ **negate**(): [`Vector3`](Vector3.md)

针对此向量取反

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:318](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L318)

___

### normalize

▸ **normalize**(): [`Vector3`](Vector3.md)

将此向量转换为单位向量 (将其设置为与此向量具有相同方向但长度为 1 的向量)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:344](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L344)

___

### scale

▸ **scale**(`s`): [`Vector3`](Vector3.md)

缩放此向量

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:244](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L244)

___

### scaleAndAdd

▸ **scaleAndAdd**(`v`, `s`): [`Vector3`](Vector3.md)

按标量缩放 v 向量后与此向量相加

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |
| `s` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:254](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L254)

___

### set

▸ **set**(`x`, `y`, `z`): [`Vector3`](Vector3.md)

设置向量的 x、y、z

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |
| `y` | `any` |
| `z` | `any` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:138](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L138)

___

### setScalar

▸ **setScalar**(`s`): [`Vector3`](Vector3.md)

将向量的每个值设置为标量 s

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `any` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:147](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L147)

___

### subVectors

▸ **subVectors**(`a`, `b`): [`Vector3`](Vector3.md)

将向量 a 与向量 b 相减后的向量赋值给此向量

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector3`](Vector3.md) |
| `b` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:199](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L199)

___

### subtract

▸ **subtract**(`vec`): [`Vector3`](Vector3.md)

从此向量减去 vec 三维向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector3`](Vector3.md) | 传入的 Vector3 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:180](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L180)

___

### subtractScalar

▸ **subtractScalar**(`v`): [`Vector3`](Vector3.md)

从此向量各分量减去标量 v，默认构建一个三维向量 [v, v, v]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 标量值 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:189](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L189)

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

[src/math/Vector.ts:28](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector.ts#L28)

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
| `z` | `number` |

#### Defined in

[src/math/Vector3.ts:124](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L124)

___

### toString

▸ **toString**(): `string`

转换为字符串

#### Returns

`string`

#### Defined in

[src/math/Vector3.ts:406](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/math/Vector3.ts#L406)
