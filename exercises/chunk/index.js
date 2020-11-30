// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(array, size) {
  //Create empty array to hold chunks
  const chunked = [];
  //For each element in the 'unchunked array
  for (let element of array) {
    //Retrieve the last element in 'chunked'
    const last = chunked[chunked.length - 1];
    //If last element does not exist, or if its lengh is equal to chunck size
    if (!last || last.length === size) {
      //Push a new chunk into 'chunked' with the current element
      chunked.push([element]);
      //Else add the current element into the chunk
    } else {
      last.push(element);
    }
  }

  return chunked;
}


// Second Solution
// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;

//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }

//   return chunked;
// }
  

module.exports = chunk;
