'use strict';
const Node = require('./node');
class binaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder() {
    let arr = [];
    const preOrderRec = (node) => {
      arr.push(node.value);
      if (node.left !== null) { preOrderRec(node.left); }
      if (node.right !== null) { preOrderRec(node.right); }
    };
    preOrderRec(this.root);
    return arr;
  }
  inOrder() {
    let arr = [];
    const inOrderRec = (node) => {
      if (node.left !== null) { inOrderRec(node.left); }
      arr.push(node.value);
      if (node.right !== null) { inOrderRec(node.right); }
    };
    inOrderRec(this.root);
    return arr;
  }
  postOrder() {
    let arr = [];
    const postOrderRec = (node) => {
      if (node.left !== null) { postOrderRec(node.left); }
      if (node.right !== null) { postOrderRec(node.right); }
      arr.push(node.value);
    };
    postOrderRec(this.root);
    return arr;
  }
}
class BST extends binaryTree {
  constructor() {
    super();
  }
  add(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }
  contains(value) {
    if (this.root === null) {
      return " the tree is empty";
    }
    let current = this.root;
    while (current) {
      if (current.value === value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      }

      if (value > current.value) {
        current = current.right;
      }

    }
    return false;
  }
}
module.exports = {
  BT: binaryTree,
  BST: BST,
};
