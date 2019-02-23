

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) { // if there's nothing in index
    this._storage.set(index, {}); // create object 
    this._storage.get(index)[k] = v; // with k-v pair k:v
  } else {  
    this._storage.get(index)[k] = v; // add k-v pair to index object
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k]; // get value that's at the storage index and return it
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(index)[k]; // delete the value at out given index in our storage array
};



/*
 * Complexity: What is the time complexity of the above functions?
 * 
 */


