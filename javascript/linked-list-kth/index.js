'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }
  getKth(k) {
    let current = this.head;
    let listLength = 0;
    while (current !== null) {
      current = current.next;
      listLength++;
    }
    console.log(listLength);
    if (k < 0 || k > listLength) {
      return 'exception';
    } else {
      let lLength = listLength - k - 1;
      current = this.head;
      for (let i = 0; i < lLength; i++) {
        current = current.next;
      }
      return current.value;
    }
  }
}
module.exports = LinkedList;
