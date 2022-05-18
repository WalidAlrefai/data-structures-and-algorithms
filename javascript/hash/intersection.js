const HashTable = require('./hashTable');

function tree_intersection(tree1, tree2) {
  if (tree1 === null || tree2 === null) {
    return [];
  } else {
    let hashTable1 = new HashTable();
    let output = [];
    let preOrder1 = tree1.preOrder();
    let preOrder2 = tree2.preOrder();
    for (let i = 0; i < preOrder1.length; i++) {
      hashTable1.set(preOrder1[i], 1);
    }
    for (let i = 0; i < preOrder2.length; i++) {
      if (hashTable1.contains(preOrder2[i])) {
        output.push(preOrder2[i]);
      }
    }
    return output;
  }

}
module.exports = tree_intersection;
