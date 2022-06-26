vis-engine - v1.0.0

# vis-engine - v1.0.0

## Table of contents

### Namespaces

- [utils](modules/utils.md)

### Classes

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
- [Scene](classes/Scene.md)
- [State](classes/State.md)
- [Texture](classes/Texture.md)
- [Texture3D](classes/Texture3D.md)
- [Vector2](classes/Vector2.md)
- [Vector3](classes/Vector3.md)
- [Vector4](classes/Vector4.md)

### Interfaces

- [Attribute](interfaces/Attribute.md)
- [Attributes](interfaces/Attributes.md)
- [CameraOptions](interfaces/CameraOptions.md)
- [IRafOptions](interfaces/IRafOptions.md)
- [ITexture3DOptions](interfaces/ITexture3DOptions.md)
- [ITextureOptions](interfaces/ITextureOptions.md)
- [MeshDrawOptions](interfaces/MeshDrawOptions.md)
- [MeshOptions](interfaces/MeshOptions.md)
- [PlaneOptions](interfaces/PlaneOptions.md)
- [RendererOptions](interfaces/RendererOptions.md)

### Type Aliases

- [Bounds](index.md#bounds)
- [CameraType](index.md#cameratype)
- [DataType](index.md#datatype)

## Type Aliases

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

[cameras/Camera.ts:12](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;01a57c5#line&#x3D;12)

___

### CameraType

Ƭ **CameraType**: ``"perspective"`` \| ``"orthographic"``

相机类型，默认有两种：`perspective` 透视相机和`orthographic`平面相机。

#### Defined in

[cameras/Camera.ts:10](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts?at&#x3D;01a57c5#line&#x3D;10)

___

### DataType

Ƭ **DataType**: `Float32Array` \| `Float64Array` \| `Uint32Array` \| `Uint16Array` \| `Uint8Array` \| `Int32Array` \| `Int16Array` \| `Int8Array`

`attribute` 支持的数据类型

#### Defined in

[core/BufferAttribute.ts:8](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/BufferAttribute.ts?at&#x3D;01a57c5#line&#x3D;8)
