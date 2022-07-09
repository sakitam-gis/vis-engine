[vis-engine - v1.0.0](../index.md) / DataTextureOptions

# Interface: DataTextureOptions

## Hierarchy

- [`TextureOptions`](TextureOptions.md)

  ↳ **`DataTextureOptions`**

## Table of contents

### Properties

- [data](DataTextureOptions.md#data)
- [depth](DataTextureOptions.md#depth)
- [flipY](DataTextureOptions.md#flipy)
- [format](DataTextureOptions.md#format)
- [generateMipmaps](DataTextureOptions.md#generatemipmaps)
- [height](DataTextureOptions.md#height)
- [image](DataTextureOptions.md#image)
- [internalFormat](DataTextureOptions.md#internalformat)
- [level](DataTextureOptions.md#level)
- [magFilter](DataTextureOptions.md#magfilter)
- [minFilter](DataTextureOptions.md#minfilter)
- [premultiplyAlpha](DataTextureOptions.md#premultiplyalpha)
- [type](DataTextureOptions.md#type)
- [unpackAlignment](DataTextureOptions.md#unpackalignment)
- [width](DataTextureOptions.md#width)
- [wrapR](DataTextureOptions.md#wrapr)
- [wrapS](DataTextureOptions.md#wraps)
- [wrapT](DataTextureOptions.md#wrapt)

## Properties

### data

• **data**: `any`

#### Defined in

[core/DataTexture.ts:5](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/DataTexture.ts?at&#x3D;566f929#line&#x3D;5)

___

### depth

• **depth**: `number`

指定纹理深度，默认为`0`

#### Inherited from

[TextureOptions](TextureOptions.md).[depth](TextureOptions.md#depth)

#### Defined in

[core/Texture.ts:95](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;95)

___

### flipY

• **flipY**: `boolean`

设置纹理上传时是否翻转 Y 轴，默认为 `false`

#### Inherited from

[TextureOptions](TextureOptions.md).[flipY](TextureOptions.md#flipy)

#### Defined in

[core/Texture.ts:74](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;74)

___

### format

• **format**: `number`

纹理数据的格式，在 WebGL 1 中，它必须与 internalformat 相同。
可能的值：`gl.RGBA`，`gl.RGB`，`gl.LUMINANCE`，`gl.LUMINANCE_ALPHA`

#### Inherited from

[TextureOptions](TextureOptions.md).[format](TextureOptions.md#format)

#### Defined in

[core/Texture.ts:50](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;50)

___

### generateMipmaps

• **generateMipmaps**: `boolean`

配置是否启用 `mipmap`，默认为`true`
`generateMipmaps`会自动生成若干小尺寸的纹理，根据当前三维物体在屏幕上的大小来自动选择最合适的尺寸。
使用`mipmap`要求纹理的长度和宽度必须是2的整数次幂。

#### Inherited from

[TextureOptions](TextureOptions.md).[generateMipmaps](TextureOptions.md#generatemipmaps)

#### Defined in

[core/Texture.ts:69](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;69)

___

### height

• **height**: `number`

纹理高度，默认为 0

#### Inherited from

[TextureOptions](TextureOptions.md).[height](TextureOptions.md#height)

#### Defined in

[core/Texture.ts:14](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;14)

___

### image

• **image**: `any`

纹理数据

#### Inherited from

[TextureOptions](TextureOptions.md).[image](TextureOptions.md#image)

#### Defined in

[core/Texture.ts:100](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;100)

___

### internalFormat

• **internalFormat**: `number`

用于指定纹理图像的内部格式
可能的值：`gl.RGBA`，`gl.RGB`，`gl.ALPHA` 等等

#### Inherited from

[TextureOptions](TextureOptions.md).[internalFormat](TextureOptions.md#internalformat)

#### Defined in

[core/Texture.ts:56](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;56)

___

### level

• **level**: `number`

指定mipmap的精细度，级别 0 是基础图像级别，级别 n 是第 n 个 mipmap 缩减级别。默认为 `0`。

#### Inherited from

[TextureOptions](TextureOptions.md).[level](TextureOptions.md#level)

#### Defined in

[core/Texture.ts:90](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;90)

___

### magFilter

• **magFilter**: `number`

纹理放大时使用的过滤类型。
可能的值：`gl.NEAREST`，`gl.LINEAR`

#### Inherited from

[TextureOptions](TextureOptions.md).[magFilter](TextureOptions.md#magfilter)

#### Defined in

[core/Texture.ts:20](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;20)

___

### minFilter

• **minFilter**: `number`

纹理缩小时使用的过滤类型。
可能的值：`gl.NEAREST`，`gl.LINEAR`

#### Inherited from

[TextureOptions](TextureOptions.md).[minFilter](TextureOptions.md#minfilter)

#### Defined in

[core/Texture.ts:26](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;26)

___

### premultiplyAlpha

• **premultiplyAlpha**: `boolean`

设置纹理上传时是否预乘 `alpha` 值，默认为 `false`

#### Inherited from

[TextureOptions](TextureOptions.md).[premultiplyAlpha](TextureOptions.md#premultiplyalpha)

#### Defined in

[core/Texture.ts:85](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;85)

___

### type

• **type**: `number`

指定纹理数据的数据类型。
可能的值：`gl.UNSIGNED_BYTE`，`gl.FLOAT`，`gl.UNSIGNED_SHORT`，`gl.UNSIGNED_INT` 等等

#### Inherited from

[TextureOptions](TextureOptions.md).[type](TextureOptions.md#type)

#### Defined in

[core/Texture.ts:62](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;62)

___

### unpackAlignment

• **unpackAlignment**: `number`

指定内存中每个像素行起点的对齐要求。
可能的值: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

#### Inherited from

[TextureOptions](TextureOptions.md).[unpackAlignment](TextureOptions.md#unpackalignment)

#### Defined in

[core/Texture.ts:80](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;80)

___

### width

• **width**: `number`

纹理宽度，默认为 0

#### Inherited from

[TextureOptions](TextureOptions.md).[width](TextureOptions.md#width)

#### Defined in

[core/Texture.ts:9](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;9)

___

### wrapR

• **wrapR**: `number`

深度采样纹理时使用的行为。
可能的值：`gl.REPEAT`，`gl.MIRRORED_REPEAT`，`gl.CLAMP_TO_EDGE`

#### Inherited from

[TextureOptions](TextureOptions.md).[wrapR](TextureOptions.md#wrapr)

#### Defined in

[core/Texture.ts:44](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;44)

___

### wrapS

• **wrapS**: `number`

水平采样纹理时使用的行为。
可能的值：`gl.REPEAT`，`gl.MIRRORED_REPEAT`，`gl.CLAMP_TO_EDGE`

#### Inherited from

[TextureOptions](TextureOptions.md).[wrapS](TextureOptions.md#wraps)

#### Defined in

[core/Texture.ts:32](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;32)

___

### wrapT

• **wrapT**: `number`

垂直采样纹理时使用的行为。
可能的值：`gl.REPEAT`，`gl.MIRRORED_REPEAT`，`gl.CLAMP_TO_EDGE`

#### Inherited from

[TextureOptions](TextureOptions.md).[wrapT](TextureOptions.md#wrapt)

#### Defined in

[core/Texture.ts:38](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Texture.ts?at&#x3D;566f929#line&#x3D;38)
