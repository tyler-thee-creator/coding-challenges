/*https://leetcode.com/problems/partition-list*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

const partition = (head, x) => {
  if (head === null) {
    return head;
  }

  const listToArray = [];
  let node = head;

  while (node !== null) {
    listToArray.push(node.val);
    node = node.next;
  }
  const lesserNodes = [];
  const greaterNodes= [];

  listToArray.map((node) => {
    if (node < x) {
      lesserNodes.push(node);
    } else {
      greaterNodes.push(node);
    }
  });

  const orderedNodes = lesserNodes.concat(greaterNodes);
  const newHead = new ListNode(orderedNodes[0]);
  let currentHead = newHead;

  for (let i = 1; i < orderedNodes.length; i++) {
    currentHead.next = new ListNode(orderedNodes[i]);
    currentHead = currentHead.next;
  }

  return newHead;
}

export default partition;
