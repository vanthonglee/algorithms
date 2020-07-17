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
  let temp = head;

  let length = 0;
  while (temp) {
    length++;
    temp = temp.next;
  }

  let result = temp;
  let abc = head;
  let odd = new ListNode();
  let tempOdd = odd;
  let even = new ListNode();
  let tempEven = even;

  for (let i = 1; i <= length; i++) {
    if (i % 2 !== 0) {
      odd.next = abc;
      odd = odd.next;
    } else {
      even.next = abc;
      even = even.next;
    }
    abc = abc.next;
  }
  even.next = null;
  odd.next = null;
  odd.next = tempEven.next;
  return tempOdd.next;
};