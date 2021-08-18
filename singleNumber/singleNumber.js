/*https://leetcode.com/problems/single-number/*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = (nums) => {
  const occurrences = {};

  nums.map((num) => {
    occurrences[num] ? occurrences[num]++ : occurrences[num] = 1;
  });

  for (let key in occurrences) {
    if (occurrences[key] === 1) {
      return key;
    }
  }
}

export default singleNumber;
