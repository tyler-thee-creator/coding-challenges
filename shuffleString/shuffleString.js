/*https://leetcode.com/problems/shuffle-string/*/

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

const restoreString = (s, indices) => {
  let max = 0;
  let returnString = '';
  const sObj = {};

  for (let i = 0; i < s.length; i++) {
    indices[i] > max ? max = indices[i] : null;
    sObj[indices[i]] = s[i];
  }

  let current = 0;

  while (current <= max) {
    returnString += sObj[current];
    current++;
  }

  return returnString;
}

export default restoreString;
