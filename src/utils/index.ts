/**
 * 获取当前秒数，自动回退
 */
export const now = () => ('undefined' == typeof performance ? Date : performance).now();
