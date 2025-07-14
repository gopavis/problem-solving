class twoSum {
  private inputs: Array<[number[], number]>;

  constructor() {
    this.inputs = [
      [[2, 7, 11, 15], 9],
      [[3, 2, 4], 6],
      [[3, 3], 6],
      [[1, 2, 3, 4, 5], 10],
      [[-1, -2, -3, -4, -5], -8],
    ];
  }

  check(input: [number[], number]) {
    const [nums, target] = input;
    const numMap: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numMap[complement] !== undefined) {
        return [numMap[complement], i];
      }
      numMap[nums[i]] = i;
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

new twoSum().run();
