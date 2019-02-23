

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) { // if there's nothing in index
    this._storage.set(index, []); // create object 
  }
  for (var i = 0; i < this._storage.get(index).length; i++) { // for each item in our bucket...
    if (this._storage.get(index)[i][0] === k) { // if the zeroth index of the tuple we're on is equal to k...
      this.remove(k); // this.remove(k)
    }
  }
  this._storage.get(index).push([k, v]); // add k-v pair to index object
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; this._storage.get(index).length; i++) { // get value that's at the storage index and return it
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.get(index); // delete the value at out given index in our storage array
  for (var i = 0; this._storage.get(index).length; i++) { // get value that's at the storage index and return it
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index).splice(i, 1);
    }
  }  
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert runs in linear time
 * retrieve runs in linear time
 * remove runs in linear time
 */


