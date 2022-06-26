import Object3D from './Object3D';

/**
 * 场景对象，一般我们会将创建的网格渲染对象添加到场景中进行渲染
 *
 * 代码示例：
 * ```ts
 * const scene = new Scene();
 *
 * const points = new Mesh(renderer, { mode: renderer.gl.POINTS, geometry, program });
 *
 * points.position.set(-1, 1, 0);
 *
 * scene.add(points);
 * ```
 */
export default class Scene extends Object3D {
  /**
   * 克隆场景对象
   */
  clone() {
    return new Scene().copy(this, false);
  }

  /**
   * 将传入的场景对象的各属性复制到此场景实例中
   * @param source 源场景
   * @param recursive 设置是否复制子对象
   */
  copy(source, recursive) {
    super.copy(source, recursive);
    this.matrixAutoUpdate = source.matrixAutoUpdate;

    return this;
  }
}
