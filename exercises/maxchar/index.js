// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Also known as:
// What is the most common character in the string?
// Does string A have the same characters as string B (is it an anagram)?
// Does the given string have any repeated charaters in it?

//1 Declare new variable charMap which is an empty object
//2 Iterate over str and use that to build out the charMap. 
//3 Every character we receive, we'll add entry to charMap. If entry exists => just add one to the number. 
//4 Declare 2 helper variables then iterate through charMap. If we find character that has more uses than max. Set max to that new value then set maxChar to the character that was responsible for that number of uses. 
//5 If charmap at particular character [char] > max, update max number and max character. 

function maxChar(str) {
  // build out charMap
  const charMap = {}

  //helper variables
  let max = 0
  let maxChar = '';

  for (let char of str){
    if(charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }
  //new loop to iterate through the character map(for in loop)
  for (let char in charMap){
    if(charMap[char] > max){
      max = charMap[char];
      maxChar = char; 
    }
  }
  return maxChar
}

module.exports = maxChar;
