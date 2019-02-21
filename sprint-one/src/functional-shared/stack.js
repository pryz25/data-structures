var Stack = function() {
  var newStack = {};
  newStack.count = 0; // always have a count
  newStack.storage = {}; // always have storage for variables
   _.extend(newStack, stackMethods); // extend methods into newStack
  
  return newStack;
};

var stackMethods = {
  push(value) { // push has value
    this.storage[this.count] = value;
    this.count++;
  },
  pop() {
    if (this.count === 0) { // check if count is 0
      return undefined;
    } else {
      this.count--; // move one level down
      var output = this.storage[this.count]; // store values to be deleted
      delete this.storage[this.count]; // delete
      return output; // return deleted value
    }
  },
  size() {
    return this.count;
  }  
};








