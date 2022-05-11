vis-engine - v1.0.0

# vis-engine - v1.0.0

## Table of contents

### Classes

- [Clock](classes/Clock.md)
- [Euler](classes/Euler.md)
- [Matrix3](classes/Matrix3.md)
- [Matrix4](classes/Matrix4.md)
- [ProjectionMatrix](classes/ProjectionMatrix.md)
- [Quaternion](classes/Quaternion.md)
- [Raf](classes/Raf.md)
- [Vector2](classes/Vector2.md)
- [Vector3](classes/Vector3.md)
- [Vector4](classes/Vector4.md)

### Interfaces

- [IRafOptions](interfaces/IRafOptions.md)

### Type Aliases

- [ANGLE\_ORDER](index.md#angle_order)
- [ICallback](index.md#icallback)

### Functions

- [hooks](index.md#hooks)

## Type Aliases

### ANGLE\_ORDER

Ƭ **ANGLE\_ORDER**: ``"zyx"`` \| ``"xyz"`` \| ``"yxz"`` \| ``"yzx"`` \| ``"zxy"`` \| ``"xzy"``

#### Defined in

[math/Euler.ts:10](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Euler.ts?at&#x3D;873d649#line&#x3D;10)

___

### ICallback

Ƭ **ICallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[types.ts:1](https://github.com/sakitam-gis/vis-engine/blob/master/src/types.ts?at&#x3D;873d649#line&#x3D;1)

## Functions

### hooks

▸ **hooks**(`id`, `hook`): `boolean`

添加 hook

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | hook id |
| `hook` | () => `void` | hook callback |

#### Returns

`boolean`

boolean

#### Defined in

[index.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/index.ts?at&#x3D;873d649#line&#x3D;23)
