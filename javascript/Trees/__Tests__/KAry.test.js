const Kary = require('../k-ary-tree/k-ary');
const Node = require('../k-ary-tree/node');
const fizzBuzzTree = require('../k-ary-tree/Fizz-Buzz');

describe('fizzBuzzTree test', () => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);
  const seven = new Node(7);
  const eight = new Node(8);
  const nine = new Node(9);
  const ten = new Node(10);
  const fifteen = new Node(15);
  const thirty = new Node(30);
  one.child[0] = two;
  one.child[1] = three;
  one.child[2] = four;
  two.child[0] = five;
  two.child[1] = six;
  two.child[2] = seven;
  three.child[0] = eight;
  three.child[1] = nine;
  four.child[0] = ten;
  four.child[1] = fifteen;
  fifteen.child[0] = thirty;
  let tree = new Kary(one);
  it('change the KaryTree to fizzBuzzTree', () => {
    let output = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', 'FizzBuzz', 'FizzBuzz'];
    expect(fizzBuzzTree(tree)).toEqual(output);
  });
});
