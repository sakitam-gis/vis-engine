# Interface: RenderTargetOptions

## Hierarchy

- [`ResourceOptions`](ResourceOptions.md)

  ↳ **`RenderTargetOptions`**

## Table of contents

### Properties

- [data](RenderTargetOptions.md#data)
- [name](RenderTargetOptions.md#name)
- [width](RenderTargetOptions.md#width)
- [height](RenderTargetOptions.md#height)
- [color](RenderTargetOptions.md#color)
- [attachments](RenderTargetOptions.md#attachments)
- [depth](RenderTargetOptions.md#depth)
- [stencil](RenderTargetOptions.md#stencil)
- [depthTexture](RenderTargetOptions.md#depthtexture)
- [id](RenderTargetOptions.md#id)
- [handle](RenderTargetOptions.md#handle)
- [userData](RenderTargetOptions.md#userdata)

## Properties

### data

• **data**: `any`

非图片和 canvas 数据，传入的是一组结构化数组，这里我们先不去指定数据类型

#### Defined in

[src/core/RenderTarget.ts:15](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L15)

___

### name

• **name**: `string`

设置此 `RenderTarget` 的名称，方便我们区分不同的 `RenderTarget`。

#### Overrides

[ResourceOptions](ResourceOptions.md).[name](ResourceOptions.md#name)

#### Defined in

[src/core/RenderTarget.ts:20](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L20)

___

### width

• **width**: `number`

`RenderTarget` 的宽度

#### Defined in

[src/core/RenderTarget.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L25)

___

### height

• **height**: `number`

`RenderTarget` 的高度

#### Defined in

[src/core/RenderTarget.ts:30](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L30)

___

### color

• **color**: `number`

颜色关联对象的数量，默认是`1`。
可以理解为整个帧缓存对象就是一张纹理，这个纹理的颜色就保存在`color attachment`中。

#### Defined in

[src/core/RenderTarget.ts:36](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L36)

___

### attachments

• **attachments**: [`Attachment`](../types/Attachment.md)[]

关联对象，此参数是一个数组，可以指定多组关联对象

#### Defined in

[src/core/RenderTarget.ts:41](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L41)

___

### depth

• **depth**: `boolean`

是否包含深度关联对象

#### Defined in

[src/core/RenderTarget.ts:46](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L46)

___

### stencil

• **stencil**: `boolean`

是否包含模版关联对象

#### Defined in

[src/core/RenderTarget.ts:51](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L51)

___

### depthTexture

• **depthTexture**: `boolean`

是否是深度纹理，默认是`false`。

#### Defined in

[src/core/RenderTarget.ts:56](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts#L56)

___

### id

• **id**: `string`

#### Inherited from

[ResourceOptions](ResourceOptions.md).[id](ResourceOptions.md#id)

#### Defined in

[src/core/Resource.ts:10](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L10)

___

### handle

• **handle**: `any`

#### Inherited from

[ResourceOptions](ResourceOptions.md).[handle](ResourceOptions.md#handle)

#### Defined in

[src/core/Resource.ts:12](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L12)

___

### userData

• **userData**: `any`

#### Inherited from

[ResourceOptions](ResourceOptions.md).[userData](ResourceOptions.md#userdata)

#### Defined in

[src/core/Resource.ts:13](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L13)
