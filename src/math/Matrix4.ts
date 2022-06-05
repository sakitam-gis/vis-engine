import {
  str,
  set,
  copy,
  scale,
  fromRotation,
  fromXRotation,
  fromYRotation,
  fromZRotation,
  fromScaling,
  fromTranslation,
  rotate,
  rotateX,
  rotateY,
  rotateZ,
  translate,
  determinant,
  equals,
  getRotation,
  getScaling,
  getTranslation,
  identity,
  invert,
  adjoint,
  transpose,
  add,
  subtract,
  multiply,
  multiplyScalar,
  perspective,
  ortho,
  fromQuat,
  fromRotationTranslation,
  fromRotationTranslationScale,
} from 'gl-matrix/mat4';

import Matrix from './Matrix';
import Vector3 from './Vector3';
import Vector4 from './Vector4';
import Quaternion from './Quaternion';

const tempArray: number[] = [];

/**
 * 一个表示 4*4 的矩阵
 * 1--0--0--0
 * |  |  |  |
 * 0--1--0--0
 * |  |  |  |
 * 0--0--1--0
 * |  |  |  |
 * 0--0--0--1
 * ```ts
 * const m = new Matrix4();
 * ```
 */
export default class Matrix4 extends Matrix {
  #elements = new Float32Array(16);

  /**
   * @param m00 第一行第一列，默认是 1
   * @param m01 第一行第二列，默认是 0
   * @param m02 第一行第三列，默认是 0
   * @param m03 第一行第四列，默认是 0
   * @param m10 第二行第一列，默认是 0
   * @param m11 第二行第二列，默认是 1
   * @param m12 第二行第三列，默认是 0
   * @param m13 第二行第四列，默认是 0
   * @param m20 第三行第一列，默认是 0
   * @param m21 第三行第二列，默认是 0
   * @param m22 第三行第三列，默认是 1
   * @param m23 第三行第四列，默认是 0
   * @param m30 第四行第一列，默认是 0
   * @param m31 第四行第二列，默认是 0
   * @param m32 第四行第三列，默认是 0
   * @param m33 第四行第四列，默认是 1
   */
  constructor(
    m00 = 1,
    m01 = 0,
    m02 = 0,
    m03 = 0,
    m10 = 0,
    m11 = 1,
    m12 = 0,
    m13 = 0,
    m20 = 0,
    m21 = 0,
    m22 = 1,
    m23 = 0,
    m30 = 0,
    m31 = 0,
    m32 = 0,
    m33 = 1,
  ) {
    super();
    const e: Float32Array = this.#elements;

    e[0] = m00;
    e[1] = m01;
    e[2] = m02;
    e[3] = m03;

    e[4] = m10;
    e[5] = m11;
    e[6] = m12;
    e[7] = m13;

    e[8] = m20;
    e[9] = m21;
    e[10] = m22;
    e[11] = m23;

    e[12] = m30;
    e[13] = m31;
    e[14] = m32;
    e[15] = m33;
  }

  /**
   * 获取向量 x 值
   * @return number;
   */
  get x() {
    return this.#elements[12];
  }

  /**
   * 获取向量 y 值
   * @return number;
   */
  get y() {
    return this.#elements[13];
  }

  /**
   * 获取向量 z 值
   * @return number;
   */
  get z() {
    return this.#elements[14];
  }

  /**
   * 获取向量 w 值
   * @return number;
   */
  get w() {
    return this.#elements[15];
  }

  /**
   * 获取单位矩阵
   */
  static get identity() {
    return new Matrix4().fromArray(identity());
  }

  /**
   * 将此矩阵的每一项设置为给定的值
   * @param m00
   * @param m01
   * @param m02
   * @param m03
   * @param m10
   * @param m11
   * @param m12
   * @param m13
   * @param m20
   * @param m21
   * @param m22
   * @param m23
   * @param m30
   * @param m31
   * @param m32
   * @param m33
   */
  set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    set(this.#elements, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    return this;
  }

