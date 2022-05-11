import {
  str,
  set,
  add,
  length,
  subtract,
  multiply,
  divide,
  dot,
  lerp,
  scale,
  scaleAndAdd,
  equals,
  angle,
  negate,
  cross,
  inverse,
  distance,
  squaredDistance,
  normalize,
  transformMat3,
  transformMat4,
  transformQuat,
} from 'gl-matrix/vec3';

import Vector from './Vector';

import Quaternion from './Quaternion';
import Matrix3 from './Matrix3';
import Matrix4 from './Matrix4';

/**
 * 三维向量，三维向量表示的是一个有顺序的、三个为一组的数字组合，可以用来描述：
 * - 一个位于三维空间中的点。
 * - 一个在三维空间中的方向与长度的定义
 * ```ts
 * const a = new Vector3(0, 1, 0);
 *
 * const b = new Vector3(0, 0, 0);
 *
 * const d = a.distanceTo(b);
 * ```
 */
export default class Vector3 extends Vector {
  #elements = new Float32Array(3);

  /**
   * @param x 向量的x值，默认为0
   * @param y 向量的y值，默认为0
   * @param z 向量的z值，默认为0
   */
  constructor(x = 0, y = 0, z = 0) {
    super();
    const v = this.#elements;
    v[0] = x;
    v[1] = y;
    v[2] = z;
  }

  /**
   * 获取向量 x 值
   * @return number;
   */
  get x() {
    return this.#elements[0];
  }

  /**
   * 设置向量 x 值
   * @param x
   */
  set x(x: number) {
    this.#elements[0] = x;
  }

  /**
   * 获取向量 y 值
   * @return number;
   */
  get y() {
    return this.#elements[1];
  }

  /**
   * 设置向量 y 值
   * @param y
   */
  set y(y: number) {
    this.#elements[1] = y;
  }

  /**
   * 获取向量 z 值
   * @return number;
   */
  get z() {
    return this.#elements[2];
  }


  /**
   * 设置向量 z 值
   * @param z
   */
  set z(z: number) {
    this.#elements[2] = z;
  }

