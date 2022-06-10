import Camera from './Camera';

/**
 * 正交相机（在这种投影模式下，无论物体距离相机距离远或者近，在最终渲染的图片中物体的大小都保持不变）
 * ```ts
 * const camera = new OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, 1, 1000);
 * scene.add(camera);
 * ```
 */
export default class OrthographicCamera extends Camera {
  constructor(left, right, top, bottom, near, far, zoom = 1) {
    super({
      bounds: {
        left,
        right,
        top,
        bottom,
      },
      near,
      far,
      zoom,
    });
  }

  /**
   * 更新投影矩阵
   */
  updateProjectionMatrix() {
    const {
      left,
      right,
      top,
      bottom,
    } = this.bounds;
    const { zoom } = this;
    this.projectionMatrix.orthographic(
      left / zoom,
      right / zoom,
      top / zoom,
      bottom / zoom,
      this.near,
      this.far,
    );
  }
}
