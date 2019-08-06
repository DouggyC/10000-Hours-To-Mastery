// LInkedList

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  add(element) {
    let node = new Node(element);
    // if head is null, set node to be the head
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      // while currentNode.next is true, not null, currentNode loop to next Node
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    this.length++;
  }

  remove(element) {
    let currentNode = this.head;
    let previousNode;
    if (currentNode.element === element) {
      this.head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        // [previous] <= [current] => [next]
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }
    this.length--;
  }

  isEmpty() {
    return this.length === 0;
  }

  indexOf(element) {
    let currentNode = this.head;
    let index = -1;

    while (currentNode) {
      index++;

      if (currentNode.element === element) {
        return index;
      }
      // recursive set next node and check again
      currentNode = currentNode.next;
    }

    return -1;
  }

  elementAt(index) {
    let currentNode = this.head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }

    return currentNode.element;
  }
}

let ll = new LinkedList();
ll.add('A');
ll.add('B');
ll.add('C');
ll.remove('C');

console.log(ll.isEmpty());
console.log(ll.elementAt(0));
console.log(ll.indexOf('B'));
console.log(ll.size());
console.log(ll);
