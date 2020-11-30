// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// Build a character map out of stringA & stringB
// Compare all characts inside both maps 

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB)
  // Need to pull out keys from both objects to compare the length (edge case) and see if there's any extra keys in either object. If there's a different number of characters then not an anagram
  if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
    return false;
  } 
  // iterate over one char map, look at every character inside of it then compare to other charmap. Iterating over array = use of, object, use in
  for (let char in aCharMap){
    if (aCharMap[char] !== bCharMap[char]){
      return false
    }
  }
  return true;
}

// Write helper function to build character map for given string and can use for both stringA + stingB
function buildCharMap(str) {
  const charMap = {}
// Iterate through string => every character inside there we'll add to character map. Also, add cleanup with regex and toLowerCase. Regular expression to find any character that is not a number, a character(capital or lowercase), we want to replace with nothing(empty string). then turn to lowercase()
for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
 charMap[char] = charMap[char] + 1 || 1;
}
return charMap;
}



// Solution #2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

// sort() belongs to arrays(not strings) so we have to turn string into an array with .split() and .join(), sort it, and then turn back into string

module.exports = anagrams;