'use strict';

const Queue = require('../../stackAndQeueu/Queue');

function fizzBuzzTree(karytree) {
  const queue = new Queue();
  queue.enqueue(karytree.root);
  let output = [];
  const fizzBuzz = (node) => {
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'FizzBuzz';
    }else if (node.value % 3 === 0) {
      node.value = 'Fizz';
    }else if (node.value % 5 === 0) {
      node.value = 'Buzz';
    } else {
      node.value = node.value.toString();
    }
    output.push(node.value);
    for (let i = 0; i < node.child.length; i++) {
      if (node.child[i]) queue.enqueue(node.child[i]);
    }
    if (!queue.isEmpty()) fizzBuzz(queue.dequeue());
  };
  fizzBuzz(queue.dequeue());
  return output;
}

module.exports = fizzBuzzTree;
