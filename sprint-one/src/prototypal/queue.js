var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.length = 0;
  instance.tail = 0;
  instance.storage = {};

  return instance;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  size: function() {
    return this.length;
  },
  enqueue: function(val) {
    this.tail++;
    this.storage[this.tail] = val;
    this.length++;
  },
  dequeue : function() {
    var lowestKey = _.reduce(this.storage, function(lowestSoFar, value, currentKey) {
      if (currentKey < lowestSoFar) {
        lowestSoFar = currentKey;
      }
      return lowestSoFar;
    }, this.tail);
    var result;
    if (this.length > 0) {
      result = this.storage[lowestKey];
      delete this.storage[lowestKey];
      this.length--;
    }
    return result;
  }
};


