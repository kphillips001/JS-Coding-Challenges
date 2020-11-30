// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  //Define our constructor function executed every instance of a new node. Will be called with data and the next node. If a new node is created, and doesn't pass in a next node => default value of next to null
  constructor(data, next = null){
    //Assign to data property of node 
    this.data = data;
    //Assign next property of the node
    this.next = next
  }
}

class LinkedList {
  constructor() {
    //Initialize a head property set to null
    this.head = null;
  }
  insertFirst(data){
    //Creates a new Node from argument 'data' and assigns the resulting node to the 'head' property.
    this.head = new Node(data, this.head);
  }
  //Returns the number of nodes in the linked list.
  size(){
    // Initialize a counter variable
    let counter = 0
    // Get reference to head node of our linked list and assign to local variable called node
    let node = this.head;
    //If linked list does not have a head node assigned to it, then while loop checks to see if node is a truthy/falsy value. If this.head doesn't exist, the while loop will fail the check and won't run any code inside of it. 
    //If node does exist, node will be truthy and wil immediatly increment our counter variable because we know that at least one node exists. 
    while(node) {
      counter++;
      //Looks at the current node and look at the next property which will be another node or the value null(no other nodes to evaluate) and assign that variable to node until node evaluates to false. 
      node = node.next
    }
    return counter; 
  }
}

module.exports = { Node, LinkedList };
