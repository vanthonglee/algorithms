/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  return createTree(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1);
};

let createTree = (inorder, postorder, is, ie, ps, pe) => {
  if (is > ie || ps > pe) {
    return null;
  }
  const root = new TreeNode(postorder[pe]);
  const nIndex = inorder.indexOf(postorder[pe]);
  const nLeft = nIndex - is;
  const nRight = ie - nIndex;
  root.left = createTree(inorder, postorder, is, nIndex - 1, ps, ps + nLeft - 1);
  root.right = createTree(inorder, postorder, nIndex + 1, ie, ps + nLeft, ps + nLeft + nRight - 1);
  return root;
}