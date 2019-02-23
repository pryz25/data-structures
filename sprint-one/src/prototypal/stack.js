var Stack = function() {
  var newStack = Object.create(stackMethods) // Create a new object with the same stackMethods
  newStack.count = 0; // need a counter
  newStack.storage = {}; // need a place to store values
  return newStack;
};

var stackMethods = {
  size: function () {
    return this.count;
  },
  push: function (value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function () {
    if (this.count === 0) {
      return undefined;
    } else {
      this.count--;
      var output = this.storage[this.count];
      delete this.storage[this.count];
      return output;
    }
  }
};


