import { test, expect, describe } from 'vitest';

import { Matrix3 } from '../../src';

describe('Matrix3', async () => {
  test('Instancing', async () => {
    const m = new Matrix3();
    expect(m).toBeInstanceOf(Matrix3);
    expect(m.toArray()).toEqual([
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ]);
  });
});
