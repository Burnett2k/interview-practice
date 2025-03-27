/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const TreeNode = require("./tree-node");
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let i = 0;
  let result = null;
  const dfs = (root) => {
    if (root === null || result !== null) return; // base case
    dfs(root.left, k);
    i++;
    console.log(root.val, i);
    if (i === k) {
      result = root.val;
      return;
    }
    dfs(root.right);
  };
  dfs(root, k);
  return result;
};

let s1 = new TreeNode(
  3,
  new TreeNode(1, null, new TreeNode(2)),
  new TreeNode(4)
);
console.log(kthSmallest(s1, 1));
