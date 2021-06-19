/**
 * @param {string} digits
 * @return {string[]}
 */

 const letterCombinations = (digits) => {
  if (digits === '') {
    return [];
  }

  const combinations = [];
  const phone = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz',
  }

  const closureFunc = (currentCombo = '', i = 0) => {
    if (currentCombo.length === digits.length) {
      combinations.push(currentCombo);
      return;
    } else {
      const currentLetters = phone[digits[i]];
      for (let x = 0; x < currentLetters.length; x++) {
        currentCombo += currentLetters[x];
        closureFunc(currentCombo, i + 1);
        currentCombo = currentCombo.slice(0, -1);
      }
    }
  }

  closureFunc();
  return combinations;
}

export default letterCombinations;
