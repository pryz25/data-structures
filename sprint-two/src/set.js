var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item; // declare property and value as item
};

setPrototype.contains = function(item) {
  for(let key in this._storage) {// for every item in storage
    if (key === item) {// if the item is found...
      return true; // return true
    }
  }
  return false; // return false
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
