[vis-engine - v1.5.1](../index.md) / ProgramOptions

# Interface: ProgramOptions

## Hierarchy

- [`ProgramRenderState`](ProgramRenderState.md)

- [`ResourceOptions`](ResourceOptions.md)

  ↳ **`ProgramOptions`**

## Table of contents

### Properties

- [blendEquation](ProgramOptions.md#blendequation)
- [blendFunc](ProgramOptions.md#blendfunc)
- [blending](ProgramOptions.md#blending)
- [cullFace](ProgramOptions.md#cullface)
- [defines](ProgramOptions.md#defines)
- [depthFunc](ProgramOptions.md#depthfunc)
- [depthTest](ProgramOptions.md#depthtest)
- [depthWrite](ProgramOptions.md#depthwrite)
- [fragmentShader](ProgramOptions.md#fragmentshader)
- [frontFace](ProgramOptions.md#frontface)
- [handle](ProgramOptions.md#handle)
- [id](ProgramOptions.md#id)
- [includes](ProgramOptions.md#includes)
- [name](ProgramOptions.md#name)
- [transparent](ProgramOptions.md#transparent)
- [uniforms](ProgramOptions.md#uniforms)
- [userData](ProgramOptions.md#userdata)
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

[src/core/Program.ts:136](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Program.ts#L136)

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

[src/core/Program.ts:125](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Program.ts#L125)

___

### blending

• **blending**: [`BlendType`](../enums/BlendType.md)

blend 类型

#### Inherited from

[ProgramRenderState](ProgramRenderState.md).[blending](ProgramRenderState.md#blending)

#### Defined in

[src/core/Program.ts:119](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Program.ts#L119)

___

### cullFace

• **cullFace**: `number`

指定正面或背面多边形是否可以剔除
可能的值：`gl.FRONT`、`gl.FRONT_AND_BACK` 和 `gl.BACK`

#### Inherited from

[ProgramRenderState](ProgramRenderState.md).[cullFace](ProgramRenderState.md#cullface)

#### Defined in

[src/core/Program.ts:84](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Program.ts#L84)

___

### defines

• `Optional` **defines**: `string`[]

指定着色的宏定义

#### Defined in

[src/core/Program.ts:171](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Program.ts#L171)

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

[src/core/Program.ts:114](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Program.ts#L114)

___

### depthTest

• **depthTest**: `boolean`

是否启用深度测试，默认启用

#### Inherited from

[ProgramRenderState](ProgramRenderState.md).[depthTest](ProgramRenderState.md#depthtest)

#### Defined in

[src/core/Program.ts:95](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Program.ts#L95)

___

### depthWrite

• **depthWrite**: `boolean`

是否开启深度值写入

#### Inherited from

[ProgramRenderState](ProgramRenderState.md).[depthWrite](ProgramRenderState.md#depthwrite)

#### Defined in

[src/core/Program.ts:100](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Program.ts#L100)

___

### fragmentShader

• **fragmentShader**: `string` \| `FragmentShader`

片段着色器

#### Defined in

[src/core/Program.ts:156](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Program.ts#L156)

___

### frontFace

• **frontFace**: `number`

指定图形顶点以顺时针是正面还是逆时针方向是正面：
可能的值：`gl.CW` 和 `gl.CCW`

#### Inherited from

[ProgramRenderState](ProgramRenderState.md).[frontFace](ProgramRenderState.md#frontface)

#### Defined in

[src/core/Program.ts:90](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Program.ts#L90)

___

### handle

• **handle**: `any`

#### Inherited from

[ResourceOptions](ResourceOptions.md).[handle](ResourceOptions.md#handle)

#### Defined in

[src/core/Resource.ts:12](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L12)

___

### id

• **id**: `string`

指定 `id`

#### Overrides

[ResourceOptions](ResourceOptions.md).[id](ResourceOptions.md#id)

#### Defined in

[src/core/Program.ts:146](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Program.ts#L146)

___

### includes

• `Optional` **includes**: `Object`

着色器模块，会在着色器中遇到 `#include <xxx>` 会自动替换此配置项对应的着色器片段。

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/core/Program.ts:176](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Program.ts#L176)

___

### name

• **name**: `string`

#### Inherited from

[ResourceOptions](ResourceOptions.md).[name](ResourceOptions.md#name)

#### Defined in

[src/core/Resource.ts:11](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L11)

___

### transparent

• `Optional` **transparent**: `boolean`

配置是否是透明渲染

#### Defined in

[src/core/Program.ts:166](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Program.ts#L166)

___

### uniforms

• `Optional` **uniforms**: `any`

uniform

#### Defined in

[src/core/Program.ts:161](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Program.ts#L161)

___

### userData

• **userData**: `any`

#### Inherited from

[ResourceOptions](ResourceOptions.md).[userData](ResourceOptions.md#userdata)

#### Defined in

[src/core/Resource.ts:13](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Resource.ts#L13)

___

### vertexShader

• **vertexShader**: `string` \| `VertexShader`

顶点着色器

#### Defined in

[src/core/Program.ts:151](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Program.ts#L151)
