import type { WithNull } from '../types';
import Euler from '../math/Euler';
import Quaternion from '../math/Quaternion';
import Vector3 from '../math/Vector3';
import ProjectionMatrix from '../math/ProjectionMatrix';

/**
 * 三维物体，是大部分对象的基类，提供了一系列的属性和方法来对三维空间中的物体进行操作
 */
export default class Object3D {

  /**
   * 是否可见
   */
  public visible: boolean;

  /**
   * 局部变换矩阵
   */
  public localMatrix: ProjectionMatrix;

  /**
   * 物体的世界变换矩阵
   */
  public worldMatrix: ProjectionMatrix;

  public matrixAutoUpdate: boolean;

  public position: Vector3;

  public scale: Vector3;

  public rotation: Euler;

  public quaternion: Quaternion;

  public up: Vector3;

  public children: Object3D[];

  public parent: WithNull<Object3D>;

  public worldMatrixNeedsUpdate: boolean;

  constructor() {
    this.visible = true;
    this.localMatrix = new ProjectionMatrix();
    this.worldMatrix = new ProjectionMatrix();
    this.matrixAutoUpdate = true;
    this.position = new Vector3();
    this.scale = new Vector3(1, 1, 1);
    this.rotation = new Euler();
    this.quaternion = new Quaternion();
    this.up = new Vector3(0, 1, 0);
    this.parent = null;
    this.children = [];
    this.worldMatrixNeedsUpdate = false;
    this.rotation.onChange(() => {
      this.quaternion.fromEuler(this.rotation);
    });
    this.quaternion.onChange(() => {
      this.rotation.fromQuaternion(this.quaternion);
    });
  }

  add(object, p = true) {
    if (!this.contains(object)) {
      this.children.push(object);
    }
    if (p) {
      object.setParent(this, false);
    }
  }

  remove(object, p = true) {
    if (this.contains(object)) {
      this.children.splice(this.children.indexOf(object), 1);
    }
    if (p) {
      object.setParent(null, false);
    }
  }

  /**
   * 判断此渲染对象的子集是否包含传入的渲染对象
   * @param object
   */
  contains(object) {
    return this.children.includes(object);
  }

  /**
   * 设置此渲染对象的父集
   * @param object 渲染对象
   * @param notifyParent 设置是否将此渲染对象添加到传入的渲染对象中
   */
  setParent(object, notifyParent = true) {
    if (this.parent && object !== this.parent) {
      this.parent.remove(this, false);
    }
    this.parent = object;
    if (notifyParent && object) {
      object.add(this, false);
    }
  }

  traverse(callback) {
    if (!callback(this)) {
      for (let i = 0, l = this.children.length; i < l; i++) {
        this.children[i].traverse(callback);
      }
    }
  }

  lookAt(eye: Vector3, isCamera?: boolean) {
    if (isCamera) {
      this.localMatrix.lookAt(this.position, eye, this.up);
    } else {
      this.localMatrix.lookAt(eye, this.position, this.up);
    }
    this.quaternion = this.localMatrix.getRotation();
    this.rotation.fromQuaternion(this.quaternion);
  }

  /**
   * 更新渲染对象的世界矩阵
   * @param force 是否更新次渲染对象的子集
   */
  updateMatrixWorld(force?: boolean) {
    let f = force;
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    if (this.worldMatrixNeedsUpdate || f) {
      if (this.parent === null) {
        this.worldMatrix.copy(this.localMatrix);
      } else {
        this.worldMatrix.multiply(this.parent.worldMatrix, this.localMatrix);
        this.worldMatrixNeedsUpdate = false;
        f = true;
      }
    }

    for (let i = 0, l = this.children.length; i < l; i++) {
      const child = this.children[i];

      child.updateMatrixWorld(f);
    }
  }

  /**
   * 更新局部变换矩阵
   */
  updateMatrix() {
    this.localMatrix.compose(this.position, this.quaternion, this.scale);
    this.worldMatrixNeedsUpdate = true;
  }

  decompose() {
    this.localMatrix.getTranslation(this.position);
    this.localMatrix.getRotation(this.quaternion);
    this.localMatrix.getScale(this.scale);
    this.rotation.fromQuaternion(this.quaternion);
  }

  /**
   * 克隆此渲染对象
   */
  clone() {
    return new Object3D().copy(this, false);
  }

  /**
   * 复制给定的对象到这个对象中
   * @param object 渲染对象
   * @param recursive 设置是否复制子对象
   */
  copy(object: Object3D, recursive?: boolean) {
    this.visible = object.visible;
    this.position.copy(object.position);
    this.scale.copy(object.scale);
    this.rotation.copy(object.rotation);
    this.quaternion.copy(object.quaternion);
    this.up.copy(object.up);
    this.localMatrix.copy(object.localMatrix);
    this.worldMatrix.copy(object.worldMatrix);
    this.matrixAutoUpdate = object.matrixAutoUpdate;

    if (recursive) {
      for (let i = 0, n = object.children.length; i < n; i++) {
        const children = object.children[i];
        this.add(children.clone());
      }
    }
    return this;
  }
}
