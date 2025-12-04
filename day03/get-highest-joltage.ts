export function getFirstDigitIndex(str: string): number {
    let maxDigit = 0;
    let index = -1;
    const digits: number[] = str.split('').map(v => Number(v) || 0);

    for (let i = 0; i < digits.length - 1; i++) {
        if (digits[i] as number > maxDigit) {
            maxDigit = digits[i] as number;
            index = i;
        }
    }
    return index;
}

export function getHighestJoltage(joltageRatings: string): number {
  const firstDigitIndex = getFirstDigitIndex(joltageRatings);
  const remainingDigits = joltageRatings.slice(firstDigitIndex + 1);
  const secondDigit = Math.max(...remainingDigits.split('').map(v => Number(v) || 0));
  const highestJoltage = Number(`${joltageRatings[firstDigitIndex]}${secondDigit}`);
  return highestJoltage;
}