/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head;
  let p = new ListNode();
  let root = p;
  p.next = head;
  while (p) {
    if (p.next && p.next.val === val) {
      p.next = p.next.next ? p.next.next : null;
    } else if (p) {
      p = p.next;
    }
  }
  return root.next;
};