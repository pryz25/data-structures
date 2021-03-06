

// Instantiate a new graph
var Graph = function() { 
  this.nodeList = {};
  this.edgeList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeList[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodeList[node] !== undefined) {
    return true;
  }

  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodeList[node] !== undefined) { // if node is in nodeList...
    delete this.nodeList[node]; // remove node from nodeList
    delete this.edgeList[node]; // remove node from edgeList
    for (let edge in this.edgeList) { // look up each other edgeList key...
      for (let i = 0; i < this.edgeList[edge].length; i++) {
        if (this.edgeList[edge][i] === node) {// go through each array looking for it
          this.edgeList[edge].splice(i, 1);
        }
      }
    }
  } // delete if node is found
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.edgeList[fromNode] !== undefined) { // if fromNode is in edgeList...
    for (let i = 0; i < this.edgeList[fromNode].length; i++) { // for each value in fromNode property...
      if (this.edgeList[fromNode][i] === toNode) { // check if toNode value is in the array...
        return true;// return true
      }
    }
  }
  return false;// return false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.nodeList[fromNode] === fromNode && this.nodeList[toNode] === toNode) { // check if from and to nodes are in graph
    if (this.edgeList[fromNode] !== undefined) { // check if fromNode exists in list
      this.edgeList[fromNode].push(toNode); // add toNode into value-array
    } else { // if fromNode is not in edgelist
      this.edgeList[fromNode] = []; // declare value of fromNode as array
      this.edgeList[fromNode].push(toNode); // add toNode into value
    }
    if (this.edgeList[toNode] !== undefined) { // check if toNode exists in list
      this.edgeList[toNode].push(fromNode); // add fromNode into value/array
    } else { // if toNode is not in edgelist
      this.edgeList[toNode] = []; // declare value of toNode as array
      this.edgeList[toNode].push(fromNode); // add fromNode into array
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edgeList[toNode].length; i++) { // look into toNode arrays in edge list
    if (this.edgeList[toNode][i] === fromNode) { // find fromNode in toNode
      this.edgeList[toNode].splice(i, 1); // delete fromNode
    }
  } 
  for (var j = 0; j < this.edgeList[fromNode].length; j++) { // look into fromNode array
    if (this.edgeList[fromNode][j] === toNode) { // find toNode in fromNode
      this.edgeList[fromNode].splice(j, 1); // delete toNode
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodeList) { // for each key in nodelist
    cb(this.nodeList[key]);// run function through
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode is constant
 * contains is constant
 * removeNode is linear
 * addEdge is constant
 * removeEdge is linear
 * forEachNode is linear
 */


