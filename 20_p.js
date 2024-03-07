// Q.20 how do you sort and reverse an array without changing th original array?

//    we can use slice() to make a copy then reverse() it

let students = ["a", "b", "c", "d", "e", "f", "g"];
const newStudent = students.slice().reverse();
console.log(newStudent);
