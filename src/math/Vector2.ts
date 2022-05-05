import {
  str,
  add,
  subtract,
  multiply,
  divide,
  dot,
  lerp,
  scale,
  equals,
  angle,
  length,
  distance,
  inverse,
  negate,
  cross,
  normalize,
  transformMat3,
  transformMat4,
  squaredDistance,
} from 'gl-matrix/vec2';

import Vector from './Vector';
import Matrix3 from './Matrix3';
import Matrix4 from './Matrix4';

/**
 * 二维向量
 * ```ts
 * const a = new Vector2(0, 1);
 *
 * const b = new Vector2();
 *
 * const d = a.distanceTo(b);
 * ```
 */
export default class Vector2 extends Vector {
  #elements = new Float32Array(2);

  /**
   * @param x 向量的x值，默认为0
   * @param y 向量的y值，默认为0
   */
  constructor(x = 0, y = 0) {
    super();
    const v = this.#elements;
    v[0] = x;
    v[1] = y;
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
  set x(x) {
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
  set y(y) {
    this.#elements[1] = y;
  }

  /**
   * 从对象赋值 Vector2 的 x、y 值
   * @param object
   */
  fromObject(object) {
    const { x, y } = object;
    if (x !== undefined) this.x = x;
    if (y !== undefined) this.y = y;
    return this;
  }

  /**
   * 转换到对象
   */
  toObject() {
    return {
      x: this.x,
      y: this.y,
    };
  }

  /**
   * 设置向量的 x 和 y 值
   * @param x
   * @param y
   */
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  /**
   * 将向量的每个值设置为标量 s
   * @param s
   */
  setScalar(s) {
    return this.set(s, s);
  }

  /**
   * 将传入的向量vec和这个向量相加
   * @param vec 传入的 Vector2
   */
  add(vec: Vector2) {
    add(this.#elements, this.#elements, vec.elements);
    return this;
  }

  /**
   * 将传入的标量 v 和这个向量相加，默认构建一个二维向量 [v, v]
   * @param v 标量值
   */
  addScalar(v: number) {
    add(this.#elements, this.#elements, [v, v]);
    return this;
  }

  /**
   * 从此向量减去 vec 二维向量
   * @param vec 传入的 Vector2
   */
  subtract(vec: Vector2) {
    subtract(this.#elements, this.#elements, vec.elements);
    return this;
  }

  /**
   * 从此向量各分量减去标量 v，默认构建一个二维向量 [v, v]
   * @param v 标量值
   */
  subtractScalar(v: number) {
    subtract(this.#elements, this.#elements, [v, v]);
    return this;
  }

  /**
   * 将此向量与 vec 向量相乘
   * @param vec
   */
  multiply(vec: Vector2) {
    multiply(this.#elements, this.#elements, vec.elements);
    return this;
  }

  /**
   * 从此向量各分量与标量 v 相乘，默认构建一个二维向量 [v, v]
   * @param v 标量值
   */
  multiplyScalar(v: number) {
    multiply(this.#elements, this.#elements, [v, v]);
    return this;
  }

  /**
   * 将此向量与 vec 向量相除
   * @param vec
   */
  divide(vec: Vector2) {
    divide(this.#elements, this.#elements, vec.elements);
    return this;
  }

  /**
   * 从此向量各分量与标量 v 相除，默认构建一个二维向量 [v, v]
   * @param v 标量值
   */
  divideScalar(v: number) {
    divide(this.#elements, this.#elements, [v, v]);
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
   * 计算该向量到所传入的 v 间的距离
   * @param vec
   */
  distanceTo(vec: Vector2) {
    return distance(this.#elements, vec.elements);
  }

  /**
   * 计算从 `[0, 0]` 到此向量的直线距离
   */
  length() {
    return length(this.#elements);
  }

  /**
   * 计算该向量到传入的v的平方距离
   * @param v
   */
  distanceToSquared(v: Vector2) {
    return squaredDistance(v.elements, this.#elements);
  }

  /**
   * 计算此向量相对于正 x 轴的弧度角
   */
  angle() {
    return angle(this.#elements, [1, 0]);
  }

  /**
   * 以弧度返回该向量与向量 v 之间的角度
   */
  angleTo(v: Vector2) {
    return angle(this.#elements, v.elements);
  }

  /**
   * 计算此向量与 vec 向量的点积
   * @param vec
   */
  dot(vec: Vector2) {
    return dot(this.#elements, vec.elements);
  }

  /**
   * 判断传入的向量 vec 与此向量是否相等
   * @param vec
   */
  equals(vec: Vector2) {
    return equals(this.#elements, vec.elements);
  }

  /**
   * 将该向量设置为它本身与传入的vec的叉积
   * @param vec
   */
  cross(vec: Vector2) {
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
  lerp(vec: Vector2, t: number) {
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
   * 将此向量（隐含的 1 作为第三个分量）乘以 Matrix3
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
   * 将传递的 vec2 的 x 和 y 属性的值复制到此 Vector2
   * @param vec2
   */
  copy(vec2: Vector2) {
    this.x = vec2.x;
    this.y = vec2.y;
    return this;
  }

  /**
   * 克隆此向量
   */
  clone() {
    return new Vector2(this.x, this.y);
  }

  /**
   * 转换为字符串
   */
  toString() {
    return str(this.#elements);
  }
}
