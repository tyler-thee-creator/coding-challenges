/*https://leetcode.com/problems/add-two-numbers/*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2) => {
  let l1Copy = l1;
  let l2Copy = l2;
  let l1NumString = '';
  let l2NumString = '';

  while (l1Copy !== null || l2Copy !== null) {
    if (l1Copy !== null) {
        l1NumString += l1Copy.val;
        l1Copy = l1Copy.next;
    }

    if (l2Copy !== null) {
        l2NumString += l2Copy.val;
        l2Copy = l2Copy.next;
    }
  }

  l1NumString = l1NumString.split('').reverse().join('');
  l2NumString = l2NumString.split('').reverse().join('');
  let sum = BigInt(l1NumString) + BigInt(l2NumString);
  sum = sum.toLocaleString('fullwide', { useGrouping: false });

  let head;
  let current;

  for (let i = sum.length - 1; i >= 0; i--) {
    if (head === undefined) {
      head = new ListNode(sum[i]);
      current = head;
    } else {
      current.next = new ListNode(sum[i]);
      current = current.next;
    }
  }

  return head;
}

export default addTwoNumbers;
