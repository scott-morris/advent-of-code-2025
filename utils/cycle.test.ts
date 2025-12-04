import { expect, describe, test } from 'bun:test';
import Cycle from './cycle.js';

describe('Cycle', () => {
  test('add within bounds', () => {
    const cycle = new Cycle(20, 0, 10);
    expect(cycle.add(3)).toBe(13);
    expect(cycle.zeroCrossings).toBe(0);
  });

  test('add exceeding max', () => {
    const cycle = new Cycle(20, 0, 10);
    expect(cycle.add(13)).toBe(2);
    expect(cycle.zeroCrossings).toBe(1);
  });

  test('subtract within bounds', () => {
    const cycle = new Cycle(20, 0, 10);
    expect(cycle.subtract(3)).toBe(7);
    expect(cycle.zeroCrossings).toBe(0);
  });

  test('subtract exceeding min', () => {
    const cycle = new Cycle(20, 0, 10);
    expect(cycle.subtract(13)).toBe(18);
    expect(cycle.zeroCrossings).toBe(1);
  });

  describe('back and forth', () => {
    test('across the boundary', () => {
      const cycle = new Cycle(20, 0, 10);
      cycle.add(15);
      cycle.subtract(15);
      expect(cycle.value).toBe(10);
      expect(cycle.zeroCrossings).toBe(2);
    });

    test('at the edge', () => {
      const cycle = new Cycle(20, 0, 10);
      cycle.subtract(10);
      cycle.add(10);
      expect(cycle.value).toBe(10);
      expect(cycle.zeroCrossings).toBe(1);
    });
  });

  describe('multiple wraps', () => {
    test('add with multiple wraps', () => {
      const cycle = new Cycle(20, 0, 10);
      expect(cycle.add(37)).toBe(5);
      expect(cycle.zeroCrossings).toBe(2);
    });

    test('subtract with multiple wraps', () => {
      const cycle = new Cycle(20, 0, 10);
      expect(cycle.subtract(37)).toBe(15);
      expect(cycle.zeroCrossings).toBe(2);
    });

    test('many wraps', () => {
      const cycle = new Cycle(99, 0, 50);
      cycle.add(1000);
      expect(cycle.value).toBe(50);
      expect(cycle.zeroCrossings).toBe(10);
    });
  });
});
