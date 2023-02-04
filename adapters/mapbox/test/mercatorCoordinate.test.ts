import { test, expect, describe } from 'vitest';

import { fromLngLat } from '../src';

describe('mercatorCoordinate', async () => {
  test('fromLngLat', async () => {
    const m = fromLngLat(
      {
        lng: 0,
        lat: 0,
      },
      0,
    );
    expect(m.x).toEqual(0.5);
    expect(m.y).toEqual(0.5);
    expect(m.z).toEqual(0);
  });
});
