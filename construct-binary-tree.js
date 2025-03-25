// 105. Construct Binary Tree from Preorder and Inorder Traversal
// Given two integer arrays preorder and inorder where preorder is
//  the preorder traversal of a binary tree and inorder is the
// inorder traversal of the same tree, construct and return the binary tree.

const TreeNode = require("./tree-node");
// preorder = root => left => right
// in order = left => root => right

const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) return null;

  // create root
  const root = new TreeNode(preorder[0]);
  const rootIndex = inorder.indexOf(root.val);
  // build out left sub tree
  root.left = buildTree(
    preorder.slice(1, rootIndex + 1),
    inorder.slice(0, rootIndex)
  );
  root.right = buildTree(
    preorder.slice(rootIndex + 1),
    inorder.slice(rootIndex + 1)
  );

  return root;
};

buildTree([1, 2, 3, 4, 5, 6, 7], [3, 2, 4, 1, 6, 5, 7]);
