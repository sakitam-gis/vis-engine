import {
  set,
  add,
  scale,
  subtract,
  fromScaling,
  fromTranslation,
  translate,
  determinant,
  equals,
  identity,
  invert,
  transpose,
  multiply,
  frob,
  rotate,
  adjoint,
  copy,
  fromQuat,
  fromMat4,
  fromRotation,
  normalFromMat4,
  str,
} from 'gl-matrix/mat3';

import Matrix from './Matrix';

/**
 * 一个表示3X3矩阵
 * 1--0--0
 * |  |  |
 * 0--1--0
 * |  |  |
 * 0--0--1
 * ```ts
 * const m = new Matrix3();
 * ```
 */
export default class Matrix3 extends Matrix {
  #elements = new Float32Array(9);

  /**
   * @param m11 第一行第一列，默认是 1
   * @param m12 第一行第二列，默认是 0
   * @param m13 第一行第三列，默认是 0
   * @param m21 第二行第一列，默认是 0
   * @param m22 第二行第二列，默认是 1
   * @param m23 第二行第三列，默认是 0
   * @param m31 第三行第一列，默认是 0
   * @param m32 第三行第二列，默认是 0
   * @param m33 第三行第三列，默认是 1
   */
  constructor(m11 = 1, m12 = 0, m13 = 0, m21 = 0, m22 = 1, m23 = 0, m31 = 0, m32 = 0, m33 = 1) {
    super();
    const e: Float32Array = this.#elements;

    e[0] = m11;
    e[1] = m12;
    e[2] = m13;

    e[3] = m21;
    e[4] = m22;
    e[5] = m23;

    e[6] = m31;
    e[7] = m32;
    e[8] = m33;
  }

  get x() {
    return this.#elements[12];
  }

  get y() {
    return this.#elements[13];
  }

  get z() {
    return this.#elements[14];
  }

  /**
   * 获取单位矩阵
   */
  static get identity() {
    return new Matrix3().fromArray(identity());
  }

