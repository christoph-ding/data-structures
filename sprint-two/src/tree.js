var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};
//O(1)
treeMethods.addChild = function(value) {
  // your code here
  var child = Tree(value);
  this.children.push(child);
  // newTree.children = null;  // fix me
  
};
//O(n)
treeMethods.contains = function(target) {
  var result = false;
  if (this.value === target) {
    result = true;
  } 
  _.each(this.children, function(child) {
    if (child.contains(target)) {
      result = true;
    }
  });

  return result;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
