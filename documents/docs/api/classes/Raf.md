---
id: "Raf"
title: "Class: Raf"
sidebar_label: "Raf"
sidebar_position: 0
custom_edit_url: null
---

优化的 raf 管理
```ts
const raf = new Raf();
```

## Constructors

### constructor

• **new Raf**(`cb`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `any` |
| `options` | `Partial`<[`RafOptions`](../interfaces/RafOptions.md)\> |

#### Defined in

[src/animation/Raf.ts:33](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/animation/Raf.ts#L33)

## Properties

### options

• **options**: `Partial`<[`RafOptions`](../interfaces/RafOptions.md)\>

#### Defined in

[src/animation/Raf.ts:24](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/animation/Raf.ts#L24)

## Accessors

### animating

• `get` **animating**(): `boolean`

获取当前`raf` 状态

#### Returns

`boolean`

#### Defined in

[src/animation/Raf.ts:63](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/animation/Raf.ts#L63)

___

### elapsedTime

• `get` **elapsedTime**(): `number`

获取总时长

#### Returns

`number`

#### Defined in

[src/animation/Raf.ts:81](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/animation/Raf.ts#L81)

___

### visible

• `get` **visible**(): `boolean`

获取当前页面是否可见

#### Returns

`boolean`

#### Defined in

[src/animation/Raf.ts:56](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/animation/Raf.ts#L56)

## Methods

### reset

▸ **reset**(): `void`

重置当前 `raf` 状态

#### Returns

`void`

#### Defined in

[src/animation/Raf.ts:70](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/animation/Raf.ts#L70)

___

### start

▸ **start**(): `void`

启动 `raf`

#### Returns

`void`

#### Defined in

[src/animation/Raf.ts:88](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/animation/Raf.ts#L88)

___

### stop

▸ **stop**(): `void`

停止 `raf`

#### Returns

`void`

#### Defined in

[src/animation/Raf.ts:108](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/animation/Raf.ts#L108)

___

### tick

▸ **tick**(): `void`

#### Returns

`void`

#### Defined in

[src/animation/Raf.ts:120](https://github.com/sakitam-gis/vis-engine/blob/7cb4094/src/animation/Raf.ts#L120)
