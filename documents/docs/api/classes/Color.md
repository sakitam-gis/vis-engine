---
id: "Color"
title: "Class: Color"
sidebar_label: "Color"
sidebar_position: 0
custom_edit_url: null
---

一个表示颜色的类，可以使用这个类来初始化颜色
```ts
// 默认是白色
const color1 = new Color();

// 16进制颜色
const color2 = new Color('#ff0000');

// RGB
const color3 = new Color('rgb(255, 0, 0)');
const color3 = new Color({ r: 255, g: 255, b: 255 });
const color3 = new Color({ r: 255, g: 255, b: 255, a: 1 });

// css 颜色名称
const color5 = new Color('skyblue');

// HSL
const color6 = new Color('hsl(0, 100%, 50%)');

// HSV
const color6 = new Color({ h: 360, s: 100, v: 100, a: 1 });

// 设置 rgba 值, 支持归一化和非归一化的值
const color7 = new Color(1, 0, 0);
const color7 = new Color(1, 0, 0, 1, true);
```

## Constructors

### constructor

• **new Color**(`v?`, `g?`, `b?`, `a?`, `isNormalized?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `v` | `number` \| `AnyColor` | `255` | 可以是 rgba 的 r 通道值，也可以是 AnyColor |
| `g?` | `number` | `undefined` | g 通道 |
| `b?` | `number` | `undefined` | b 通道 |
| `a` | `number` | `1` | alpha 通道 |
| `isNormalized` | `boolean` | `false` | 是否是归一化的数值 |

#### Defined in

[math/Color.ts:67](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;67)

## Properties

### a

• **a**: `number`

#### Defined in

[math/Color.ts:58](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;58)

___

### b

• **b**: `number`

#### Defined in

[math/Color.ts:57](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;57)

___

### g

• **g**: `number`

#### Defined in

[math/Color.ts:56](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;56)

___

### r

• **r**: `number`

#### Defined in

[math/Color.ts:55](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;55)

## Methods

### fromColor

▸ **fromColor**(`c`): [`Color`](Color.md)

解析颜色，凡是可以被 [colord](https://github.com/omgovich/colord) 解析的都可以使用

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `AnyColor` |

#### Returns

[`Color`](Color.md)

#### Defined in

[math/Color.ts:98](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;98)

___

### fromHSL

▸ **fromHSL**(`h`, `s`, `l`, `a?`): [`Color`](Color.md)

解析 hsl 颜色

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

[math/Color.ts:110](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;110)

___

### fromHSV

▸ **fromHSV**(`h`, `s`, `v`, `a?`): [`Color`](Color.md)

解析 hsv 颜色

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

[math/Color.ts:127](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;127)

___

### setAlpha

▸ **setAlpha**(`alpha`): [`Color`](Color.md)

设置 alpha 通道

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | `any` |

#### Returns

[`Color`](Color.md)

#### Defined in

[math/Color.ts:168](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;168)

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

[math/Color.ts:143](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;143)

___

### setRGBA

▸ **setRGBA**(`r`, `g`, `b`, `a`, `isNormalized?`): [`Color`](Color.md)

设置各通道的值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `any` | red 通道 |
| `g` | `any` | green 通道 |
| `b` | `any` | blue 通道 |
| `a` | `any` | alpha 通道 |
| `isNormalized?` | `boolean` | 是否已经归一化（一般从颜色字符串解析的都是未归一化的） |

#### Returns

[`Color`](Color.md)

#### Defined in

[math/Color.ts:156](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;156)

___

### toArray

▸ **toArray**(): `number`[]

转换为数组（一般已经归一化。可以直接传递给 gl）

#### Returns

`number`[]

#### Defined in

[math/Color.ts:215](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;215)

___

### toHSL

▸ **toHSL**(): `HslaColor`

输出 hsl 对象

#### Returns

`HslaColor`

#### Defined in

[math/Color.ts:187](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;187)

___

### toHSV

▸ **toHSV**(): `HsvaColor`

输出 hsv 对象

#### Returns

`HsvaColor`

#### Defined in

[math/Color.ts:194](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;194)

___

### toHex

▸ **toHex**(): `string`

输出 16 进制字符串

#### Returns

`string`

#### Defined in

[math/Color.ts:180](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;180)

___

### toObject

▸ **toObject**(`isNormalized?`): `Object`

将颜色转换为对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `isNormalized` | `boolean` | `false` | 是否进行归一化，默认采用 0-255 |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `g` | `number` |
| `r` | `number` |

#### Defined in

[math/Color.ts:202](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;202)

___

### toString

▸ **toString**(): `string`

转换为字符串

#### Returns

`string`

#### Defined in

[math/Color.ts:236](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;236)

___

### toVector

▸ **toVector**(): [`Vector4`](Vector4.md)

转换为 Vector4

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[math/Color.ts:222](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;222)

___

### toVector3

▸ **toVector3**(): [`Vector3`](Vector3.md)

转换为 Vector3

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[math/Color.ts:229](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Color.ts?at&#x3D;1f0fb3d#line&#x3D;229)
