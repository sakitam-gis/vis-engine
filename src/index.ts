const caches = new Map();

/**
 * 添加 hook
 * @param id hook id
 * @param hook hook callback
 * @return boolean
 */
export const hooks = (id: string, hook: () => void) => {
  caches.set(id, hook);
  return true;
}
