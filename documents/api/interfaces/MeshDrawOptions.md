[vis-engine - v1.5.1](../index.md) / MeshDrawOptions

# Interface: MeshDrawOptions

## Table of contents

### Properties

- [camera](MeshDrawOptions.md#camera)
- [renderer](MeshDrawOptions.md#renderer)
- [target](MeshDrawOptions.md#target)

## Properties

### camera

• **camera**: [`PerspectiveCamera`](../classes/PerspectiveCamera.md) \| [`OrthographicCamera`](../classes/OrthographicCamera.md)

相机

#### Defined in

[src/objects/Mesh.ts:69](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/objects/Mesh.ts#L69)

___

### renderer

• **renderer**: [`Renderer`](../classes/Renderer.md)

渲染器

#### Defined in

[src/objects/Mesh.ts:64](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/objects/Mesh.ts#L64)

___

### target

• **target**: [`RenderTarget`](../classes/RenderTarget.md)

指定渲染目标 `RenderTarget`，常用于在多个 `RenderPass` 做流转，用来实现诸如后处理 `PostProcessing`。

#### Defined in

[src/objects/Mesh.ts:74](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/objects/Mesh.ts#L74)
