export * from './shader';
export * from './math';
export * from './gl';

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
 * 判断是否是 undefined
 * @param s
 * @return boolean
 */
export function isUndef(s: any): s is undefined {
  return typeOf(s) === 'undefined';
}

/**
 * 简单判断是否是 16 进制字符串（需要完善）
 * @param string
 */
export function isHex(string) {
  return isString(string) && string.includes('%');
}

/**
 * 判断是否是数字
 * @param s
 * @return boolean
 */
export function isNumber(s: any): s is number {
  return typeOf(s) === 'number';
}

/**
 * 判断是否是正则
 * @param obj
 */
export function isRegexp(obj: any): obj is RegExp {
  return typeOf(obj) === 'regexp';
}

/**
 * 判断是否是 null
 * @param value
 */
export function isNull(value) {
  return value == null;
}

/**
 * 判断是否是对象
 * @param value
 */
export function isObject(value) {
  const type = typeof value;
  return value !== null && (type === 'object' || type === 'function');
}

export function hasValue(v, state) {
  if (isObject(v)) {
    return !isNull(v.value) && (isNull(state) || v.value === state);
  } else {
    return !isNull(v) && (isNull(state) || v === state);
  }
}

const uidCounters: Record<string, number> = {};

/**
 * 获取 uid
 * @param id= - Identifier base name
 * @return uid
 **/
export function uid(id = 'id'): string {
  uidCounters[id] = uidCounters[id] || 1;
  const count = uidCounters[id]++;
  return `${id}-${count}`;
}

/**
 * 排除对象的 key
 * @param obj
 * @param keys
 */
export function omit<T, K extends keyof T>(obj: T, keys: K[] = []): Omit<T, K> {
  return Object.keys(obj as any)
    .filter((key: any) => keys.indexOf(key) < 0)
    .reduce(
      (newObj: Omit<T, K>, key) =>
        Object.assign(newObj, {
          [key]: obj[key],
        }),
      {} as Omit<T, K>,
    );
}

/**
 * pick object
 * @param obj
 * @param keys
 */
export function pick<T, K extends keyof T>(obj: T, keys: K[] = []): Omit<T, K> {
  return Object.keys(obj as any)
    .filter((key: any) => keys.indexOf(key) > -1)
    .reduce(
      (newObj: Omit<T, K>, key) =>
        Object.assign(newObj, {
          [key]: obj[key],
        }),
      {} as Omit<T, K>,
    );
}

const callbacks: any[] = [];
const fpsInterval = 1000 / 60;
let time = performance.now();

function requestAnimationFrameLoop() {
  const current = now();
  const delta = current - time;
  if (delta >= fpsInterval) {
    // Adjust next execution time in case this loop took longer to execute
    time = current - (delta % fpsInterval);
    // Clone array in case callbacks pushes more functions to it
    const funcs = callbacks.slice();
    callbacks.length = 0;
    for (let i = 0; i < funcs.length; i++) {
      funcs[i] && funcs[i](current, delta);
    }
  } else {
    setImmediate(requestAnimationFrameLoop);
  }
}

function raf(func) {
  callbacks.push(func);
  if (callbacks.length === 1) {
    setImmediate(requestAnimationFrameLoop);
  }
  return callbacks.length - 1;
}

function caf(id: any) {
  callbacks[id] = undefined;
}

export function requestAnimationFrame(cb) {
  if (typeof window !== 'undefined' && window.requestAnimationFrame) {
    return window.requestAnimationFrame(cb);
  }

  return raf(cb);
}

export function cancelAnimationFrame(cb) {
  if (typeof window !== 'undefined' && window.cancelAnimationFrame) {
    return window.cancelAnimationFrame(cb);
  }

  return caf(cb);
}
