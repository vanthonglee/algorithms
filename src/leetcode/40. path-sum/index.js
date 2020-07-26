/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum, acc = 0) {
  if (!root) return false;
  if (!root.left && !root.right) {
    return acc + root.val === sum;
  }
  return hasPathSum(root.left, sum, acc + root.val) || hasPathSum(root.right, sum, acc + root.val);
};