  /**
   * 从对象赋值 Vector3 的 x、y、z 值
   * @param object
   */
  fromObject(object) {
    const { x, y, z } = object;
    if (x !== undefined) this.x = x;
    if (y !== undefined) this.y = y;
    if (z !== undefined) this.z = z;
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
    };
  }

  /**
   * 设置向量的 x、y、z
   * @param x
   * @param y
   * @param z
   */
  set(x, y, z) {
    set(this.#elements, x, y, z);
    return this;
  }

  /**
   * 将向量的每个值设置为标量 s
   * @param s
   */
  setScalar(s) {
    return this.set(s, s, s);
  }

  /**
   * 计算从 `[0, 0, 0]` 到此向量的直线距离
   */
  length(): number {
    return length(this.#elements);
  }

  /**
   * 将传入的向量vec和这个向量相加，会改变当前向量
   * @param vec 传入的 Vector3
   */
  add(vec: Vector3) {
    add(this.#elements, this.#elements, vec.elements);
    return this;
  }

  /**
   * 将传入的标量量 v 和这个向量相加，会改变当前向量
   * @param v 传入的 标量值
   */
  addScalar(v: number) {
    add(this.#elements, this.#elements, [v, v, v]);
    return this;
  }

  /**
   * 从此向量减去 vec 三维向量
   * @param vec 传入的 Vector3
   */
  subtract(vec: Vector3) {
    subtract(this.#elements, this.#elements, vec.elements);
    return this;
  }

  /**
   * 从此向量各分量减去标量 v，默认构建一个三维向量 [v, v, v]
   * @param v 标量值
   */
  subtractScalar(v: number) {
    subtract(this.#elements, this.#elements, [v, v, v]);
    return this;
  }

  /**
   * 将向量 a 与向量 b 相减后的向量赋值给此向量
   * @param a
   * @param b
   */
  subVectors(a: Vector3, b: Vector3) {
    subtract(this.#elements, a.elements, b.elements);
    return this;
  }

  /**
   * 将此向量与 vec 向量相乘
   * @param vec
   */
  multiply(vec: Vector3) {
    multiply(this.#elements, this.#elements, vec.elements);
    return this;
  }

  /**
   * 从此向量各分量与标量 v 相乘，默认构建一个三维向量 [v, v, v]
   * @param v 标量值
   */
  multiplyScalar(v: number) {
    multiply(this.#elements, this.#elements, [v, v, v]);
    return this;
  }

  /**
   * 将此向量与 vec 向量相除
   * @param vec
   */
  divide(vec) {
    divide(this.#elements, this.#elements, vec.elements);
    return this;
  }

  /**
   * 从此向量各分量与标量 v 相除，默认构建一个三维向量 [v, v, v]
   * @param v 标量值
   */
  divideScalar(v) {
    divide(this.#elements, this.#elements, [v, v, v]);
    return this;
  }

  /**
   * 缩放此向量
   * @param s
   */
  scale(s: number) {
    scale(this.#elements, this.#elements, s);
    return this;
  }

  /**
   * 按标量缩放 v 向量后与此向量相加
   * @param v
   * @param s
   */
  scaleAndAdd(v: Vector3, s: number) {
    scaleAndAdd(this.#elements, this.#elements, v.elements, s);
    return this;
  }

  /**
   * 计算该向量到所传入的 vec 间的距离
   * @param vec
   */
  distanceTo(vec: Vector3) {
    return distance(this.#elements, vec.elements);
  }

  /**
   * 计算两个 vec3 之间的平方距离
   * @param vec
   */
  distanceToSquared(vec: Vector3) {
    return squaredDistance(this.#elements, vec.elements);
  }

  /**
   * 计算此向量相对于正 x 轴的弧度角
   * @param vector
   */
  angle(vector: Vector3) {
    return angle(this.#elements, [1, 0, 0]);
  }

  /**
   * 以弧度返回该向量与向量 v 之间的角度
   */
  angleTo(vector: Vector3) {
    return angle(this.#elements, vector.elements);
  }

  /**
   * 计算此向量与 vec 向量的点积
   * @param vec
   */
  dot(vec: Vector3) {
    return dot(this.#elements, vec.elements);
  }

  /**
   * 判断传入的向量 vec 与此向量是否相等
   * @param vec
   */
  equals(vec: Vector3) {
    return equals(this.#elements, vec.elements);
  }

  /**
   * 将该向量设置为它本身与传入的vec的叉积
   * @param vec
   */
  cross(vec: Vector3) {
    cross(this.#elements, this.#elements, vec.elements);
    return this;
  }

  /**
   * 针对此向量取反
   */
  negate() {
    negate(this.#elements, this.#elements);
    return this;
  }

  /**
   * 针对此向量取倒数
   */
  inverse() {
    inverse(this.#elements, this.#elements);
    return this;
  }

  /**
   * 从此向量到 vec 向量进行插值
   * @param vec 目标向量
   * @param t 插值因数，范围一般在[0-1]，通常在这两个值之间
   */
  lerp(vec: Vector3, t: number) {
    lerp(this.#elements, this.#elements, vec.elements, t);
    return this;
  }

  /**
   * 将此向量转换为单位向量 (将其设置为与此向量具有相同方向但长度为 1 的向量)
   */
  normalize() {
    normalize(this.#elements, this.#elements);
    return this;
  }

  /**
   * 通过将Euler（欧拉）对象转换为Quaternion（四元数）并应用， 将欧拉变换应用到此向量上
   * @param euler
   */
  applyEuler(euler) {
    const e = new Quaternion().fromEuler(euler);
    return this.applyQuaternion(e);
  }

  /**
   * 将此向量乘以 Matrix3
   * @param matrix
   */
  applyMatrix3(matrix: Matrix3) {
    transformMat3(this.#elements, this.#elements, matrix.elements);
    return this;
  }

  /**
   * 将此向量乘以 Matrix4
   * @param matrix
   */
  applyMatrix4(matrix: Matrix4) {
    transformMat4(this.#elements, this.#elements, matrix.elements);
    return this;
  }

  /**
   * 将 Quaternion 变换应用到该向量
   * @param quaternion
   */
  applyQuaternion(quaternion: Quaternion) {
    transformQuat(this.#elements, this.#elements, quaternion.elements);
    return this;
  }

  /**
   * 将传递的 Vector3 的 x 和 y, z 属性的值复制到此 Vector3
   * @param vec3
   */
  copy(vec3: Vector3) {
    this.x = vec3.x;
    this.y = vec3.y;
    this.z = vec3.z;
    return this;
  }

  /**
   * 克隆此向量
   */
  clone() {
    return new Vector3(this.x, this.y, this.z);
  }

  /**
   * 转换为字符串
   */
  toString(): string {
    return str(this.#elements);
  }
}
