import { clamp } from '@/utils/math';

import Vector from './Vector';
import Vector3 from './Vector3';
import Matrix4 from './Matrix4';
import Quaternion from './Quaternion';

import type { ICallback } from '@/types';

export type ANGLE_ORDER = 'zyx'|'xyz'|'yxz'|'yzx'|'zxy'|'xzy';

/**
 * 欧拉角描述一个旋转变换，通过指定轴顺序和其各个轴向上的指定旋转角度来旋转一个物体
 *
 * ```ts
 * const a = new Euler(0, 1, 1.57, 'xyz' )
 * ```
 */
export default class Euler extends Vector {
  #elements = new Float32Array(3);

  #changeCallbacks: ICallback[] = [];

  #order: ANGLE_ORDER = 'xyz';

  /**
   * @param x 用弧度表示x轴旋转量，默认值是 0
   * @param y 用弧度表示y轴旋转量，默认值是 0
   * @param z 用弧度表示z轴旋转量，默认值是 0
   * @param order 表示旋转顺序的字符串，默认为'xyz'
   */
  constructor(x = 0, y = 0, z = 0, order: ANGLE_ORDER = 'xyz') {
    super();
    const v = this.#elements;
    v[0] = x;
    v[1] = y;
    v[2] = z;
    this.#order = order;
  }

  /**
   * 获取 x 值
   * @return number;
   */
  get x() {
    return this.#elements[0];
  }

  /**
   * 设置 x 值
   * @param x
   */
  set x(x: number) {
    this.#elements[0] = x;
    this.triggerChange();
  }

  /**
   * 获取 y 值
   * @return number;
   */
  get y() {
    return this.#elements[1];
  }

  /**
   * 设置 y 值
   * @param y
   */
  set y(y) {
    this.#elements[1] = y;
    this.triggerChange();
  }

  /**
   * 获取 z 值
   * @return number;
   */
  get z() {
    return this.#elements[2];
  }

  /**
   * 设置 z 值
   * @param z
   */
  set z(z: number) {
    this.#elements[2] = z;
    this.triggerChange();
  }

  /**
   * 获取旋转顺序
   */
  get order() {
    return this.#order;
  }

  /**
   * 设置旋转顺序
   * @param order
   */
  set order(order) {
    this.#order = order;
    this.triggerChange();
  }

  get roll() {
    return this.x;
  }

  set roll(roll) {
    this.x = roll;
  }

  get pitch() {
    return this.y;
  }

  set pitch(pitch) {
    this.y = pitch;
  }

  get yaw() {
    return this.z;
  }

  set yaw(yaw) {
    this.z = yaw;
  }

  /**
   * 从对象创建欧拉角
   * @param x
   * @param y
   * @param z
   * @param order
   */
  fromObject({
    x, y, z, order,
  }) {
    if (x !== undefined) {
      this.x = x;
    }
    if (y !== undefined) {
      this.y = y;
    }
    if (z !== undefined) {
      this.z = z;
    }
    if (order !== undefined) {
      this.order = order;
    }
    this.triggerChange();
    return this;
  }

  /**
   * 转换到对象
   */
  toObject() {
    return {
      x: this.x,
      y: this.y,
      z: this.z,
      order: this.order,
    };
  }

