[vis-engine - v1.0.0](../index.md) / Color

# Class: Color

## Table of contents

### Constructors

- [constructor](Color.md#constructor)

### Properties

- [a](Color.md#a)
- [b](Color.md#b)
- [g](Color.md#g)
- [r](Color.md#r)

### Methods

- [fromHSL](Color.md#fromhsl)
- [fromHSV](Color.md#fromhsv)
- [fromHex](Color.md#fromhex)
- [setAlpha](Color.md#setalpha)
- [setRGB](Color.md#setrgb)
- [setRGBA](Color.md#setrgba)
- [toArray](Color.md#toarray)
- [toHSL](Color.md#tohsl)
- [toHSV](Color.md#tohsv)
- [toHex](Color.md#tohex)
- [toObject](Color.md#toobject)
- [toString](Color.md#tostring)
- [toVector](Color.md#tovector)

## Constructors

### constructor

• **new Color**(`v?`, `g?`, `b?`, `a?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | `number` | `0` |
| `g?` | `number` | `undefined` |
| `b?` | `number` | `undefined` |
| `a` | `number` | `1` |

#### Defined in

[math/Color.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;21)

## Properties

### a

• **a**: `number`

#### Defined in

[math/Color.ts:19](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;19)

___

### b

• **b**: `number`

#### Defined in

[math/Color.ts:18](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;18)

___

### g

• **g**: `number`

#### Defined in

[math/Color.ts:17](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;17)

___

### r

• **r**: `number`

#### Defined in

[math/Color.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;16)

## Methods

### fromHSL

▸ **fromHSL**(`h`, `s`, `l`, `a?`): [`Color`](Color.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `h` | `any` | `undefined` |
| `s` | `any` | `undefined` |
| `l` | `any` | `undefined` |
| `a` | `number` | `1` |

#### Returns

[`Color`](Color.md)

#### Defined in

[math/Color.ts:50](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;50)

___

### fromHSV

▸ **fromHSV**(`h`, `s`, `v`, `a?`): [`Color`](Color.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `h` | `any` | `undefined` |
| `s` | `any` | `undefined` |
| `v` | `any` | `undefined` |
| `a` | `number` | `1` |

#### Returns

[`Color`](Color.md)

#### Defined in

[math/Color.ts:60](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;60)

___

### fromHex

▸ **fromHex**(`string`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `any` |

#### Returns

[`Color`](Color.md)

#### Defined in

[math/Color.ts:45](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;45)

___

### setAlpha

▸ **setAlpha**(`alpha`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | `any` |

#### Returns

[`Color`](Color.md)

#### Defined in

[math/Color.ts:89](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;89)

___

### setRGB

▸ **setRGB**(`r`, `g`, `b`): [`Color`](Color.md)

设置 rgb 数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | r 值，一般为 0-255 |
| `g` | `number` | g 值，一般为 0-255 |
| `b` | `number` | b 值，一般为 0-255 |

#### Returns

[`Color`](Color.md)

#### Defined in

[math/Color.ts:76](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;76)

___

### setRGBA

▸ **setRGBA**(`r`, `g`, `b`, `a`, `isOrigin?`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `any` |
| `g` | `any` |
| `b` | `any` |
| `a` | `any` |
| `isOrigin?` | `boolean` |

#### Returns

[`Color`](Color.md)

#### Defined in

[math/Color.ts:81](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;81)

___

### toArray

▸ **toArray**(): `number`[]

转换为数组

#### Returns

`number`[]

#### Defined in

[math/Color.ts:127](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;127)

___

### toHSL

▸ **toHSL**(): `any`

#### Returns

`any`

#### Defined in

[math/Color.ts:102](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;102)

___

### toHSV

▸ **toHSV**(): `any`

#### Returns

`any`

#### Defined in

[math/Color.ts:106](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;106)

___

### toHex

▸ **toHex**(): `any`

#### Returns

`any`

#### Defined in

[math/Color.ts:98](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;98)

___

### toObject

▸ **toObject**(`isNormalization?`): `Object`

将颜色转换为对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `isNormalization` | `boolean` | `false` | 是否进行归一化，默认采用 0-255 |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `g` | `number` |
| `r` | `number` |

#### Defined in

[math/Color.ts:114](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;114)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[math/Color.ts:138](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;138)

___

### toVector

▸ **toVector**(): [`Vector4`](Vector4.md)

转换为 Vector4

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Color.ts:134](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;4193568#line&#x3D;134)
