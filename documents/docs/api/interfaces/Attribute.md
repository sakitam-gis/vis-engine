---
id: "Attribute"
title: "Interface: Attribute"
sidebar_label: "Attribute"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### buffer

• `Optional` **buffer**: `WebGLBuffer`

`WebGLBuffer`，一般我们不需要指定，会在内部进行创建

#### Defined in

[src/core/BufferAttribute.ts:78](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/BufferAttribute.ts#L78)

___

### count

• `Optional` **count**: `number`

顶点数量

#### Defined in

[src/core/BufferAttribute.ts:62](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/BufferAttribute.ts#L62)

___

### data

• **data**: [`DataType`](../#datatype)

`Attribute` 数据，必须是 `TypedArray` 类型

#### Defined in

[src/core/BufferAttribute.ts:23](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/BufferAttribute.ts#L23)

___

### divisor

• `Optional` **divisor**: `number`

指定实例化渲染的数量，仅当 `ANGLE_instanced_arrays` 扩展可用时才支持此参数，在
`webgl2` 中默认支持，调用函数为 `vertexAttribDivisor`

#### Defined in

[src/core/BufferAttribute.ts:47](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/BufferAttribute.ts#L47)

___

### needsUpdate

• `Optional` **needsUpdate**: `boolean`

标记此 `Attribute` 是否需要重新上传 `GPU`，一般我们在数据改变时需要将此值设置为`true`。

#### Defined in

[src/core/BufferAttribute.ts:83](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/BufferAttribute.ts#L83)

___

### normalized

• `Optional` **normalized**: `boolean`

指定当整数值转换为浮点数时是否应该将整数数值归一化到特定的范围。
- 对于 `gl.BYTE` 和 `gl.SHORT`，当设置为`true`时，归一化到 [-1, 1]。
- 对于 `gl.UNSIGNED_BYTE` 和 `gl.UNSIGNED_SHORT`，当设置为`true`时，归一化到 [0, 1]。
- 对于 `gl.FLOAT` 和 `gl.HALF_FLOAT`，此参数无效。

#### Defined in

[src/core/BufferAttribute.ts:41](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/BufferAttribute.ts#L41)

___

### offset

• `Optional` **offset**: `number`

指定顶点属性数组中第一部分的字节偏移量。必须是类型的字节长度的倍数

#### Defined in

[src/core/BufferAttribute.ts:57](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/BufferAttribute.ts#L57)

___

### size

• `Optional` **size**: `number`

指定缓冲区每个顶点分量的个数, 一般为 1-4

#### Defined in

[src/core/BufferAttribute.ts:28](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/BufferAttribute.ts#L28)

___

### stride

• `Optional` **stride**: `number`

以字节为单位指定连续顶点属性开始之间的偏移量(即数组中一行长度)

#### Defined in

[src/core/BufferAttribute.ts:52](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/BufferAttribute.ts#L52)

___

### target

• `Optional` **target**: `number`

指定缓冲区对象，常用的值为`gl.ARRAY_BUFFER` 和 `gl.ELEMENT_ARRAY_BUFFER`。当然在`webgl2` 中有一些新的可用值，如 `gl.UNIFORM_BUFFER`和 `gl.TRANSFORM_FEEDBACK_BUFFER`。

#### Defined in

[src/core/BufferAttribute.ts:67](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/BufferAttribute.ts#L67)

___

### type

• `Optional` **type**: `number`

指定数组中每个元素的数据类型，一般我们不传时会由内部进行判断。

#### Defined in

[src/core/BufferAttribute.ts:33](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/BufferAttribute.ts#L33)

___

### usage

• `Optional` **usage**: `number`

标记如何使用这些数据，`webgl` 会针对性的做一些优化，默认是 `gl.STATIC_DRAW`，即标记数据不会经常性改变。
其他可用值请参考 https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData。

#### Defined in

[src/core/BufferAttribute.ts:73](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/BufferAttribute.ts#L73)
