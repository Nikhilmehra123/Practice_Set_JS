// How to find the average of the numbers in the numbered array?

//   1. Using the array reduce method, we will get the total count first, and then we will get the total length of the array.
//   2. Divide the total sum with the length of the array and we get the average of the numbers in the Array

const studentIds = [59, 53, 23, 1, 67, 84, 10];
const totalCount = studentIds.reduce((a, b) => a + b, 0);
console.log(totalCount);
const arrLength = studentIds.length;
console.log(arrLength);
console.log(totalCount / arrLength);
