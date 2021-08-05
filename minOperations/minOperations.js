/*https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const minOperations = (nums) => {
  let operations = 0;
  const numsCount = nums.length;
  let current = 1;

  while (current <= numsCount) {
    if (nums[current] <= nums[current - 1]) {
      nums[current]++;
      operations++;
    } else {
      current++;
    }
  }

  return operations;
}

export default minOperations;
