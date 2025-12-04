import { test, expect } from 'bun:test';
import { readFileSync } from 'fs';
import RelativePath from '../utils/relative-path';
import { parseInput } from './parse-input';
import { part2 } from '.';

const relativePath = new RelativePath(import.meta.url);
const sampleInput: string = readFileSync(
  relativePath.relative('sampleinput.txt'),
  'utf-8'
);

test('part2 with sample input', () => {
  const range = parseInput(sampleInput);
  const result = part2(range);
  expect(result).toEqual(4174379265);
});
