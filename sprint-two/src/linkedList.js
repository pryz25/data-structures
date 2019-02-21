var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.current = null;

  list.addToTail = function(value) {
    list.current = Node(value);// put value into Node constructor
    if (list.head === null) {// check if head is empty
      list.head = list.current;// if empty add to head rather than tail
      list.tail = list.current; // set both pointers to head
    } else {
      list.tail.next = list.current;// previous tail points to current node
      list.tail = list.current;// change tail pointer to current node
    }
  };

  list.removeHead = function() {
    // declare a variable, assign list.head.value to it
    var output = list.head.value;
    // reassign list.head to list.head.next
    list.head = list.head.next;
    // return variable
    return output;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
