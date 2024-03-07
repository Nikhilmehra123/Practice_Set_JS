const address = {
  street: "1 Bangalore ave",
  city: "Bangalore",
};

const extendedAddress = {
  state: "KA",
  country: "India",
};

const combinedAddress = {
  ...address,
  ...extendedAddress,
};

console.log(combinedAddress);
