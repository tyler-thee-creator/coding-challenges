/*https://leetcode.com/problems/uncommon-words-from-two-sentences/*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */

 const uncommonFromSentences = (s1, s2) => {
  const uncommonWords = [];
  const s1ToArray = s1.split(' ');
  const s2ToArray = s2.split(' ');

  s1ToArray.map((word, i) => {
    s1ToArray[i] = null;
    if (!(s1ToArray.indexOf(word) + 1) && !(s2ToArray.indexOf(word) + 1)) {
      uncommonWords.push(word);
    }
    s1ToArray[i] = word;
  });

  s2ToArray.map((word, x) => {
    s2ToArray[x] = null;
    if (!(s1ToArray.indexOf(word) + 1) && !(s2ToArray.indexOf(word) + 1)) {
      uncommonWords.push(word);
    }
    s2ToArray[x] = word;
  });

  return uncommonWords;
}

export default uncommonFromSentences
