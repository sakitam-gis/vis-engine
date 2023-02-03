import type { Attributes } from '../core/Geometry';
import Geometry from '../core/Geometry';
import Renderer from '../core/Renderer';
import { getPlaneBuffer } from './Plane';

export interface BoxOptions {
  /**
   * 几何体沿着`X`轴的宽度，默认值是`1`。
   */
  width: number;

  /**
   * 几何体沿着`Y`轴的宽度，默认值是`1`。
   */
  height: number;

  /**
   * 几何体沿着`Z`轴的深度，默认值是`1`。
   */
  depth: number;

  /**
   * 宽度分段数，默认值是`1`。
   */
  widthSegments: number;

  /**
   * 高度分段数，默认值是`1`。
   */
  heightSegments: number;

  /**
   * 深度分段数，默认值是`1`。
   */
  depthSegments: number;

  /**
   * 顶点数据
   */
  attributes: Attributes;
}

/**
 * 立方体，通常用来创建立方体或者不规则四边形。
 *
 * 代码示例：
 * ```ts
 * const boxGeometry - new Box(renderer);
 *
 * const box = new Mesh(renderer, { geometry: boxGeometry, program });
 * scene.add(box);
 * ```
 */
export default class Box extends Geometry {
  /**
   * @param renderer 渲染器
   * @param width 几何体沿着`X`轴的宽度，默认值是`1`。
   * @param height 几何体沿着`Y`轴的宽度，默认值是`1`。
   * @param depth 几何体沿着`Z`轴的深度，默认值是`1`。
   * @param widthSegments 宽度分段数，默认值是`1`。
   * @param heightSegments 高度分段数，默认值是`1`。
   * @param depthSegments 深度分段数，默认值是`1`。
   * @param attributes 顶点数据
   */
  constructor(
    renderer: Renderer,
    {
      width = 1,
      height = 1,
      depth = 1,
      widthSegments = 1,
      heightSegments = 1,
      depthSegments = 1,
      attributes = {},
    }: Partial<BoxOptions> = {},
  ) {
    const gridX = Math.floor(widthSegments);
    const gridY = Math.floor(heightSegments);
    const gridZ = Math.floor(depthSegments);

    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;
    const gridZ1 = gridZ + 1;

    const num = gridX1 * gridY1 * 2 + gridX1 * gridZ1 * 2 + gridY1 * gridZ1 * 2;
    const numIndices = (gridX * gridY * 2 + gridX * gridZ * 2 + gridY * gridZ * 2) * 6;

    const position = new Float32Array(num * 3);
    const normal = new Float32Array(num * 3);
    const uv = new Float32Array(num * 2);
    const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

    let i = 0;
    let ii = 0;
    const d = gridZ1 * gridY1;
    const w = gridX1 * gridZ1;
    const h = gridX1 * gridY1;
    const dt = gridZ * gridY;
    const wt = gridX * gridZ;
    const ht = gridX * gridY;
    // left plane
    getPlaneBuffer(
      position,
      normal,
      uv,
      index,
      depth,
      height,
      width,
      depthSegments,
      heightSegments,
      2,
      1,
      0,
      -1,
      -1,
      i,
      ii,
    );

    // right plane
    i += d;
    ii += dt;
    getPlaneBuffer(
      position,
      normal,
      uv,
      index,
      depth,
      height,
      -width,
      depthSegments,
      heightSegments,
      2,
      1,
      0,
      1,
      -1,
      i,
      ii,
    );

    // top plane
    i += d;
    ii += dt;
    getPlaneBuffer(
      position,
      normal,
      uv,
      index,
      width,
      depth,
      height,
      depthSegments,
      widthSegments,
      0,
      2,
      1,
      1,
      1,
      i,
      ii,
    );

    // bottom plane
    i += w;
    ii += wt;
    getPlaneBuffer(
      position,
      normal,
      uv,
      index,
      width,
      depth,
      -height,
      depthSegments,
      widthSegments,
      0,
      2,
      1,
      1,
      -1,
      i,
      ii,
    );

    // front plane
    i += w;
    ii += wt;
    getPlaneBuffer(
      position,
      normal,
      uv,
      index,
      width,
      height,
      -depth,
      widthSegments,
      heightSegments,
      0,
      1,
      2,
      -1,
      -1,
      i,
      ii,
    );

    // back plane
    i += h;
    ii += ht;
    getPlaneBuffer(
      position,
      normal,
      uv,
      index,
      width,
      height,
      depth,
      widthSegments,
      heightSegments,
      0,
      1,
      2,
      1,
      -1,
      i,
      ii,
    );

    super(renderer, {
      ...attributes,
      position: {
        size: 3,
        data: position,
      },
      normal: {
        size: 3,
        data: normal,
      },
      uv: {
        size: 2,
        data: uv,
      },
      index: {
        data: index,
      },
    });
  }
}
