/**
 * 获取当前秒数，自动回退
 * @return number
 */
export const now = () => ('undefined' == typeof performance ? Date : performance).now();

/**
 * 返回数据类型
 * @param value
 * @return string
 */
export function typeOf(value: any): string {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

/**
 * 判断是否是字符串
 * @param s
 * @return boolean
 */
export function isString(s: any): s is string {
  return typeOf(s) === 'string';
}

/**
 * 判断是否是正则
 * @param obj
 */
export function isRegexp(obj: any): obj is RegExp {
  return typeOf(obj) === 'regexp';
}
