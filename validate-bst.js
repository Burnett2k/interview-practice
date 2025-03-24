const TreeNode = require("./tree-node");

const validate = (root) => {
  let prev = null;
  const dfs = (root) => {
    // a valid BST will return values in ascending order if we do a in-order traversal
    if (!root) return true;
    console.log(root.val);
    // if previous value is >= current value return false
    if (!dfs(root.left)) return false;
    if (prev !== null && prev > root.val) return false;
    prev = root.val;
    if (!dfs(root.right)) return false;
    return true;
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
