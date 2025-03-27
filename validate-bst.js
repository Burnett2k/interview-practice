const TreeNode = require("./tree-node");

const validate = (root) => {
  const dfs = (root, min = Number.MIN_VALUE, max = Number.MAX_VALUE) => {
    if (!root) return true;
    if (root.val >= max || root.val <= min) return false;
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  };
  return dfs(root);
};

/*
Test Case 1:
s:       2
        / \
       1   3
*/
const s1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));

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

console.log(validate(s1)); // expect: return true
console.log(validate(s2)); // expect: return false
