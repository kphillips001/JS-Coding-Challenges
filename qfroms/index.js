// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  
  constructor() {
    //Need to create two stacks
    this.first = new Stack()
    this.second = new Stack()
  }
  //implement add method
  add(record) {
    //Push record into first stack
    this.first.push(record)
  }
  //implement the remove method
  remove() {
    //iterate through all of the records in stack A, pop out records in stack A and push into stack B. Have to use the peek method to tell if anymore records left in stack A. As long as there are records, will continue to peek, pop, and push (to stack B). Need to use a while loop. When loop complete, all records will be in stack B. 
    while(this.first.peek()){
      this.second.push(this.first.pop())
    }
    //To return record we need, pop out of stack B. Need to pop the other records we don't need back over to stack A. 
    const record = this.second.pop()
    while(this.second.peek()){
      this.first.push(this.second.pop())
    }
    return record; 
  }
  peek() {
    while (this.first.peek()){
      this.second.push(this.first.pop())     
    }
    const record = this.second.peek()

    while(this.second.peek()){
      this.first.push(this.second.pop())
    }
    return record; 
  }
}

module.exports = Queue;
