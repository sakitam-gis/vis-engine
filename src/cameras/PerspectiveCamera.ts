import Camera from './Camera';

/**
 * 透视相机
 *
 * 代码示例：
 * ```ts
 * const camera = new PerspectiveCamera(45, width / height, 1, 1000)
 * scene.add(camera);
 * ```
 */
export default class PerspectiveCamera extends Camera {
  constructor(fov, aspect, near, far) {
    super({
      fov,
      aspect,
      near,
      far,
    });
  }

  /**
   * 更新投影矩阵
   */
  updateProjectionMatrix() {
    this.projectionMatrix.fromPerspective(this.fov, this.aspect, this.near, this.far);
  }
}
