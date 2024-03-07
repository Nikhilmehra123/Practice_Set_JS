// how to find minimum value in a numbered array?

// 1. To find minimum value in a numbered Array, we are implementing a method which will find minimum vlaue.
// 2. Inside the method,we are making use of the Array reduce method and for each element,we will check if the value is less than the previous one.

const studentIds = [10, 5, 1, 7, 8, 13, 43, 75];

function findMinimum(arr) {
  return arr.reduce(function (p, v) {
    return p < v ? p : v;
  });
}

console.log(findMinimum(studentIds));
