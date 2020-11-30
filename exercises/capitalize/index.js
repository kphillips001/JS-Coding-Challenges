// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//First Solution
// Make an empty array 'words'
// Split the input string by spaces to get an array
// For each word in the array
  // Uppercase the first letter of the word
  // Join first letter with rest of the string
  // Push results into 'words' array
// Join 'words' into a string and return it


function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')){
    words.push(word[0].toUpperCase() + word.slice(1))//Gives us everything from index 1 on to last character of the word
  }
  return words.join(' ');
}

// Second Solution
// Create an empty scring called 'result' -> Create 'result' which is the first character of the input string capitalized
  // IF the character to the left is a space
    // Capitalize it and add it to 'result'
  // ELSE 
    // Add it to 'result'

// function capitalize(str){
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     // left of current character
//     if(str[i - 1] === ' '){
//       // Add onto result string
//       result+= str[i].toUpperCase()
//       // If character is not a space => add onto result string
//     } else {
//       result +=str[i]
//     }
//   }
//   return result;
// }

module.exports = capitalize;
