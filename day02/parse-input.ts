export interface Range {
  start: number;
  end: number;
};

export function parseInput(input: string): Range[] {
  const lines = input.split(',');
  
  return lines.map(line => {
    const [start = 0, end = 0] = line.split('-').map(Number);
    return { start, end };
  });
}
