// Explain array.unshift() method?
// The JavaScript Array.unshift() method adds a new element to the beginning of th array.
// When doing so, the array's length property increases by one.
// After adding the new element to the beginning of the array, this method returns the new length of the array.

let students = [10, 34, 56, 23];
console.log(students.unshift(67, 45)); // this will add at the beginning.
console.log(students.push(5445)); // this will add at the end.
console.log(students);
console.log(students.length);

console.log(students.pop()); // this will remove the element from the end.
console.log(students.shift()); // this will remove the element from the beginning.
console.log(students);
