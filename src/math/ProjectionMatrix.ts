import { frustum, lookAt, perspective, ortho } from 'gl-matrix/mat4';

import Matrix4 from './Matrix4';
import Vector3 from './Vector3';

export default class ProjectionMatrix extends Matrix4 {
  /**
   * 一般用于生成相机的视椎体，用来做视椎剔除加速渲染
   * @param mat4
   * @param left
   * @param right
   * @param top
   * @param bottom
   * @param near
   * @param far
   */
  frustum(mat4, left, right, top, bottom, near, far) {
    frustum(mat4.elements, left, right, bottom, top, near, far);
    return this;
  }

  /**
   * 生成平面相机投影矩阵
   * @param left
   * @param right
   * @param top
   * @param bottom
   * @param near
   * @param far
   */
  orthographic(left, right, top, bottom, near, far) {
    ortho(this.elements, left, right, bottom, top, near, far);
    return this;
  }

  /**
   * 生成透视相机投影矩阵
   * @param fovy
   * @param aspect
   * @param near
   * @param far
   */
  perspective(fovy, aspect, near, far) {
    perspective(this.elements, fovy, aspect, near, far);
    return this;
  }

  /**
   * 设置物体的朝向
   * @param eye
   * @param target
   * @param up
   */
  lookAt(eye, target = new Vector3(0, 0, 0), up = new Vector3(0, 1, 0)) {
    lookAt(this.elements, eye.elements, target.elements, up.elements);
    return this;
  }
}
