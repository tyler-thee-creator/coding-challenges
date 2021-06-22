/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArr = [...nums1, ...nums2];
  mergedArr.sort((a, b) => a - b);

  const length = mergedArr.length;
  const medianNum = length / 2;
  let median;

  if (Math.floor(medianNum) !== medianNum) {
    median = mergedArr[Math.floor(medianNum)];
  } else {
    median = (mergedArr[medianNum - 1] + mergedArr[medianNum]) / 2;
  }

  return median;
}