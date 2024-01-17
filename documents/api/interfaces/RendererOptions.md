[vis-engine - v1.5.1](../index.md) / RendererOptions

# Interface: RendererOptions

## Table of contents

### Properties

- [alpha](RendererOptions.md#alpha)
- [antialias](RendererOptions.md#antialias)
- [autoClear](RendererOptions.md#autoclear)
- [depth](RendererOptions.md#depth)
- [dpr](RendererOptions.md#dpr)
- [extensions](RendererOptions.md#extensions)
- [frustumCull](RendererOptions.md#frustumcull)
- [powerPreference](RendererOptions.md#powerpreference)
- [premultipliedAlpha](RendererOptions.md#premultipliedalpha)
- [preserveDrawingBuffer](RendererOptions.md#preservedrawingbuffer)
- [requestWebGl2](RendererOptions.md#requestwebgl2)
- [stencil](RendererOptions.md#stencil)

## Properties

### alpha

• **alpha**: `boolean`

指定画布是否包含alpha缓冲区，仅在传入的是 `canvas` 对象时有用

#### Defined in

[src/core/Renderer.ts:94](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Renderer.ts#L94)

___

### antialias

• **antialias**: `boolean`

指定是否开启抗锯齿，仅在传入的是 `canvas` 对象时有用

#### Defined in

[src/core/Renderer.ts:99](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Renderer.ts#L99)

___

### autoClear

• **autoClear**: `boolean`

指定是否开启自动清除

#### Defined in

[src/core/Renderer.ts:84](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Renderer.ts#L84)

___

### depth

• **depth**: `boolean`

指定是否开启深度检测

#### Defined in

[src/core/Renderer.ts:89](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Renderer.ts#L89)

___

### dpr

• **dpr**: `number`

指定 `devicePixelRatio`

#### Defined in

[src/core/Renderer.ts:79](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Renderer.ts#L79)

___

### extensions

• **extensions**: `ExternalExtensionKeys`[]

WebGL 上下文支持的扩展列表。默认 []

#### Defined in

[src/core/Renderer.ts:133](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Renderer.ts#L133)

___

### frustumCull

• **frustumCull**: `boolean`

是否开启视锥剔除，默认不开启

#### Defined in

[src/core/Renderer.ts:128](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Renderer.ts#L128)

___

### powerPreference

• **powerPreference**: `WebGLPowerPreference`

指定GPU的性能配置，仅在传入的是 `canvas` 对象时有用

#### Defined in

[src/core/Renderer.ts:109](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Renderer.ts#L109)

___

### premultipliedAlpha

• **premultipliedAlpha**: `boolean`

指定是否开启预乘alpha

#### Defined in

[src/core/Renderer.ts:114](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Renderer.ts#L114)

___

### preserveDrawingBuffer

• **preserveDrawingBuffer**: `boolean`

是否开启绘制缓冲区，仅在传入的是 `canvas` 对象时有用

#### Defined in

[src/core/Renderer.ts:119](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Renderer.ts#L119)

___

### requestWebGl2

• **requestWebGl2**: `boolean`

获取 `webgl2` 实例，仅在传入的是 `canvas` 对象时有用

#### Defined in

[src/core/Renderer.ts:124](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Renderer.ts#L124)

___

### stencil

• **stencil**: `boolean`

指定是否开启模板缓冲区

#### Defined in

[src/core/Renderer.ts:104](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/core/Renderer.ts#L104)
