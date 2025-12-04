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
  const lines = parseInput(sampleInput);
  const result = part1(lines);
  expect(result).toEqual(357);
});
