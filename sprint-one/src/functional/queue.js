var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;
  var minCount = 0;
  someInstance.enqueue = function(value) {
    // Look at list of keys
    // New key is +1 last key
    // put value under key
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var output = storage[minCount];
    if (count - minCount === 0) {
      return undefined;
    } else {
      delete storage[minCount];
      minCount++;
      return output;
    }
  };

  someInstance.size = function() {
    return count - minCount;
  };

  return someInstance;
};
