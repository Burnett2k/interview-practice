// Given the root of a binary tree, invert the tree, and return its root.

// Essentially, just mirror image it so left becomes right and right becomes left
const TreeNode = require("./tree-node");
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
 * @return {TreeNode}
 */
var invertTreeBFS = function (root) {
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    const temp = node.left;

    node.left = node.right;
    node.right = temp;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
};

var invertTreeDFS = (root) => {
  if (!root) return root;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTreeDFS(root.left);
  invertTreeDFS(root.right);

  return root;
};

const s1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

// console.log(invertTreeBFS(s1));
console.log(invertTreeDFS(s1));
