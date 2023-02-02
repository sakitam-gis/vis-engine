import { test, expect, describe } from 'vitest';

import { Matrix3 } from '../../src';

describe('Matrix3', async () => {
  test('Instancing', async () => {
    const m = new Matrix3();
    expect(m).toBeInstanceOf(Matrix3);
    expect(m.toArray()).toEqual([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    expect(m.x).toEqual(0);
    expect(m.y).toEqual(0);
    expect(m.z).toEqual(1);
  });

  test('identity', async () => {
    expect(Matrix3.identity.toArray()).toEqual([1, 0, 0, 0, 1, 0, 0, 0, 1]);
  });

  test('set', async () => {
    const m = new Matrix3();
    const array = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(m.set(1, 1, 1, 1, 1, 1, 1, 1, 1).toArray()).toEqual(array);
  });

  test('transpose', async () => {
    const m = new Matrix3(1, 0, 0, 0, 1, 0, 1, 2, 1);
    const array = [1, 0, 1, 0, 1, 2, 0, 0, 1];
    expect(m.transpose().toArray()).toEqual(array);
  });

  test('toString', async () => {
    const m = new Matrix3(1, 0, 0, 0, 1, 0, 1, 2, 1);
    const array = [1, 0, 0, 0, 1, 0, 1, 2, 1];
    const array1 = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    expect(m.toString()).toEqual(`Matrix3(${array.join(', ')})`);
    expect(new Matrix3().toString()).toEqual(`Matrix3(${array1.join(', ')})`);
  });
});
