[vis-engine - v1.0.0](../index.md) / Raf

# Class: Raf

优化的 raf 管理
```ts
const raf = new Raf();
```

## Table of contents

### Constructors

- [constructor](Raf.md#constructor)

### Properties

- [options](Raf.md#options)

### Accessors

- [animating](Raf.md#animating)
- [elapsedTime](Raf.md#elapsedtime)
- [visible](Raf.md#visible)

### Methods

- [reset](Raf.md#reset)
- [start](Raf.md#start)
- [stop](Raf.md#stop)
- [tick](Raf.md#tick)

## Constructors

### constructor

• **new Raf**(`cb`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `any` |
| `options` | `Partial`<[`RafOptions`](../interfaces/RafOptions.md)\> |

#### Defined in

[animation/Raf.ts:33](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at&#x3D;8558d24#line&#x3D;33)

## Properties

### options

• **options**: `Partial`<[`RafOptions`](../interfaces/RafOptions.md)\>

#### Defined in

[animation/Raf.ts:24](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at&#x3D;8558d24#line&#x3D;24)

## Accessors

### animating

• `get` **animating**(): `boolean`

获取当前`raf` 状态

#### Returns

`boolean`

#### Defined in

[animation/Raf.ts:63](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at&#x3D;8558d24#line&#x3D;63)

___

### elapsedTime

• `get` **elapsedTime**(): `number`

获取总时长

#### Returns

`number`

#### Defined in

[animation/Raf.ts:81](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at&#x3D;8558d24#line&#x3D;81)

___

### visible

• `get` **visible**(): `boolean`

获取当前页面是否可见

#### Returns

`boolean`

#### Defined in

[animation/Raf.ts:56](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at&#x3D;8558d24#line&#x3D;56)

## Methods

### reset

▸ **reset**(): `void`

重置当前 `raf` 状态

#### Returns

`void`

#### Defined in

[animation/Raf.ts:70](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at&#x3D;8558d24#line&#x3D;70)

___

### start

▸ **start**(): `void`

启动 `raf`

#### Returns

`void`

#### Defined in

[animation/Raf.ts:88](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at&#x3D;8558d24#line&#x3D;88)

___

### stop

▸ **stop**(): `void`

停止 `raf`

#### Returns

`void`

#### Defined in

[animation/Raf.ts:108](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at&#x3D;8558d24#line&#x3D;108)

___

### tick

▸ **tick**(): `void`

#### Returns

`void`

#### Defined in

[animation/Raf.ts:120](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Raf.ts?at&#x3D;8558d24#line&#x3D;120)
