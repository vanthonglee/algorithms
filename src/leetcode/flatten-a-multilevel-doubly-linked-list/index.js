/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (!head) return head;
  let ptr = head;
  while(ptr) {
      //💼 case 1: if no child, proceed
      if (!ptr.child) {
          ptr = ptr.next;
          continue;
      }
      //💼 case 2: have child, find tail of child list and link it to p.next
      let temp = ptr.child;
      while(temp.next) temp = temp.next; //👉 find tail of child list
      //🍪 connect the tail to ptr.next
      temp.next = ptr.next;
      if (ptr.next)   ptr.next.prev = temp;
      //🍪 connect ptr with its child, and remove p.child
      ptr.next =ptr.child;
      ptr.child.prev = ptr;
      ptr.child = null
  }
  return head;
};