/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  //  i.e. first, second or third smallest if k = 1, k = 2, & k = 3
  let items = [];
  if (!root) return null;
  let queue = [root];

  while (queue.length) {
    const node = queue.shift();
    // node must exist if we get here
    items.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  items.sort((a, b) => a - b); // sorting is n log n
  // 1,2,3,4
  // 1,2,3,4,5,6

  return items[k - 1];
};
