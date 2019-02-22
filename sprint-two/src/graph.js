

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
    // if list contains node..
        // for each edge..
            // if node hasEdge..
                // delete edge
        // delete node
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    // 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    if (this.nodeList[fromNode] === fromNode && this.nodeList[toNode] === toNode) {// check if from and to nodes are in graph
      if (this.edgeList[fromNode] !== undefined) {// check if fromNode exists in list
        this.edgeList[fromNode].push(toNode);// add toNode into value-array
      } else {// if fromNode is not in edgelist
        this.edgeList[fromNode] = [];// declare value of fromNode as array
        this.edgeList[fromNode].push(toNode);// add toNode into value
      }
      if (this.edgeList[toNode] !== undefined) {// check if toNode exists in list
        this.edgeList[toNode].push(fromNode);// add fromNode into value/array
      } else {// if toNode is not in edgelist
        this.edgeList[toNode] = [];// declare value of toNode as array
        this.edgeList[toNode].push(fromNode);// add fromNode into array
      }
    }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    // if edgeList with fromNode or toNode as key value pairs
    // if fromNode = toNode then delete
    // toNode = fromNode delete
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


