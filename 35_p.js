// How to find maximum value in a numbered array?

// To find maximum value in a numbered array, we are implementing a method which will find Max value.
// Inside the method, we are making use of the Array reduce method and for each element, we will check if the value is greater than the previous one.

const numberArr = [23, 45, 6, 78, 98, 65, 43, 2, 34, 73, 109];

function findMaxValue(arr) {
  return arr.reduce(function (prev, curr) {
    return prev > curr ? prev : curr;
  });
}

console.log(findMaxValue(numberArr));
