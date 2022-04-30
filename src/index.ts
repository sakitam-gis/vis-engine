import Clock from '@/animation/Clock';
import Raf from '@/animation/Raf';
import type { IRafOptions } from '@/animation/Raf';

import Vector2 from '@/math/Vector2';
import Matrix3 from '@/math/Matrix3';

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
};

export {
  Raf,
  Clock,
  Vector2,
  Matrix3,
}

export type {
  IRafOptions,
}
