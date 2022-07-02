[vis-engine - v1.0.0](../index.md) / Scene

# Class: Scene

场景对象，一般我们会将创建的网格渲染对象添加到场景中进行渲染

代码示例：
```ts
const scene = new Scene();

const points = new Mesh(renderer, { mode: renderer.gl.POINTS, geometry, program });

points.position.set(-1, 1, 0);

scene.add(points);
```

## Hierarchy

- [`Object3D`](Object3D.md)

  ↳ **`Scene`**

## Table of contents

### Constructors

- [constructor](Scene.md#constructor)

### Properties

- [children](Scene.md#children)
- [localMatrix](Scene.md#localmatrix)
- [matrixAutoUpdate](Scene.md#matrixautoupdate)
- [parent](Scene.md#parent)
- [position](Scene.md#position)
- [quaternion](Scene.md#quaternion)
- [rotation](Scene.md#rotation)
- [scale](Scene.md#scale)
- [up](Scene.md#up)
- [visible](Scene.md#visible)
- [worldMatrix](Scene.md#worldmatrix)
- [worldMatrixNeedsUpdate](Scene.md#worldmatrixneedsupdate)

### Methods

- [add](Scene.md#add)
- [clone](Scene.md#clone)
- [contains](Scene.md#contains)
- [copy](Scene.md#copy)
- [decompose](Scene.md#decompose)
- [lookAt](Scene.md#lookat)
- [remove](Scene.md#remove)
- [setParent](Scene.md#setparent)
- [traverse](Scene.md#traverse)
- [updateMatrix](Scene.md#updatematrix)
- [updateMatrixWorld](Scene.md#updatematrixworld)

## Constructors

### constructor

• **new Scene**()

#### Inherited from

[Object3D](Object3D.md).[constructor](Object3D.md#constructor)

#### Defined in

[objects/Object3D.ts:45](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;45)

## Properties

### children

• **children**: [`Object3D`](Object3D.md)[]

#### Inherited from

[Object3D](Object3D.md).[children](Object3D.md#children)

#### Defined in

[objects/Object3D.ts:39](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;39)

___

### localMatrix

• **localMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

局部变换矩阵

#### Inherited from

[Object3D](Object3D.md).[localMatrix](Object3D.md#localmatrix)

#### Defined in

[objects/Object3D.ts:20](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;20)

___

### matrixAutoUpdate

• **matrixAutoUpdate**: `boolean`

#### Inherited from

[Object3D](Object3D.md).[matrixAutoUpdate](Object3D.md#matrixautoupdate)

#### Defined in

[objects/Object3D.ts:27](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;27)

___

### parent

• **parent**: `WithNull`<[`Object3D`](Object3D.md)\>

#### Inherited from

[Object3D](Object3D.md).[parent](Object3D.md#parent)

#### Defined in

[objects/Object3D.ts:41](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;41)

___

### position

• **position**: [`Vector3`](Vector3.md)

#### Inherited from

[Object3D](Object3D.md).[position](Object3D.md#position)

#### Defined in

[objects/Object3D.ts:29](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;29)

___

### quaternion

• **quaternion**: [`Quaternion`](Quaternion.md)

#### Inherited from

[Object3D](Object3D.md).[quaternion](Object3D.md#quaternion)

#### Defined in

[objects/Object3D.ts:35](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;35)

___

### rotation

• **rotation**: [`Euler`](Euler.md)

#### Inherited from

[Object3D](Object3D.md).[rotation](Object3D.md#rotation)

#### Defined in

[objects/Object3D.ts:33](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;33)

___

### scale

• **scale**: [`Vector3`](Vector3.md)

#### Inherited from

[Object3D](Object3D.md).[scale](Object3D.md#scale)

#### Defined in

[objects/Object3D.ts:31](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;31)

___

### up

• **up**: [`Vector3`](Vector3.md)

#### Inherited from

[Object3D](Object3D.md).[up](Object3D.md#up)

#### Defined in

[objects/Object3D.ts:37](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;37)

___

### visible

• **visible**: `boolean`

是否可见

#### Inherited from

[Object3D](Object3D.md).[visible](Object3D.md#visible)

#### Defined in

[objects/Object3D.ts:15](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;15)

___

### worldMatrix

• **worldMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

物体的世界变换矩阵

#### Inherited from

[Object3D](Object3D.md).[worldMatrix](Object3D.md#worldmatrix)

#### Defined in

[objects/Object3D.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;25)

___

### worldMatrixNeedsUpdate

• **worldMatrixNeedsUpdate**: `boolean`

#### Inherited from

[Object3D](Object3D.md).[worldMatrixNeedsUpdate](Object3D.md#worldmatrixneedsupdate)

#### Defined in

[objects/Object3D.ts:43](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;43)

## Methods

### add

▸ **add**(`object`, `p?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | `any` | `undefined` |
| `p` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[add](Object3D.md#add)

#### Defined in

[objects/Object3D.ts:66](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;66)

___

### clone

▸ **clone**(): [`Scene`](Scene.md)

克隆场景对象

#### Returns

[`Scene`](Scene.md)

#### Overrides

[Object3D](Object3D.md).[clone](Object3D.md#clone)

#### Defined in

[objects/Scene.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Scene.ts?at&#x3D;05b5687#line&#x3D;21)

___

### contains

▸ **contains**(`object`): `boolean`

判断此渲染对象的子集是否包含传入的渲染对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

`boolean`

#### Inherited from

[Object3D](Object3D.md).[contains](Object3D.md#contains)

#### Defined in

[objects/Object3D.ts:88](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;88)

___

### copy

▸ **copy**(`source`, `recursive`): [`Scene`](Scene.md)

将传入的场景对象的各属性复制到此场景实例中

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `any` | 源场景 |
| `recursive` | `any` | 设置是否复制子对象 |

#### Returns

[`Scene`](Scene.md)

#### Overrides

[Object3D](Object3D.md).[copy](Object3D.md#copy)

#### Defined in

[objects/Scene.ts:30](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Scene.ts?at&#x3D;05b5687#line&#x3D;30)

___

### decompose

▸ **decompose**(): `void`

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[decompose](Object3D.md#decompose)

#### Defined in

[objects/Object3D.ts:159](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;159)

___

### lookAt

▸ **lookAt**(`eye`, `isCamera?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eye` | [`Vector3`](Vector3.md) |
| `isCamera?` | `boolean` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[lookAt](Object3D.md#lookat)

#### Defined in

[objects/Object3D.ts:115](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;115)

___

### remove

▸ **remove**(`object`, `p?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | `any` | `undefined` |
| `p` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[remove](Object3D.md#remove)

#### Defined in

[objects/Object3D.ts:75](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;75)

___

### setParent

▸ **setParent**(`object`, `notifyParent?`): `void`

设置此渲染对象的父集

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `object` | `any` | `undefined` | 渲染对象 |
| `notifyParent` | `boolean` | `true` | 设置是否将此渲染对象添加到传入的渲染对象中 |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[setParent](Object3D.md#setparent)

#### Defined in

[objects/Object3D.ts:97](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;97)

___

### traverse

▸ **traverse**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[traverse](Object3D.md#traverse)

#### Defined in

[objects/Object3D.ts:107](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;107)

___

### updateMatrix

▸ **updateMatrix**(): `void`

更新局部变换矩阵

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[updateMatrix](Object3D.md#updatematrix)

#### Defined in

[objects/Object3D.ts:154](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;154)

___

### updateMatrixWorld

▸ **updateMatrixWorld**(`force?`): `void`

更新渲染对象的世界矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `force?` | `boolean` | 是否更新次渲染对象的子集 |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[updateMatrixWorld](Object3D.md#updatematrixworld)

#### Defined in

[objects/Object3D.ts:129](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts?at&#x3D;05b5687#line&#x3D;129)
