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
        node.next = currentNode.next;
        currentNode.next = node;
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
        node.next = currentNode.next;
        currentNode.next = node;
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


  reverse() {
    let link = new LinkedList();
    let current = this.head;
    while (current) {
      link.insert(current.value);
      current = current.next;
    }
    return link;
  }


  isPalindrome() {
    let reversedList = this.reverse();
    let current = this.head;
    let current2 = reversedList.head;
    while (current) {
      if (current.value === current2.value) {
        current = current.next;
        current2 = current2.next;
      }else{
        return false;
      }
    }
    return true;
  }


}
module.exports = LinkedList;
