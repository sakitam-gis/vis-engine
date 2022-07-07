---
id: "index"
title: "vis-engine - v1.0.0"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [utils](namespaces/utils.md)

## Classes

- [Box](classes/Box.md)
- [BufferAttribute](classes/BufferAttribute.md)
- [Camera](classes/Camera.md)
- [Clock](classes/Clock.md)
- [Color](classes/Color.md)
- [DataTexture](classes/DataTexture.md)
- [Euler](classes/Euler.md)
- [EventEmitter](classes/EventEmitter.md)
- [Geometry](classes/Geometry.md)
- [Matrix3](classes/Matrix3.md)
- [Matrix4](classes/Matrix4.md)
- [Mesh](classes/Mesh.md)
- [Object3D](classes/Object3D.md)
- [OrthographicCamera](classes/OrthographicCamera.md)
- [PerspectiveCamera](classes/PerspectiveCamera.md)
- [Plane](classes/Plane.md)
- [Program](classes/Program.md)
- [ProjectionMatrix](classes/ProjectionMatrix.md)
- [Quaternion](classes/Quaternion.md)
- [Raf](classes/Raf.md)
- [RenderBuffer](classes/RenderBuffer.md)
- [RenderTarget](classes/RenderTarget.md)
- [Renderer](classes/Renderer.md)
- [Resource](classes/Resource.md)
- [Scene](classes/Scene.md)
- [State](classes/State.md)
- [Texture](classes/Texture.md)
- [Texture3D](classes/Texture3D.md)
- [Vector2](classes/Vector2.md)
- [Vector3](classes/Vector3.md)
- [Vector4](classes/Vector4.md)

## Interfaces

- [Attribute](interfaces/Attribute.md)
- [Attributes](interfaces/Attributes.md)
- [BoxOptions](interfaces/BoxOptions.md)
- [CameraOptions](interfaces/CameraOptions.md)
- [DataTextureOptions](interfaces/DataTextureOptions.md)
- [MeshDrawOptions](interfaces/MeshDrawOptions.md)
- [MeshOptions](interfaces/MeshOptions.md)
- [PlaneOptions](interfaces/PlaneOptions.md)
- [ProgramOptions](interfaces/ProgramOptions.md)
- [ProgramRenderState](interfaces/ProgramRenderState.md)
- [RafOptions](interfaces/RafOptions.md)
- [RenderBufferOptions](interfaces/RenderBufferOptions.md)
- [RenderTargetOptions](interfaces/RenderTargetOptions.md)
- [RendererOptions](interfaces/RendererOptions.md)
- [ResourceOptions](interfaces/ResourceOptions.md)
- [Texture3DOptions](interfaces/Texture3DOptions.md)
- [TextureOptions](interfaces/TextureOptions.md)
- [UniformData](interfaces/UniformData.md)

## Type Aliases

### Attachment

Ƭ **Attachment**: [`GLenum`, [`Texture`](classes/Texture.md) \| [`DataTexture`](classes/DataTexture.md) \| [`RenderBuffer`](classes/RenderBuffer.md)]

#### Defined in

[core/RenderTarget.ts:9](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/RenderTarget.ts?at&#x3D;444ba1d#line&#x3D;9)

___

### Bounds

Ƭ **Bounds**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bottom` | `number` | 像机视锥体下侧面 |
| `left` | `number` | 像机视锥体左侧面 |
| `right` | `number` | 像机视锥体右侧面 |
| `top` | `number` | 像机视锥体上侧面 |

#### Defined in

[cameras/Camera.ts:12](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;444ba1d#line&#x3D;12)

___

### CameraType

Ƭ **CameraType**: ``"perspective"`` \| ``"orthographic"``

相机类型，默认有两种：`perspective` 透视相机和`orthographic`平面相机。

#### Defined in

[cameras/Camera.ts:10](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;444ba1d#line&#x3D;10)

___

### DataType

Ƭ **DataType**: `Float32Array` \| `Float64Array` \| `Uint32Array` \| `Uint16Array` \| `Uint8Array` \| `Uint8ClampedArray` \| `Int32Array` \| `Int16Array` \| `Int8Array`

`attribute` 支持的数据类型

#### Defined in

[core/BufferAttribute.ts:8](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;444ba1d#line&#x3D;8)

___

### Uniforms

Ƭ **Uniforms**: `any`

#### Defined in

[core/Program.ts:65](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts?at&#x3D;444ba1d#line&#x3D;65)
