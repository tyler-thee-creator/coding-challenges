/*https://leetcode.com/problems/shuffle-string/*/

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

const restoreString = (s, indices) => {
  let max = 0;
  const returnString = '';
  const sObj = {};

  for (let i = 0; i < s.length; i++) {
      s[i] > max ? max = s[i] : null;
      sObj[indices[i]] = s[i];
  }

  console.log(max, sObj);
}

export default restoreString;
