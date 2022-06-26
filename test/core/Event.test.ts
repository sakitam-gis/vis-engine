import { test, expect, describe } from 'vitest';

import { EventEmitter } from '../../src';

describe('EventEmitter', async () => {
  test('Instancing', async () => {
    const e = new EventEmitter();
    expect(e).toBeInstanceOf(EventEmitter);
  });

  test.fails('validEventTypes-fails', async () => {
    const e = new EventEmitter({
      validEventTypes: [
        /^a-*/,
      ],
    });

    e.on('b-1', () => {});
  });

  test('validEventTypes', async () => {
    const e = new EventEmitter({
      validEventTypes: [
        /^a-*/,
      ],
    });

    e.on('a-1', () => {});
  });

  test('once', async () => {
    const e = new EventEmitter();

    let count = 0;
    e.once('eventName', () => {
      count++;
    });

    e.emit('eventName');
    e.emit('eventName');

    expect(count).toEqual(1);
  });

  test('once names', async () => {
    const e = new EventEmitter();

    let count = 0;
    e.once('eventName1 eventName2', () => {
      count++;
    });

    e.emit('eventName1');
    e.emit('eventName2');

    expect(count).toEqual(2);
  });

  test('on', async () => {
    const e = new EventEmitter();

    let count = 0;
    e.on('eventName', () => {
      count++;
    });

    e.emit('eventName');
    e.emit('eventName');

    expect(count).toEqual(2);
  });

  test('on names', async () => {
    const e = new EventEmitter();

    let count = 0;
    e.on('eventName1 eventName2', () => {
      count++;
    });

    e.emit('eventName1');
    e.emit('eventName2');

    expect(count).toEqual(2);
  });

  test('off', async () => {
    const e = new EventEmitter();

    let count = 0;

    const handler = () => {
      count++;

      e.off('eventName', handler);
    };

    e.on('eventName', handler);

    e.emit('eventName');
    e.emit('eventName');

    expect(count).toEqual(1);
  });

  test('off names', async () => {
    const e = new EventEmitter();

    let count = 0;

    const handler = () => {
      count++;
    };

    e.on('eventName1 eventName2', handler);
    e.off('eventName1 eventName2', handler);

    e.emit('eventName1');
    e.emit('eventName2');

    expect(count).toEqual(0);
  });

  test('off all', async () => {
    const e = new EventEmitter();

    let count = 0;

    const handler1 = () => {
      count++;
    };
    const handler2 = () => {
      count++;
    };

    e.on('eventName', handler1);
    e.on('eventName', handler2);

    e.emit('eventName');

    expect(count).toEqual(2);

    e.off('eventName');
    e.emit('eventName');
    expect(count).toEqual(2);
  });

  test('has', async () => {
    const e = new EventEmitter();

    const handler = () => {
      e.off('eventName', handler);

      expect(e.has('eventName')).toStrictEqual([]);
    };

    e.on('eventName', handler);

    expect(e.has('eventName')).toBeDefined();

    e.emit('eventName');
  });

  test('clear', async () => {
    const e = new EventEmitter();

    const handler = () => {
      console.log('event');
    };

    e.on('eventName', handler);

    e.emit('eventName');

    expect(e.has('eventName')).toBeDefined();
    e.clear();
    expect(e.has('eventName')).toBeUndefined();
  });
});
