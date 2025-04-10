// https://leetcode.com/problems/reverse-linked-list/description/

// 206. Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:
// Input: head = [1,2]
// Output: [2,1]
// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { LinkedList, LinkedNode } = require("./linked-list");
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  // iterate through the least
  while (curr) {
    // for each node, swap the next reference to the previous node
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // return the last node
  return prev;
};

const n1 = new LinkedNode(1);
const n2 = new LinkedNode(2);
const n3 = new LinkedNode(3);
const list = new LinkedList();
list.append(n1);
list.append(n2);
list.append(n3);
console.log(list.print());
list.reverse();
console.log(list.print());
