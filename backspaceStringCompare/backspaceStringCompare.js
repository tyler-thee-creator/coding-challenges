/*https://leetcode.com/problems/backspace-string-compare/*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 const backspaceCompare = (s, t) => {
  if (s == t) {
    return true;
  }

  let sString = '';
  let tString = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '#') {
      sString += s[i];
    } else {
      sString = sString.substring(0, sString.length - 1);
    }
  }

  for (let x = 0; x < t.length; x++) {
    if (t[x] !== '#') {
      tString += t[x];
    } else {
      tString = tString.substring(0, tString.length - 1);
    }
  }
  console.log(sString, tString);
  return sString === tString;
}

export default backspaceCompare;
