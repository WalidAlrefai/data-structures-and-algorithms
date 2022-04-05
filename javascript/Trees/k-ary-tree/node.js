'use strict';
class Node {
  constructor(value = null) {
    this.value = value;
    this.child = [];
  }
}
module.exports = Node;
