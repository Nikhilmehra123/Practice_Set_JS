// How can you add an element to an object?
// with the help of spread operator we can make it possible.

const originalObj = {
  street: "1 Bangalore Ave",
  city: "Bangalore",
  state: "KA",
  zip: 561000,
};

const modifiedObj = {
  ...originalObj,
  country: "India",
  name: "Nikhil",
};

console.log(modifiedObj);
