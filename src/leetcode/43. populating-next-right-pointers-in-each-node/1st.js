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
  if (!root) return root;
  let stack = {};
  traverseTree(root, 0, stack);
  for (let level in stack) {
    for (let i = 0; i < stack[level].length - 1; i++) {
      stack[level][i].next = stack[level][i + 1];
    }
  }
  return root;
};

const traverseTree = (node, level, map = {}) => {
  if (!map[level]) {
    map[level] = [node];
  } else {
    map[level].push(node);
  }
  if (node.left && node.right) {
    traverseTree(node.left, level + 1, map);
    traverseTree(node.right, level + 1, map);
  }
}