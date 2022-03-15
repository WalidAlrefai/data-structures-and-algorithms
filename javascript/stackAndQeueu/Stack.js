const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }



  push(value) {
    let newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    if(this.isEmpty()) return 'empty';
    let temp = this.top;
    this.top = temp.next;
    this.length--;
    return temp.value;
  }


  peek(){
    if(this.isEmpty()) return 'empty';
    return this.top.value;
  }


  isEmpty() {
    if (this.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}


module.exports = Stack
