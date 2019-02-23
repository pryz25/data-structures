var Stack = function() {
  this.storage = {};
  this.count = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.size = function () {
  return this.count;
};

Stack.prototype.push = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function () {
  if (this.count === 0) {
    return undefined;
  } else {
    this.count--;
    var output = this.storage[this.count];
    delete this.storage[this.count];
    return output;
  }
}