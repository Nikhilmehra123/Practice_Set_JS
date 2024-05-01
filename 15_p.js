// Q.15 how can we clone an object?

//we can clone an object in multiple ways

//   1. object.assign

const employees = {
  id: 10,
  name: "Ram",
  dept: "computer science",
};

// const newEmployeeObj = Object.assign({}, employees);
// console.log(newEmployeeObj);

// 2.spread operator:
const employeesObj = { ...employees };
console.log(employeesObj);
