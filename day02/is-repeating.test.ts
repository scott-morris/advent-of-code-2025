import { describe, expect, test } from 'bun:test';
import { isRepeatedTwice, isRepeating } from './is-repeating';


describe('isRepeatedTwice()', () => {
  test.each([55, 6464, 123123, 1188511885])('value %i is repeating', (value) => {
    expect(isRepeatedTwice(value)).toBe(true);
  });

  test.each([101, 12, 13, 222220, 565653])('value %i is not repeating', (value) => {
    expect(isRepeatedTwice(value)).toBe(false);
  });
});

describe('isRepeating()', () => {
  test.each([12341234, 123123123, 1212121212, 1111111])(
    'value %i is repeating',
    (value) => {
      expect(isRepeating(value)).toBe(true);
    }
  );

  test.each([1234, 12345, 123456, 1234567, 12345678])(
    'value %i is not repeating',
    (value) => {
      expect(isRepeating(value)).toBe(false);
    }
  );
});