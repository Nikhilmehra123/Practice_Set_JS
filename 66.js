// how do you clone an object?

// we will use the below code to clone an object.
// var obj = { a: 1, b: 2 };
// var objclone = Object.assign({}, obj);

var student = { name: "abc", id: 10, dept: "ops" };
var intermediateState = { percentage: "65" };
var newStudent = Object.assign(intermediateState, student);
console.log(newStudent);
