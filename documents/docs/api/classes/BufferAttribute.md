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

[core/BufferAttribute.ts:188](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;444ba1d#line&#x3D;188)

## Properties

### buffer

• **buffer**: `WithNull`<`WebGLBuffer`\>

WebGLBuffer

#### Defined in

[core/BufferAttribute.ts:186](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;444ba1d#line&#x3D;186)

___

### count

• **count**: `number`

顶点数量

#### Defined in

[core/BufferAttribute.ts:170](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;444ba1d#line&#x3D;170)

___

### data

• **data**: [`DataType`](../#datatype)

`Attribute` 数据，必须是 `TypedArray` 类型

#### Defined in

[core/BufferAttribute.ts:125](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;444ba1d#line&#x3D;125)

___

### divisor

• **divisor**: `number`

指定实例化渲染的数量

#### Defined in

[core/BufferAttribute.ts:155](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;444ba1d#line&#x3D;155)

___

### id

• **id**: `string`

`BufferAttribute` 的 `id`，不传时由内部生成。

#### Defined in

[core/BufferAttribute.ts:120](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;444ba1d#line&#x3D;120)

___

### instanced

• **instanced**: `boolean`

`BufferAttribute` 是否是实例化数据

#### Defined in

[core/BufferAttribute.ts:140](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;444ba1d#line&#x3D;140)

___

### needsUpdate

• **needsUpdate**: `boolean`

标记此 `BufferAttribute` 是否需要重新上传 `GPU`，一般我们在数据改变时需要将此值设置为`true`。

#### Defined in

[core/BufferAttribute.ts:165](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;444ba1d#line&#x3D;165)

___

### normalized

• **normalized**: `boolean`

当整数值转换为浮点数时是否应该将整数数值归一化到特定的范围

#### Defined in

[core/BufferAttribute.ts:160](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;444ba1d#line&#x3D;160)

___

### offset

• **offset**: `number`

`BufferAttribute`中顶点属性数组中第一部分的字节偏移量

#### Defined in

[core/BufferAttribute.ts:150](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;444ba1d#line&#x3D;150)

___

### size

• **size**: `number`

`BufferAttribute`中缓冲区每个顶点分量的个数, 一般为 1-4

#### Defined in

[core/BufferAttribute.ts:135](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;444ba1d#line&#x3D;135)

___

### stride

• **stride**: `number`

`BufferAttribute`中缓冲区顶点的偏移量

#### Defined in

[core/BufferAttribute.ts:145](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;444ba1d#line&#x3D;145)

___

### target

• **target**: `number`

缓冲区对象，常用的值为`gl.ARRAY_BUFFER` 和 `gl.ELEMENT_ARRAY_BUFFER`。当然在`webgl2` 中有一些新的可用值，如 `gl.UNIFORM_BUFFER`和 `gl.TRANSFORM_FEEDBACK_BUFFER`。

#### Defined in

[core/BufferAttribute.ts:181](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;444ba1d#line&#x3D;181)

___

### type

• **type**: `number`

`BufferAttribute`中元素的数据类型

#### Defined in

[core/BufferAttribute.ts:130](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;444ba1d#line&#x3D;130)

___

### usage

• **usage**: `number`

标记如何使用这些数据，`webgl` 会针对性的做一些优化，默认是 `gl.STATIC_DRAW`，即标记数据不会经常性改变。
其他可用值请参考 https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData。

#### Defined in

[core/BufferAttribute.ts:176](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;444ba1d#line&#x3D;176)
