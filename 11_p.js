// Q.11 How can you replace an existing element in object?

const originalObj = {
  street: "1 Bangalore Street",
  city: "Bangalore",
  state: "KA",
  zip: 433434,
};

const modifiedObj = {
  ...originalObj,
  zip: 5555,
};

console.log(modifiedObj);
