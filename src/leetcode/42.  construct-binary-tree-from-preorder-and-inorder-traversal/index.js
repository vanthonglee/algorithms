/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  return constructTree(preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1);
};

const constructTree = (preorder, inorder, ps, pe, is, ie) => {
  if (ps > pe || is > ie) {
    return null;
  }
  let node = new TreeNode(preorder[ps]);
  const currentRootIndex = inorder.indexOf(preorder[ps]);
  const left = currentRootIndex - is;
  const right = ie - currentRootIndex;
  node.left = constructTree(preorder, inorder, ps + 1, pe + left, is, ie - right - 1);
  node.right = constructTree(preorder, inorder, ps + left + 1, pe, is + left + 1, ie);
  return node;
}