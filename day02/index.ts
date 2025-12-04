import type { Range } from './parse-input';
import { isRepeatedTwice, isRepeating } from './is-repeating';

export function part1(ranges: Range[]): number {
    let result = 0;
    for (const range of ranges) {
        for (let num = range.start; num <= range.end; num++) {
            if (isRepeatedTwice(num)) {
                result += num;
            }
        }
    }
    return result;
}

export function part2(ranges: Range[]): number {
    let result = 0;
    for (const range of ranges) {
        for (let num = range.start; num <= range.end; num++) {
            if (isRepeating(num)) {
                result += num;
            }
        }
    }
    return result;
}