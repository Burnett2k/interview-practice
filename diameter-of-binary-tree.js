// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any
// two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

const TreeNode = require("./tree-node");

const treeDiameter = (root) => {};

/*
Test Case 2:
s:       3
        / \
       4   5
      / \
     1   2
        /
       0
*/
const s2 = new TreeNode(
  3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))),
  new TreeNode(5)
);

console.log(treeDiameter(s2));
