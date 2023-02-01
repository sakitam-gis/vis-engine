import {
  str,
  set,
  add,
  subtract,
  multiply,
  divide,
  dot,
  lerp,
  scale,
  equals,
  distance,
  length,
  cross,
  negate,
  inverse,
  normalize,
  scaleAndAdd,
  transformMat4,
  transformQuat,
  squaredDistance,
} from 'gl-matrix/vec4';

import Vector from './Vector';
import Quaternion from './Quaternion';
import Matrix4 from './Matrix4';
import { getFloatArrayConstructor } from '../utils';

/**
 * 四维向量，四维向量表示的是一个有顺序的、四个为一组的数字组合，可以用来描述：
 * - 一个位于四维空间中的点。
 * - 一个在四维空间中的方向与长度的定义。
 * ```ts
 * const a = new Vector4(0, 1, 0);
 *
 * const b = new Vector4(0, 0, 0);
 *
 * const d = a.distanceTo(b);
 * ```
 */
export default class Vector4 extends Vector {
  elements = new (getFloatArrayConstructor())(4);

  /**
   * @param x 向量的x值，默认为0
   * @param y 向量的y值，默认为0
   * @param z 向量的z值，默认为0
   * @param w 向量的w值，默认为0
   */
  constructor(x = 0, y = 0, z = 0, w = 0) {
    super();
    const v = this.elements;
    v[0] = x;
    v[1] = y;
    v[2] = z;
    v[3] = w;
  }

  /**
   * 获取向量 x 值
   * @return number;
   */
  get x() {
    return this.elements[0];
  }

  /**
   * 设置向量 x 值
   * @param x
   */
  set x(x: number) {
    this.elements[0] = x;
  }

  /**
   * 获取向量 y 值
   * @return number;
   */
  get y() {
    return this.elements[1];
  }

  /**
   * 设置向量 y 值
   * @param y
   */
  set y(y: number) {
    this.elements[1] = y;
  }

  /**
   * 获取向量 z 值
   * @return number;
   */
  get z() {
    return this.elements[2];
  }

  /**
   * 设置向量 z 值
   * @param z
   */
  set z(z: number) {
    this.elements[2] = z;
  }

  /**
   * 获取向量 w 值
   * @return number;
   */
  get w() {
    return this.elements[3];
  }

  /**
   * 设置向量 w 值
   * @param w
   */
  set w(w: number) {
    this.elements[3] = w;
  }

