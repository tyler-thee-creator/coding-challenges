/*https://leetcode.com/problems/same-tree/*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

 const isSameTree = (p, q) => {
  if (p === null && q === null) {
    return true;
  } else if (p === null || q === null) {
    return false;
  }

  let sameTree = true;

  const closureFunc = (t1, t2) => {
    if (t1.val !== t2.val) {
      sameTree = false;
      return;
    }

    if ((t1.left !== null || t2.left !== null) && sameTree) {
        if (t1.left !== null && t2.left !== null) {
            closureFunc(t1.left, t2.left);
        } else {
            sameTree = false;
            return;
        }
    }

    if ((t1.right !== null || t2.right !== null) && sameTree) {
        if (t1.right !== null && t2.right !== null) {
            closureFunc(t1.right, t2.right);
        } else {
            sameTree = false;
            return;
        }
    }
  }
  closureFunc(p, q);

  return sameTree;
}