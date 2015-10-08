var Stack = function() {

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.length = 0;
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};
stackMethods.size = function() {
  
  return this.length;
};

stackMethods.push = function(val) {
  this.length++;
  this.storage[this.length] = val;
};

stackMethods.pop = function() {
  var result;
  if (this.length>0) {
    result = this.storage[this.length];
    delete this.storage[this.length];
    this.length--;
  }
  console.log(result);
  return result;
};


