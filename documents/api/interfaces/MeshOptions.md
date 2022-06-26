[vis-engine - v1.0.0](../index.md) / MeshOptions

# Interface: MeshOptions

## Table of contents

### Properties

- [frustumCulled](MeshOptions.md#frustumculled)
- [geometry](MeshOptions.md#geometry)
- [id](MeshOptions.md#id)
- [mode](MeshOptions.md#mode)
- [program](MeshOptions.md#program)
- [renderOrder](MeshOptions.md#renderorder)

## Properties

### frustumCulled

• `Optional` **frustumCulled**: `boolean`

是否启用视锥体剔除

#### Defined in

[objects/Mesh.ts:46](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;01a57c5#line&#x3D;46)

___

### geometry

• **geometry**: [`Geometry`](../classes/Geometry.md)

几何体`Geometry`对象

#### Defined in

[objects/Mesh.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;01a57c5#line&#x3D;23)

___

### id

• `Optional` **id**: `string`

`Mesh` 的`id`

#### Defined in

[objects/Mesh.ts:18](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;01a57c5#line&#x3D;18)

___

### mode

• `Optional` **mode**: `number`

渲染方式，默认值为`gl.TRIANGLES`。
其他可用值如下：
- `gl.POINTS`: 绘制一系列点。
- `gl.LINE_STRIP`: 绘制一个线条。即，绘制一系列线段，上一点连接下一点。
- `gl.LINE_LOOP`: 绘制一个线圈。即，绘制一系列线段，上一点连接下一点，并且最后一点与第一个点相连。
- `gl.LINES`: 绘制一系列单独线段。每两个点作为端点，线段之间不连接。
- `gl.TRIANGLE_STRIP`：绘制一个三角带。
- `gl.TRIANGLE_FAN`：绘制一个三角扇。
- `gl.TRIANGLES`: 绘制一系列三角形。每三个点作为顶点。

#### Defined in

[objects/Mesh.ts:41](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;01a57c5#line&#x3D;41)

___

### program

• **program**: [`Program`](../classes/Program.md)

`Program` 对象

#### Defined in

[objects/Mesh.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;01a57c5#line&#x3D;28)

___

### renderOrder

• `Optional` **renderOrder**: `number`

指定`Mesh` 的渲染顺序值

#### Defined in

[objects/Mesh.ts:51](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts?at&#x3D;01a57c5#line&#x3D;51)
