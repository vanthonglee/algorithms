/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head) return null;

  let odd = new ListNode();
  let oddHead = odd;
  let even = new ListNode();
  let evenHead = even;

  let isOdd = true;
  while (head) {
    if (isOdd) {
      odd.next = head;
      odd = odd.next;
    } else {
      even.next = head;
      even = even.next;
    }
    head = head.next;
    isOdd = !isOdd;
  }

  even.next = null;
  odd.next = evenHead.next;
  return oddHead.next;
};