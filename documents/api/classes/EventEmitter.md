[vis-engine - v1.0.0](../index.md) / EventEmitter

# Class: EventEmitter<EventsMap\>

事件中心（实现的发布订阅者模式）

简单使用：
```
const e = new EventEmitter();

const handler = (data) => {
  console.log(data);
};

e.on('eventName', handler);

e.emit('eventName', { data: 'data' });

// 取消订阅
e.off('eventName', handler);

// 清除所有的订阅者
e.clear();
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `EventsMap` | extends `Record`<`string`, `any`\> = `Event` |

## Table of contents

### Constructors

- [constructor](EventEmitter.md#constructor)

### Methods

- [clear](EventEmitter.md#clear)
- [emit](EventEmitter.md#emit)
- [has](EventEmitter.md#has)
- [off](EventEmitter.md#off)
- [on](EventEmitter.md#on)
- [once](EventEmitter.md#once)

## Constructors

### constructor

• **new EventEmitter**<`EventsMap`\>(`«destructured»?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventsMap` | extends `Record`<`string`, `any`\> = `Event` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `IOptions` |

#### Defined in

[core/Event.ts:49](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Event.ts?at&#x3D;4193568#line&#x3D;49)

## Methods

### clear

▸ **clear**(): [`EventEmitter`](EventEmitter.md)<`EventsMap`\>

清空所有的订阅者

#### Returns

[`EventEmitter`](EventEmitter.md)<`EventsMap`\>

#### Defined in

[core/Event.ts:176](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Event.ts?at&#x3D;4193568#line&#x3D;176)

___

### emit

▸ **emit**(`type`, `args?`): `any`

触发事件

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `args?` | `any` |

#### Returns

`any`

#### Defined in

[core/Event.ts:158](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Event.ts?at&#x3D;4193568#line&#x3D;158)

___

### has

▸ **has**(`type`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |

#### Returns

`any`

#### Defined in

[core/Event.ts:169](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Event.ts?at&#x3D;4193568#line&#x3D;169)

___

### off

▸ **off**(`type`, `handler?`, `context?`): [`EventEmitter`](EventEmitter.md)<`EventsMap`\>

取消监听

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `handler?` | `any` |
| `context?` | `any` |

#### Returns

[`EventEmitter`](EventEmitter.md)<`EventsMap`\>

#### Defined in

[core/Event.ts:130](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Event.ts?at&#x3D;4193568#line&#x3D;130)

___

### on

▸ **on**(`type`, `handler`, `context?`): [`EventEmitter`](EventEmitter.md)<`EventsMap`\>

添加订阅者

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `any` | 事件类型 |
| `handler` | `any` | 回调函数 |
| `context?` | `any` | 上下文 |

#### Returns

[`EventEmitter`](EventEmitter.md)<`EventsMap`\>

#### Defined in

[core/Event.ts:82](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Event.ts?at&#x3D;4193568#line&#x3D;82)

___

### once

▸ **once**(`type`, `handler`, `context?`): [`EventEmitter`](EventEmitter.md)<`EventsMap`\>

添加一次性订阅者

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `handler` | `any` |
| `context?` | `any` |

#### Returns

[`EventEmitter`](EventEmitter.md)<`EventsMap`\>

#### Defined in

[core/Event.ts:106](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Event.ts?at&#x3D;4193568#line&#x3D;106)
