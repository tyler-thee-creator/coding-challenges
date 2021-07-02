/*https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/*/

/**
 * @param {number} n
 * @return {number}
 */

 const subtractProductAndSum = (n) => {
  const numToArr = n.toString().split('');
  let product = 1;
  let sum = 0;

  numToArr.map((num) => {
    product *= (num - 0);
    sum += (num - 0);
  });

  return product - sum;
}

export default subtractProductAndSum;
