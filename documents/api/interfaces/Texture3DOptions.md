# Interface: Texture3DOptions

## Hierarchy

- [`TextureOptions`](TextureOptions.md)

  ↳ **`Texture3DOptions`**

## Table of contents

### Properties

- [id](Texture3DOptions.md#id)
- [name](Texture3DOptions.md#name)
- [handle](Texture3DOptions.md#handle)
- [userData](Texture3DOptions.md#userdata)
- [width](Texture3DOptions.md#width)
- [height](Texture3DOptions.md#height)
- [magFilter](Texture3DOptions.md#magfilter)
- [minFilter](Texture3DOptions.md#minfilter)
- [wrapS](Texture3DOptions.md#wraps)
- [wrapT](Texture3DOptions.md#wrapt)
- [generateMipmaps](Texture3DOptions.md#generatemipmaps)
- [flipY](Texture3DOptions.md#flipy)
- [anisotropy](Texture3DOptions.md#anisotropy)
- [unpackAlignment](Texture3DOptions.md#unpackalignment)
- [premultiplyAlpha](Texture3DOptions.md#premultiplyalpha)
- [level](Texture3DOptions.md#level)
- [offset](Texture3DOptions.md#offset)
- [target](Texture3DOptions.md#target)
- [wrapR](Texture3DOptions.md#wrapr)
- [format](Texture3DOptions.md#format)
- [internalFormat](Texture3DOptions.md#internalformat)
- [type](Texture3DOptions.md#type)
- [depth](Texture3DOptions.md#depth)
- [image](Texture3DOptions.md#image)

## Properties

### id

• **id**: `string`

#### Inherited from

[TextureOptions](TextureOptions.md).[id](TextureOptions.md#id)

#### Defined in

[src/core/Resource.ts:10](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L10)

___

### name

• **name**: `string`

#### Inherited from

[TextureOptions](TextureOptions.md).[name](TextureOptions.md#name)

#### Defined in

[src/core/Resource.ts:11](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L11)

___

### handle

• **handle**: `any`

#### Inherited from

[TextureOptions](TextureOptions.md).[handle](TextureOptions.md#handle)

#### Defined in

[src/core/Resource.ts:12](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L12)

___

### userData

• **userData**: `any`

#### Inherited from

[TextureOptions](TextureOptions.md).[userData](TextureOptions.md#userdata)

#### Defined in

[src/core/Resource.ts:13](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L13)

___

### width

• **width**: `number`

纹理宽度，默认为 0

#### Inherited from

[TextureOptions](TextureOptions.md).[width](TextureOptions.md#width)

#### Defined in

[src/core/Texture.ts:14](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L14)

___

### height

• **height**: `number`

纹理高度，默认为 0

#### Inherited from

[TextureOptions](TextureOptions.md).[height](TextureOptions.md#height)

#### Defined in

[src/core/Texture.ts:19](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L19)

___

### magFilter

• **magFilter**: `number`

纹理放大时使用的过滤类型。
可能的值：`gl.NEAREST`，`gl.LINEAR`

#### Inherited from

[TextureOptions](TextureOptions.md).[magFilter](TextureOptions.md#magfilter)

#### Defined in

[src/core/Texture.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L25)

___

### minFilter

• **minFilter**: `number`

纹理缩小时使用的过滤类型。
可能的值：`gl.NEAREST`，`gl.LINEAR`

#### Inherited from

[TextureOptions](TextureOptions.md).[minFilter](TextureOptions.md#minfilter)

#### Defined in

[src/core/Texture.ts:31](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L31)

___

### wrapS

• **wrapS**: `number`

水平采样纹理时使用的行为。
可能的值：`gl.REPEAT`，`gl.MIRRORED_REPEAT`，`gl.CLAMP_TO_EDGE`

#### Inherited from

[TextureOptions](TextureOptions.md).[wrapS](TextureOptions.md#wraps)

#### Defined in

[src/core/Texture.ts:37](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L37)

___

### wrapT

• **wrapT**: `number`

垂直采样纹理时使用的行为。
可能的值：`gl.REPEAT`，`gl.MIRRORED_REPEAT`，`gl.CLAMP_TO_EDGE`

#### Inherited from

[TextureOptions](TextureOptions.md).[wrapT](TextureOptions.md#wrapt)

#### Defined in

[src/core/Texture.ts:43](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L43)

___

### generateMipmaps

• **generateMipmaps**: `boolean`

配置是否启用 `mipmap`，默认为`true`
`generateMipmaps`会自动生成若干小尺寸的纹理，根据当前三维物体在屏幕上的大小来自动选择最合适的尺寸。
在 `webgl2` 使用`mipmap` 不再强制要求纹理的长度和宽度必须是2的整数次幂。

#### Inherited from

[TextureOptions](TextureOptions.md).[generateMipmaps](TextureOptions.md#generatemipmaps)

#### Defined in

[src/core/Texture.ts:68](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L68)

___

### flipY

• **flipY**: `boolean`

设置纹理上传时是否翻转 Y 轴，默认为 `false`

#### Inherited from

[TextureOptions](TextureOptions.md).[flipY](TextureOptions.md#flipy)

#### Defined in

[src/core/Texture.ts:73](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L73)

___

### anisotropy

• **anisotropy**: `number`

沿通过具有最高纹理像素密度的像素的坐标轴取样的数量。默认情况下，此值为 `1`。
 较高的值会产生比基本mipmap更少的模糊结果，但需要使用更多纹理样本。通常我们在实现让物体缩小时
 获取更高的清晰度，可以将此值设大，注意需要 `gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)`
 获取允许的最大值。（see: https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_filter_anisotropic）

#### Inherited from

[TextureOptions](TextureOptions.md).[anisotropy](TextureOptions.md#anisotropy)

#### Defined in

[src/core/Texture.ts:81](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L81)

___

### unpackAlignment

• **unpackAlignment**: `number`

指定内存中每个像素行起点的对齐要求。
可能的值: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

#### Inherited from

[TextureOptions](TextureOptions.md).[unpackAlignment](TextureOptions.md#unpackalignment)

#### Defined in

[src/core/Texture.ts:87](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L87)

___

### premultiplyAlpha

• **premultiplyAlpha**: `boolean`

设置纹理上传时是否预乘 `alpha` 值，默认为 `false`

#### Inherited from

[TextureOptions](TextureOptions.md).[premultiplyAlpha](TextureOptions.md#premultiplyalpha)

#### Defined in

[src/core/Texture.ts:92](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L92)

___

### level

• **level**: `number`

指定mipmap的精细度，级别 0 是基础图像级别，级别 n 是第 n 个 mipmap 缩减级别。默认为 `0`。

#### Inherited from

[TextureOptions](TextureOptions.md).[level](TextureOptions.md#level)

#### Defined in

[src/core/Texture.ts:97](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L97)

___

### offset

• `Optional` **offset**: `number`

[GLintptr](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Types) 类型偏移到 [WebGLBuffer](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLBuffer) 的数据存储中。用于上传数据到当前范围 [WebGLTexture](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLTexture) 从WebGLBuffer 范围到PIXEL_UNPACK_BUFFER 目标

#### Inherited from

[TextureOptions](TextureOptions.md).[offset](TextureOptions.md#offset)

#### Defined in

[src/core/Texture.ts:102](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts#L102)

___

### target

• **target**: `number`

默认为 `gl.TEXTURE_3D`

#### Overrides

[TextureOptions](TextureOptions.md).[target](TextureOptions.md#target)

#### Defined in

[src/core/Texture3D.ts:10](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L10)

___

### wrapR

• **wrapR**: `number`

深度采样纹理时使用的行为, 仅在 `Texture3D` 时可用。
可能的值：`gl.REPEAT`，`gl.MIRRORED_REPEAT`，`gl.CLAMP_TO_EDGE`

#### Defined in

[src/core/Texture3D.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L16)

___

### format

• **format**: `number`

[GLenum](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Types) 制定纹素的版本。正确的 内部格式 组合被列举在 [这个列表](https://www.khronos.org/registry/webgl/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE)。

#### Overrides

[TextureOptions](TextureOptions.md).[format](TextureOptions.md#format)

#### Defined in

[src/core/Texture3D.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L21)

___

### internalFormat

• **internalFormat**: `number`

用于指定纹理图像的内部格式
可能的值：`gl.RGBA`，`gl.RGB`，`gl.ALPHA` 等等

#### Overrides

[TextureOptions](TextureOptions.md).[internalFormat](TextureOptions.md#internalformat)

#### Defined in

[src/core/Texture3D.ts:27](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L27)

___

### type

• **type**: `number`

指定纹理数据的数据类型。
可能的值：`gl.UNSIGNED_BYTE`，`gl.FLOAT`，`gl.UNSIGNED_SHORT`，`gl.UNSIGNED_INT` 等等
可以查看[texImage3D](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL2RenderingContext/texImage3D) 来
获取更多信息

#### Overrides

[TextureOptions](TextureOptions.md).[type](TextureOptions.md#type)

#### Defined in

[src/core/Texture3D.ts:35](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L35)

___

### depth

• **depth**: `number`

指定纹理深度，默认为`0`

#### Defined in

[src/core/Texture3D.ts:40](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L40)

___

### image

• **image**: `any`

纹理数据

#### Overrides

[TextureOptions](TextureOptions.md).[image](TextureOptions.md#image)

#### Defined in

[src/core/Texture3D.ts:45](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture3D.ts#L45)
