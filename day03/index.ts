import { getHighestJoltage } from './get-highest-joltage';

export function part1(lines: string[]): number {
  let total = 0;

  for (const line of lines) {
    const highestJoltage = getHighestJoltage(line);
    total += highestJoltage;
  }

  return total;
}

export function part2(lines: string[]): number {
  let total = 1;

  for (const line of lines) {
    const highestJoltage = getHighestJoltage(line);
    total *= highestJoltage;
  }

  return total;
}
