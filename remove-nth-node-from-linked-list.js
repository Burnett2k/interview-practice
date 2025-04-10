const { LinkedList, LinkedNode } = require("./linked-list");

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

// 19. Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

var removeNthFromEnd = function (head, n) {
  let dummy = new LinkedNode(0);
  dummy.next = head;
  let left = dummy;
  right = head;

  // shift right pointer by n
  while (n > 0 && right) {
    right = right.next;
    n -= 1;
  }

  // shift left pointer to end of list
  while (right) {
    left = left.next;
    right = right.next;
  }

  // now we can remove the middle guy
  left.next = left.next.next;
  return dummy.next;
};

// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// Follow up: Could you do this in one pass?
const n1 = new LinkedNode(1);
const n2 = new LinkedNode(2);
const n3 = new LinkedNode(3);
const n4 = new LinkedNode(4);
const n5 = new LinkedNode(5);
const list = new LinkedList();
list.append(n1);
list.append(n2);
list.append(n3);
list.append(n4);
list.append(n5);
console.log(list.print());
const newHead = removeNthFromEnd(n1, 2); // should return 1=>3
const newList = new LinkedList(newHead);
console.log(newList.print());
