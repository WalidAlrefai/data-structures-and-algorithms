'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  include(value) {
    let current = this.head;
    if (current.value === value) return true;
    while (current.next !== null) {
      current = current.next;
      if (current.value === value) {
        return true;
      }
    }
    return false;
  }

  toString() {
    let result = '';
    if (!this.head) return 'Empty';
    let currentNode = this.head;
    while (currentNode) {
      let nodeValue = currentNode.value;
      currentNode = currentNode.next;
      result += (`{${nodeValue}} ->`);
    }
    result += (`Null`);
    return result;
  }

}


module.exports = LinkedList;
