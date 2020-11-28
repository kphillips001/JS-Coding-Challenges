// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Create an array and assemble all of the numbers up tp entry n and then return it

//Iterative solution - runtime is linear
function fib(n) {
  // There's no previous two entries to add together (0, 1), so manually insert 0, 1
  const result = [0, 1];
  // Use for loop to iterate from i=2 (start off at 2)
  for (let i = 2; i<=n; i++){
  // Pull out the previous two records in the result array, add them together and push into result set
  const a = result[i - 1] // can also use result.length - 1
  const b = result[i - 2]

  result.push(a + b)
  }
  // This will generate our fib series up to n. Now return result[n]
  return result[n] // can also use result[result.length - 1]
}

//Recursive Solution
function fib(n) {
  if(n < 2){
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
