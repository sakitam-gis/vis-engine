# Class: BufferAttribute

存储和 `BufferAttribute` 相关的属性

## Table of contents

### Constructors

- [constructor](BufferAttribute.md#constructor)

### Properties

- [id](BufferAttribute.md#id)
- [data](BufferAttribute.md#data)
- [type](BufferAttribute.md#type)
- [size](BufferAttribute.md#size)
- [instanced](BufferAttribute.md#instanced)
- [stride](BufferAttribute.md#stride)
- [offset](BufferAttribute.md#offset)
- [divisor](BufferAttribute.md#divisor)
- [normalized](BufferAttribute.md#normalized)
- [needsUpdate](BufferAttribute.md#needsupdate)
- [count](BufferAttribute.md#count)
- [usage](BufferAttribute.md#usage)
- [target](BufferAttribute.md#target)
- [buffer](BufferAttribute.md#buffer)

## Constructors

### constructor

• **new BufferAttribute**(`renderer`, `attribute`): [`BufferAttribute`](BufferAttribute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) |
| `attribute` | [`Attribute`](../interfaces/Attribute.md) |

#### Returns

[`BufferAttribute`](BufferAttribute.md)

#### Defined in

[src/core/BufferAttribute.ts:196](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts#L196)

## Properties

### id

• **id**: `string`

`BufferAttribute` 的 `id`，不传时由内部生成。

#### Defined in

[src/core/BufferAttribute.ts:128](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts#L128)

___

### data

• **data**: [`DataType`](../types/DataType.md)

`Attribute` 数据，必须是 `TypedArray` 类型

#### Defined in

[src/core/BufferAttribute.ts:133](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts#L133)

___

### type

• **type**: `number`

`BufferAttribute`中元素的数据类型

#### Defined in

[src/core/BufferAttribute.ts:138](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts#L138)

___

### size

• **size**: `number`

`BufferAttribute`中缓冲区每个顶点分量的个数, 一般为 1-4

#### Defined in

[src/core/BufferAttribute.ts:143](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts#L143)

___

### instanced

• **instanced**: `boolean`

`BufferAttribute` 是否是实例化数据

#### Defined in

[src/core/BufferAttribute.ts:148](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts#L148)

___

### stride

• **stride**: `number`

`BufferAttribute`中缓冲区顶点的偏移量

#### Defined in

[src/core/BufferAttribute.ts:153](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts#L153)

___

### offset

• **offset**: `number`

`BufferAttribute`中顶点属性数组中第一部分的字节偏移量

#### Defined in

[src/core/BufferAttribute.ts:158](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts#L158)

___

### divisor

• **divisor**: `number`

指定实例化渲染的数量

#### Defined in

[src/core/BufferAttribute.ts:163](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts#L163)

___

### normalized

• **normalized**: `boolean`

当整数值转换为浮点数时是否应该将整数数值归一化到特定的范围

#### Defined in

[src/core/BufferAttribute.ts:168](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts#L168)

___

### needsUpdate

• **needsUpdate**: `boolean`

标记此 `BufferAttribute` 是否需要重新上传 `GPU`，一般我们在数据改变时需要将此值设置为`true`。

#### Defined in

[src/core/BufferAttribute.ts:173](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts#L173)

___

### count

• **count**: `number`

顶点数量

#### Defined in

[src/core/BufferAttribute.ts:178](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts#L178)

___

### usage

• **usage**: `number`

标记如何使用这些数据，`webgl` 会针对性的做一些优化，默认是 `gl.STATIC_DRAW`，即标记数据不会经常性改变。
其他可用值请参考 https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData。

#### Defined in

[src/core/BufferAttribute.ts:184](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts#L184)

___

### target

• **target**: `number`

缓冲区对象，常用的值为`gl.ARRAY_BUFFER` 和 `gl.ELEMENT_ARRAY_BUFFER`。当然在`webgl2` 中有一些新的可用值，如 `gl.UNIFORM_BUFFER`和 `gl.TRANSFORM_FEEDBACK_BUFFER`。

#### Defined in

[src/core/BufferAttribute.ts:189](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts#L189)

___

### buffer

• **buffer**: `WithNull`\<`WebGLBuffer`\>

WebGLBuffer

#### Defined in

[src/core/BufferAttribute.ts:194](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts#L194)
