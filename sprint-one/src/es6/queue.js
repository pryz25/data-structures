class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.max = 0;
    this.min = 0;
  }
  
  size() {
    return this.max - this.min;
  }

  enqueue(value) {
    this.storage[this.max] = value;
    this.max++;
  }

  dequeue() {
    var output = this.storage[this.min];
    if (this.max - this.min === 0) {
      return undefined;
    } else {
      delete this.storage[this.min];
      this.min++;
      return output;
    }
  }
}
