'use strict';

const { BT, BST } = require('../binaryTree');
const Node = require('../node');
let tree = null;
let binarySearchTree = null;
let tree2 = null;


describe('Binary Tree', () => {

  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new BT(one);
    tree2 = new BT();
  });

  it('constructor', () => {
    expect(tree.root.value).toEqual(1);
  });

  it('preOrder', () => {
    let output = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(output);
  });

  it('inOrder', () => {
    let output = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual(output);
  });

  it('postOrder', () => {
    let output = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual(output);
  });
  it('find max', () => {
    expect(tree.findMax()).toEqual(9);
    expect(tree2.findMax()).toEqual('empty');
    tree2 = new BT(new Node('NaN'));
    expect(tree2.findMax()).toEqual('not a number');


  });
  it('breadth first', () => {
    let node = new Node(1);
    let tree3 = new BT(node);
    let node2 = new Node(2);
    node.left=node2;
    let node3 = new Node(3);
    node.right=node3;
    let node4 = new Node(4);
    node2.left=node4;
    let node5 = new Node(5);
    node2.right=node5;
    let node6 = new Node(6);
    node3.left=node6;
    let node7 = new Node(7);
    node3.right=node7;
    let output = [1, 2, 3, 4, 5, 6, 7];
    expect(tree3.breadthFirst()).toEqual(output);
  });

});
describe('testing Binary search tree', () => {
  beforeAll(() => {

    binarySearchTree = new BST();
    binarySearchTree.add(100);
    binarySearchTree.add(70);
    binarySearchTree.add(130);
    binarySearchTree.add(60);
    binarySearchTree.add(80);
    binarySearchTree.add(120);
    binarySearchTree.add(140);


  }
  );
  it('testing the root value', () => {
    expect(binarySearchTree.root.value).toEqual(100);
  });
  it('testing the preOrder method', () => {
    let arr = [100, 70, 60, 80, 130, 120, 140];
    expect(binarySearchTree.preOrder()).toEqual(arr);

  });
  it('testing the inOrder method', () => {
    let arr = [60, 70, 80, 100, 120, 130, 140];
    expect(binarySearchTree.inOrder()).toEqual(arr);
  });
  it('testing the postOrder method', () => {
    let arr = [60, 80, 70, 120, 140, 130, 100];
    expect(binarySearchTree.postOrder()).toEqual(arr);
  });
  it('testing the contains method', () => {
    expect(binarySearchTree.contains(130)).toBe(true);
    expect(binarySearchTree.contains(65)).toBe(false);
  });
});
