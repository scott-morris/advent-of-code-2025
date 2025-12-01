export default class Cycle {
  value: number;
  private readonly min: number;
  private readonly max: number;

  constructor(max: number = 99, min: number = 0, initialValue: number = 50) {
    this.max = max;
    this.min = min;
    this.value = initialValue;
  }

  add(value: number): number {
    this.value += value;
    while (this.value > this.max) {
      this.value = this.min + (this.value - this.max - 1);
    }

    return this.value;
  }

  subtract(value: number): number {
    this.value -= value;
    while (this.value < this.min) {
      this.value = this.max - (this.min - this.value - 1);
    }
    return this.value;
  }
}
