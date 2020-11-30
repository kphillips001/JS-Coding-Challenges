// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  //Will be executed eveytime we create a new instance of a node. If anyone makes a node but does not pass a next one to link onto => default to null
  constructor(data, next = null){
    //Assign to the data property of the node
    this.data = data;
    //Assign the next property of the node
    this.next = next;
  }
}

class LinkedList {}

module.exports = { Node, LinkedList };
