var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var currentNode = Node(value);
    if (list.head === null) {
      list.head = currentNode;      
    } else {
      list.tail.next = currentNode;  
    }
    list.tail = currentNode;
  };

  list.removeHead = function() {
    var currentNode = list.head;
    delete list.head;
    list.head = currentNode.next;
    return currentNode.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    var result = true;
    while(currentNode.value !== target) {
      if (currentNode === list.tail) {
        result = false;
        break;
      }
      currentNode = currentNode.next;
    }
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
