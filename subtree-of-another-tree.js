// 572. Subtree of Another Tree
// Easy
// Topics
// Companies
// Hint
// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  // traverse each node in root to see if the subest matches subroot

  if (!root) return false; // edge case for empty tree

  let queue = [root];

  while (queue.length) {
    // take item from queue
    const node = queue.shift();

    // check for matching head node, and see if tree matches!
    if (node.val === subRoot.val && isSameTree(node, subRoot)) {
      return true;
    }
    // push more items onto queue
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return false;
};

const isSameTree = (root, subroot) => {
  if (root === null && subroot === null) return true;
  if (root === null || subroot === null) return false;
  if (root.val !== subroot.val) return false;
  return (
    isSameTree(root.left, subroot.left) && isSameTree(root.right, subroot.right)
  );
};

/*
Test Case 1:
s:       3
        / \
       4   5
      / \
     1   2

t:
      4
     / \
    1   2

Expected Output: true
*/
const s1 = new TreeNode(
  3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2)),
  new TreeNode(5)
);
const t1 = new TreeNode(4, new TreeNode(1), new TreeNode(2));

/*
Test Case 2:
s:       3
        / \
       4   5
      / \
     1   2
        /
       0

t:
      4
     / \
    1   2

Expected Output: false (because the extra node 0 in s makes the subtree not match)
*/
const s2 = new TreeNode(
  3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))),
  new TreeNode(5)
);
const t2 = new TreeNode(4, new TreeNode(1), new TreeNode(2));

/*
Test Case 3:
s:    1
     / \
    2   3

t:
    2

Expected Output: true (the node with value 2 in s is a subtree)
*/
const s3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const t3 = new TreeNode(2);

/*
Test Case 4:
s:      1
       / \
      2   3

t:
      1
       \
        2

Expected Output: false (the structure of t does not match any subtree of s)
*/
const s4 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const t4 = new TreeNode(1, null, new TreeNode(2));

// Running the test cases
console.log("Test Case 1 (expected: true):", isSubtree(s1, t1));
console.log("Test Case 2 (expected: false):", isSubtree(s2, t2));
console.log("Test Case 3 (expected: true):", isSubtree(s3, t3));
console.log("Test Case 4 (expected: false):", isSubtree(s4, t4));
