// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q
// as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

const TreeNode = require("./tree-node");

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // find the lowest node in the tree that has p and q in its subtree

  if (!root) return null; // we've reached the end and didn't find it, so return null
  if (root === p || root === q) return root; // we found either p or q, so return this node back up the stack

  let left = lowestCommonAncestor(root.left, p, q); // search for LCA in left subtree
  let right = lowestCommonAncestor(root.right, p, q); // search for LCA in right subtree

  if (left && right) return root; // if we have a value for both left and right, return

  return left || right;
};

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
const node0 = new TreeNode(0);
const node2 = new TreeNode(2, node0);
const node1 = new TreeNode(1);
const node4 = new TreeNode(4, node1, node2);
const node5 = new TreeNode(5);
const root = new TreeNode(3, node4, node5);

// Now you can call:
console.log(lowestCommonAncestor(root, node5, node4)); // should return node3
console.log(lowestCommonAncestor(root, node1, node2)); // should return node4
console.log(lowestCommonAncestor(root, node4, node0)); // should return node4
