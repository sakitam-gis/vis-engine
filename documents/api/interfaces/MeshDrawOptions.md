[vis-engine - v1.0.0](../index.md) / MeshDrawOptions

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

[objects/Mesh.ts:68](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;4193568#line&#x3D;68)

___

### renderer

• **renderer**: [`Renderer`](../classes/Renderer.md)

渲染器

#### Defined in

[objects/Mesh.ts:63](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;4193568#line&#x3D;63)

___

### target

• **target**: [`RenderTarget`](../classes/RenderTarget.md)

指定渲染目标 `RenderTarget`，常用于在多个 `RenderPass` 做流转，用来实现诸如后处理 `PostProcessing`。

#### Defined in

[objects/Mesh.ts:73](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;4193568#line&#x3D;73)
