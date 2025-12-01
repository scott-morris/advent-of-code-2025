import { expect, describe, test } from 'bun:test';
import Cycle from './cycle.js';

describe('Cycle', () => {
  test('add within bounds', () => {
    const cycle = new Cycle(20, 0, 10);
    expect(cycle.add(3)).toBe(13);
  });

  test('add exceeding max', () => {
    const cycle = new Cycle(20, 0, 10);
    expect(cycle.add(13)).toBe(2);
  });

  test('subtract within bounds', () => {
    const cycle = new Cycle(20, 0, 10);
    expect(cycle.subtract(3)).toBe(7);
  });

  test('subtract exceeding min', () => {
    const cycle = new Cycle(20, 0, 10);
    expect(cycle.subtract(13)).toBe(18);
  });

  test('back and forth', () => {
    const cycle = new Cycle(20, 0, 10);
    cycle.add(15);
    cycle.subtract(15);
    expect(cycle.value).toBe(10);
  });

  describe('multiple wraps', () => {
    test('add with multiple wraps', () => {
      const cycle = new Cycle(20, 0, 10);
      expect(cycle.add(37)).toBe(5);
    });

    test('subtract with multiple wraps', () => {
      const cycle = new Cycle(20, 0, 10);
      expect(cycle.subtract(37)).toBe(15);
    });
  });
});
