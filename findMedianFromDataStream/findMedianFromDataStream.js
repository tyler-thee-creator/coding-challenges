/*https://leetcode.com/problems/find-median-from-data-stream/*/

/**
 * initialize your data structure here.
 */
 const MedianFinder = function() {
  this.nums = [];
  this.length = 0;
}

/**
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
  this.nums.push(num);
  this.length++;
  this.nums.sort((a, b) => a - b);
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  if (this.length % 2 === 1) {
      return this.nums[Math.floor(this.length / 2)];
  } else {
      return (this.nums[(this.length / 2) - 1] + this.nums[this.length / 2]) / 2;
  }
};

export default MedianFinder;

/**
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/