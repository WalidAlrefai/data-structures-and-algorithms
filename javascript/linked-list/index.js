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

  insertBefore(perValue, newVal) {
    const node = new Node(newVal);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.next.value == perValue) {
        node.next =currentNode.next;
        currentNode.next =node;
        return null;
      }
    }
  }

  insertAfter(perValue, newVal) {
    const node = new Node(newVal);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.value == perValue) {
        node.next =currentNode.next;
        currentNode.next =node;
        return null;
      }
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
