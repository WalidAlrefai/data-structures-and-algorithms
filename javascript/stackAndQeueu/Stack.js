const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }



  push(value) {
    let newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) return 'empty';
    let temp = this.top;
    this.top = temp.next;
    this.length--;
    return temp.value;
  }


  peek() {
    if (this.isEmpty()) return 'empty';
    return this.top.value;
  }


  isEmpty() {
    if (this.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  toString() {
    let stackValues = "";
    let p1 = this.top;
    if (this.top != null) {
      while (p1 != null) {
        stackValues = stackValues + `{ ${p1.value} } ->`;
        // console.log(p1.value);
        p1 = p1.next;
      }
      stackValues = stackValues + `Null`;
      return stackValues;
    }
    else {
      stackValues = `empty`;
      return stackValues;
    }
  }
}


module.exports = Stack
