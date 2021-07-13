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

  const wcSplit = p.split('*');
  const sCopy = s;

  wcSplit.map((phrase) => {
    const q = phrase.indexOf('?') + 1;
    if (q) {
      const subPhrases = phrase.split('?');
      const positions = [];

      subPhrases.map((sp) => {
        const start = s.indexOf(sp);

        if (!(start + 1)) {
          return false;
        } else {
          const posObj = {};
          posObj[sp] = { start: start, end: start + sp.length };
          positions.push(posObj);
        }
      });

      console.log(positions);
    }
  });
}

export default isMatch;
