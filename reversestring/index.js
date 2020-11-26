// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//#1
function reverse(str) {
  return str.split('').reverse().join('');
}

reverse('asdf')

// // //#2 - Better for loop syntax
// function reverse(str) {
//   let reversed = '';

//   for (let character of str){
//     reversed = character + reversed;
//   }

//   return reversed
// }

// //#3 - Complex solution
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '')
  
// }

module.exports = reverse;
