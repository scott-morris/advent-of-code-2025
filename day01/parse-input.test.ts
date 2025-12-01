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
    { direction: 'L', distance: 68 },
    { direction: 'L', distance: 30 },
    { direction: 'R', distance: 48 },
    { direction: 'L', distance: 5 },
    { direction: 'R', distance: 60 },
    { direction: 'L', distance: 55 },
    { direction: 'L', distance: 1 },
    { direction: 'L', distance: 99 },
    { direction: 'R', distance: 14 },
    { direction: 'L', distance: 82 },
  ]);
});
