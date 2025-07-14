class BinarySearch {
  private inputs: Array<[number[], number]>;

  constructor() {
    this.inputs = [
      [[1, 2, 3, 4, 5], 3],
      [[10, 20, 30, 40, 50], 30],
      [[5, 15, 25, 35, 45], 25],
      [[-10, -5, 0, 5, 10], -5],
      [[100, 200, 300, 400], 500], // Target not present
    ];
  }

  search(
    input: number[],
    findItem: number,
    left: number = 0,
    right: number = input.length - 1
  ): number {
    if (left > right) {
      return -1; // Target not found
    }
    const mid = Math.floor((left + right) / 2);
    if (input[mid] === findItem) {
      return mid; // Target found
    }
    if (input[mid] < findItem) {
      return this.search(input, findItem, mid + 1, right); // Search right half
    }
    return this.search(input, findItem, left, mid - 1); // Search left half
  }

  run() {
    this.inputs.forEach(([input, findItem]) => {
      const result = this.search(input, findItem);
      console.log(
        `Input: [${input.join(",")}], Target: ${findItem} - Index: ${result}`
      );
    });
  }
}

new BinarySearch().run();
