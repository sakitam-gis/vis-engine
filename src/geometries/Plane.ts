import Geometry from '../core/Geometry';
import type { Attributes } from '../core/Geometry';
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

function getPlaneBuffer(
  position: Float32Array,
  normal: Float32Array,
  uv: Float32Array,
  index: Uint32Array | Uint16Array,
  wireframeIndex: Uint32Array | Uint16Array,
  width = 1,
  height = 1,
  widthSegments = 1,
  heightSegments = 1,
) {
  const widthHalf = width / 2;
  const heightHalf = height / 2;

  const gridX = Math.floor(widthSegments);
  const gridY = Math.floor(heightSegments);

  const gridX1 = gridX + 1;
  const gridY1 = gridY + 1;

  const segmentWidth = width / gridX;
  const segmentHeight = height / gridY;

  let i = 0;

  for (let iy = 0; iy < gridY1; iy++) {
    const y = iy * segmentHeight;
    for (let ix = 0; ix < gridX1; ix++) {
      const x = ix * segmentWidth;
      const vx = (x / widthHalf / 2) * width;
      const vy = (y / heightHalf / 2) * height;
      position[i * 3] = vx;
      position[i * 3 + 1] = vy;
      position[i * 3 + 2] = 0;

      normal[i * 3] = 0;
      normal[i * 3 + 1] = 0;
      normal[i * 3 + 2] = 1;

      uv[i * 2] = ix / gridX;
      uv[i * 2 + 1] = iy / gridY;

      const a = ix + gridX1 * iy;
      const b = ix + gridX1 * (iy + 1);
      const c = ix + 1 + gridX1 * (iy + 1);
      const d = ix + 1 + gridX1 * iy;

      index[i * 6] = a;
      index[i * 6 + 1] = b;
      index[i * 6 + 2] = d;
      index[i * 6 + 3] = b;
      index[i * 6 + 4] = c;
      index[i * 6 + 5] = d;

      i++;
    }
  }

  i = 0;
  for (let j = 0, l = index.length; j < l; j += 3) {
    const a = index[j];
    const b = index[j + 1];
    const c = index[j + 2];

    wireframeIndex[i * 6] = a;
    wireframeIndex[i * 6 + 1] = b;
    wireframeIndex[i * 6 + 2] = b;
    wireframeIndex[i * 6 + 3] = c;
    wireframeIndex[i * 6 + 4] = c;
    wireframeIndex[i * 6 + 5] = a;
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
  constructor(renderer: Renderer, { width = 1, height = 1, widthSegments = 1, heightSegments = 1, attributes = {} }: Partial<PlaneOptions> = {}) {
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
    const wireframeIndex = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

    getPlaneBuffer(position, normal, uv, index, wireframeIndex, width, height, widthSegments, heightSegments);

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
      wireframeIndex: {
        data: wireframeIndex,
      },
    });
  }
}
