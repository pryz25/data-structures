var Queue = function() {
  var newQueue = Object.create(queueMethods);// Using Object.create to make the new object
  newQueue.count = 0;
  newQueue.max = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {
  size: function () {
    return this.max - this.count;
  },
  enqueue: function (value) {
    this.storage[this.max] = value;
    this.max++;
  },
  dequeue: function () {
    var output = this.storage[this.count];
    if (this.max - this.count === 0) {
      return undefined;
    } else {
      delete this.storage[this.count];
      this.count++;
      return output;
    }
  }
};


