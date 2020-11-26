// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //First - reverse the string
  const reversed = str.split('').reverse().join('')
  //Boolean statement
  return str === reversed;
}

function palindrome(str) {
  //Use array helper => .every
  //Turn string into array => str.split
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
