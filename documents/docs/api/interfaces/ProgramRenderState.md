---
id: "ProgramRenderState"
title: "Interface: ProgramRenderState"
sidebar_label: "ProgramRenderState"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`ProgramRenderState`**

  ↳ [`ProgramOptions`](ProgramOptions.md)

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

#### Defined in

[core/Program.ts:130](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;b6d63c9#line&#x3D;130)

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

#### Defined in

[core/Program.ts:119](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;b6d63c9#line&#x3D;119)

___

### cullFace

• **cullFace**: `number`

指定正面或背面多边形是否可以剔除
可能的值：`gl.FRONT`、`gl.FRONT_AND_BACK` 和 `gl.BACK`

#### Defined in

[core/Program.ts:83](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;b6d63c9#line&#x3D;83)

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

[core/Program.ts:113](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;b6d63c9#line&#x3D;113)

___

### depthTest

• **depthTest**: `boolean`

是否启用深度测试，默认启用

#### Defined in

[core/Program.ts:94](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;b6d63c9#line&#x3D;94)

___

### depthWrite

• **depthWrite**: `boolean`

是否开启深度值写入

#### Defined in

[core/Program.ts:99](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;b6d63c9#line&#x3D;99)

___

### frontFace

• **frontFace**: `number`

指定图形顶点以顺时针是正面还是逆时针方向是正面：
可能的值：`gl.CW` 和 `gl.CCW`

#### Defined in

[core/Program.ts:89](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;b6d63c9#line&#x3D;89)
