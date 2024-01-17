# Class: Quaternion

四元数，主要用于在三维世界描述旋转
```ts
const a = new Quaternion(0, 0, 0, 0);
```

## Hierarchy

- `default`

  ↳ **`Quaternion`**

## Table of contents

### Constructors

- [constructor](Quaternion.md#constructor)

### Properties

- [elements](Quaternion.md#elements)

### Accessors

- [x](Quaternion.md#x)
- [y](Quaternion.md#y)
- [z](Quaternion.md#z)
- [w](Quaternion.md#w)

### Methods

- [fromObject](Quaternion.md#fromobject)
- [toObject](Quaternion.md#toobject)
- [fromAxisAngle](Quaternion.md#fromaxisangle)
- [getAxisAngle](Quaternion.md#getaxisangle)
- [fromEuler](Quaternion.md#fromeuler)
- [fromMat3](Quaternion.md#frommat3)
- [set](Quaternion.md#set)
- [length](Quaternion.md#length)
- [multiply](Quaternion.md#multiply)
- [slerp](Quaternion.md#slerp)
- [invert](Quaternion.md#invert)
- [conjugate](Quaternion.md#conjugate)
- [normalize](Quaternion.md#normalize)
- [dot](Quaternion.md#dot)
- [angleTo](Quaternion.md#angleto)
- [clone](Quaternion.md#clone)
- [copy](Quaternion.md#copy)
- [equals](Quaternion.md#equals)
- [onChange](Quaternion.md#onchange)
- [triggerChange](Quaternion.md#triggerchange)
- [toString](Quaternion.md#tostring)
- [fromArray](Quaternion.md#fromarray)
- [toArray](Quaternion.md#toarray)

## Constructors

### constructor

• **new Quaternion**(`x?`, `y?`, `z?`, `w?`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | x 坐标，默认为 0 |
| `y` | `number` | `0` | y 坐标，默认为 0 |
| `z` | `number` | `0` | z 坐标，默认为 0 |
| `w` | `number` | `0` | w 坐标，默认为 0 |

#### Returns

[`Quaternion`](Quaternion.md)

#### Overrides

Vector.constructor

#### Defined in

[src/math/Quaternion.ts:45](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L45)

## Properties

### elements

• **elements**: `Float32Array` \| `Float64Array`

#### Overrides

Vector.elements

#### Defined in

[src/math/Quaternion.ts:35](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L35)

## Accessors

### x

• `get` **x**(): `number`

获取 x 值

#### Returns

`number`

number;

#### Defined in

[src/math/Quaternion.ts:58](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L58)

• `set` **x**(`x`): `void`

设置 x 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Quaternion.ts:66](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L66)

___

### y

• `get` **y**(): `number`

获取 y 值

#### Returns

`number`

number;

#### Defined in

[src/math/Quaternion.ts:75](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L75)

• `set` **y**(`y`): `void`

设置 y 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Quaternion.ts:83](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L83)

___

### z

• `get` **z**(): `number`

获取 z 值

#### Returns

`number`

number;

#### Defined in

[src/math/Quaternion.ts:92](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L92)

• `set` **z**(`z`): `void`

设置 z 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Quaternion.ts:100](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L100)

___

### w

• `get` **w**(): `number`

获取 w 值

#### Returns

`number`

number;

#### Defined in

[src/math/Quaternion.ts:109](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L109)

• `set` **w**(`w`): `void`

设置 w 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `w` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Quaternion.ts:117](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L117)

## Methods

### fromObject

▸ **fromObject**(`object`): [`Quaternion`](Quaternion.md)

从对象赋值 Quaternion 的 x、y、z、w 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |
| `object.x` | `any` |
| `object.y` | `any` |
| `object.z` | `any` |
| `object.w` | `any` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Quaternion.ts:126](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L126)

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
| `w` | `number` |

#### Defined in

[src/math/Quaternion.ts:138](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L138)

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

[src/math/Quaternion.ts:152](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L152)

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

[src/math/Quaternion.ts:162](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L162)

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

[src/math/Quaternion.ts:172](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L172)

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

[src/math/Quaternion.ts:182](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L182)

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

[src/math/Quaternion.ts:187](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L187)

___

### length

▸ **length**(): `any`

计算四元数的直线长度

#### Returns

`any`

#### Defined in

[src/math/Quaternion.ts:196](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L196)

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

[src/math/Quaternion.ts:205](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L205)

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

[src/math/Quaternion.ts:221](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L221)

___

### invert

▸ **invert**(): [`Quaternion`](Quaternion.md)

翻转该四元数

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Quaternion.ts:230](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L230)

___

### conjugate

▸ **conjugate**(): [`Quaternion`](Quaternion.md)

计算此四元数的旋转共轭（围绕旋转轴在相反方向上的旋转）

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Quaternion.ts:239](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L239)

___

### normalize

▸ **normalize**(): [`Quaternion`](Quaternion.md)

（归一化）四元数。 即计算与该四元数具有相同旋转、但长度为1的四元数

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Quaternion.ts:248](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L248)

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

[src/math/Quaternion.ts:258](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L258)

___

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

[src/math/Quaternion.ts:266](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L266)

___

### clone

▸ **clone**(): [`Quaternion`](Quaternion.md)

创建一个与该四元数具有相同x、y、z和w 属性的四元数

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Quaternion.ts:273](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L273)

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

[src/math/Quaternion.ts:281](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L281)

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

[src/math/Quaternion.ts:291](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L291)

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

[src/math/Quaternion.ts:299](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L299)

___

### triggerChange

▸ **triggerChange**(): `void`

触发所有的回调函数

#### Returns

`void`

#### Defined in

[src/math/Quaternion.ts:308](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L308)

___

### toString

▸ **toString**(): `string`

转换为字符串

#### Returns

`string`

#### Defined in

[src/math/Quaternion.ts:315](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Quaternion.ts#L315)

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

[src/math/Vector.ts:15](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector.ts#L15)

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

[src/math/Vector.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector.ts#L28)
