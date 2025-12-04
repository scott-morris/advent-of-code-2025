export default class Cycle {
  value: number;
  zeroCrossings: number;
  private readonly min: number;
  private readonly max: number;

  constructor(max: number = 99, min: number = 0, initialValue: number = 50) {
    this.max = max;
    this.min = min;
    this.value = initialValue;
    this.zeroCrossings = 0;
  }

  add(value: number): number {
    this.value += value;
    while (this.value > this.max) {
      this.value = this.min + (this.value - this.max - 1);
      this.zeroCrossings++;
    }

    return this.value;
  }

  subtract(value: number): number {
    if (this.value === 0) {
      this.zeroCrossings--;
    }
    
    this.value -= value;
    while (this.value < this.min) {
      this.value = this.max - (this.min - this.value - 1);
      this.zeroCrossings++;
    }

    if (this.value === 0) {
      this.zeroCrossings++;
    }

    return this.value;
  }
}
