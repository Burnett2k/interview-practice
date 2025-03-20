// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
const TreeNode = require("./tree-node");

const maxDepth = (root) => {
  if (!root) return 0; // edge case: null root
  if (!root.left && !root.right) return 1; // edge case: null left and right

  let maxDepth = 0;
  const queue = [root];

  while (queue.length) {
    const currentDepth = queue.length;
    maxDepth++;

    for (let i = 0; i < currentDepth; i++) {
      const node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return maxDepth;
};

const s1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const s2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(3)
);

console.log(maxDepth(s1)); // should return 2
console.log(maxDepth(s2)); // should return 3
console.log(maxDepth(null)); // should return 0
console.log(maxDepth(new TreeNode(1))); // should return 1
