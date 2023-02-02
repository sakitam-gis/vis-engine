import { test, expect, describe } from 'vitest';

import { Matrix4 } from '../../src';

describe('Matrix4', async () => {
  test('Instancing', async () => {
    const m = new Matrix4();
    expect(m).toBeInstanceOf(Matrix4);
    expect(m.toArray()).toEqual([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    expect(m.x).toEqual(0);
    expect(m.y).toEqual(0);
    expect(m.z).toEqual(0);
    expect(m.w).toEqual(1);
  });

  test('identity', async () => {
    expect(Matrix4.identity.toArray()).toEqual([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  });

  test('set', async () => {
    const m = new Matrix4();
    const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(m.set(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1).toArray()).toEqual(array);
  });

  test('transpose', async () => {
    const m = new Matrix4(1, 0, 0, 0, 1, 0, 1, 2, 1, 0, 0, 0, 1, 0, 1, 2);
    const array = [
      1, 1, 1, 1,
      0, 0, 0, 0,
      0, 1, 0, 1,
      0, 2, 0, 2,
    ];
    expect(m.transpose().toArray()).toEqual(array);
  });

  test('toString', async () => {
    const array = [1, 0, 0, 0, 1, 0, 1, 2, 1, 0, 0, 0, 1, 0, 1, 2];
    const m = new Matrix4(...array);
    const array1 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    expect(m.toString()).toEqual(`Matrix4(${array.join(', ')})`);
    expect(new Matrix4().toString()).toEqual(`Matrix4(${array1.join(', ')})`);
  });
});
