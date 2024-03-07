// Q.13 how to remove an element at the end of array?

//   we can remove the element at the end of array using multiple ways
// 1. Array pop method
let employees = [1, 5, 56, 23, 56, 73, 23];
// employees.pop();
// console.log(employees);

//2. Array splice method:

// employees.splice(-1);
// console.log(employees);

//3. Array slice method - recomended way
const newEmp = employees.slice(0, -1);
console.log(newEmp);
