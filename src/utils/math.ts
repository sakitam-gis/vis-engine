import { glMatrix } from 'gl-matrix';

export const DEG_TO_RAD = Math.PI / 180;
export const RAD_TO_DEG = 180 / Math.PI;

/**
 * 度转弧度
 * @param deg 度
 */
export function degToRad(deg: number) {
  return deg * DEG_TO_RAD;
}

/**
 * 弧度转度
 * @param a 弧度
 */
export function radToDeg(a: number) {
  return a * RAD_TO_DEG;
}

/**
 * 将值限定在最大最小值中间
 * @param val 当前值
 * @param min 最小值
 * @param max 最大值
 */
export function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

/**
 * 判断数值是否是 2 的 n 次方
 * @param value
 */
export function isPowerOfTwo(value) {
  return (Math.log(value) / Math.LN2) % 1 === 0;
}

let FloatArray: Float32ArrayConstructor | Float64ArrayConstructor = Float32Array;

/**
 * 设置是否使用双精度浮点数
 * @param b
 * @param notifyGlMatrix 如果不想影响 `gl-matrix` 的构造器，需要设定为 `false`，这在我们公用 `gl-matrix` 并且其他库使用构造器的 `instanceof`
 * 做相关判断时可以避免受到影响。
 */
export function highPrecision(b: boolean, notifyGlMatrix = true) {
  if (b) {
    FloatArray = Float64Array;
  } else {
    FloatArray = Float32Array;
  }

  if (notifyGlMatrix) {
    glMatrix.setMatrixArrayType(FloatArray as unknown as any);
  }
}

/**
 * 获取 FloatArray 构造器
 */
export function getFloatArrayConstructor() {
  return FloatArray;
}
