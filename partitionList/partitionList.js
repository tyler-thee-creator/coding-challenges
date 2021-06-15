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
  console.log(orderedNodes);

  //re-create linkedList with newly ordered array
}

export default partition;
