// How to find duplicate elements in a given array?

//    To find duplicates in an Array, we can make use of the array filter method.
// Filter method takes 3 parameters, element, index and array on which filter is applied.
// Then we check for the indexOf each element and return whichever does not match with the index.

const duplicateArray = [14, 23, 6, 6, 14, 56, 87, 14, 56];
const duplicates = duplicateArray.filter(
  (ele, index, arr) => arr.indexOf(ele) !== index
);

console.log(duplicates);
