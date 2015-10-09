

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
  // O(1)
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
  // O(n)
Graph.prototype.contains = function(node) {
  return _.contains(this.nodes, node);
};

// ------------------------
// Removes a node from the graph.
  // O(n)
Graph.prototype.removeNode = function(node) {
  _.each(this.nodes, function(currentNode, index, nodes) {
    if (currentNode === node) {
      nodes.splice(index, 1);
    }
  });
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
  // O(n)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  _.each(this.edges, function(edge) {
    if (edge[fromNode] === toNode) {
      result = true;
    }
  });
  return result;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
  // O(1)
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(this.contains(fromNode) && this.contains(toNode)) {
    var edgeOne = {};
    var edgeTwo = {};
    edgeOne[fromNode] = toNode;
    edgeTwo[toNode] = fromNode;
    this.edges.push(edgeOne);
    this.edges.push(edgeTwo);
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes. 
  // O(n)
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var thingsToSplice;
  _.each(this.edges, function(edge, index, list) {
    if(edge[fromNode] === toNode || edge[toNode] === fromNode) {
      thingsToSplice = index;
    }
  });
  this.edges.splice(thingsToSplice, 1);

  _.each(this.edges, function(edge, index, list) {
    if(edge[fromNode] === toNode || edge[toNode] === fromNode) {
      thingsToSplice = index;
    }
  });
  this.edges.splice(thingsToSplice, 1);

  // for (var i = 0; i < thingsToSplice.length; i++) {
  //   this.edges.splice(thingsToSplice[i], 1);
  // }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
  // O(n)
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


