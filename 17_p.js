// how can we delete an element at a specific index in an array?

const studentIds = [10, 454, 45, 767, 232, 54];
const toDelete = 2;

const newStudentIds = [
  ...studentIds.slice(0, toDelete),
  ...studentIds.slice(toDelete + 1),
];
console.log(newStudentIds);
