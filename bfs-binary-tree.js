// 📝 Problem: Level-Order Traversal of a Binary Tree

// Problem Statement

// Given the root of a binary tree, return the level-order traversal of its nodes’ values (i.e., from left to right, level by level).

// Input
// 	•	A binary tree where each node contains a value and pointers to left and right children.

// Output
// 	•	An array of arrays, where each sub-array represents a level of the tree.

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
//     1
//    / \
//   2   3
//  / \   \
// 4   5   6
// Test case
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6))
);

const bfsTraversal = (root) => {
  const queue = [root];
  const paths = [];
  // don't need visited because it is a directed graph??
  // how do I make it an array of levels instead?

  while (queue.length) {
    // get snapshot of the items in the queue (represents number of items in that level);
    const levelSnapshot = queue.length;
    const levelNodes = [];

    for (let i = 0; i < levelSnapshot; i++) {
      const node = queue.shift();
      levelNodes.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    paths.push(levelNodes);
  }
  return paths;
};

console.log(bfsTraversal(root));
