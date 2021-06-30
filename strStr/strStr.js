/*https://leetcode.com/problems/implement-strstr/*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const strStr = (haystack, needle) => {
  if (needle === '') {
      return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle[0]) {
          let match = true;
          for (let x = 1; x < needle.length; x++) {
              if (needle[x] !== haystack[i + x]) {
                  match = false;
                  break;
              }
          }
          if (match) {
              return i;
          }
      }
  }

  return -1;
}

export default strStr;