  /**
   * 从对象赋值 Vector3 的 x、y、z、w 值
   * @param object
   */
  fromObject(object) {
    const { x, y, z, w } = object;
    if (x !== undefined) this.x = x;
    if (y !== undefined) this.y = y;
    if (z !== undefined) this.z = z;
    if (w !== undefined) this.w = w;
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
   * 设置向量的 x、y、z、w
   * @param x
   * @param y
   * @param z
   * @param w
   */
  set(x, y, z, w) {
    set(this.elements, x, y, z, w);
    return this;
  }

  /**
   * 将向量的每个值设置为标量 s
   * @param s
   */
  setScalar(s) {
    return this.set(s, s, s, s);
  }

  /**
   * 将传入的向量vec和这个向量相加，会改变当前向量
   * @param vec 传入的 Vector4
   */
  add(vec: Vector4) {
    add(this.elements, this.elements, vec.elements);
    return this;
  }

  /**
   * 将传入的标量量 v 和这个向量相加，会改变当前向量
   * @param v 传入的 标量值
   */
  addScalar(v) {
    add(this.elements, this.elements, [v, v, v, v]);
    return this;
  }

  /**
   * 从此向量减去 vec 四维向量
   * @param vec 传入的 Vector4
   */
  subtract(vec: Vector4) {
    subtract(this.elements, this.elements, vec.elements);
    return this;
  }

  /**
   * 从此向量各分量减去标量 v，默认构建一个四维向量 [v, v, v, v]
   * @param v 标量值
   */
  subtractScalar(v) {
    subtract(this.elements, this.elements, [v, v, v, v]);
    return this;
  }

  /**
   * 将向量 a 与向量 b 相减后的向量赋值给此向量
   * @param a
   * @param b
   */
  subVectors(a: Vector4, b: Vector4) {
    subtract(this.elements, a.elements, b.elements);
    return this;
  }

  /**
   * 将此向量与 vec 向量相乘
   * @param vec
   */
  multiply(vec: Vector4) {
    multiply(this.elements, this.elements, vec.elements);
    return this;
  }

  /**
   * 从此向量各分量与标量 v 相乘，默认构建一个四维向量 [v, v, v, v]
   * @param v 标量值
   */
  multiplyScalar(v: number) {
    multiply(this.elements, this.elements, [v, v, v, v]);
    return this;
  }

  /**
   * 将此向量与 vec 向量相除
   * @param vec
   */
  divide(vec: Vector4) {
    divide(this.elements, this.elements, vec.elements);
    return this;
  }

  /**
   * 从此向量各分量与标量 v 相除，默认构建一个四维向量 [v, v, v, v]
   * @param v 标量值
   */
  divideScalar(v) {
    divide(this.elements, this.elements, [v, v, v, v]);
    return this;
  }

  /**
   * 缩放此向量
   * @param s
   */
  scale(s: number) {
    scale(this.elements, this.elements, s);
    return this;
  }

  /**
   * 按标量缩放 v 向量后与此向量相加
   * @param v
   * @param s
   */
  scaleAndAdd(v: Vector4, s: number) {
    scaleAndAdd(this.elements, this.elements, v.elements, s);
    return this;
  }

  /**
   * 计算该向量到所传入的 v 间的距离
   * @param vec
   */
  distanceTo(vec: Vector4) {
    return distance(this.elements, vec.elements);
  }

  /**
   * 计算两个 Vector4 之间的平方距离
   * @param vec
   */
  distanceToSquared(vec: Vector4) {
    return squaredDistance(this.elements, vec.elements);
  }

  /**
   * 计算从 `[0, 0, 0, 0]` 到此向量的直线距离
   */
  length() {
    return length(this.elements);
  }

  /**
   * 计算此向量与 vec 向量的点积
   * @param vec
   */
  dot(vec: Vector4) {
    return dot(this.elements, vec.elements);
  }

  /**
   * 判断传入的向量 vec 与此向量是否相等
   * @param vec
   */
  equals(vec: Vector4) {
    return equals(this.elements, vec.elements);
  }

  /**
   * 将该向量设置为它本身与传入的vec的叉积
   * @param vec
   */
  cross(vec: Vector4) {
    cross(this.elements, this.elements, vec.elements);
    return this;
  }

  /**
   * 针对此向量取反
   */
  negate() {
    negate(this.elements, this.elements);
    return this;
  }

  /**
   * 针对此向量取倒数
   */
  inverse() {
    inverse(this.elements, this.elements);
    return this;
  }

  /**
   * 从此向量到 vec 向量进行插值
   * @param vec 目标向量
   * @param t 插值因数，范围一般在[0-1]，通常在这两个值之间
   */
  lerp(vec: Vector4, t: number) {
    lerp(this.elements, this.elements, vec.elements, t);
    return this;
  }

  /**
   * 将此向量转换为单位向量 (将其设置为与此向量具有相同方向但长度为 1 的向量)
   */
  normalize() {
    normalize(this.elements, this.elements);
    return this;
  }

  /**
   * 将此向量乘以 Matrix4
   * @param matrix
   */
  applyMatrix4(matrix: Matrix4) {
    transformMat4(this.elements, this.elements, matrix.elements);
    return this;
  }

  /**
   * 将 Quaternion 变换应用到该向量
   * @param quaternion
   */
  applyQuaternion(quaternion: Quaternion) {
    transformQuat(this.elements, this.elements, quaternion.elements);
    return this;
  }

  /**
   * 将传递的 Vector4 的 x 、y、 z、w 属性的值复制到此 Vector4
   * @param vec4
   */
  copy(vec4: Vector4) {
    this.x = vec4.x;
    this.y = vec4.y;
    this.z = vec4.z;
    this.w = vec4.w;
    return this;
  }

  /**
   * 克隆此向量
   */
  clone() {
    return new Vector4(this.x, this.y, this.z, this.w);
  }

  /**
   * 转换为字符串
   */
  toString() {
    return str(this.elements);
  }
}
