import { parseInput } from './parse-input';
import { expect, describe, test } from 'bun:test';
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
    '987654321111111',
    '811111111111119',
    '234234234234278',
    '818181911112111',
  ]);
});