  /**
   * 将此矩阵转换为转置矩阵
   * @return {Matrix4} this
   */
  transpose() {
    transpose(this.#elements, this.#elements);
    return this;
  }

  /**
   * 将此矩阵转换为逆矩阵
   * @param m 默认为当前实例
   * @return Matrix4
   */
  invert(m = this) {
    invert(this.#elements, m.elements);
    return this;
  }

  /**
   * 计算此矩阵的伴随矩阵
   * @param m 默认为当前实例
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
   * 将两个 Matrix4 矩阵相加
   * @param {Matrix4} a
   * @param {Matrix4} [b] 如果不传，计算 this 和 a 的和
   * @return {Matrix4} this
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
   * 将两个 Matrix4 矩阵相减
   * @param {Matrix4} a
   * @param {Matrix4} [b] 如果不传，计算 this 和 a 的差
   * @return {Matrix4} this
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
   * 计算两个 Matrix4 矩阵的乘积
   * @param  {Matrix4} a
   * @param  {Matrix4} [b] 如果不传，计算 this 和 a 的乘积
   * @return {Matrix4} this
   */
  multiply(a: Matrix4, b: Matrix4) {
    if (b) {
      multiply(this.#elements, a.elements, b.elements);
    } else {
      multiply(this.#elements, this.#elements, a.elements);
    }
    return this;
  }

  /**
   * 计算 Matrix4 与标量的乘积
   * @param a 如果不传，计算 this 和 b 的乘积
   * @param b
   */
  multiplyScalar(a: Matrix4 = this, b: number) {
    multiplyScalar(this.#elements, a.elements, b);
    return this;
  }

  /**
   * 左乘
   * @param  {Matrix4} a
   * @param  {Matrix4} b 如果不传，计算 this 和 a 的左乘
   * @return {Matrix4}  this
   */
  premultiply(a: Matrix4, b: Matrix4) {
    if (b) {
      multiply(this.#elements, b.elements, a.elements);
    } else {
      multiply(this.#elements, a.elements, this.#elements);
    }
    return this;
  }

  /**
   * 通过给定的向量 Vector3 平移此矩阵
   * @param  {Vector3} v 向量
   * @return {Matrix4} this
   */
  translate(v: Vector3) {
    translate(this.#elements, this.#elements, v.elements);
    return this;
  }

  /**
   * 旋转此矩阵
   * @param  {Number} rad 弧度
   * @return {Matrix4} this
   */
  rotate(rad: number) {
    rotate(this.#elements, this.#elements, rad);
    return this;
  }

  /**
   * 通过给定的 Vector3 向量缩放此矩阵
   * @param vec3
   */
  scale(vec3: Vector3) {
    scale(this.#elements, this.#elements, vec3.elements);
    return this;
  }

  /**
   * 通过标量 s 缩放此矩阵，默认在内部构建一个三维向量 [s, s, s]
   * @param s
   */
  scaleScalar(s: number) {
    scale(this.#elements, this.#elements, [s, s, s]);
    return this;
  }

  /**
   * 从平移向量创建矩阵
   * @param vec
   */
  fromTranslation(vec: Vector3) {
    fromTranslation(this.#elements, vec.elements);
    return this;
  }

  /**
   * 从给定轴和旋转角度创建矩阵
   * @param rad 弧度
   * @param axis 轴
   */
  fromRotation(rad, axis) {
    fromRotation(this.#elements, rad, axis);
    return this;
  }

  /**
   * 从绕 X 轴的给定角度创建矩阵
   * @param rad
   */
  fromRotationX(rad) {
    fromXRotation(this.#elements, rad);
    return this;
  }

  /**
   * 从绕 Y 轴的给定角度创建矩阵
   * @param rad
   */
  fromRotationY(rad) {
    fromYRotation(this.#elements, rad);
    return this;
  }

  /**
   * 从绕 Z 轴的给定角度创建矩阵
   * @param rad
   */
  fromRotationZ(rad) {
    fromZRotation(this.#elements, rad);
    return this;
  }

  /**
   * 从缩放向量计算矩阵
   * @param vec4
   */
  fromScale(vec4: Vector4) {
    fromScaling(this.#elements, vec4.elements);
    return this;
  }

  /**
   * 从平移向量和四元数计算矩阵
   * @param quat
   * @param v
   */
  fromRotationTranslation(quat: Quaternion, v: Vector3) {
    fromRotationTranslation(this.#elements, quat.elements, v.elements);
    return this;
  }

  /**
   * 创建一个透视投影矩阵
   * @param fovy
   * @param aspect
   * @param near
   * @param far
   */
  fromPerspective(fovy, aspect, near, far) {
    perspective(this.#elements, fovy, aspect, near, far);
    return this;
  }

  /**
   * 创建一个正交投影矩阵
   * @param left
   * @param right
   * @param bottom
   * @param top
   * @param near
   * @param far
   */
  fromOrthogonal(left, right, bottom, top, near, far) {
    ortho(this.#elements, left, right, bottom, top, near, far);
    return this;
  }

  /**
   * 从给定的四元数计算矩阵
   * @param q
   */
  fromQuat(q: Quaternion) {
    fromQuat(this.#elements, q.elements);
    return this;
  }

  /**
   * 判断两个矩阵是否近似相等
   * @param mat4
   */
  equals(mat4) {
    return equals(this.#elements, mat4.value);
  }

  /**
   * 获取旋转向量
   * @param q
   */
  getRotation(q = new Quaternion()) {
    getRotation(tempArray, this.#elements);
    q.set(tempArray[0], tempArray[1], tempArray[2], tempArray[3]);
    return q;
  }

  /**
   * 获取缩放向量
   * @param v
   */
  getScale(v = new Vector3()) {
    getScaling(tempArray, this.#elements);
    v.set(tempArray[0], tempArray[1], tempArray[2]);
    return v;
  }

  /**
   * 获取平移向量
   * @param v
   */
  getTranslation(v = new Vector3()) {
    getTranslation(tempArray, this.#elements);
    v.set(tempArray[0], tempArray[1], tempArray[2]);
    return v;
  }

  /**
   * 围绕 X 轴按给定弧度旋转矩阵
   * @param rad
   */
  rotateX(rad) {
    rotateX(this.#elements, this.#elements, rad);
    return this;
  }

  /**
   * 围绕 Y 轴按给定弧度旋转矩阵
   * @param rad
   */
  rotateY(rad) {
    rotateY(this.#elements, this.#elements, rad);
    return this;
  }

  /**
   * 围绕 Z 轴按给定弧度旋转矩阵
   * @param rad
   */
  rotateZ(rad) {
    rotateZ(this.#elements, this.#elements, rad);
    return this;
  }

  /**
   * 从四元数旋转、平移和缩放创建矩阵
   * @param v
   * @param q
   * @param s
   */
  compose(v: Vector3, q: Quaternion, s: Vector3) {
    fromRotationTranslationScale(this.#elements, q.elements, v.elements, s.elements);
    return this;
  }

  /**
   * 从矩阵转换到四元数、平移和缩放向量
   */
  decompose() {
    return {
      rotation: this.getRotation(),
      scale: this.getScale(),
      translation: this.getTranslation(),
    };
  }

  /**
   * 将传入的 Matrix4 复制到此矩阵
   * @param  {Matrix4} m 源矩阵
   * @return {Matrix4} this
   */
  copy(m: Matrix4) {
    copy(this.#elements, m.elements);
    return this;
  }

  /**
   * 从此矩阵创建一个新的 4*4 矩阵
   * @return {Matrix4} a new Matrix4
   */
  clone() {
    return new Matrix4().copy(this);
  }

  /**
   * 转换为字符串
   */
  toString() {
    return str(this.#elements);
  }
}
