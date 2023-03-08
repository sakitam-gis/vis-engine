---
id: "Texture3DOptions"
title: "Interface: Texture3DOptions"
sidebar_label: "Texture3DOptions"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### depth

• **depth**: `number`

指定纹理深度，默认为`0`

#### Defined in

[src/core/Texture3D.ts:95](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L95)

___

### flipY

• **flipY**: `boolean`

设置纹理上传时是否翻转 Y 轴，默认为 `false`

#### Defined in

[src/core/Texture3D.ts:74](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L74)

___

### format

• **format**: `number`

纹理数据的格式，在 WebGL 1 中，它必须与 internalformat 相同。
可能的值：`gl.RGBA`，`gl.RGB`，`gl.LUMINANCE`，`gl.LUMINANCE_ALPHA`

#### Defined in

[src/core/Texture3D.ts:50](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L50)

___

### generateMipmaps

• **generateMipmaps**: `boolean`

配置是否启用 `mipmap`，默认为`true`
`generateMipmaps`会自动生成若干小尺寸的纹理，根据当前三维物体在屏幕上的大小来自动选择最合适的尺寸。
使用`mipmap`要求纹理的长度和宽度必须是2的整数次幂。

#### Defined in

[src/core/Texture3D.ts:69](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L69)

___

### height

• **height**: `number`

纹理高度，默认为 0

#### Defined in

[src/core/Texture3D.ts:14](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L14)

___

### image

• **image**: `any`

纹理数据

#### Defined in

[src/core/Texture3D.ts:100](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L100)

___

### internalFormat

• **internalFormat**: `number`

用于指定纹理图像的内部格式
可能的值：`gl.RGBA`，`gl.RGB`，`gl.ALPHA` 等等

#### Defined in

[src/core/Texture3D.ts:56](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L56)

___

### level

• **level**: `number`

指定mipmap的精细度，级别 0 是基础图像级别，级别 n 是第 n 个 mipmap 缩减级别。默认为 `0`。

#### Defined in

[src/core/Texture3D.ts:90](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L90)

___

### magFilter

• **magFilter**: `number`

纹理放大时使用的过滤类型。
可能的值：`gl.NEAREST`，`gl.LINEAR`

#### Defined in

[src/core/Texture3D.ts:20](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L20)

___

### minFilter

• **minFilter**: `number`

纹理缩小时使用的过滤类型。
可能的值：`gl.NEAREST`，`gl.LINEAR`

#### Defined in

[src/core/Texture3D.ts:26](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L26)

___

### premultiplyAlpha

• **premultiplyAlpha**: `boolean`

设置纹理上传时是否预乘 `alpha` 值，默认为 `false`

#### Defined in

[src/core/Texture3D.ts:85](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L85)

___

### type

• **type**: `number`

指定纹理数据的数据类型。
可能的值：`gl.UNSIGNED_BYTE`，`gl.FLOAT`，`gl.UNSIGNED_SHORT`，`gl.UNSIGNED_INT` 等等

#### Defined in

[src/core/Texture3D.ts:62](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L62)

___

### unpackAlignment

• **unpackAlignment**: `number`

指定内存中每个像素行起点的对齐要求。
可能的值: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

#### Defined in

[src/core/Texture3D.ts:80](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L80)

___

### width

• **width**: `number`

纹理宽度，默认为 0

#### Defined in

[src/core/Texture3D.ts:9](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L9)

___

### wrapR

• **wrapR**: `number`

深度采样纹理时使用的行为。
可能的值：`gl.REPEAT`，`gl.MIRRORED_REPEAT`，`gl.CLAMP_TO_EDGE`

#### Defined in

[src/core/Texture3D.ts:44](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L44)

___

### wrapS

• **wrapS**: `number`

水平采样纹理时使用的行为。
可能的值：`gl.REPEAT`，`gl.MIRRORED_REPEAT`，`gl.CLAMP_TO_EDGE`

#### Defined in

[src/core/Texture3D.ts:32](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L32)

___

### wrapT

• **wrapT**: `number`

垂直采样纹理时使用的行为。
可能的值：`gl.REPEAT`，`gl.MIRRORED_REPEAT`，`gl.CLAMP_TO_EDGE`

#### Defined in

[src/core/Texture3D.ts:38](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/core/Texture3D.ts#L38)
