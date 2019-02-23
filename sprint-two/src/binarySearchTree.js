var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};


BinarySearchTree.prototype.insert = function(value) {
  if (value === this.value) { // if value is equal to node's value
    return; // return;
  }
  if (value > this.value) { // if value is greater than node's value...
    if (this.right === null) {// if right is null
      this.right = BinarySearchTree(value); // create a new BinarySearchTree object with value at right property
      return; // return
    } else { // else
      this.right.insert(value); // call insert method on right node with value
    }
  } else { // else...
    if (this.left === null) { // if left node is null...
      this.left = BinarySearchTree(value); // create a new BinarySearchTree object with value at left property
      return; // return
    } else { // else
      this.left.insert(value); // call insert method on left node with value
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  var current = this; // declare variable to represent current node
  while (current !== null) { // while loop left and right are not null
    if (current.value === value) { // check if variable value equals input value
      return true; // if equals then true
    } else if (value > current.value) { // else check if value is > variable value
      current = current.right; // if true then move right
    } else {
      current = current.left; // else move left
    } 
  } 
  return false; // final return false
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  cb(this.value); // run cb on tree value
  if (this.left) { // if left is not null
    this.left.depthFirstLog(cb); // tree is now tree left run DFL
  } 
  if (this.right) { // else if right is not null
    this.right.depthFirstLog(cb); // tree is now right run DFL
  } 
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Insert is logarithmic
 * Contains is logarithmic
 * DFL is linear
 */
