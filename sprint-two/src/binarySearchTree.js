var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);

  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;

};
  // O(log n)
BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  if (value > this.value) {
    if (!this.right) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};
  // O(n) - whoopse
BinarySearchTree.prototype.contains = function(value) {
  var result = false;
  if (this.value === value) {
    result = true;
    // return true
  } else {
    if ( (this.left && this.left.contains(value)) || (this.right && this.right.contains(value)) ) {
      result = true;
      // return true
    }
  }
  return result;
}

// O(n)
BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};
/*  
 * Complexity: What is the time complexity of the above functions?
 */
