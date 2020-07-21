/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head, memo = new Map()) {
  if(!head) return null;
  if (memo.has(head)) return memo.get(head);
  let copied = new Node(head.val);
  memo.set(head, copied);
  copied.next = copyRandomList(head.next, memo);
  copied.random = copyRandomList(head.random, memo);
  return copied;
};