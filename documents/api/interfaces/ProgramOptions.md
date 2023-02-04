[vis-engine - v1.2.0](../index.md) / ProgramOptions

# Interface: ProgramOptions

## Hierarchy

- [`ProgramRenderState`](ProgramRenderState.md)

  ↳ **`ProgramOptions`**

## Table of contents

### Properties

- [blendEquation](ProgramOptions.md#blendequation)
- [blendFunc](ProgramOptions.md#blendfunc)
- [cullFace](ProgramOptions.md#cullface)
- [defines](ProgramOptions.md#defines)
- [depthFunc](ProgramOptions.md#depthfunc)
- [depthTest](ProgramOptions.md#depthtest)
- [depthWrite](ProgramOptions.md#depthwrite)
- [fragmentShader](ProgramOptions.md#fragmentshader)
- [frontFace](ProgramOptions.md#frontface)
- [id](ProgramOptions.md#id)
- [includes](ProgramOptions.md#includes)
- [transparent](ProgramOptions.md#transparent)
- [uniforms](ProgramOptions.md#uniforms)
- [vertexShader](ProgramOptions.md#vertexshader)

## Properties

### blendEquation

• **blendEquation**: `Object`

指定颜色混合方程式
可能的值可以参考：https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquation 和 https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquationSeparate

#### Type declaration

| Name | Type |
| :------ | :------ |
| `modeAlpha?` | `number` |
| `modeRGB` | `number` |

#### Inherited from

[ProgramRenderState](ProgramRenderState.md).[blendEquation](ProgramRenderState.md#blendequation)

#### Defined in

[src/core/Program.ts:130](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;4124c8d#line&#x3D;130)

___

### blendFunc

• **blendFunc**: `Object`

指定颜色混合算法
可能的值可以参考：https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/blendFunc 和 https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dst` | `number` |
| `dstAlpha?` | `number` |
| `src` | `number` |
| `srcAlpha?` | `number` |

#### Inherited from

[ProgramRenderState](ProgramRenderState.md).[blendFunc](ProgramRenderState.md#blendfunc)

#### Defined in

[src/core/Program.ts:119](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;4124c8d#line&#x3D;119)

___

### cullFace

• **cullFace**: `number`

指定正面或背面多边形是否可以剔除
可能的值：`gl.FRONT`、`gl.FRONT_AND_BACK` 和 `gl.BACK`

#### Inherited from

[ProgramRenderState](ProgramRenderState.md).[cullFace](ProgramRenderState.md#cullface)

#### Defined in

[src/core/Program.ts:83](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;4124c8d#line&#x3D;83)

___

### defines

• `Optional` **defines**: `string`[]

指定着色的宏定义

#### Defined in

[src/core/Program.ts:165](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;4124c8d#line&#x3D;165)

___

### depthFunc

• **depthFunc**: `number`

指定深度检测的参数，即什么情况算失败、什么情况算作通过，默认是 `gl.LESS`。
可能的值：
- gl.NEVER （总不通过）
- gl.LESS（如果新值小于缓冲区中的值则通过）
- gl.EQUAL（如果新值等于缓冲区中的值则通过）
- gl.LEQUAL（如果新值小于等于缓冲区中的值则通过）
- gl.GREATER（如果新值大于缓冲区中的值则通过）
- gl.NOTEQUAL（如果新值不等于缓冲区中的值则通过）
- gl.GEQUAL（如果新值大于等于缓冲区中的值则通过）
- gl.ALWAYS（总通过）

#### Inherited from

[ProgramRenderState](ProgramRenderState.md).[depthFunc](ProgramRenderState.md#depthfunc)

#### Defined in

[src/core/Program.ts:113](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;4124c8d#line&#x3D;113)

___

### depthTest

• **depthTest**: `boolean`

是否启用深度测试，默认启用

#### Inherited from

[ProgramRenderState](ProgramRenderState.md).[depthTest](ProgramRenderState.md#depthtest)

#### Defined in

[src/core/Program.ts:94](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;4124c8d#line&#x3D;94)

___

### depthWrite

• **depthWrite**: `boolean`

是否开启深度值写入

#### Inherited from

[ProgramRenderState](ProgramRenderState.md).[depthWrite](ProgramRenderState.md#depthwrite)

#### Defined in

[src/core/Program.ts:99](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;4124c8d#line&#x3D;99)

___

### fragmentShader

• **fragmentShader**: `string` \| `FragmentShader`

片段着色器

#### Defined in

[src/core/Program.ts:150](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;4124c8d#line&#x3D;150)

___

### frontFace

• **frontFace**: `number`

指定图形顶点以顺时针是正面还是逆时针方向是正面：
可能的值：`gl.CW` 和 `gl.CCW`

#### Inherited from

[ProgramRenderState](ProgramRenderState.md).[frontFace](ProgramRenderState.md#frontface)

#### Defined in

[src/core/Program.ts:89](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;4124c8d#line&#x3D;89)

___

### id

• **id**: `string`

指定 `id`

#### Defined in

[src/core/Program.ts:140](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;4124c8d#line&#x3D;140)

___

### includes

• `Optional` **includes**: `Object`

着色器模块，会在着色器中遇到 `#include <xxx>` 会自动替换此配置项对应的着色器片段。

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/core/Program.ts:170](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;4124c8d#line&#x3D;170)

___

### transparent

• `Optional` **transparent**: `boolean`

配置是否是透明渲染

#### Defined in

[src/core/Program.ts:160](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;4124c8d#line&#x3D;160)

___

### uniforms

• `Optional` **uniforms**: `any`

uniform

#### Defined in

[src/core/Program.ts:155](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;4124c8d#line&#x3D;155)

___

### vertexShader

• **vertexShader**: `string` \| `VertexShader`

顶点着色器

#### Defined in

[src/core/Program.ts:145](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;4124c8d#line&#x3D;145)
