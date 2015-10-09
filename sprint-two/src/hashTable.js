

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
// O(1)
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];

  if (this._storage[index]) {
    debugger;
    if(!(this.retrieve(k))) { 
      this._storage[index].push(tuple);
    } else {
      var currentBucket = this._storage[index]; 
      for (var i=0; i<currentBucket.length; i++) {
        if (currentBucket[i][0] === k) {
          currentBucket[i][1] = v;
        }
      }    
    }
  } else {
      var bucket = [];
      bucket.push(tuple);
      this._storage[index] = bucket;
  }
};

// O(1)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage[index] 
  for (var i=0; i<currentBucket.length; i++) {
    if (currentBucket[i][0] === k) {
      return currentBucket[i][1];
    }
  }
  return undefined;
};

// O(1)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage[index];
  for (var i=0; i<currentBucket.length; i++) {
    if (currentBucket[i][0] === k) {
      currentBucket[i][1] = null;
    }
  } 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


