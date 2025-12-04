import { parseInput } from './parse-input';
import { expect, test } from 'bun:test';
import RelativePath from '../utils/relative-path';
import fs from 'fs';

const relativePath = new RelativePath(import.meta.url);
const sampleInput = fs.readFileSync(
  relativePath.relative('sampleinput.txt'),
  'utf-8'
);

test('parseInput parses sample input correctly', () => {
  const result = parseInput(sampleInput);
  expect(result).toEqual([
    { start: 11, end: 22 },
    { start: 95, end: 115 },
    { start: 998, end: 1012 },
    { start: 1188511880, end: 1188511890 },
    { start: 222220, end: 222224 },
    { start: 1698522, end: 1698528 },
    { start: 446443, end: 446449 },
    { start: 38593856, end: 38593862 },
    { start: 565653, end: 565659 },
    { start: 824824821, end: 824824827 },
    { start: 2121212118, end: 2121212124 },
  ]);
});
