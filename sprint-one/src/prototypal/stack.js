var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);

  instance.length = 0;
  instance.storage = {};

  return instance;
};

var stackMethods = {
  size : function() {return this.length;},
  push : function(val) {
      this.length++;
      this.storage[this.length] = val;
    }, 
  pop : function() {
    var result;
    if (this.length > 0) {
      result = this.storage[this.length];
      delete this.storage[this.length];
      this.length--;
    }
    return result;
  }
};


