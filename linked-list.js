// Implement a LinkedList class which appends node to the end of the list
// implement a list method which prints the values of the nodes

class LinkedNode {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.next = null;
  }

  append(node) {
    if (!this.head) {
      // if there's no head, set node to head
      this.head = node;
      return;
    } else {
      // if there's a head, iterate next until we have a new spot to use
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }
  print() {
    let output = "";
    if (!this.head) {
      output = "no items!";
      return output;
    } else {
      let curr = this.head;
      output = this.head.data + "=>";
      while (curr.next) {
        curr = curr.next;
        output += curr.data + "=>";
      }
    }
    return output;
  }

  reverse() {
    //1=>2=>3
    //1<=2<=3
    // reverse the list by creating a prev null, then flipping next with prev. Let last item = head?
    let prev = null; // create a prev node which will end up being the last items "next" property
    let curr = this.head; // set curr variable so we can iterate the list
    while (curr) {
      // keep looping until curr is no longer populated
      let temp = curr.next; // keep curr.next in a temporary reference
      curr.next = prev; // flip curr.next and prev
      prev = curr; // set prev to curr
      curr = temp; // set curr to curr.next (from the temporary variable);
    }
    this.head = prev;
  }
}

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
