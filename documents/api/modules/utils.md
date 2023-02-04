[vis-engine - v1.2.0](../index.md) / utils

# Namespace: utils

## Table of contents

### Interfaces

- [GlOptions](../interfaces/utils.GlOptions.md)

### Variables

- [DEG\_TO\_RAD](utils.md#deg_to_rad)
- [RAD\_TO\_DEG](utils.md#rad_to_deg)

### Functions

- [clamp](utils.md#clamp)
- [defineShader](utils.md#defineshader)
- [degToRad](utils.md#degtorad)
- [getContext](utils.md#getcontext)
- [getFloatArrayConstructor](utils.md#getfloatarrayconstructor)
- [getShaderName](utils.md#getshadername)
- [getWireframeIndex](utils.md#getwireframeindex)
- [hasValue](utils.md#hasvalue)
- [highPrecision](utils.md#highprecision)
- [isHex](utils.md#ishex)
- [isNull](utils.md#isnull)
- [isNumber](utils.md#isnumber)
- [isObject](utils.md#isobject)
- [isPowerOfTwo](utils.md#ispoweroftwo)
- [isRegexp](utils.md#isregexp)
- [isString](utils.md#isstring)
- [isUndef](utils.md#isundef)
- [isUniqueEdge](utils.md#isuniqueedge)
- [isWebGL](utils.md#iswebgl)
- [isWebGL2](utils.md#iswebgl2)
- [now](utils.md#now)
- [omit](utils.md#omit)
- [parseShader](utils.md#parseshader)
- [radToDeg](utils.md#radtodeg)
- [typeOf](utils.md#typeof)
- [uid](utils.md#uid)

## Variables

### DEG\_TO\_RAD

• `Const` **DEG\_TO\_RAD**: `number`

#### Defined in

[src/utils/math.ts:3](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/math.ts?at&#x3D;4124c8d#line&#x3D;3)

___

### RAD\_TO\_DEG

• `Const` **RAD\_TO\_DEG**: `number`

#### Defined in

[src/utils/math.ts:4](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/math.ts?at&#x3D;4124c8d#line&#x3D;4)

## Functions

### clamp

▸ **clamp**(`val`, `min`, `max`): `number`

将值限定在最大最小值中间

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 当前值 |
| `min` | `number` | 最小值 |
| `max` | `number` | 最大值 |

#### Returns

`number`

#### Defined in

[src/utils/math.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/math.ts?at&#x3D;4124c8d#line&#x3D;28)

___

### defineShader

▸ **defineShader**(`shader`, `defines?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | `any` |
| `defines` | `Object` |

#### Returns

`any`

#### Defined in

[src/utils/shader.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/shader.ts?at&#x3D;4124c8d#line&#x3D;7)

___

### degToRad

▸ **degToRad**(`deg`): `number`

度转弧度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deg` | `number` | 度 |

#### Returns

`number`

#### Defined in

[src/utils/math.ts:10](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/math.ts?at&#x3D;4124c8d#line&#x3D;10)

___

### getContext

▸ **getContext**(`canvas`, `glOptions?`, `requestWebGl2?`): ``null`` \| `WebGLRenderingContext`

获取 webgl 示例

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `canvas` | `HTMLCanvasElement` | `undefined` |
| `glOptions` | `Partial`<[`GlOptions`](../interfaces/utils.GlOptions.md)\> | `{}` |
| `requestWebGl2` | `boolean` | `false` |

#### Returns

``null`` \| `WebGLRenderingContext`

#### Defined in

[src/utils/gl.ts:74](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/gl.ts?at&#x3D;4124c8d#line&#x3D;74)

___

### getFloatArrayConstructor

▸ **getFloatArrayConstructor**(): `Float32ArrayConstructor` \| `Float64ArrayConstructor`

获取 FloatArray 构造器

#### Returns

`Float32ArrayConstructor` \| `Float64ArrayConstructor`

#### Defined in

[src/utils/math.ts:63](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/math.ts?at&#x3D;4124c8d#line&#x3D;63)

___

### getShaderName

▸ **getShaderName**(`shader`, `defaultName?`): `string`

Extracts GLSLIFY style naming of shaders: `#define SHADER_NAME ...`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `shader` | `string` | `undefined` |
| `defaultName` | `string` | `'unnamed'` |

#### Returns

`string`

#### Defined in

[src/utils/shader.ts:12](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/shader.ts?at&#x3D;4124c8d#line&#x3D;12)

___

### getWireframeIndex

▸ **getWireframeIndex**(`position`, `indices`, `numIndices`, `data?`): `number`[]

根据顶点索引重新构建 `Wireframe` 索引

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`DataType`](../index.md#datatype) | 顶点数据 |
| `indices` | `number`[] | 索引数据 |
| `numIndices` | `number` | 索引数量 |
| `data?` | `Uint32Array` \| `Uint16Array` | 原始索引数据 |

#### Returns

`number`[]

#### Defined in

[src/utils/shader.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/shader.ts?at&#x3D;4124c8d#line&#x3D;25)

___

### hasValue

▸ **hasValue**(`v`, `state`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |
| `state` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/index.ts:80](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/index.ts?at&#x3D;4124c8d#line&#x3D;80)

___

### highPrecision

▸ **highPrecision**(`b`, `notifyGlMatrix?`): `void`

设置是否使用双精度浮点数

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `b` | `boolean` | `undefined` |  |
| `notifyGlMatrix` | `boolean` | `true` | 如果不想影响 `gl-matrix` 的构造器，需要设定为 `false`，这在我们公用 `gl-matrix` 并且其他库使用构造器的 `instanceof` 做相关判断时可以避免受到影响。 |

#### Returns

`void`

#### Defined in

[src/utils/math.ts:48](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/math.ts?at&#x3D;4124c8d#line&#x3D;48)

___

### isHex

▸ **isHex**(`string`): `boolean`

简单判断是否是 16 进制字符串（需要完善）

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/index.ts:42](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/index.ts?at&#x3D;4124c8d#line&#x3D;42)

___

### isNull

▸ **isNull**(`value`): `boolean`

判断是否是 null

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/index.ts:67](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/index.ts?at&#x3D;4124c8d#line&#x3D;67)

___

### isNumber

▸ **isNumber**(`s`): s is number

判断是否是数字

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `any` |

#### Returns

s is number

boolean

#### Defined in

[src/utils/index.ts:51](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/index.ts?at&#x3D;4124c8d#line&#x3D;51)

___

### isObject

▸ **isObject**(`value`): `boolean`

判断是否是对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/index.ts:75](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/index.ts?at&#x3D;4124c8d#line&#x3D;75)

___

### isPowerOfTwo

▸ **isPowerOfTwo**(`value`): `boolean`

判断数值是否是 2 的 n 次方

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/math.ts:36](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/math.ts?at&#x3D;4124c8d#line&#x3D;36)

___

### isRegexp

▸ **isRegexp**(`obj`): obj is RegExp

判断是否是正则

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

obj is RegExp

#### Defined in

[src/utils/index.ts:59](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/index.ts?at&#x3D;4124c8d#line&#x3D;59)

___

### isString

▸ **isString**(`s`): s is string

判断是否是字符串

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `any` |

#### Returns

s is string

boolean

#### Defined in

[src/utils/index.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/index.ts?at&#x3D;4124c8d#line&#x3D;25)

___

### isUndef

▸ **isUndef**(`s`): s is undefined

判断是否是 undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `any` |

#### Returns

s is undefined

boolean

#### Defined in

[src/utils/index.ts:34](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/index.ts?at&#x3D;4124c8d#line&#x3D;34)

___

### isUniqueEdge

▸ **isUniqueEdge**(`start`, `end`, `position`, `edges`): `boolean`

判断是否是独立的边

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `any` |
| `end` | `any` |
| `position` | `any` |
| `edges` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/shader.ts:67](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/shader.ts?at&#x3D;4124c8d#line&#x3D;67)

___

### isWebGL

▸ **isWebGL**(`gl`): `boolean`

判断是否是 webgl

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/gl.ts:5](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/gl.ts?at&#x3D;4124c8d#line&#x3D;5)

___

### isWebGL2

▸ **isWebGL2**(`gl`): `boolean`

判断是否是 webgl2

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/gl.ts:20](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/gl.ts?at&#x3D;4124c8d#line&#x3D;20)

___

### now

▸ **now**(): `number`

获取当前秒数，自动回退

#### Returns

`number`

number

#### Defined in

[src/utils/index.ts:9](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/index.ts?at&#x3D;4124c8d#line&#x3D;9)

___

### omit

▸ **omit**<`T`, `K`\>(`obj`, `keys?`): `Omit`<`T`, `K`\>

排除对象的 key

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `T` | `undefined` |
| `keys` | `K`[] | `[]` |

#### Returns

`Omit`<`T`, `K`\>

#### Defined in

[src/utils/index.ts:106](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/index.ts?at&#x3D;4124c8d#line&#x3D;106)

___

### parseShader

▸ **parseShader**(`shader`, `defines?`, `includes?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `shader` | `any` | `undefined` |
| `defines` | `string`[] | `[]` |
| `includes` | `never`[] | `[]` |

#### Returns

`any`

#### Defined in

[src/utils/shader.ts:3](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/shader.ts?at&#x3D;4124c8d#line&#x3D;3)

___

### radToDeg

▸ **radToDeg**(`a`): `number`

弧度转度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 弧度 |

#### Returns

`number`

#### Defined in

[src/utils/math.ts:18](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/math.ts?at&#x3D;4124c8d#line&#x3D;18)

___

### typeOf

▸ **typeOf**(`value`): `string`

返回数据类型

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

string

#### Defined in

[src/utils/index.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/index.ts?at&#x3D;4124c8d#line&#x3D;16)

___

### uid

▸ **uid**(`id?`): `string`

获取 uid

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `'id'` |

#### Returns

`string`

uid

#### Defined in

[src/utils/index.ts:95](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/index.ts?at&#x3D;4124c8d#line&#x3D;95)
