/* 
HOW BSTS WORK

Every parent node has at most two children
Every node to the left of a parent node is always less than the parent
Every node to the right of a parent node is always greater than the parent
*/

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/* 
Lots of different applications as well!

Decision Trees (true / false)
Database Indicies
Sorting Algorithms
*/
