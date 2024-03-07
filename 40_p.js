// Explain the difference between Object.freeze() vs const?

//  1. const applies to bindings ("variables"). It creates an immutable bindings, i.e. you cannot assign a new value to the bindings.
//  2. Object.freeze works on values, and more specifically, object values. It makes an object immutable, i.e. you cannot change its properties.

// const month = "July";
// month = "feb";
// console.log(month);
//  it gives an error.

//  "use strict"
// if we are using this it will start giving an error
let person = {
  name: "ARC Tutorials",
};

Object.freeze(person);
person.name = "Hello World";
console.log(person);
