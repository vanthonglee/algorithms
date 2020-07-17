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
  if (!head || !head.next) return true;
  //My solution: 
  // +first is I will reverse the list and save it, 
  // +then I check if the reverse is equal to the original or not. 
  let reversed = null;
  let reversedHead = null;
  let temp = head;
  while (temp) {
    let newNode = new ListNode(temp.val);
    newNode.next = reversedHead;
    reversedHead = newNode;
    temp = temp.next;
  }
  while (reversedHead && head) {
    if (reversedHead.val != head.val) {
      return false;
    }
    reversedHead = reversedHead.next;
    head = head.next;
  }
  return true;
};