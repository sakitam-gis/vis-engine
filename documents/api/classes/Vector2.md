[vis-engine - v1.0.0](../index.md) / Vector2

# Class: Vector2

二维向量
```ts
const a = new Vector2(0, 1);

const b = new Vector2();

const d = a.distanceTo(b);
```

## Hierarchy

- `default`

  ↳ **`Vector2`**

## Table of contents

### Constructors

- [constructor](Vector2.md#constructor)

### Accessors

- [elements](Vector2.md#elements)
- [x](Vector2.md#x)
- [y](Vector2.md#y)

### Methods

- [add](Vector2.md#add)
- [addScalar](Vector2.md#addscalar)
- [angle](Vector2.md#angle)
- [angleTo](Vector2.md#angleto)
- [applyMatrix3](Vector2.md#applymatrix3)
- [applyMatrix4](Vector2.md#applymatrix4)
- [clone](Vector2.md#clone)
- [copy](Vector2.md#copy)
- [cross](Vector2.md#cross)
- [distanceTo](Vector2.md#distanceto)
- [distanceToSquared](Vector2.md#distancetosquared)
- [divide](Vector2.md#divide)
- [divideScalar](Vector2.md#dividescalar)
- [dot](Vector2.md#dot)
- [equals](Vector2.md#equals)
- [fromArray](Vector2.md#fromarray)
- [fromObject](Vector2.md#fromobject)
- [inverse](Vector2.md#inverse)
- [length](Vector2.md#length)
- [lerp](Vector2.md#lerp)
- [multiply](Vector2.md#multiply)
- [multiplyScalar](Vector2.md#multiplyscalar)
- [negate](Vector2.md#negate)
- [normalize](Vector2.md#normalize)
- [scale](Vector2.md#scale)
- [set](Vector2.md#set)
- [setScalar](Vector2.md#setscalar)
- [subtract](Vector2.md#subtract)
- [subtractScalar](Vector2.md#subtractscalar)
- [toArray](Vector2.md#toarray)
- [toObject](Vector2.md#toobject)
- [toString](Vector2.md#tostring)

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

[math/Vector2.ts:44](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;44)

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

[math/Vector2.ts:55](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;55)

• `set` **x**(`x`): `void`

设置向量 x 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Defined in

[math/Vector2.ts:63](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;63)

___

### y

• `get` **y**(): `number`

获取向量 y 值

#### Returns

`number`

number;

#### Defined in

[math/Vector2.ts:71](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;71)

• `set` **y**(`y`): `void`

设置向量 y 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[math/Vector2.ts:79](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;79)

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

[math/Vector2.ts:127](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;127)

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

[math/Vector2.ts:136](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;136)

___

### angle

▸ **angle**(): `any`

计算此向量相对于正 x 轴的弧度角

#### Returns

`any`

#### Defined in

[math/Vector2.ts:230](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;230)

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

[math/Vector2.ts:237](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;237)

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

[math/Vector2.ts:304](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;304)

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

[math/Vector2.ts:313](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;313)

___

### clone

▸ **clone**(): [`Vector2`](Vector2.md)

克隆此向量

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[math/Vector2.ts:331](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;331)

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

[math/Vector2.ts:322](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;322)

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

[math/Vector2.ts:261](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;261)

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

[math/Vector2.ts:208](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;208)

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

[math/Vector2.ts:223](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;223)

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

[math/Vector2.ts:181](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;181)

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

[math/Vector2.ts:190](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;190)

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

[math/Vector2.ts:245](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;245)

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

[math/Vector2.ts:253](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;253)

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

[math/Vector.ts:17](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector.ts?at&#x3D;873d649#line&#x3D;17)

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

[math/Vector2.ts:87](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;87)

___

### inverse

▸ **inverse**(): [`Vector2`](Vector2.md)

针对此向量取倒数

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[math/Vector2.ts:277](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;277)

___

### length

▸ **length**(): `number`

计算从 `[0, 0]` 到此向量的直线距离

#### Returns

`number`

#### Defined in

[math/Vector2.ts:215](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;215)

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

[math/Vector2.ts:287](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;287)

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

[math/Vector2.ts:163](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;163)

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

[math/Vector2.ts:172](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;172)

___

### negate

▸ **negate**(): [`Vector2`](Vector2.md)

针对此向量取反

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[math/Vector2.ts:269](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;269)

___

### normalize

▸ **normalize**(): [`Vector2`](Vector2.md)

将此向量转换为单位向量 (将其设置为与此向量具有相同方向但长度为 1 的向量)

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[math/Vector2.ts:295](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;295)

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

[math/Vector2.ts:199](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;199)

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

[math/Vector2.ts:109](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;109)

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

[math/Vector2.ts:119](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;119)

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

[math/Vector2.ts:145](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;145)

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

[math/Vector2.ts:154](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;154)

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

#### Defined in

[math/Vector2.ts:97](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;97)

___

### toString

▸ **toString**(): `string`

转换为字符串

#### Returns

`string`

#### Defined in

[math/Vector2.ts:338](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector2.ts?at&#x3D;873d649#line&#x3D;338)
