/*https://leetcode.com/problems/valid-parentheses/*/

/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
  const parens = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  const openParens = [];

  for (let i = 0; i < s.length; i++) {
    if ([ '(', '[', '{' ].indexOf(s[i]) + 1) {
        openParens.push(s[i]);
    } else {
      const lastOpenParen = openParens[openParens.length - 1];

      if (parens[s[i]] === lastOpenParen) {
        openParens.splice(-1, 1);
      } else {
        return false;
      }
    }
  }

  if (openParens.length) {
    return false;
  } else {
    return true;
  }
}

export default isValid;
