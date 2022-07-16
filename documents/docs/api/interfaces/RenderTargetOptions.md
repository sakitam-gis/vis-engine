---
id: "RenderTargetOptions"
title: "Interface: RenderTargetOptions"
sidebar_label: "RenderTargetOptions"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### attachments

• **attachments**: [`Attachment`](../#attachment)[]

关联对象，此参数是一个数组，可以指定多组关联对象

#### Defined in

[core/RenderTarget.ts:41](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;1dddf76#line&#x3D;41)

___

### color

• **color**: `number`

颜色关联对象的数量，默认是`1`。
可以理解为整个帧缓存对象就是一张纹理，这个纹理的颜色就保存在`color attachment`中。

#### Defined in

[core/RenderTarget.ts:36](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;1dddf76#line&#x3D;36)

___

### data

• **data**: `any`

非图片和 canvas 数据，传入的是一组结构化数组，这里我们先不去指定数据类型

#### Defined in

[core/RenderTarget.ts:15](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;1dddf76#line&#x3D;15)

___

### depth

• **depth**: `boolean`

是否包含深度关联对象

#### Defined in

[core/RenderTarget.ts:46](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;1dddf76#line&#x3D;46)

___

### depthTexture

• **depthTexture**: `boolean`

是否是深度纹理，默认是`false`。

#### Defined in

[core/RenderTarget.ts:56](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;1dddf76#line&#x3D;56)

___

### height

• **height**: `number`

`RenderTarget` 的高度

#### Defined in

[core/RenderTarget.ts:30](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;1dddf76#line&#x3D;30)

___

### name

• **name**: `string`

设置此 `RenderTarget` 的名称，方便我们区分不同的 `RenderTarget`。

#### Defined in

[core/RenderTarget.ts:20](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;1dddf76#line&#x3D;20)

___

### stencil

• **stencil**: `boolean`

是否包含模版关联对象

#### Defined in

[core/RenderTarget.ts:51](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;1dddf76#line&#x3D;51)

___

### width

• **width**: `number`

`RenderTarget` 的宽度

#### Defined in

[core/RenderTarget.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;1dddf76#line&#x3D;25)
