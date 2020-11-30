// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  //declare constructor function
  constructor() {
    //initialize an array
    this.data=[];
  }
  //add a record to the last index of an array
  push(record){
    this.data.push(record);
    //get back the most recent, or last record added
  }
  pop(){
    return this.data.pop()
  }
  //return the last record from the array without removing it
  peek() {
    return this.data[this.data.length - 1]
  }
}

module.exports = Stack;
