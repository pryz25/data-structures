var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  
  _.extend (newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = Tree(value);// create new Tree with value
  this.children.push(tree);// push new Tree with this operator

};

treeMethods.contains = function(target) {
  if (this.value === target) {// check target against first tree
    return true;// if match then return true
  } else if (this.children.length > 0) {// else check if any children
    for (var i = 0; i < this.children.length; i++) { // if none then return false
      if (this.children[i].contains(target)) {
        return true;
      } // if yes iterate contains over length
    }
  } 
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild is constant
 * contains has to be linear
 */
