const TreeNode = require("./tree-node");

let inOrderPath = [];
const inOrder = (root) => {
  if (!root) return null;
  inOrder(root.left);
  inOrderPath.push(root.val);
  inOrder(root.right);
};

let preOrderPath = [];
const preOrder = (root) => {
  if (!root) return null;
  preOrderPath.push(root.val);
  preOrder(root.left);
  preOrder(root.right);
};

let postOrderPath = [];
const postOrder = (root) => {
  if (!root) return null;
  postOrder(root.left);
  postOrder(root.right);
  postOrderPath.push(root.val);
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
const s2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(5, new TreeNode(6), new TreeNode(7))
);
preOrder(s2);
console.log("preOrderPath", preOrderPath);
inOrder(s2);
console.log("inOrderPath", inOrderPath);
postOrder(s2);
console.log("postOrderPath", postOrderPath);
