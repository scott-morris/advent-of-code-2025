export interface Turn {
  direction: 'L' | 'R';
  distance: number;
}

const turnRegex = /^(L|R)(\d+)$/;

export function parseInput(input: string): Turn[] {
  const lines = input.split('\n');
  const result = [];
  for (const line of lines) {
    const match = turnRegex.exec(line.trim());
    if (match) {
      const [, direction, distance] = match;
      result.push({
        direction,
        distance: parseInt(distance as string, 10),
      } as Turn);
    }
  }
  return result;
}
