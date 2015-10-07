var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var tail = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    length++;
    tail++;
    storage[tail] = value;
  };

  someInstance.dequeue = function() {
    var result;
    if (length > 0) {
      var head = _.reduce(storage, function(smallestSoFar, value, key) {
        if (key < smallestSoFar) {
          smallestSoFar = key;
        }
        return smallestSoFar;
      }, tail);
      // sort storage by index key, head is smallest index key
      result = storage[head];
      delete storage[head];
      length--;
    }
    return result;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
