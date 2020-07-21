/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} originalHead
 * @return {Node}
 */
var copyRandomList = function (originalHead) {
  if (!originalHead) return originalHead;
  let clonedHead = new Node(originalHead.val, null, null);
  let newHead = clonedHead;
  let oldHead = originalHead;
  let nodeJustBelow = new Map();
  nodeJustBelow.set(oldHead, newHead);
  while (oldHead.next) {
    newHead.next = new Node(oldHead.next.val, null, null);
    newHead = newHead.next;
    oldHead = oldHead.next;
    nodeJustBelow.set(oldHead, newHead);
  }
  oldHead = originalHead;
  newHead = clonedHead;
  while (oldHead && newHead) {
    newHead.random = oldHead.random ? nodeJustBelow.get(oldHead.random) : null;
    oldHead = oldHead.next;
    newHead = newHead.next;
  }
  return clonedHead;
};