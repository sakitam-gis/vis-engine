[vis-engine - v1.0.0](../index.md) / Vector4

# Class: Vector4

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

  ↳ **`Vector4`**

## Table of contents

### Constructors

- [constructor](Vector4.md#constructor)

### Accessors

- [elements](Vector4.md#elements)
- [x](Vector4.md#x)
- [y](Vector4.md#y)
- [z](Vector4.md#z)

### Methods

- [add](Vector4.md#add)
- [addScalar](Vector4.md#addscalar)
- [angle](Vector4.md#angle)
- [angleTo](Vector4.md#angleto)
- [applyEuler](Vector4.md#applyeuler)
- [applyMatrix3](Vector4.md#applymatrix3)
- [applyMatrix4](Vector4.md#applymatrix4)
- [applyQuaternion](Vector4.md#applyquaternion)
- [clone](Vector4.md#clone)
- [copy](Vector4.md#copy)
- [cross](Vector4.md#cross)
- [distanceTo](Vector4.md#distanceto)
- [distanceToSquared](Vector4.md#distancetosquared)
- [divide](Vector4.md#divide)
- [divideScalar](Vector4.md#dividescalar)
- [dot](Vector4.md#dot)
- [equals](Vector4.md#equals)
- [fromArray](Vector4.md#fromarray)
- [fromObject](Vector4.md#fromobject)
- [inverse](Vector4.md#inverse)
- [length](Vector4.md#length)
- [lerp](Vector4.md#lerp)
- [multiply](Vector4.md#multiply)
- [multiplyScalar](Vector4.md#multiplyscalar)
- [negate](Vector4.md#negate)
- [normalize](Vector4.md#normalize)
- [scale](Vector4.md#scale)
- [scaleAndAdd](Vector4.md#scaleandadd)
- [set](Vector4.md#set)
- [setScalar](Vector4.md#setscalar)
- [subVectors](Vector4.md#subvectors)
- [subtract](Vector4.md#subtract)
- [subtractScalar](Vector4.md#subtractscalar)
- [toArray](Vector4.md#toarray)
- [toObject](Vector4.md#toobject)
- [toString](Vector4.md#tostring)

## Constructors

### constructor

• **new Vector4**(`x?`, `y?`, `z?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | 向量的x值，默认为0 |
| `y` | `number` | `0` | 向量的y值，默认为0 |
| `z` | `number` | `0` | 向量的z值，默认为0 |

#### Overrides

Vector.constructor

#### Defined in

[math/Vector3.ts:52](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;52)

## Accessors

### elements

• `get` **elements**(): `Float32Array`

#### Returns

`Float32Array`

#### Inherited from

Vector.elements

#### Defined in

[math/Vector.ts:8](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector.ts?at&#x3D;873d649#line&#x3D;8)

___

### x

• `get` **x**(): `number`

获取向量 x 值

#### Returns

`number`

number;

#### Defined in

[math/Vector3.ts:64](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;64)

• `set` **x**(`x`): `void`

设置向量 x 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Defined in

[math/Vector3.ts:72](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;72)

___

### y

• `get` **y**(): `number`

获取向量 y 值

#### Returns

`number`

number;

#### Defined in

[math/Vector3.ts:80](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;80)

• `set` **y**(`y`): `void`

设置向量 y 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[math/Vector3.ts:88](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;88)

___

### z

• `get` **z**(): `number`

获取向量 z 值

#### Returns

`number`

number;

#### Defined in

[math/Vector3.ts:96](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;96)

• `set` **z**(`z`): `void`

设置向量 z 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

`void`

#### Defined in

[math/Vector3.ts:105](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;105)

## Methods

### add

▸ **add**(`vec`): [`Vector4`](Vector4.md)

将传入的向量vec和这个向量相加，会改变当前向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) | 传入的 Vector3 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector3.ts:162](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;162)

___

### addScalar

▸ **addScalar**(`v`): [`Vector4`](Vector4.md)

将传入的标量量 v 和这个向量相加，会改变当前向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 传入的 标量值 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector3.ts:171](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;171)

___

### angle

▸ **angle**(`vector`): `any`

计算此向量相对于正 x 轴的弧度角

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector4`](Vector4.md) |

#### Returns

`any`

#### Defined in

[math/Vector3.ts:279](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;279)

___

### angleTo

▸ **angleTo**(`vector`): `any`

以弧度返回该向量与向量 v 之间的角度

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector4`](Vector4.md) |

#### Returns

`any`

#### Defined in

[math/Vector3.ts:286](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;286)

___

### applyEuler

▸ **applyEuler**(`euler`): [`Vector4`](Vector4.md)

通过将Euler（欧拉）对象转换为Quaternion（四元数）并应用， 将欧拉变换应用到此向量上

#### Parameters

| Name | Type |
| :------ | :------ |
| `euler` | `any` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector3.ts:353](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;353)

___

### applyMatrix3

▸ **applyMatrix3**(`matrix`): [`Vector4`](Vector4.md)

将此向量乘以 Matrix3

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`Matrix3`](Matrix3.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector3.ts:362](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;362)

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

[math/Vector3.ts:371](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;371)

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

[math/Vector3.ts:380](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;380)

___

### clone

▸ **clone**(): [`Vector4`](Vector4.md)

克隆此向量

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector3.ts:399](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;399)

___

### copy

▸ **copy**(`vec3`): [`Vector4`](Vector4.md)

将传递的 Vector3 的 x 和 y, z 属性的值复制到此 Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec3` | [`Vector4`](Vector4.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector3.ts:389](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;389)

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

[math/Vector3.ts:310](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;310)

___

### distanceTo

▸ **distanceTo**(`vec`): `any`

计算该向量到所传入的 vec 间的距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) |

#### Returns

`any`

#### Defined in

[math/Vector3.ts:263](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;263)

___

### distanceToSquared

▸ **distanceToSquared**(`vec`): `any`

计算两个 vec3 之间的平方距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) |

#### Returns

`any`

#### Defined in

[math/Vector3.ts:271](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;271)

___

### divide

▸ **divide**(`vec`): [`Vector4`](Vector4.md)

将此向量与 vec 向量相除

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | `any` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector3.ts:226](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;226)

___

### divideScalar

▸ **divideScalar**(`v`): [`Vector4`](Vector4.md)

从此向量各分量与标量 v 相除，默认构建一个三维向量 [v, v, v]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `any` | 标量值 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector3.ts:235](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;235)

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

[math/Vector3.ts:294](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;294)

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

[math/Vector3.ts:302](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;302)

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

[math/Vector.ts:17](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector.ts?at&#x3D;873d649#line&#x3D;17)

___

### fromObject

▸ **fromObject**(`object`): [`Vector4`](Vector4.md)

从对象赋值 Vector3 的 x、y、z 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector3.ts:113](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;113)

___

### inverse

▸ **inverse**(): [`Vector4`](Vector4.md)

针对此向量取倒数

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector3.ts:326](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;326)

___

### length

▸ **length**(): `number`

计算从 `[0, 0, 0]` 到此向量的直线距离

#### Returns

`number`

#### Defined in

[math/Vector3.ts:154](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;154)

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

[math/Vector3.ts:336](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;336)

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

[math/Vector3.ts:208](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;208)

___

### multiplyScalar

▸ **multiplyScalar**(`v`): [`Vector4`](Vector4.md)

从此向量各分量与标量 v 相乘，默认构建一个三维向量 [v, v, v]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 标量值 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector3.ts:217](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;217)

___

### negate

▸ **negate**(): [`Vector4`](Vector4.md)

针对此向量取反

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector3.ts:318](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;318)

___

### normalize

▸ **normalize**(): [`Vector4`](Vector4.md)

将此向量转换为单位向量 (将其设置为与此向量具有相同方向但长度为 1 的向量)

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector3.ts:344](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;344)

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

[math/Vector3.ts:244](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;244)

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

[math/Vector3.ts:254](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;254)

___

### set

▸ **set**(`x`, `y`, `z`): [`Vector4`](Vector4.md)

设置向量的 x、y、z

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |
| `y` | `any` |
| `z` | `any` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector3.ts:138](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;138)

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

[math/Vector3.ts:147](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;147)

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

[math/Vector3.ts:199](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;199)

___

### subtract

▸ **subtract**(`vec`): [`Vector4`](Vector4.md)

从此向量减去 vec 三维向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) | 传入的 Vector3 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector3.ts:180](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;180)

___

### subtractScalar

▸ **subtractScalar**(`v`): [`Vector4`](Vector4.md)

从此向量各分量减去标量 v，默认构建一个三维向量 [v, v, v]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 标量值 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Vector3.ts:189](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;189)

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

[math/Vector.ts:30](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector.ts?at&#x3D;873d649#line&#x3D;30)

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

[math/Vector3.ts:124](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;124)

___

### toString

▸ **toString**(): `string`

转换为字符串

#### Returns

`string`

#### Defined in

[math/Vector3.ts:406](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector3.ts?at&#x3D;873d649#line&#x3D;406)
