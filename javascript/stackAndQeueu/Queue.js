const Node = require('./node');

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    return this.length++;
  }
  dequeue() {
    if (!this.front) return null;
    const temp = this.front;
    if (this.front == this.back) {
      this.back = null;
    }
    this.front = this.front.next;
    this.length--;
    return temp.value;
  }
  peek() {
    if (this.isEmpty()) {
      return 'empty';
    }
    return this.front.value;
  }

  isEmpty() {
    if (this.length == 0) { return true; }
    else return false;
  }
}
module.exports = Queue;
