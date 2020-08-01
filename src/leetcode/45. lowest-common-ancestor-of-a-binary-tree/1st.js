/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  return traverseTree(root, p, q);
};

const traverseTree = (node, p, q) => {
  if (!node || node == p || node == q) {
    return node;
  }
  let left = traverseTree(node.left, p, q);
  let right = traverseTree(node.right, p, q);
  if (left && right) {
    return node;
  }
  return left || right;
}