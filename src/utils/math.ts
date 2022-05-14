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

export function isPowerOfTwo(value) {
  return (Math.log(value) / Math.LN2) % 1 === 0;
}
