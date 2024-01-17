# Interface: ProgramRenderState

## Hierarchy

- **`ProgramRenderState`**

  ↳ [`ProgramOptions`](ProgramOptions.md)

## Table of contents

### Properties

- [cullFace](ProgramRenderState.md#cullface)
- [frontFace](ProgramRenderState.md#frontface)
- [depthTest](ProgramRenderState.md#depthtest)
- [depthWrite](ProgramRenderState.md#depthwrite)
- [depthFunc](ProgramRenderState.md#depthfunc)
- [blending](ProgramRenderState.md#blending)
- [blendFunc](ProgramRenderState.md#blendfunc)
- [blendEquation](ProgramRenderState.md#blendequation)

## Properties

### cullFace

• **cullFace**: `number`

指定正面或背面多边形是否可以剔除
可能的值：`gl.FRONT`、`gl.FRONT_AND_BACK` 和 `gl.BACK`

#### Defined in

[src/core/Program.ts:84](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L84)

___

### frontFace

• **frontFace**: `number`

指定图形顶点以顺时针是正面还是逆时针方向是正面：
可能的值：`gl.CW` 和 `gl.CCW`

#### Defined in

[src/core/Program.ts:90](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L90)

___

### depthTest

• **depthTest**: `boolean`

是否启用深度测试，默认启用

#### Defined in

[src/core/Program.ts:95](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L95)

___

### depthWrite

• **depthWrite**: `boolean`

是否开启深度值写入

#### Defined in

[src/core/Program.ts:100](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L100)

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

#### Defined in

[src/core/Program.ts:114](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L114)

___

### blending

• **blending**: [`BlendType`](../enums/BlendType.md)

blend 类型

#### Defined in

[src/core/Program.ts:119](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L119)

___

### blendFunc

• **blendFunc**: `Object`

指定颜色混合算法
可能的值可以参考：https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/blendFunc 和 https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate

#### Type declaration

| Name | Type |
| :------ | :------ |
| `src` | `number` |
| `dst` | `number` |
| `srcAlpha?` | `number` |
| `dstAlpha?` | `number` |

#### Defined in

[src/core/Program.ts:125](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L125)

___

### blendEquation

• **blendEquation**: `Object`

指定颜色混合方程式
可能的值可以参考：https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquation 和 https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquationSeparate

#### Type declaration

| Name | Type |
| :------ | :------ |
| `modeRGB` | `number` |
| `modeAlpha?` | `number` |

#### Defined in

[src/core/Program.ts:136](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L136)
