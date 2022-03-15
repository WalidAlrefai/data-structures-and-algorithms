
const Stack = require('../Stack');
const Queue = require('../Queue');

let newStack = new Stack;
let newQueue = new Queue;
describe('stack Test', () => {
  it('is empty', () => {
    expect(newStack.isEmpty()).toBe(true);
  });
  it('Push', () => {
    let value = 'A';
    newStack.push(value);
    expect(newStack.top.value).toEqual(value);
  });
  it('pop', () => {
    let value = 'B';
    newStack.push(value);
    expect(newStack.top.value).toEqual(value);
    expect(newStack.pop()).toEqual('B');
  });
  it('Get last value', () => {
    expect(newStack.peek()).toEqual('A');
  });
  it('isempty if not empty', () => {
    expect(newStack.isEmpty()).toBeFalsy();
  });
  it('pop if the stack is empty', () => {
    newStack.pop();
    expect(newStack.pop()).toBe('empty');
  });
  it('peek if the stack is empty', () => {
    expect(newStack.peek()).toBe('empty');
  });

});

describe('Queue', () => {
  it('isempty', () => {
    expect(newQueue.isEmpty()).toBeTruthy();
  });
  it('enqueue', () => {
    let value = 'A';
    newQueue.enqueue(value);
    expect(newQueue.front.value).toEqual(value);
  });
  it('dequeue', () => {
    let value = 'B';
    newQueue.enqueue(value);
    expect(newQueue.front.next.value).toEqual(value);
    expect(newQueue.dequeue()).toEqual('A');
  });
  it('peek', () => {
    expect(newQueue.peek()).toEqual('B');
  });
  it('dequeue on an empty queue', () => {
    newQueue.dequeue();
    expect(newQueue.dequeue()).toBe(null);
  });
  it('peek on an empty queue', () => {
    expect(newQueue.peek()).toBe('empty');
  });
});
