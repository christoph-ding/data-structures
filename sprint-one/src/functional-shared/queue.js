var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.length = 0;
  someInstance.storage = {};
  someInstance.tail = 0;

  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;  
}

queueMethods.enqueue = function(val) {
  this.length++;
  this.tail++;
  this.storage[this.tail] = val;
}

queueMethods.dequeue = function() {
  var lowestKey = _.reduce(this.storage, function(lowestKey, value, currentKey) {
    if (currentKey < lowestKey) {
     lowestKey = currentKey;  
    }
    return lowestKey;
  }, this.tail)
  var result;
  if (this.length > 0) {
    result = this.storage[lowestKey];
    delete this.storage[lowestKey];
    this.length--;
  }
  return result;
}
