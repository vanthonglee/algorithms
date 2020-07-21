/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

//Exception when input [1,2,3] and k = 2000000000000

var rotateRight = function (head, k) {
  if (!head || !head.next) return head;


  while (k > 0) {
    k--;
    let temp = head;
    let prevLastNode = head;
    let lastNode = head.next;

    let fast = head.next.next;;
    while (fast) {
      prevLastNode = prevLastNode.next;
      lastNode = lastNode.next;
      fast = fast.next;
    }
    lastNode.next = head;
    prevLastNode.next = null;
    head = lastNode;
  }

  return head;
};

