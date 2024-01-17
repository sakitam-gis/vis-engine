# Function: highPrecision

[utils](../modules/utils.md).highPrecision

▸ **highPrecision**(`b`, `notifyGlMatrix?`): `void`

设置是否使用双精度浮点数

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `b` | `boolean` | `undefined` |  |
| `notifyGlMatrix` | `boolean` | `true` | 如果不想影响 `gl-matrix` 的构造器，需要设定为 `false`，这在我们公用 `gl-matrix` 并且其他库使用构造器的 `instanceof` 做相关判断时可以避免受到影响。 |

#### Returns

`void`

#### Defined in

[src/utils/math.ts:48](https://github.com/sakitam-gis/vis-engine/blob/master/src/utils/math.ts#L48)
