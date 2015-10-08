var Queue = function() {
  this.length = 0;
  this.tail = 0;
  this.storage = {}; 
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.size = function() {
  return this.length;
}
Queue.prototype.enqueue = function(val) {
  this.tail++;
  this.storage[this.tail] = val;
  this.length++;
}
Queue.prototype.dequeue = function() {
  var result;
  if (this.length > 0) {
    var lowestKey = _.reduce(this.storage, function(lowestKey, value, key) {
      if (lowestKey > key) {
        lowestKey = key;
      }
      return lowestKey;
    }, this.tail);
    result = this.storage[lowestKey]; 
    delete this.storage[lowestKey];
    this.length--;
  }
  return result;
}


