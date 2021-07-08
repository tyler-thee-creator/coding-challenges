/*https://leetcode.com/problems/wildcard-matching/*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

 const isMatch = (s, p) => {
  if (p === '*') {
    return true;
  } else if (!(p.indexOf('?') + 1) && !(p.indexOf('*') + 1)) {
    return s === p;
  }
}

export default isMatch;
