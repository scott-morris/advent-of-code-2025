import type { Turn } from './parse-input';
import Cycle from '../utils/cycle';

export function part1(turns: Turn[]): { value: number; steps: number[] } {
  // Start at position 50 in a cycle from 0 to 99
  const cycle = new Cycle(99, 0, 50);
  const steps: number[] = [];
  let value = 0;

  // Process each turn
  for (const turn of turns) {
    if (turn.direction === 'L') {
      cycle.subtract(turn.distance);
    } else if (turn.direction === 'R') {
      cycle.add(turn.distance);
    }
    steps.push(cycle.value);
    if (cycle.value === 0) {
      value += 1;
    }
  }

  // Return the final position
  return {
    value,
    steps,
  };
}

export function part2(turns: Turn[]): number {
  // Start at position 50 in a cycle from 0 to 99
  const cycle = new Cycle(99, 0, 50);
  const steps: number[] = [];

  // Process each turn
  for (const turn of turns) {
    if (turn.direction === 'L') {
      cycle.subtract(turn.distance);
    } else if (turn.direction === 'R') {
      cycle.add(turn.distance);
    }
    steps.push(cycle.value);
  }
  
  return cycle.zeroCrossings;
}