import { describe, expect, test } from 'bun:test';
import { getFirstDigitIndex, getHighestJoltage } from './get-highest-joltage';

describe('given the test cases', () => {
    describe('getFirstDigitIndex()', () => {
        test.each([
            ['987654321111111', 0],
            ['811111111111119', 0],
            ['234234234234278', 13],
            ['818181911112111', 6]
        ])('value %s should return %i', (input, expected) => {
            expect(getFirstDigitIndex(input)).toBe(expected);
        });
    });

    describe('getHighestJoltage()', () => {
        test.each([
            ['987654321111111', 98],
            ['811111111111119', 89],
            ['234234234234278', 78],
            ['818181911112111', 92]
        ])('value %s should return %i', (input, expected) => {
            expect(getHighestJoltage(input)).toBe(expected);
        });
    });
});