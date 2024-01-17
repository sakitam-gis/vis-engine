# Class: Euler

欧拉角描述一个旋转变换，通过指定轴顺序和其各个轴向上的指定旋转角度来旋转一个物体

```ts
const a = new Euler(0, 1, 1.57, 'xyz' )
```

## Hierarchy

- `default`

  ↳ **`Euler`**

## Table of contents

### Constructors

- [constructor](Euler.md#constructor)

### Properties

- [elements](Euler.md#elements)

### Accessors

- [x](Euler.md#x)
- [y](Euler.md#y)
- [z](Euler.md#z)
- [order](Euler.md#order)
- [roll](Euler.md#roll)
- [pitch](Euler.md#pitch)
- [yaw](Euler.md#yaw)

### Methods

- [fromObject](Euler.md#fromobject)
- [toObject](Euler.md#toobject)
- [fromRotationMatrix](Euler.md#fromrotationmatrix)
- [fromQuaternion](Euler.md#fromquaternion)
- [fromVector3](Euler.md#fromvector3)
- [toQuaternion](Euler.md#toquaternion)
- [toVector3](Euler.md#tovector3)
- [set](Euler.md#set)
- [clone](Euler.md#clone)
- [copy](Euler.md#copy)
- [equals](Euler.md#equals)
- [onChange](Euler.md#onchange)
- [triggerChange](Euler.md#triggerchange)
- [toString](Euler.md#tostring)
- [fromArray](Euler.md#fromarray)
- [toArray](Euler.md#toarray)

## Constructors

### constructor

• **new Euler**(`x?`, `y?`, `z?`, `order?`): [`Euler`](Euler.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | 用弧度表示x轴旋转量，默认值是 0 |
| `y` | `number` | `0` | 用弧度表示y轴旋转量，默认值是 0 |
| `z` | `number` | `0` | 用弧度表示z轴旋转量，默认值是 0 |
| `order` | `ANGLE_ORDER` | `'xyz'` | 表示旋转顺序的字符串，默认为'xyz' |

#### Returns

[`Euler`](Euler.md)

#### Overrides

Vector.constructor

#### Defined in

[src/math/Euler.ts:32](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L32)

## Properties

### elements

• **elements**: `Float32Array` \| `Float64Array`

#### Overrides

Vector.elements

#### Defined in

[src/math/Euler.ts:20](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L20)

## Accessors

### x

• `get` **x**(): `number`

获取 x 值

#### Returns

`number`

number;

#### Defined in

[src/math/Euler.ts:45](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L45)

• `set` **x**(`x`): `void`

设置 x 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Euler.ts:53](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L53)

___

### y

• `get` **y**(): `number`

获取 y 值

#### Returns

`number`

number;

#### Defined in

[src/math/Euler.ts:62](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L62)

• `set` **y**(`y`): `void`

设置 y 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Euler.ts:70](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L70)

___

### z

• `get` **z**(): `number`

获取 z 值

#### Returns

`number`

number;

#### Defined in

[src/math/Euler.ts:79](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L79)

• `set` **z**(`z`): `void`

设置 z 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Euler.ts:87](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L87)

___

### order

• `get` **order**(): `ANGLE_ORDER`

获取旋转顺序

#### Returns

`ANGLE_ORDER`

#### Defined in

[src/math/Euler.ts:95](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L95)

• `set` **order**(`order`): `void`

设置旋转顺序

#### Parameters

| Name | Type |
| :------ | :------ |
| `order` | `ANGLE_ORDER` |

#### Returns

`void`

#### Defined in

[src/math/Euler.ts:103](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L103)

___

### roll

• `get` **roll**(): `number`

#### Returns

`number`

#### Defined in

[src/math/Euler.ts:108](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L108)

• `set` **roll**(`roll`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `roll` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Euler.ts:112](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L112)

___

### pitch

• `get` **pitch**(): `number`

#### Returns

`number`

#### Defined in

[src/math/Euler.ts:116](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L116)

• `set` **pitch**(`pitch`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pitch` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Euler.ts:120](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L120)

___

### yaw

• `get` **yaw**(): `number`

#### Returns

`number`

#### Defined in

[src/math/Euler.ts:124](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L124)

• `set` **yaw**(`yaw`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `yaw` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Euler.ts:128](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L128)

## Methods

### fromObject

▸ **fromObject**(`«destructured»`): [`Euler`](Euler.md)

从对象创建欧拉角

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `x` | `any` |
| › `y` | `any` |
| › `z` | `any` |
| › `order` | `any` |

#### Returns

[`Euler`](Euler.md)

#### Defined in

[src/math/Euler.ts:139](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L139)

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
| `order` | `ANGLE_ORDER` |

#### Defined in

[src/math/Euler.ts:159](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L159)

___

### fromRotationMatrix

▸ **fromRotationMatrix**(`m`, `order?`, `update?`): [`Euler`](Euler.md)

从 Matrix4 创建欧拉角

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `m` | [`Matrix4`](Matrix4.md) | `undefined` |
| `order` | `ANGLE_ORDER` | `undefined` |
| `update` | `boolean` | `true` |

#### Returns

[`Euler`](Euler.md)

#### Defined in

[src/math/Euler.ts:174](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L174)

___

### fromQuaternion

▸ **fromQuaternion**(`q`): [`Euler`](Euler.md)

从四元数创建欧拉角

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) |

#### Returns

[`Euler`](Euler.md)

#### Defined in

[src/math/Euler.ts:268](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L268)

___

### fromVector3

▸ **fromVector3**(`vec3`, `order?`): [`Euler`](Euler.md)

从 Vector3 创建欧拉角

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec3` | `any` |
| `order` | `ANGLE_ORDER` |

#### Returns

[`Euler`](Euler.md)

#### Defined in

[src/math/Euler.ts:289](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L289)

___

### toQuaternion

▸ **toQuaternion**(): [`Quaternion`](Quaternion.md)

转换到四元数

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Euler.ts:296](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L296)

___

### toVector3

▸ **toVector3**(): [`Vector3`](Vector3.md)

转换到 Vector3

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Euler.ts:314](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L314)

___

### set

▸ **set**(`x`, `y`, `z`, `order?`): [`Euler`](Euler.md)

设置欧拉角的 x、y、z、order

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |
| `y` | `any` |
| `z` | `any` |
| `order` | `ANGLE_ORDER` |

#### Returns

[`Euler`](Euler.md)

#### Defined in

[src/math/Euler.ts:325](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L325)

___

### clone

▸ **clone**(): [`Euler`](Euler.md)

克隆此欧拉角对象

#### Returns

[`Euler`](Euler.md)

#### Defined in

[src/math/Euler.ts:337](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L337)

___

### copy

▸ **copy**(`euler`): [`Euler`](Euler.md)

将传入的 euler 的各数值复制到此欧拉角

#### Parameters

| Name | Type |
| :------ | :------ |
| `euler` | [`Euler`](Euler.md) |

#### Returns

[`Euler`](Euler.md)

#### Defined in

[src/math/Euler.ts:345](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L345)

___

### equals

▸ **equals**(`e`): `boolean`

判断两个欧拉角是否相同

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`Euler`](Euler.md) |

#### Returns

`boolean`

#### Defined in

[src/math/Euler.ts:361](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L361)

___

### onChange

▸ **onChange**(`cb`): `void`

监听欧拉角变更

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | `ICallback` | 回调函数 |

#### Returns

`void`

#### Defined in

[src/math/Euler.ts:369](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L369)

___

### triggerChange

▸ **triggerChange**(): `void`

触发所有的回调函数

#### Returns

`void`

#### Defined in

[src/math/Euler.ts:378](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L378)

___

### toString

▸ **toString**(): `string`

转换为字符串

#### Returns

`string`

#### Defined in

[src/math/Euler.ts:385](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts#L385)

___

### fromArray

▸ **fromArray**(`array`, `offset?`): [`Euler`](Euler.md)

从数组构建向量数据

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `any` | `undefined` | 原始数组 |
| `offset` | `number` | `0` | 数组偏移量 |

#### Returns

[`Euler`](Euler.md)

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
