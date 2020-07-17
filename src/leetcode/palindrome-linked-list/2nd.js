/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let fast = head, slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = head;
  slow = reverse(slow);

  while (slow) {
    if (fast.val !== slow.val) {
      return false;
    }
    fast = fast.next;
    slow = slow.next;
  }
  return true;
};


let reverse = function (head) {
  let prevNode = null;

  while (head !== null) {
    let nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode;
  }

  return prevNode;
}