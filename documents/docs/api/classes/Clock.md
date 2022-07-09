---
id: "Clock"
title: "Class: Clock"
sidebar_label: "Clock"
sidebar_position: 0
custom_edit_url: null
---

时钟对象，默认内部会使用 [performance.now](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now) 否则会
回退到 `Date.now()`.
```ts
const clock = new Clock();
```

## Constructors

### constructor

• **new Clock**(`running?`)

Constructor

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `running` | `boolean` | `true` | 时钟状态 |

#### Defined in

[animation/Clock.ts:35](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Clock.ts?at&#x3D;566f929#line&#x3D;35)

## Properties

### running

• **running**: `boolean`

#### Defined in

[animation/Clock.ts:29](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Clock.ts?at&#x3D;566f929#line&#x3D;29)

## Methods

### getDelta

▸ **getDelta**(): `number`

计算时钟总启动时间，并将当前时间设置赋值到 `lastTime`

#### Returns

`number`

#### Defined in

[animation/Clock.ts:77](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Clock.ts?at&#x3D;566f929#line&#x3D;77)

___

### getElapsedTime

▸ **getElapsedTime**(): `number`

获取自时钟启动以来经过的秒数

#### Returns

`number`

#### Defined in

[animation/Clock.ts:69](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Clock.ts?at&#x3D;566f929#line&#x3D;69)

___

### reset

▸ **reset**(): `void`

重置时钟状态

#### Returns

`void`

#### Defined in

[animation/Clock.ts:61](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Clock.ts?at&#x3D;566f929#line&#x3D;61)

___

### start

▸ **start**(): `void`

启动时钟

#### Returns

`void`

#### Defined in

[animation/Clock.ts:42](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Clock.ts?at&#x3D;566f929#line&#x3D;42)

___

### stop

▸ **stop**(): `void`

停止时钟

#### Returns

`void`

#### Defined in

[animation/Clock.ts:52](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Clock.ts?at&#x3D;566f929#line&#x3D;52)
