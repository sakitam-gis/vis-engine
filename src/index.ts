import Clock from '@/animation/Clock';
import Raf from '@/animation/Raf';
import type { IRafOptions } from '@/animation/Raf';

import Vector2 from '@/math/Vector2';
import Vector3 from '@/math/Vector4';
import Vector4 from '@/math/Vector3';
import Matrix3 from '@/math/Matrix3';
import Matrix4 from '@/math/Matrix4';
import Euler from '@/math/Euler';
import Quaternion from '@/math/Quaternion';
import ProjectionMatrix from '@/math/ProjectionMatrix';

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
  Euler,
  Vector2,
  Vector3,
  Vector4,
  Matrix3,
  Matrix4,
  Quaternion,
  ProjectionMatrix,
}

export type {
  IRafOptions,
}