  /**
   * 从 Matrix4 创建欧拉角
   * @param m
   * @param order
   * @param update
   */
  fromRotationMatrix(m: Matrix4, order = this.#order, update = true) {
    const te = m.toArray();
    const m11 = te[0]; const m12 = te[4]; const m13 = te[8];
    const m21 = te[1]; const m22 = te[5]; const m23 = te[9];
    const m31 = te[2]; const m32 = te[6]; const m33 = te[10];

    switch (order) {
      case 'xyz':
        this.y = Math.asin(clamp(m13, -1, 1));

        if (Math.abs(m13) < 0.9999999) {
          this.x = Math.atan2(-m23, m33);
          this.z = Math.atan2(-m12, m11);
        } else {
          this.x = Math.atan2(m32, m22);
          this.z = 0;
        }
        break;
      case 'yxz':
        this.x = Math.asin(-clamp(m23, -1, 1));

        if (Math.abs(m23) < 0.9999999) {
          this.y = Math.atan2(m13, m33);
          this.z = Math.atan2(m21, m22);
        } else {
          this.y = Math.atan2(-m31, m11);
          this.z = 0;
        }

        break;
      case 'zxy':
        this.x = Math.asin(clamp(m32, -1, 1));

        if (Math.abs(m32) < 0.9999999) {
          this.y = Math.atan2(-m31, m33);
          this.z = Math.atan2(-m12, m22);
        } else {
          this.y = 0;
          this.z = Math.atan2(m21, m11);
        }
        break;
      case 'zyx':
        this.y = Math.asin(-clamp(m31, -1, 1));
        if (Math.abs(m31) < 0.9999999) {
          this.x = Math.atan2(m32, m33);
          this.z = Math.atan2(m21, m11);
        } else {
          this.x = 0;
          this.z = Math.atan2(-m12, m22);
        }
        break;
      case 'yzx':
        this.z = Math.asin(clamp(m21, -1, 1));

        if (Math.abs(m21) < 0.9999999) {
          this.x = Math.atan2(-m23, m22);
          this.y = Math.atan2(-m31, m11);
        } else {
          this.x = 0;
          this.y = Math.atan2(m13, m33);
        }
        break;
      case 'xzy':
        this.z = Math.asin(-clamp(m12, -1, 1));

        if (Math.abs(m12) < 0.9999999) {
          this.x = Math.atan2(m32, m22);
          this.y = Math.atan2(m13, m11);
        } else {
          this.x = Math.atan2(-m23, m33);
          this.y = 0;
        }
        break;
      default:
        throw new Error('Unknown Euler angle order');
    }
    this.#order = order;
    if (update) {
      this.triggerChange();
    }

    return this;
  }

  /**
   * 从四元数创建欧拉角
   * @param q
   */
  fromQuaternion(q: Quaternion) {
    const [x, y, z, w] = q.elements;
    const a = y * y;
    const s = -2 * (a + z * z) + 1;
    const o = 2 * (x * y + w * z);
    let l = -2 * (x * z - w * y);
    const c = 2 * (y * z + w * x);
    const h = -2 * (x * x + a) + 1;
    l = l > 1 ? 1 : l;
    l = l < -1 ? -1 : l;
    const d = Math.atan2(c, h);
    const u = Math.asin(l);
    const f = Math.atan2(o, s);
    return new Euler(d, u, f, 'zyx');
  }

  /**
   * 从 Vector3 创建欧拉角
   * @param vec3
   * @param order
   */
  fromVector3(vec3, order = this.#order) {
    return this.set(vec3.x, vec3.y, vec3.z, order);
  }

  /**
   * 转换到四元数
   */
  toQuaternion() {
    const t = Math.cos(0.5 * this.yaw);
    const e = Math.sin(0.5 * this.yaw);
    const n = Math.cos(0.5 * this.roll);
    const r = Math.sin(0.5 * this.roll);
    const i = Math.cos(0.5 * this.pitch);
    const a = Math.sin(0.5 * this.pitch);
    return new Quaternion(
      t * r * i - e * n * a,
      t * n * a + e * r * i,
      e * n * i - t * r * a,
      t * n * i + e * r * a,
    );
  }

  /**
   * 转换到 Vector3
   */
  toVector3() {
    return new Vector3(this.x, this.y, this.z);
  }

  /**
   * 设置欧拉角的 x、y、z、order
   * @param x
   * @param y
   * @param z
   * @param order
   */
  set(x, y, z, order = this.#order) {
    this.#elements[0] = x;
    this.#elements[1] = y;
    this.#elements[2] = z;
    this.#order = order;
    this.triggerChange();
    return this;
  }

  /**
   * 克隆此欧拉角对象
   */
  clone() {
    return new Euler().copy(this);
  }

  /**
   * 将传入的 euler 的各数值复制到此欧拉角
   * @param euler
   */
  copy(euler: Euler) {
    let i = 0;
    for (; i < this.#elements.length; i++) {
      this.#elements[i] = euler.elements[i];
    }

    this.#order = euler.order;

    this.triggerChange();
    return this;
  }

  /**
   * 判断两个欧拉角是否相同
   * @param e
   */
  equals(e: Euler) {
    return this.x === e.x && this.y === e.y && this.z === e.z && this.order === e.order;
  }

  /**
   * 监听欧拉角变更
   * @param cb 回调函数
   */
  onChange(cb: ICallback) {
    if (!this.#changeCallbacks.includes(cb)) {
      this.#changeCallbacks.push(cb);
    }
  }

  /**
   * 触发所有的回调函数
   */
  triggerChange() {
    this.#changeCallbacks.forEach((f) => f());
  }
}
