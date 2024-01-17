---
id: "getPlaneBuffer"
title: "Function: getPlaneBuffer"
sidebar_label: "getPlaneBuffer"
sidebar_position: 0
custom_edit_url: null
---

▸ **getPlaneBuffer**(`position`, `normal`, `uv`, `index`, `width?`, `height?`, `depth?`, `widthSegments?`, `heightSegments?`, `u?`, `v?`, `w?`, `uDir?`, `vDir?`, `i?`, `ii?`): `void`

获取平面几何体数据

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `position` | `Float32Array` | `undefined` |
| `normal` | `Float32Array` | `undefined` |
| `uv` | `Float32Array` | `undefined` |
| `index` | `Uint32Array` \| `Uint16Array` | `undefined` |
| `width` | `number` | `1` |
| `height` | `number` | `1` |
| `depth` | `number` | `0` |
| `widthSegments` | `number` | `1` |
| `heightSegments` | `number` | `1` |
| `u` | `number` | `0` |
| `v` | `number` | `1` |
| `w` | `number` | `2` |
| `uDir` | `number` | `1` |
| `vDir` | `number` | `-1` |
| `i` | `number` | `0` |
| `ii` | `number` | `0` |

#### Returns

`void`

#### Defined in

[src/geometries/Plane.ts:51](https://github.com/sakitam-gis/vis-engine/blob/master/src/geometries/Plane.ts#L51)
