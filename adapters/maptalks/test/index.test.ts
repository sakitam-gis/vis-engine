import { test, expect, describe } from 'vitest';

import { VeLayer } from '../src';

describe('VeLayer', async () => {
  test('Instance', async () => {
    const m = new VeLayer('1', {});
    expect(m).toBeInstanceOf(VeLayer);
  });
});
