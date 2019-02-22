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
    if (list.head === null) {
      return undefined;
    } else {
      var output = list.head.value;
      // reassign list.head to list.head.next
      list.head = list.head.next;
      // return variable
      return output;
    }
  };

  list.contains = function(target) {
    list.current = list.head;// start with head value
    while (list.current !== null) {// check if target matches value
      if (list.current.value === target) {
        return true;// if so return true
      } else {
        list.current = list.current.next;// if not go to next position
      }
    }
    return false;  // if so return true
    // return false in 'outside' scope
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
 * addToTail is Constant
 * removeHead is Constant
 * contains is Linear
 */
