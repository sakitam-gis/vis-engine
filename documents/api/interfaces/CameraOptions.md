[vis-engine - v1.5.1](../index.md) / CameraOptions

# Interface: CameraOptions

## Table of contents

### Properties

- [aspect](CameraOptions.md#aspect)
- [bounds](CameraOptions.md#bounds)
- [far](CameraOptions.md#far)
- [fov](CameraOptions.md#fov)
- [near](CameraOptions.md#near)
- [zoom](CameraOptions.md#zoom)

## Properties

### aspect

• `Optional` **aspect**: `number`

相机视锥体的纵横比

#### Defined in

[src/cameras/Camera.ts:50](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/cameras/Camera.ts#L50)

___

### bounds

• `Optional` **bounds**: [`Bounds`](../index.md#bounds)

像机视锥体配置

#### Defined in

[src/cameras/Camera.ts:55](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/cameras/Camera.ts#L55)

___

### far

• **far**: `number`

像机的远端面，默认值是 100

#### Defined in

[src/cameras/Camera.ts:40](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/cameras/Camera.ts#L40)

___

### fov

• `Optional` **fov**: `number`

摄像机视锥体垂直视野角度，从视图的底部到顶部，以角度来表示，默认为 `45`

#### Defined in

[src/cameras/Camera.ts:45](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/cameras/Camera.ts#L45)

___

### near

• **near**: `number`

像机的近端面，默认值是0.1

#### Defined in

[src/cameras/Camera.ts:35](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/cameras/Camera.ts#L35)

___

### zoom

• `Optional` **zoom**: `number`

相机缩放倍数

#### Defined in

[src/cameras/Camera.ts:60](https://github.com/sakitam-gis/vis-engine/blob/7b15dbb/src/cameras/Camera.ts#L60)
