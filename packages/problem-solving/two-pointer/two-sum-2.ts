// Given an array of integers numbers that is sorted in non-decreasing order.
// Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.
// There will always be exactly one valid solution.
// Your solution must use O(1) additional space.

class TwoSum2 {
  private inputs: Array<[number[], number]>;

  constructor() {
    this.inputs = [
      [[2, 7, 11, 15], 9],
      [[10, 26, 30, 31, 47, 60], 40],
      [[1, 2, 3, 4, 5], 6],
      [[-1, -2, -3, -4, -5], -8],
    ];
  }

  check(input: [number[], number]) {
    const [numbers, target] = input;
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
      const sum = numbers[left] + numbers[right];
      if (sum === target) {
        return [left + 1, right + 1]; // Convert to 1-indexed
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return [];
  }

  run() {
    this.inputs.forEach((input) => {
      const result = this.check(input);
      console.log(
        `Input: ${input[0]}, Target: ${input[1]} - Indices: ${
          result.length ? result.join(", ") : "No solution"
        }`
      );
    });
  }
}

new TwoSum2().run();
