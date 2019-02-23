var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.count = 0;
  newQueue.max = 0;
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {
  size: function () { // need size function
    return this.max - this.count;
  },
  enqueue: function (value) { //need enqueue
    this.storage[this.max] = value; // add value to storage
    this.max++; // increase max count
  },
  dequeue: function () { // need dequeue
    var output = this.storage[this.count];// gain min value pair
    if (this.max - this.count === 0) {// determine if any keys are in storage
      return undefined;
    } else {  // remove the loweest count key-value
      delete this.storage[this.count];
      this.count++;// increase count
      return output;
    }
  }
};

