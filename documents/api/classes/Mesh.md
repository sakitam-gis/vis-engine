# Class: Mesh

网格渲染对象

代码示例：

```ts
const points = new Mesh(renderer, { mode: renderer.gl.POINTS, geometry, program });
points.setParent(scene);
points.position.set(-1, 1, 0);
```

## Hierarchy

- [`Object3D`](Object3D.md)

  ↳ **`Mesh`**

## Table of contents

### Constructors

- [constructor](Mesh.md#constructor)

### Properties

- [gl](Mesh.md#gl)
- [modelViewMatrix](Mesh.md#modelviewmatrix)
- [normalMatrix](Mesh.md#normalmatrix)
- [renderOrder](Mesh.md#renderorder)
- [zDepth](Mesh.md#zdepth)
- [frustumCulled](Mesh.md#frustumculled)
- [mode](Mesh.md#mode)
- [renderer](Mesh.md#renderer)
- [visible](Mesh.md#visible)
- [localMatrix](Mesh.md#localmatrix)
- [worldMatrix](Mesh.md#worldmatrix)
- [matrixAutoUpdate](Mesh.md#matrixautoupdate)
- [position](Mesh.md#position)
- [scale](Mesh.md#scale)
- [rotation](Mesh.md#rotation)
- [quaternion](Mesh.md#quaternion)
- [up](Mesh.md#up)
- [children](Mesh.md#children)
- [parent](Mesh.md#parent)
- [worldMatrixNeedsUpdate](Mesh.md#worldmatrixneedsupdate)

### Accessors

- [id](Mesh.md#id)
- [geometry](Mesh.md#geometry)
- [program](Mesh.md#program)
- [wireframe](Mesh.md#wireframe)

### Methods

- [draw](Mesh.md#draw)
- [updateWireframeGeometry](Mesh.md#updatewireframegeometry)
- [updateGeometry](Mesh.md#updategeometry)
- [updateProgram](Mesh.md#updateprogram)
- [destroy](Mesh.md#destroy)
- [clone](Mesh.md#clone)
- [copy](Mesh.md#copy)
- [add](Mesh.md#add)
- [remove](Mesh.md#remove)
- [contains](Mesh.md#contains)
- [setParent](Mesh.md#setparent)
- [traverse](Mesh.md#traverse)
- [lookAt](Mesh.md#lookat)
- [updateMatrixWorld](Mesh.md#updatematrixworld)
- [updateMatrix](Mesh.md#updatematrix)
- [decompose](Mesh.md#decompose)

## Constructors

### constructor

• **new Mesh**(`renderer`, `options?`): [`Mesh`](Mesh.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `any` | 渲染器 |
| `options` | [`MeshOptions`](../interfaces/MeshOptions.md) | MeshOptions |

#### Returns

[`Mesh`](Mesh.md)

#### Overrides

[Object3D](Object3D.md).[constructor](Object3D.md#constructor)

#### Defined in

[src/objects/Mesh.ts:121](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L121)

## Properties

### gl

• **gl**: `WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Defined in

[src/objects/Mesh.ts:89](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L89)

___

### modelViewMatrix

• **modelViewMatrix**: [`Matrix4`](Matrix4.md)

#### Defined in

[src/objects/Mesh.ts:91](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L91)

___

### normalMatrix

• **normalMatrix**: [`Matrix3`](Matrix3.md)

#### Defined in

[src/objects/Mesh.ts:93](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L93)

___

### renderOrder

• **renderOrder**: `number`

#### Defined in

[src/objects/Mesh.ts:95](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L95)

___

### zDepth

• **zDepth**: `number`

#### Defined in

[src/objects/Mesh.ts:97](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L97)

___

### frustumCulled

• **frustumCulled**: `boolean`

#### Defined in

[src/objects/Mesh.ts:99](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L99)

___

### mode

• **mode**: `number`

#### Defined in

[src/objects/Mesh.ts:101](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L101)

___

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Defined in

[src/objects/Mesh.ts:103](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L103)

___

### visible

• **visible**: `boolean`

是否可见

#### Inherited from

[Object3D](Object3D.md).[visible](Object3D.md#visible)

#### Defined in

[src/objects/Object3D.ts:14](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L14)

___

### localMatrix

• **localMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

局部变换矩阵

#### Inherited from

[Object3D](Object3D.md).[localMatrix](Object3D.md#localmatrix)

#### Defined in

[src/objects/Object3D.ts:19](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L19)

___

### worldMatrix

• **worldMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

物体的世界变换矩阵 (如果没有父级，那么他和局部变化矩阵相同)

#### Inherited from

[Object3D](Object3D.md).[worldMatrix](Object3D.md#worldmatrix)

#### Defined in

[src/objects/Object3D.ts:24](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L24)

___

### matrixAutoUpdate

• **matrixAutoUpdate**: `boolean`

当这个属性设置了之后，它将计算每一帧的位移、旋转（四元变换）和缩放矩阵，并重新计算 `worldMatrix` 属性

#### Inherited from

[Object3D](Object3D.md).[matrixAutoUpdate](Object3D.md#matrixautoupdate)

#### Defined in

[src/objects/Object3D.ts:29](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L29)

___

### position

• **position**: [`Vector3`](Vector3.md)

物体局部位置

#### Inherited from

[Object3D](Object3D.md).[position](Object3D.md#position)

#### Defined in

[src/objects/Object3D.ts:34](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L34)

___

### scale

• **scale**: [`Vector3`](Vector3.md)

物体的局部缩放

#### Inherited from

[Object3D](Object3D.md).[scale](Object3D.md#scale)

#### Defined in

[src/objects/Object3D.ts:39](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L39)

___

### rotation

• **rotation**: [`Euler`](Euler.md)

物体的局部旋转

#### Inherited from

[Object3D](Object3D.md).[rotation](Object3D.md#rotation)

#### Defined in

[src/objects/Object3D.ts:44](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L44)

___

### quaternion

• **quaternion**: [`Quaternion`](Quaternion.md)

物体的局部旋转

#### Inherited from

[Object3D](Object3D.md).[quaternion](Object3D.md#quaternion)

#### Defined in

[src/objects/Object3D.ts:49](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L49)

___

### up

• **up**: [`Vector3`](Vector3.md)

物体的朝向

#### Inherited from

[Object3D](Object3D.md).[up](Object3D.md#up)

#### Defined in

[src/objects/Object3D.ts:54](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L54)

___

### children

• **children**: [`Object3D`](Object3D.md)[]

对象子级

#### Inherited from

[Object3D](Object3D.md).[children](Object3D.md#children)

#### Defined in

[src/objects/Object3D.ts:59](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L59)

___

### parent

• **parent**: `WithNull`\<[`Object3D`](Object3D.md)\>

对象父级

#### Inherited from

[Object3D](Object3D.md).[parent](Object3D.md#parent)

#### Defined in

[src/objects/Object3D.ts:64](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L64)

___

### worldMatrixNeedsUpdate

• **worldMatrixNeedsUpdate**: `boolean`

当这个属性设置了之后，它将计算在那一帧中的 `worldMatrix`，并将这个值重置为false。默认值为false

#### Inherited from

[Object3D](Object3D.md).[worldMatrixNeedsUpdate](Object3D.md#worldmatrixneedsupdate)

#### Defined in

[src/objects/Object3D.ts:69](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L69)

## Accessors

### id

• `get` **id**(): `string`

获取当前 `Mesh` 的 `id`

#### Returns

`string`

#### Defined in

[src/objects/Mesh.ts:151](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L151)

___

### geometry

• `get` **geometry**(): [`Geometry`](Geometry.md)

获取当前 `Mesh` 的几何体信息

#### Returns

[`Geometry`](Geometry.md)

#### Defined in

[src/objects/Mesh.ts:158](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L158)

___

### program

• `get` **program**(): [`Program`](Program.md)

获取当前 `Mesh` 的 `program` 对象

#### Returns

[`Program`](Program.md)

#### Defined in

[src/objects/Mesh.ts:165](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L165)

___

### wireframe

• `get` **wireframe**(): `boolean`

获取是否是网格渲染

#### Returns

`boolean`

#### Defined in

[src/objects/Mesh.ts:184](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L184)

• `set` **wireframe**(`wireframe`): `void`

设置是否是网格渲染

#### Parameters

| Name | Type |
| :------ | :------ |
| `wireframe` | `boolean` |

#### Returns

`void`

#### Defined in

[src/objects/Mesh.ts:173](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L173)

## Methods

### draw

▸ **draw**(`options?`): `void`

执行`Mesh` 的渲染，一般由`Renderer` 渲染器进行调度。

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MeshDrawOptions`](../interfaces/MeshDrawOptions.md) |

#### Returns

`void`

#### Defined in

[src/objects/Mesh.ts:192](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L192)

___

### updateWireframeGeometry

▸ **updateWireframeGeometry**(`wireframe`, `force?`): `void`

更新网格几何体数据，主要是顶点索引数据

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `wireframe` | `any` | `undefined` | 是否更新索引数据为网格数据 |
| `force` | `boolean` | `false` | 是否强制更新 |

#### Returns

`void`

#### Defined in

[src/objects/Mesh.ts:233](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L233)

___

### updateGeometry

▸ **updateGeometry**(`geometry`, `destroy?`): `void`

更新几何体信息，如果开启了 `wireframe` 还需要更新 `WireframeGeometry`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `geometry` | `any` | `undefined` | 几何体 |
| `destroy` | `boolean` | `true` | 是否销毁上一个几何体 |

#### Returns

`void`

#### Defined in

[src/objects/Mesh.ts:270](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L270)

___

### updateProgram

▸ **updateProgram**(`program`, `destroy?`): `void`

更新 `Program` 对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `program` | `any` | `undefined` |  |
| `destroy` | `boolean` | `true` | 是否销毁上一个 program |

#### Returns

`void`

#### Defined in

[src/objects/Mesh.ts:283](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L283)

___

### destroy

▸ **destroy**(): `void`

销毁此 `Mesh`

#### Returns

`void`

#### Defined in

[src/objects/Mesh.ts:293](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L293)

___

### clone

▸ **clone**(): [`Mesh`](Mesh.md)

克隆 `Mesh` 对象

#### Returns

[`Mesh`](Mesh.md)

#### Overrides

[Object3D](Object3D.md).[clone](Object3D.md#clone)

#### Defined in

[src/objects/Mesh.ts:301](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L301)

___

### copy

▸ **copy**(`mesh`, `recursive?`): [`Mesh`](Mesh.md)

将给定的 `Mesh` 对象复制到此对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `mesh` | `any` | `undefined` | 源对象 |
| `recursive` | `boolean` | `true` | 设置是否复制子对象 |

#### Returns

[`Mesh`](Mesh.md)

#### Overrides

[Object3D](Object3D.md).[copy](Object3D.md#copy)

#### Defined in

[src/objects/Mesh.ts:316](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L316)

___

### add

▸ **add**(`object`, `notifyChild?`): `void`

添加对象到这个对象的子级

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | [`Object3D`](Object3D.md) | `undefined` |
| `notifyChild` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[add](Object3D.md#add)

#### Defined in

[src/objects/Object3D.ts:97](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L97)

___

### remove

▸ **remove**(`object`, `notifyChild?`): `void`

从此对象移除传入的对象（如果存在）

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | [`Object3D`](Object3D.md) | `undefined` |
| `notifyChild` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[remove](Object3D.md#remove)

#### Defined in

[src/objects/Object3D.ts:111](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L111)

___

### contains

▸ **contains**(`object`): `boolean`

判断此渲染对象的子集是否包含传入的渲染对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Object3D`](Object3D.md) |

#### Returns

`boolean`

#### Inherited from

[Object3D](Object3D.md).[contains](Object3D.md#contains)

#### Defined in

[src/objects/Object3D.ts:124](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L124)

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

[src/objects/Object3D.ts:133](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L133)

___

### traverse

▸ **traverse**(`callback`): `void`

遍历此对象（包含子对象）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `any` | 回调函数 |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[traverse](Object3D.md#traverse)

#### Defined in

[src/objects/Object3D.ts:147](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L147)

___

### lookAt

▸ **lookAt**(`eye`, `invert?`): `void`

旋转物体使其在世界空间中面朝一个点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eye` | [`Vector3`](Vector3.md) | 朝向位置 |
| `invert?` | `boolean` | 是否反转 |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[lookAt](Object3D.md#lookat)

#### Defined in

[src/objects/Object3D.ts:160](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L160)

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

[src/objects/Object3D.ts:174](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L174)

___

### updateMatrix

▸ **updateMatrix**(): `void`

更新局部变换矩阵

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[updateMatrix](Object3D.md#updatematrix)

#### Defined in

[src/objects/Object3D.ts:200](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L200)

___

### decompose

▸ **decompose**(): `void`

从局部矩阵计算位置，旋转和缩放

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[decompose](Object3D.md#decompose)

#### Defined in

[src/objects/Object3D.ts:208](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L208)
