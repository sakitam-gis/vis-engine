import {
  set,
  dot,
  copy,
  slerp,
  length,
  normalize,
  invert,
  conjugate,
  multiply,
  premultiply,
  getAngle,
  fromEuler,
  fromMat3,
  setAxisAngle,
  getAxisAngle,
} from 'gl-matrix/quat';

import { equals } from 'gl-matrix/vec4';
import { radToDeg } from '@/utils/math';
import Euler from './Euler';
import Vector from './Vector';
import Vector3 from './Vector3';
import Matrix3 from './Matrix3';
import type { ICallback } from '@/types';

const tempArray: number[] = [];

/**
 * 四元数，主要用于在三维世界描述旋转
 * ```ts
 * const a = new Quaternion(0, 0, 0, 0);
 * ```
 */
export default class Quaternion extends Vector {
  #elements = new Float32Array(4);

  #changeCallbacks: ICallback[] = [];

  /**
   * @param x x 坐标，默认为 0
   * @param y y 坐标，默认为 0
   * @param z z 坐标，默认为 0
   * @param w w 坐标，默认为 0
   */
  constructor(x = 0, y = 0, z = 0, w = 0) {
    super();
    const v = this.#elements;
    v[0] = x;
    v[1] = y;
    v[2] = z;
    v[3] = w;
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
   * 获取 w 值
   * @return number;
   */
  get w() {
    return this.#elements[3];
  }

  /**
   * 设置 w 值
   * @param w
   */
  set w(w) {
    this.#elements[3] = w;
    this.triggerChange();
  }

  /**
   * 从对象赋值 Quaternion 的 x、y、z、w 值
   * @param object
   */
  fromObject({
    x, y, z, w,
  }) {
    if (x !== undefined) this.x = x;
    if (y !== undefined) this.y = y;
    if (z !== undefined) this.z = z;
    if (w !== undefined) this.w = w;
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
      w: this.w,
    };
  }

  /**
   * 给定的角度和旋转轴设置此四元数的值
   * @param axis
   * @param rad
   */
  fromAxisAngle(axis: Vector3, rad: number) {
    setAxisAngle(this.#elements, axis.elements, rad);
    this.triggerChange();
    return this;
  }

  /**
   * 从此四元数获取旋转轴和旋转角度
   * @param axis
   */
  getAxisAngle(axis = new Vector3()) {
    const rad = getAxisAngle(tempArray, this.#elements);
    axis.set(tempArray[0], tempArray[1], tempArray[2]);
    return rad;
  }

  /**
   * 从给定的欧拉角 e 创建四元数
   * @param e
   */
  fromEuler(e: Euler) {
    fromEuler(this.#elements, radToDeg(e.x), radToDeg(e.y), radToDeg(e.z));
    this.triggerChange();
    return this;
  }

  /**
   * 从给定的 3x3 旋转矩阵创建四元数
   * @param m
   */
  fromMat3(m: Matrix3) {
    fromMat3(this.#elements, m);
    return this;
  }

  set(x, y, z, w) {
    set(this.#elements, x, y, z, w);
    this.triggerChange();
    return this;
  }

  /**
   * 计算四元数的直线长度
   */
  length() {
    return length(this.#elements);
  }

  /**
   * 计算四元数的乘积
   * @param a
   * @param b
   */
  multiply(a: Quaternion, b?: Quaternion) {
    if (b) {
      multiply(this.#elements, a.elements, b.elements);
    } else {
      multiply(this.#elements, this.#elements, a.elements);
    }

    this.triggerChange();
    return this;
  }

  /**
   * 左乘
   * @param a
   * @param b
   */
  premultiply(a: Quaternion, b?: Quaternion) {
    if (b) {
      premultiply(this.#elements, a.elements, b.elements);
    } else {
      premultiply(this.#elements, this.#elements, a.elements);
    }

    this.triggerChange();
    return this;
  }

  /**
   * 处理四元数之间的球面线性插值
   * @param q
   * @param t
   */
  slerp(q: Quaternion, t: number) {
    slerp(this.#elements, this.#elements, q.elements, t);
    this.triggerChange();
    return this;
  }

  /**
   * 翻转该四元数
   */
  invert() {
    invert(this.#elements, this.#elements);
    this.triggerChange();
    return this;
  }

  /**
   * 计算此四元数的旋转共轭（围绕旋转轴在相反方向上的旋转）
   */
  conjugate() {
    conjugate(this.#elements, this.#elements);
    this.triggerChange();
    return this;
  }

  /**
   * （归一化）四元数。 即计算与该四元数具有相同旋转、但长度为1的四元数
   */
  normalize() {
    normalize(this.#elements, this.#elements);
    this.triggerChange();
    return this;
  }

  /**
   * 计算四元数 q 与当前四元数的点积
   * @param q
   */
  dot(q: Quaternion) {
    return dot(this.#elements, q.elements);
  }

  /**
   * 以弧度返回该四元数与四元数 q 之间的夹角。
   * @param q
   */
  angleTo(q: Quaternion) {
    return getAngle(this.#elements, q.elements);
  }

  /**
   * 创建一个与该四元数具有相同x、y、z和w 属性的四元数
   */
  clone() {
    return new Quaternion().copy(this);
  }

  /**
   * 复制四元数 q 的 x、y、z 和 w 属性到该四元数中。
   * @param q
   */
  copy(q: Quaternion) {
    copy(this.#elements, q.elements);
    this.triggerChange();
    return this;
  }

  /**
   * 比较两个四元数是否相同
   * @param q
   */
  equals(q: Quaternion) {
    return equals(this.#elements, q.elements);
  }

  /**
   * 监听四元数变更
   * @param fn 回调函数
   */
  onChange(fn: ICallback) {
    if (!this.#changeCallbacks.includes(fn)) {
      this.#changeCallbacks.push(fn);
    }
  }

  /**
   * 触发所有的回调函数
   */
  triggerChange() {
    this.#changeCallbacks.forEach(((cb) => cb()));
  }
}
