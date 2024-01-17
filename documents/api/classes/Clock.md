# Class: Clock

时钟对象，默认内部会使用 [performance.now](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now) 否则会
回退到 `Date.now()`.
```ts
const clock = new Clock();
```

## Table of contents

### Constructors

- [constructor](Clock.md#constructor)

### Properties

- [running](Clock.md#running)

### Methods

- [start](Clock.md#start)
- [stop](Clock.md#stop)
- [reset](Clock.md#reset)
- [getElapsedTime](Clock.md#getelapsedtime)
- [getDelta](Clock.md#getdelta)

## Constructors

### constructor

• **new Clock**(`running?`): [`Clock`](Clock.md)

Constructor

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `running` | `boolean` | `true` | 时钟状态 |

#### Returns

[`Clock`](Clock.md)

#### Defined in

[src/animation/Clock.ts:35](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Clock.ts#L35)

## Properties

### running

• **running**: `boolean`

#### Defined in

[src/animation/Clock.ts:29](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Clock.ts#L29)

## Methods

### start

▸ **start**(): `void`

启动时钟

#### Returns

`void`

#### Defined in

[src/animation/Clock.ts:42](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Clock.ts#L42)

___

### stop

▸ **stop**(): `void`

停止时钟

#### Returns

`void`

#### Defined in

[src/animation/Clock.ts:52](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Clock.ts#L52)

___

### reset

▸ **reset**(): `void`

重置时钟状态

#### Returns

`void`

#### Defined in

[src/animation/Clock.ts:61](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Clock.ts#L61)

___

### getElapsedTime

▸ **getElapsedTime**(): `number`

获取自时钟启动以来经过的秒数

#### Returns

`number`

#### Defined in

[src/animation/Clock.ts:69](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Clock.ts#L69)

___

### getDelta

▸ **getDelta**(): `number`

计算时钟总启动时间，并将当前时间设置赋值到 `lastTime`

#### Returns

`number`

#### Defined in

[src/animation/Clock.ts:77](https://github.com/sakitam-gis/vis-engine/blob/master/src/animation/Clock.ts#L77)
