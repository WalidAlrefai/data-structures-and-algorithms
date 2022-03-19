const Stack = require('../Stack');


class Pqueue {
  constructor() {
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }
  enqueue(value) {
    if(this.stack1.isEmpty()){
      this.stack1.push(value);
    }else{
      while(this.stack1.length > 0){
        this.stack2.push(this.stack1.peek());
        this.stack1.pop();
      }
      this.stack1.push(value);
      while(this.stack2.length >0){
        this.stack1.push(this.stack2.peek());
        this.stack2.pop();
      }
    }
  }
  dequeue() {
    if (this.stack1.isEmpty()) {
      return 'stack is empty';
    } else {
      this.stack1.pop();
    }
  }
}
module.exports = Pqueue;
