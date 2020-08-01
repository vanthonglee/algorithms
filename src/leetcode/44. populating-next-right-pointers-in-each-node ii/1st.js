/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;
  let stack = {};
  traverseTree(root, 0, stack);
  for (level in stack) {
    for (let i = 0; i < stack[level].length; i++) {
      stack[level][i].next = stack[level][i + 1];
    }
  }
  return root;
};

const traverseTree = (node, level, stack = {}) => {
  if (!stack[level]) {
    stack[level] = [node]
  } else {
    stack[level].push(node);
  }
  if (node.left) {
    traverseTree(node.left, level + 1, stack);
  }
  if (node.right) {
    traverseTree(node.right, level + 1, stack);
  }
}