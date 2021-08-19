/*https://leetcode.com/problems/combinations*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

 const combine = (n, k, index = 1, curr = [], paths = []) => {
  if (curr.length === k) {
    paths.push(curr)
    return paths
  }

  for (let i = index; i <= n; i++) {
      let temp = [...curr, i]
      combine(n, k, i + 1, temp, paths)
  }

  return paths
}

export default combine;
