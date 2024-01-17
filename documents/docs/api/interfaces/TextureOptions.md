---
id: "TextureOptions"
title: "Interface: TextureOptions"
sidebar_label: "TextureOptions"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`ResourceOptions`](ResourceOptions.md)

  ↳ **`TextureOptions`**

  ↳↳ [`Texture3DOptions`](Texture3DOptions.md)

  ↳↳ [`DataTextureOptions`](DataTextureOptions.md)

## Properties

### anisotropy

• **anisotropy**: `number`

沿通过具有最高纹理像素密度的像素的坐标轴取样的数量。默认情况下，此值为 `1`。
 较高的值会产生比基本mipmap更少的模糊结果，但需要使用更多纹理样本。通常我们在实现让物体缩小时
 获取更高的清晰度，可以将此值设大，注意需要 `gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)`
 获取允许的最大值。（see: https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_filter_anisotropic）

#### Defined in

[src/core/Texture.ts:81](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L81)

___

### flipY

• **flipY**: `boolean`

设置纹理上传时是否翻转 Y 轴，默认为 `false`

#### Defined in

[src/core/Texture.ts:73](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L73)

___

### format

• **format**: `number`

纹理数据的格式，在 WebGL 1 中，它必须与 internalformat 相同。
可能的值：`gl.RGBA`，`gl.RGB`，`gl.LUMINANCE`，`gl.LUMINANCE_ALPHA`

#### Defined in

[src/core/Texture.ts:49](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L49)

___

### generateMipmaps

• **generateMipmaps**: `boolean`

配置是否启用 `mipmap`，默认为`true`
`generateMipmaps`会自动生成若干小尺寸的纹理，根据当前三维物体在屏幕上的大小来自动选择最合适的尺寸。
在 `webgl2` 使用`mipmap` 不再强制要求纹理的长度和宽度必须是2的整数次幂。

#### Defined in

[src/core/Texture.ts:68](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L68)

___

### handle

• **handle**: `any`

#### Inherited from

[ResourceOptions](ResourceOptions.md).[handle](ResourceOptions.md#handle)

#### Defined in

[src/core/Resource.ts:12](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L12)

___

### height

• **height**: `number`

纹理高度，默认为 0

#### Defined in

[src/core/Texture.ts:19](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L19)

___

### id

• **id**: `string`

#### Inherited from

[ResourceOptions](ResourceOptions.md).[id](ResourceOptions.md#id)

#### Defined in

[src/core/Resource.ts:10](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L10)

___

### image

• **image**: `any`

纹理数据

#### Defined in

[src/core/Texture.ts:107](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L107)

___

### internalFormat

• **internalFormat**: `number`

用于指定纹理图像的内部格式
可能的值：`gl.RGBA`，`gl.RGB`，`gl.ALPHA` 等等

#### Defined in

[src/core/Texture.ts:55](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L55)

___

### level

• **level**: `number`

指定mipmap的精细度，级别 0 是基础图像级别，级别 n 是第 n 个 mipmap 缩减级别。默认为 `0`。

#### Defined in

[src/core/Texture.ts:97](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L97)

___

### magFilter

• **magFilter**: `number`

纹理放大时使用的过滤类型。
可能的值：`gl.NEAREST`，`gl.LINEAR`

#### Defined in

[src/core/Texture.ts:25](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L25)

___

### minFilter

• **minFilter**: `number`

纹理缩小时使用的过滤类型。
可能的值：`gl.NEAREST`，`gl.LINEAR`

#### Defined in

[src/core/Texture.ts:31](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L31)

___

### name

• **name**: `string`

#### Inherited from

[ResourceOptions](ResourceOptions.md).[name](ResourceOptions.md#name)

#### Defined in

[src/core/Resource.ts:11](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L11)

___

### offset

• `Optional` **offset**: `number`

[GLintptr](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Types) 类型偏移到 [WebGLBuffer](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLBuffer) 的数据存储中。用于上传数据到当前范围 [WebGLTexture](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLTexture) 从WebGLBuffer 范围到PIXEL_UNPACK_BUFFER 目标

#### Defined in

[src/core/Texture.ts:102](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L102)

___

### premultiplyAlpha

• **premultiplyAlpha**: `boolean`

设置纹理上传时是否预乘 `alpha` 值，默认为 `false`

#### Defined in

[src/core/Texture.ts:92](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L92)

___

### target

• **target**: `number`

默认为 `gl.TEXTURE_2D`

#### Defined in

[src/core/Texture.ts:9](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L9)

___

### type

• **type**: `number`

指定纹理数据的数据类型。
可能的值：`gl.UNSIGNED_BYTE`，`gl.FLOAT`，`gl.UNSIGNED_SHORT`，`gl.UNSIGNED_INT` 等等

#### Defined in

[src/core/Texture.ts:61](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L61)

___

### unpackAlignment

• **unpackAlignment**: `number`

指定内存中每个像素行起点的对齐要求。
可能的值: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

#### Defined in

[src/core/Texture.ts:87](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L87)

___

### userData

• **userData**: `any`

#### Inherited from

[ResourceOptions](ResourceOptions.md).[userData](ResourceOptions.md#userdata)

#### Defined in

[src/core/Resource.ts:13](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L13)

___

### width

• **width**: `number`

纹理宽度，默认为 0

#### Defined in

[src/core/Texture.ts:14](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L14)

___

### wrapS

• **wrapS**: `number`

水平采样纹理时使用的行为。
可能的值：`gl.REPEAT`，`gl.MIRRORED_REPEAT`，`gl.CLAMP_TO_EDGE`

#### Defined in

[src/core/Texture.ts:37](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L37)

___

### wrapT

• **wrapT**: `number`

垂直采样纹理时使用的行为。
可能的值：`gl.REPEAT`，`gl.MIRRORED_REPEAT`，`gl.CLAMP_TO_EDGE`

#### Defined in

[src/core/Texture.ts:43](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Texture.ts#L43)
