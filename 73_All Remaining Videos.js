// Q. Of what JavaScript type is an Array?
// type of array is always an object.
// whenever we are talking about array and array datatype it is always an object type.
// let students = [10, 9, 8];
// console.log(students);
// console.log(typeof students);

// Q. How to detect client's operating system?
// In order to detect the operating system on the client machine, the navigator.platform string (property) should be used.
// console.log(navigator.vendor);
// console.log(navigator.platform);
// console.log(navigator.product);
// console.log(navigator.productSub;
// console.log(navigator.permissions);
// console.log(navigator.appName);
// console.log(navigator.appVersion);
// console.log(navigator.appCodeName);

// Q. What do mean by NULL in Javascript?
// The null value is used to represent no value or no object.
// It implies no object or null string. no valid Boolean value, no number and no arry object.
// let s = null;
// console.log(typeof s);

//   Q. What would be the result of 13+6+"2"?
// console.log(13 + 6 + "2");

// Q. What is the difference between the operators "==" and "==="?
// The main difference between "==" and "===" operator is that formerly compares variable bu making type correction
// e.g. If you compare a number with a string with numeric literal, == allows that, but === doesn't allow that,because it not only
// checks the value but also type of two variable, if two variables are not of the same type "===" return false, while "==" return true.

// let tax = 10;
// var taxStr = "10";
// if (tax === taxStr) {
//   console.log("values are matching");
// } else {
//   console.log("Values not matching");
// }

// Q. What is typeof operator in javaScript ?
// the typeof operator is used to get the data type of its operand.
// the operand can be either a literal or a data structure such as a variable, a function, or an object.
// It is a unary operator that is placed before its single operand, which can be of any type.
// Its value is a string indicating the data type of the operand.

// Q. what is the purpose of "this" operator in javascript?
// The JavaScript this keyword refers to the object it belongs to.
// This has different values depending on where it is used. In a method, this refers to the owner object and in a function, this
// refers to the global object.
// class c1 {
//   tax = 10;
//   calculateTax() {
//     console.log("Tax is" + this.tax);
//     console.log("this is a funtion calculateTax");
//   }
//   readCredential() {
//     this.calculateTax();
//     console.log("this is function readCredential");
//   }
// }
// let c = new c1();
// c.readCredential();

// Q. How can you create an object in JavaScript ?
// e.g.
// let contact = {
//   name: "ARC",
//   id: 10,
//   preferences: {
//     pageCount: 100,
//     defaulSort: "lastName",
//   },
//   contactMechanism: [
//     {
//       phone: 103343,
//       type: "Direct",
//     },
//     {
//       phone: 4343555,
//       type: "Mobile",
//     },
//   ],
// };
// console.log(contact);

//Q. What are the different data type in JavaScript?
// different types of data types available in javascript are as follows:
//Undefined
//Null
//Boolean
//String
//Symbol
//Number
// //Object
// let tax = 40.67;
// let isActive = false;
// let salary;
// let isTaxable = null;
// let city = "Hyderabad";
// console.log(salary);
// console.log(isTaxable);
// console.log(isActive);
// console.log(city);

// Q. What is Spread Operator?
// Spread operator allows an iterable to expand in places where 0+ arguments are expected.
// It is mostly used in the variable array where there is more than 1 values are expected.
// It allows us the privilege to obtain a list of parameters from an array.
//  Syntax : var variablename1 = [...value];
// let student = [1, 2, 6, 7, 8, 9, 9];
// let courses = [4, 5, 6];
// let lab = [...student, ...courses];
// console.log(lab);

// Q.  What is the Difference between var, let and const.
// Var declarations are globally scoped or funtion scoped while let and const are block scoped.
// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared
// const variables can neither be updated nor re-declared.
// They are all hoisted to the top of their scope. But while var variables are inittialized with undefined, let and const variables
// are not initialized.
// While var and let can be declared without being initialized, const must be initialized during
// declaration.

// var example:
// var a = 10;
// function f1() {
//   a = 30 + a;
//   console.log("Inside Function" + a);
// }
// console.log(a);
// f1();
// console.log(a); // it will not through an error because it is a global scoped.
// var a = 30;
// console.log(a);

// let example:
// let b = 10;
// function f2() {
//   b = 30 + b;
//   console.log("Inside Function" + b);
// }
// console.log(b);
// f2();
// console.log(b);
// let b = 30; // it will throw an error because it is a block scoped. can not be redeclared.
// console.log(b);

// const example:
// const c = 10;
// function f3() {
//   c = 30 + c;
//   console.log("Inside Function" + c);
// }
// console.log(c);
// f3();
// console.log(c);
// const c = 30; // it will  throw an error because it is a block scoped. can not be redeclared nor re assigned.
// console.log(c);


