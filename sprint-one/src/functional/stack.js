var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // var minCount = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
      if (count === 0) { // if there are no values return undefined
        return undefined;
      }
      count--;
      var output = storage[count]; // store the to be deleted value
      delete storage[count]; // if there are values delete it
    //}
    return output;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
