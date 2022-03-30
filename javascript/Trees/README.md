# Trees
Tree is a data structure that has many types Binary tree (k = 2) , binary search trees(left values are lesser than the root value,the right values are greater than the root value) and K-ary trees(k > 2).

# Challenge
**Node**

  - Create a Node class that has properties for the value stored in the node, the left child node, and the right child node

**Binary trees**

  - Create a Binary Tree class
  - Define a method for each of the depth first traversals:
    - pre order
    - in orde
    - post order which returns an array of the values, ordered appropriately

**Binary Search Tree**
- Create a Binary Search Tree class

  - This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
- Add
  - Arguments: value
  - Return: nothing
  - Adds a new node with that value in the correct location in the binary search tree.

- Contains
  - Argument: value
  - Returns: boolean indicating whether or not the value is in the tree at least once.

# Approach & Efficiency

## Approach
- I used recursion for the traversal methods and while loop

- if statement to check conditions .

## Efficiency
preOrder --> BigO O(n^2)

inOrder --> BigO O(n^2)

postOrder --> BigO O(n^2)

add --> BigO O(n)

contains --> BigO O(1).
