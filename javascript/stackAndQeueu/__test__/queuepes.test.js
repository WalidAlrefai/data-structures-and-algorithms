'use strict';


const Pqueue = require('../queue-pseudo/queue-pseudo');

describe('enqueue pseudoQueue', () => {

  it('add to queue', () => {
    const pseudoqueue = new Pqueue();
    pseudoqueue.enqueue(3);
    pseudoqueue.enqueue(2);
    pseudoqueue.enqueue(1);
    expect(pseudoqueue.stack1.toString()).toEqual('{ 3 } ->{ 2 } ->{ 1 } ->Null');
    // console.log("after add to pseudoqueue 1111" + pseudoqueue.stack1.toString());
    // console.log("after add to pseudoqueue 2222" + pseudoqueue.stack2.toString());
  });

  it('add to queue', () => {
    const pseudoqueue = new Pqueue();
    pseudoqueue.enqueue(3);
    pseudoqueue.enqueue(2);
    pseudoqueue.enqueue(1);
    // console.log("after add to pseudoqueue" + pseudoqueue.stack1.toString());
    pseudoqueue.dequeue();
    expect(pseudoqueue.stack1.toString()).toEqual("{ 2 } ->{ 1 } ->Null");
    pseudoqueue.dequeue();
    expect(pseudoqueue.stack1.toString()).toEqual("{ 1 } ->Null");

    // console.log("after delete 11111 to pseudoqueue" + pseudoqueue.stack1.toString());
    // console.log("after delete 22222 to pseudoqueue" + pseudoqueue.stack2.toString());
  });
});
