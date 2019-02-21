var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.max = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.size = function () {
  return this.max - this.count;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.max] = value;
  this.max++;
};

Queue.prototype.dequeue = function () {
  var output = this.storage[this.count];
  if (this.max - this.count === 0) {
    return undefined;
  } else {
    delete this.storage[this.count];
    this.count++;
    return output;
  }
}
