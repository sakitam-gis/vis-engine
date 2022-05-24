import type { WithNull } from '@/types';
import Euler from '../math/Euler';
import Quaternion from '../math/Quaternion';
import Vector3 from '../math/Vector3';
import ProjectionMatrix from '../math/ProjectionMatrix';

export default class Object3D {
  public visible: boolean;

  public localMatrix: ProjectionMatrix;

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

  contains(object) {
    return this.children.includes(object);
  }

  setParent(object, force) {
    if (force && this.parent && object !== this.parent) {
      this.parent.remove(this, false);
    }
    this.parent = object;
    if (force && object) {
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

      if (child.worldMatrixNeedsUpdate || f === true) {
        child.updateMatrixWorld(f);
      }
    }
  }

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

  clone() {
    return new Object3D().copy(this, false);
  }

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
