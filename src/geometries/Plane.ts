import type { Attributes } from '../core/Geometry';
import Geometry from '../core/Geometry';
import Renderer from '../core/Renderer';

export interface PlaneOptions {
  /**
   * 平面几何体沿着`X`轴的宽度，默认值是`1`。
   */
  width: number;

  /**
   * 平面几何体沿着`Y`轴的宽度，默认值是`1`。
   */
  height: number;

  /**
   * 宽度分段数，默认值是`1`。
   */
  widthSegments: number;

  /**
   * 高度分段数，默认值是`1`。
   */
  heightSegments: number;

  /**
   * 顶点数据
   */
  attributes: Attributes;
}

/**
 * 获取平面几何体数据
 * @param position
 * @param normal
 * @param uv
 * @param index
 * @param width
 * @param height
 * @param depth
 * @param widthSegments
 * @param heightSegments
 * @param u
 * @param v
 * @param w
 * @param uDir
 * @param vDir
 * @param i
 * @param ii
 */
export function getPlaneBuffer(
  position: Float32Array,
  normal: Float32Array,
  uv: Float32Array,
  index: Uint32Array | Uint16Array,
  width = 1,
  height = 1,
  depth = 1,
  widthSegments = 1,
  heightSegments = 1,
  u = 0,
  v = 1,
  w = 2,
  uDir = 1,
  vDir = -1,
  i = 0,
  ii = 0,
) {
  const consti = i;
  const widthHalf = width / 2;
  const heightHalf = height / 2;

  const gridX = Math.floor(widthSegments);
  const gridY = Math.floor(heightSegments);

  const gridX1 = gridX + 1;
  const gridY1 = gridY + 1;

  const segmentWidth = width / gridX;
  const segmentHeight = height / gridY;

  for (let iy = 0; iy < gridY1; iy++) {
    const y = iy * segmentHeight - heightHalf;
    for (let ix = 0; ix < gridX1; ix++) {
      position[i * 3 + u] = (ix * segmentWidth - widthHalf) * uDir;
      position[i * 3 + v] = y * vDir;
      position[i * 3 + w] = depth / 2;

      normal[i * 3 + u] = 0;
      normal[i * 3 + v] = 0;
      normal[i * 3 + w] = depth >= 0 ? 1 : -1;

      uv[i * 2] = ix / gridX;
      uv[i * 2 + 1] = 1 - iy / gridY;

      const a = consti + ix + gridX1 * iy;
      const b = consti + ix + gridX1 * (iy + 1);
      const c = consti + ix + 1 + gridX1 * (iy + 1);
      const d = consti + ix + 1 + gridX1 * iy;

      index[ii * 6] = a;
      index[ii * 6 + 1] = b;
      index[ii * 6 + 2] = d;
      index[ii * 6 + 3] = b;
      index[ii * 6 + 4] = c;
      index[ii * 6 + 5] = d;

      i++;
      ii++;
    }
  }
}

/**
 * 平面几何体
 *
 * 代码示例：
 * ```ts
 * const plane - new Plane(renderer);
 *
 * const plane = new Mesh(renderer, { geometry: planeGeometry, program });
 * scene.add(plane);
 * ```
 */
export default class Plane extends Geometry {
  /**
   * @param renderer 渲染器
   * @param width 平面几何体沿着`X`轴的宽度，默认值是`1`。
   * @param height 平面几何体沿着`Y`轴的宽度，默认值是`1`。
   * @param widthSegments 宽度分段数，默认值是`1`。
   * @param heightSegments 高度分段数，默认值是`1`。
   * @param attributes 顶点数据
   */
  constructor(renderer: Renderer, {
    width = 1,
    height = 1,
    widthSegments = 1,
    heightSegments = 1,
    attributes = {},
  }: Partial<PlaneOptions> = {}) {
    const gridX = Math.floor(widthSegments);
    const gridY = Math.floor(heightSegments);

    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;

    const num = gridX1 * gridY1;
    const numIndices = gridX * gridY * 6;

    const position = new Float32Array(num * 3);
    const normal = new Float32Array(num * 3);
    const uv = new Float32Array(num * 2);
    const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

    getPlaneBuffer(position, normal, uv, index, width, height, 0, widthSegments, heightSegments);

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
