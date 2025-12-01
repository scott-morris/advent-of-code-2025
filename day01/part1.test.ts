import { test, expect } from 'bun:test';
import { readFileSync } from 'fs';
import RelativePath from '../utils/relative-path';
import { parseInput } from './parse-input';
import { part1 } from '.';

const relativePath = new RelativePath(import.meta.url);
const sampleInput: string = readFileSync(
  relativePath.relative('sampleinput.txt'),
  'utf-8'
);

test('part1 with sample input', () => {
  const turns = parseInput(sampleInput);
  const result = part1(turns);
  expect(result).toEqual({
    value: 3,
    steps: [82, 52, 0, 95, 55, 0, 99, 0, 14, 32],
  });
});
