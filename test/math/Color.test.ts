import { test, expect, describe } from 'vitest';

import { Color, Vector4, Vector3 } from '../../src';

describe('Color', async () => {
  test('Instancing', async () => {
    const color = new Color();
    expect(color).toBeInstanceOf(Color);
    expect(color.toArray()).toEqual([1, 1, 1, 1]);
  });

  test('parse', async () => {
    const color = new Color(255);
    expect(color.toArray()).toEqual([1, 1, 1, 1]);
  });

  test('toString', async () => {
    const color = new Color(255);
    expect(color.toString()).toEqual('Color(1, 1, 1, 1)');
  });

  test('toArray', async () => {
    const color = new Color(255);
    expect(color.toArray()).toEqual([1, 1, 1, 1]);
  });

  test('toObject', async () => {
    const color = new Color(255);
    expect(color.toObject()).toEqual({
      r: 255,
      g: 255,
      b: 255,
      a: 1,
    });
    expect(color.toObject(true)).toEqual({
      r: 1,
      g: 1,
      b: 1,
      a: 1,
    });
  });

  test('toVector', async () => {
    const color = new Color(125);
    expect(color.toVector().equals(new Vector4(125 / 255, 125 / 255, 125 / 255, 1))).toEqual(true);
  });

  test('toVector3', async () => {
    const color = new Color(125);
    expect(color.toVector3().equals(new Vector3(125 / 255, 125 / 255, 125 / 255))).toEqual(true);
  });

  test('toHex', async () => {
    const color = new Color(125);
    expect(color.toHex()).toEqual('#7d7d7d');
  });

  test('toHSL', async () => {
    const color = new Color(125);
    expect(color.toHSL()).toEqual({ h: 0, s: 0, l: 49, a: 1 });
  });

  test('toHSV', async () => {
    const color = new Color(125);
    expect(color.toHSV()).toEqual({ h: 0, s: 0, v: 49, a: 1 });
  });

  test('fromColor', async () => {
    const color = new Color();
    expect(color.fromColor('#ccc').toArray()).toEqual([0.8, 0.8, 0.8, 1]);
  });

  test('fromHSL', async () => {
    const color = new Color();
    expect(color.fromHSL(0, 0, 49, 1).toArray()).toEqual([125 / 255, 125 / 255, 125 / 255, 1]);
  });

  test('fromHSV', async () => {
    const color = new Color();
    expect(color.fromHSV(0, 0, 49, 1).toArray()).toEqual([125 / 255, 125 / 255, 125 / 255, 1]);
  });
});
