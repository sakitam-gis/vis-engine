---
id: "BufferAttribute"
title: "Class: BufferAttribute"
sidebar_label: "BufferAttribute"
sidebar_position: 0
custom_edit_url: null
---

存储和 `BufferAttribute` 相关的属性

## Constructors

### constructor

• **new BufferAttribute**(`renderer`, `attribute`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) |
| `attribute` | [`Attribute`](../interfaces/Attribute.md) |

#### Defined in

[core/BufferAttribute.ts:196](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;cadd330#line&#x3D;196)

## Properties

### buffer

• **buffer**: `WithNull`<`WebGLBuffer`\>

WebGLBuffer

#### Defined in

[core/BufferAttribute.ts:194](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;cadd330#line&#x3D;194)

___

### count

• **count**: `number`

顶点数量

#### Defined in

[core/BufferAttribute.ts:178](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;cadd330#line&#x3D;178)

___

### data

• **data**: [`DataType`](../#datatype)

`Attribute` 数据，必须是 `TypedArray` 类型

#### Defined in

[core/BufferAttribute.ts:133](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;cadd330#line&#x3D;133)

___

### divisor

• **divisor**: `number`

指定实例化渲染的数量

#### Defined in

[core/BufferAttribute.ts:163](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;cadd330#line&#x3D;163)

___

### id

• **id**: `string`

`BufferAttribute` 的 `id`，不传时由内部生成。

#### Defined in

[core/BufferAttribute.ts:128](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;cadd330#line&#x3D;128)

___

### instanced

• **instanced**: `boolean`

`BufferAttribute` 是否是实例化数据

#### Defined in

[core/BufferAttribute.ts:148](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;cadd330#line&#x3D;148)

___

### needsUpdate

• **needsUpdate**: `boolean`

标记此 `BufferAttribute` 是否需要重新上传 `GPU`，一般我们在数据改变时需要将此值设置为`true`。

#### Defined in

[core/BufferAttribute.ts:173](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;cadd330#line&#x3D;173)

___

### normalized

• **normalized**: `boolean`

当整数值转换为浮点数时是否应该将整数数值归一化到特定的范围

#### Defined in

[core/BufferAttribute.ts:168](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;cadd330#line&#x3D;168)

___

### offset

• **offset**: `number`

`BufferAttribute`中顶点属性数组中第一部分的字节偏移量

#### Defined in

[core/BufferAttribute.ts:158](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;cadd330#line&#x3D;158)

___

### size

• **size**: `number`

`BufferAttribute`中缓冲区每个顶点分量的个数, 一般为 1-4

#### Defined in

[core/BufferAttribute.ts:143](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;cadd330#line&#x3D;143)

___

### stride

• **stride**: `number`

`BufferAttribute`中缓冲区顶点的偏移量

#### Defined in

[core/BufferAttribute.ts:153](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;cadd330#line&#x3D;153)

___

### target

• **target**: `number`

缓冲区对象，常用的值为`gl.ARRAY_BUFFER` 和 `gl.ELEMENT_ARRAY_BUFFER`。当然在`webgl2` 中有一些新的可用值，如 `gl.UNIFORM_BUFFER`和 `gl.TRANSFORM_FEEDBACK_BUFFER`。

#### Defined in

[core/BufferAttribute.ts:189](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;cadd330#line&#x3D;189)

___

### type

• **type**: `number`

`BufferAttribute`中元素的数据类型

#### Defined in

[core/BufferAttribute.ts:138](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;cadd330#line&#x3D;138)

___

### usage

• **usage**: `number`

标记如何使用这些数据，`webgl` 会针对性的做一些优化，默认是 `gl.STATIC_DRAW`，即标记数据不会经常性改变。
其他可用值请参考 https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData。

#### Defined in

[core/BufferAttribute.ts:184](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;cadd330#line&#x3D;184)
