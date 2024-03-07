// How to check if an array contains any element of another array?

//   To check if the array contains elements in another array, we will make use of the Array includes method to see if it includes
//   values form the Array.

const studentIds = [1, 2, 34, 5, 6, 7, 8];
const passedIds = [10, 40, 34, 45];

let result = studentIds.some((ele) => passedIds.includes(ele));
console.log(result);
