// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSameTree = function (root, subRoot) {
  return equalTree(root, subRoot);
};

const equalTree = (root, subRoot) => {
  // if both are null, they are equivalent and we should early return;
  if (root === null && subRoot === null) return true;

  // if one is null, then they are not equal
  if (root === null || subRoot === null) return false;

  // at this point both must be populated
  if (root.val !== subRoot.val) return false;

  return (
    equalTree(root.left, subRoot.left) && equalTree(root.right, subRoot.right)
  );
};

const root = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3),
  null,
  null
);
const subRootMatch = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3),
  null,
  null
);
const subRootMismatch = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(4),
  null,
  null
);

console.log(isSameTree(root, subRootMatch)); // should return true
console.log(isSameTree(root, subRootMismatch)); // should return false;
