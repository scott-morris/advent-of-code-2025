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

test('part1 with sample input', () => {
  const turns = parseInput(sampleInput);
  const result = part2(turns);
  expect(result).toEqual(6);
});
