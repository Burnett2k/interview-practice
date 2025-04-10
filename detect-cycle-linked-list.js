/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycleNaive = function (head) {
  // naive way: set a timetout of 500 ms, if reached, it's probably a cycle
  // if values are distinct, keep a set and if you hit the same value again you can return
  // downsides: memory is o(n)
  // upsides: fairly straightforward

  let curr = head;
  let visited = new Set();
  while (curr) {
    if (visited.has(curr)) {
      // we've already seen this value, so return
      return true;
    } else {
      visited.add(curr);
    }

    curr = curr.next;
  }

  return false; // if we get past the pointer, there's no cycle
};
var hasCycleNaive = function (head) {
  // naive way: set a timetout of 500 ms, if reached, it's probably a cycle
  // if values are distinct, keep a set and if you hit the same value again you can return
  // downsides: memory is o(n)
  // upsides: fairly straightforward

  let curr = head;
  let visited = new Set();
  while (curr) {
    if (visited.has(curr)) {
      // we've already seen this value, so return
      return true;
    } else {
      visited.add(curr);
    }

    curr = curr.next;
  }

  return false; // if we get past the pointer, there's no cycle
};

var hasCycle = function (head) {
  // naive way: set a timetout of 500 ms, if reached, it's probably a cycle
  // if values are distinct, keep a set and if you hit the same value again you can return
  // downsides: memory is o(n)
  // upsides: fairly straightforward

  if (head && head.next) {
    let slow = head;
    let fast = head.next;
    while (slow && fast && fast.next) {
      // check if slow and fast are equivalent
      if (slow === fast) return true;
      slow = slow.next;
      fast = fast.next.next;
    }
  }

  return false; // if we get past the pointer, there's no cycle
};
