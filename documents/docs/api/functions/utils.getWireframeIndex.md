---
id: "utils.getWireframeIndex"
title: "Function: getWireframeIndex"
sidebar_label: "getWireframeIndex"
custom_edit_url: null
---

[utils](../namespaces/utils.md).getWireframeIndex

▸ **getWireframeIndex**(`position`, `indices`, `numIndices`, `data?`): `number`[]

根据顶点索引重新构建 `Wireframe` 索引

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`DataType`](../types/DataType.md) | 顶点数据 |
| `indices` | `number`[] | 索引数据 |
| `numIndices` | `number` | 索引数量 |
| `data?` | `Uint32Array` \| `Uint16Array` | 原始索引数据 |

#### Returns

`number`[]

#### Defined in

[src/utils/shader.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/shader.ts#L25)
