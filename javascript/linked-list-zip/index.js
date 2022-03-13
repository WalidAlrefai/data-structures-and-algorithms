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
  zipList(list1, list2) {
    let LL1 = list1.head;
    let LL2 = list2.head;
    while (LL1 || LL2) {
      if (LL1) {
        this.append(LL1.value);
        LL1 = LL1.next;
      }
      if (LL2) {
        this.append(LL2.value);
        LL2 = LL2.next;
      }
    }
  }
}


module.exports = LinkedList;
