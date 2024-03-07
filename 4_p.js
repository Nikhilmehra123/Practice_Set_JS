// Explain weakSet in javasript with example?

let obj1 = {
  message: "hey this is Nikhil Mehra",
  phone: "6265862343",
};
let obj2 = {
  country: "india",
  phone: "7581028605",
};

const newSet3 = new WeakSet([obj1, obj2]);
console.log(newSet3);

//  this code will work on the browser so can run it on browsers console.
// also we can create objects dynamically:
const newSet4 = new WeakSet([{ hello: "welcome" }]);
console.log(newSet4);
