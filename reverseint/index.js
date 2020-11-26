// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//First - turn n into string, then split into array, then reverse, then join
//Second - need to return a number - assign to a variable and then parseInt
//Third - need to work on the negative * -1 or use Math.sign()

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}


module.exports = reverseInt;
