// Learn and pracitce how to write "good,minimum and quality code"

// 1. By using the Set Object Type
// The set object type was introduced in ES6 along with spread operator.

/*const users = ["ram", "mark", "lisa", "jenny", "lakshmi", "lisa"];
const uniqueValues = [...new Set(users)];
console.log(uniqueValues);
*/

// 2.Every and Some methods in Array
// Every method is used to check whether all the elements of array satisfy the conditions or not.
// Some method is used to check whether "some" elements of array satisfy the conditions or not.
// also check out other array methods like map,filter etc.

// // every
// const taxValues = [40, 45, 30, 45, 53];
// const tax = taxValues.every(maxValue);
// function maxValue(val) {
//   return val >= 30;
// }

// // some
// console.log(tax);
// const taxValues1 = [10, 45, 30, 45, 53];
// const tax1 = taxValues.some(maxValue);
// function maxValue(val) {
//   return val >= 30;
// }
// console.log(tax1);

//3. Convert to boolean.
//  Simplest and yet very useful
// Simply use the navigation operator for converting values into Boolean

// Example:
// const isTrue = !0;
// console.log(isTrue);

// 4. Conditionally setting a variable.
// Every time you have an itch to write if-else -think of conditional statements!
//const isFlaged = settings.isAchieve || 'false'
// const user = {
//   name: "Nikhil",
// };
// const conditionalStatement = user.name || "";
// //default values
// console.log(conditionalStatement);

//5. Convert Number to String.
// To quickly convert a number to string just append ""
// const str = 10 + "";
// console.log(str);
// console.log(typeof str);\

//6. Converting String to Number.
//  to quickly convert a string to Number.
// let intVal = "20";
// intVal = +intVal;
// console.log(intVal);
// console.log(typeof intVal);
