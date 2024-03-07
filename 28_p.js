// How can you extract a few fields from the given JSON object and form a new array?

//   we will need to use the map() method, we will pass the element and then return only the required key from that element.

const input = {
  students: [
    {
      id: 10,
      name: "Nikhil",
      email: "mehranikhil839@gmail.com",
    },
    {
      id: 12,
      name: "Shubham",
      email: "mehranikhil839@gmail.com",
    },
    {
      id: 13,
      name: "Vipin",
      email: "mehranikhil839@gmail.com",
    },
  ],
};

const op = input.students.map(function (item) {
  let stuObj = {
    name: item.name,
    id: item.id,
    email: item.email,
  };
  return stuObj;
});

console.log(op);
