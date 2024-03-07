// Q.14 how to add an element at the beginning of array?

//    we can add the element at the beginning using multiple ways

//   1. ArrayUnshift Method.

const employees = [5, 4, 34, 45, 34, 45];
const ele = 2;
// employees.unshift(ele);
// console.log(employees);

// 2. spread operator

const newEmp = [ele, ...employees];
console.log(newEmp);
