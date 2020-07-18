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
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let dummyHead = dummy;
  let p1 = l1;
  let p2 = l2;
  let carry = 0;
  while (p1 || p2) {
    let x = p1 ? p1.val : 0;
    let y = p2 ? p2.val : 0;
    let sum = x + y + carry;
    carry = Math.floor(sum / 10);
    dummy.next = new ListNode(sum % 10);
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    dummy = dummy.next;
  }
  dummy.next = carry > 0 ? new ListNode(carry) : null;
  return dummyHead.next;
};