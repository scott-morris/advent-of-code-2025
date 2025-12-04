import { readFileSync } from 'fs';
import RelativePath from '../utils/relative-path';
import { parseInput } from './parse-input';
import { part2 } from '.';

const relativePath = new RelativePath(import.meta.url);
const sampleInput: string = readFileSync(
  relativePath.relative('input.txt'),
  'utf-8'
);

const ranges = parseInput(sampleInput);
const result = part2(ranges);

console.log(result);
