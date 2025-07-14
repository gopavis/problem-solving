// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
// The output should not contain any duplicate triplets. You may return the output and the triplets in any order.
class ThreeSum {
  private inputs: number[][];

  constructor() {
    this.inputs = [
      [-1, 0, 1, 2, -1, -4],
      [0, 1, 1],
      [3, 0, -4, -1, -2, 1, 2],
      [1, 2, -2, -1],
      [],
    ];
  }

  check1(nums: number[]) {
    const sortedNums = nums.sort((a, b) => a - b);
    const result: number[][] = [];
    for (let i = 0; i < sortedNums.length - 2; i++) {
      if (sortedNums[i] === sortedNums[i + 1]) continue;
      let j = i + 1;
      let k = sortedNums.length - 1;

      while (j < k) {
        const sum = sortedNums[i] + sortedNums[j] + sortedNums[k];

        if (sum === 0) {
          result.push([i, j, k]);
          while (j < k && sortedNums[j] == sortedNums[j + 1]) j++;
          while (j < k && sortedNums[k] === sortedNums[k - 1]) k--;
        } else if (sum < 0) {
          j++;
        } else {
          k--;
        }
      }
    }
    return result;
  }

  check(nums: number[]) {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
          while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
    return result;
  }

  run() {
    this.inputs.forEach((input) => {
      const result = this.check(input);
      const result1 = this.check1(input);
      console.log(`Input: ${input} - Triplets: ${JSON.stringify(result)}`);
      console.log(`                - Triplets: ${JSON.stringify(result1)}`);
    });
  }
}
new ThreeSum().run();
