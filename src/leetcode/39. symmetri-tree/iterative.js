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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let queue = [root];
  let nextLevel = [];

  while (queue.length) {
    nextLevel = [];
    if (!isMirror(queue)) {
      return false;
    }
    while (queue.length) {
      const node = queue.shift();
      if (!node) continue;
      nextLevel.push(node.left);
      nextLevel.push(node.right);
    }
    queue = nextLevel;
  }
  return true;
};

const defaultGetter = (key, obj) => {
  if (!obj[key]) return null
  return obj[key].val;
}

function isMirror(arr, get = defaultGetter) {
  left = 0;
  right = arr.length - 1;
  while (left < right) {
    const isEqual = get(left, arr) === get(right, arr)
    if (!isEqual) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}