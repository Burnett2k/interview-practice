// Given a binary tree, determine if it is Height balanced.
// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
const TreeNode = require("./tree-node");

const balancedBinaryTree = (root) => {
  if (!root) return true;

  if (Math.abs(calculateDepth(root.right) - calculateDepth(root.left)) > 1) {
    return false;
  }
  return balancedBinaryTree(root.left) && balancedBinaryTree(root.right);
};

const calculateDepth = (root) => {
  if (!root) return 0;
  let depth = 0;
  const queue = [root];
  while (queue.length) {
    const queueLength = queue.length;
    depth++;
    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return depth;
};

const s2 = new TreeNode(
  3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))),
  new TreeNode(5)
);

console.log(balancedBinaryTree(s2));