  /**
   * 将传入的 Matrix3 复制到此矩阵
   * @param  {Matrix3} m 源矩阵
   * @return {Matrix3} this
   */
  copy(m) {
    copy(this.#elements, m.elements);
    return this;
  }

  /**
   * 从此矩阵创建一个新的 3*3 矩阵
   * @return {Matrix3} a new Matrix3
   */
  clone() {
    return new Matrix3().copy(this);
  }

  /**
   * 将此矩阵的每一项设置为给定的值
   * @param {Number} m00
   * @param {Number} m01
   * @param {Number} m02
   * @param {Number} m10
   * @param {Number} m11
   * @param {Number} m12
   * @param {Number} m20
   * @param {Number} m21
   * @param {Number} m22
   * @return {Matrix3} this
   */
  set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    set(this.#elements, m00, m01, m02, m10, m11, m12, m20, m21, m22);
    return this;
  }

  /**
   * 将此矩阵转换为转置矩阵
   * @return {Matrix3} this
   */
  transpose() {
    transpose(this.#elements, this.#elements);
    return this;
  }

  /**
   * 将此矩阵转换为逆矩阵
   * @param  {Matrix3} [m = this]
   * @return {Matrix3} this
   */
  invert(m = this) {
    invert(this.#elements, m.elements);
    return this;
  }

  /**
   * 计算此矩阵的伴随矩阵
   * @param  {Matrix3} [m=this]
   * @return {Matrix3} this
   */
  adjoint(m = this) {
    adjoint(this.#elements, m.elements);
    return this;
  }

  /**
   * 计算行列式
   * @return {Number}
   */
  determinant() {
    return determinant(this.#elements);
  }

  /**
   * 计算两个Matrix3矩阵的乘积
   * @param  {Matrix3} a
   * @param  {Matrix3} [b] 如果不传，计算 this 和 a 的乘积
   * @return {Matrix3} this
   */
  multiply(a, b) {
    if (b) {
      multiply(this.#elements, a.elements, b.elements);
    } else {
      multiply(this.#elements, this.#elements, b.elements);
    }

    return this;
  }

  /**
   * 左乘
   * @param  {Matrix3} a
   * @param  {Matrix3} b 如果不传，计算 this 和 a 的左乘
   * @return {Matrix3}  this
   */
  premultiply(a, b) {
    if (b) {
      multiply(this.#elements, b.elements, a.elements);
    } else {
      multiply(this.#elements, a.elements, a.elements);
    }
    return this;
  }

  /**
   * 通过给定的向量 v 平移此矩阵
   * @param  {Vector2} v 向量
   * @return {Matrix3} this
   */
  translate(v) {
    translate(this.#elements, this.#elements, v.elements);
    return this;
  }

  /**
   * 旋转此矩阵
   * @param  {Number} rad 弧度
   * @return {Matrix3} this
   */
  rotate(rad) {
    rotate(this.#elements, this.#elements, rad);
    return this;
  }

  /**
   * 通过给定的 Vector2 向量缩放此矩阵
   * @param  {Vector2} v 向量
   * @return {Matrix3} this
   */
  scale(v) {
    scale(this.#elements, this.#elements, v.elements);
    return this;
  }

  /**
   * 计算单位矩阵平移后的矩阵
   * @param  {Vector2} v 平移的向量
   * @return {Matrix3} this
   */
  fromTranslation(v) {
    fromTranslation(this.#elements, v.elements);
    return this;
  }

  /**
   * 计算单位矩阵旋转后的矩阵
   * @param  {Number} rad 旋转弧度
   * @return {Matrix3} this
   */
  fromRotation(rad) {
    fromRotation(this.#elements, rad);
    return this;
  }

  /**
   * 计算单位矩阵缩放后的矩阵
   * @param  {Vector2} v Scaling vector
   * @return {Matrix3} this
   */
  fromScaling(v) {
    fromScaling(this.#elements, v.elements);
    return this;
  }

  /**
   * 根据给定的四元数计算矩阵
   * @param  {Quaternion} q Quaternion to create matrix from
   * @return {Matrix3} this
   */
  fromQuat(q) {
    fromQuat(this.#elements, q.elements);
    return this;
  }

  /**
   * 从 4x4 矩阵计算 3x3 正态矩阵（转置逆矩阵）
   * @param  {Matrix4} m 给定的 Matrix4 矩阵
   * @return {Matrix3} this
   */
  normalFromMat4(m) {
    normalFromMat4(this.#elements, m.elements);
    return this;
  }

  /**
   * 将 Matrix4 左上角的 3x3 值复制到给定的 Matrix3 中。
   * @param  {Matrix4} m 源矩阵
   * @return {Matrix3} this
   */
  fromMat4(m) {
    fromMat4(this.#elements, m.elements);
    return this;
  }

  /**
   * 计算此矩阵的 Frobenius 范数
   * @return {Number} Frobenius 范数
   */
  frob() {
    return frob(this.#elements);
  }

  /**
   * 将两个 Matrix3 矩阵相加
   * @param {Matrix3} a
   * @param {Matrix3} [b] 如果不传，计算 this 和 a 的和
   * @return {Matrix3} this
   */
  add(a, b) {
    if (b) {
      add(this.#elements, a.elements, b.elements);
    } else {
      add(this.#elements, a.elements, b.elements);
    }

    return this;
  }

  /**
   * 将两个 Matrix3 矩阵相减
   * @param {Matrix3} a
   * @param {Matrix3} [b] 如果不传，计算 this 和 a 的差
   * @return {Matrix3} this
   */
  subtract(a, b) {
    if (b) {
      subtract(this.#elements, a.elements, b.elements);
    } else {
      subtract(this.#elements, a.elements, b.elements);
    }
    return this;
  }

  /**
   * 判断两个矩阵是否大致相等
   * @param {Matrix3} a
   * @param {Matrix3} [b] 如果不传，比较 this 和 a 是否近似相等
   * @return {Boolean}
   */
  equals(a, b) {
    return equals(a.elements, b.elements);
  }

  /**
   * 从给定的旋转角度，位置（二维向量），缩放计算矩阵
   * @param rotation
   * @param  {Number} x
   * @param  {Number} y
   * @param  {Number} scaleX
   * @param  {Number} scaleY
   * @return {Matrix3}
   */
  fromRotationTranslationScale(rotation, x, y, scaleX, scaleY) {
    const cos = Math.cos(rotation);
    const sin = Math.sin(rotation);

    this.set(scaleX * cos, -scaleY * sin, 0, scaleX * sin, scaleY * cos, 0, x, y, 1);
    return this;
  }

  /**
   * 转换为字符串
   */
  toString() {
    return str(this.#elements);
  }
}
