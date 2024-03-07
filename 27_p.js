//  Filter a given object based on certain conditions and return the corresponding object?

const input = {
  students: [
    {
      studentsId: 3,
      firstName: "Nikhil",
      lastName: "Mehra",
    },
    {
      studentsId: 20,
      firstName: "Shubham",
      lastName: "Mehra",
    },
  ],
};

let op = input.students.filter(function (item) {
  return item.studentsId > 5 ? item : "";
});

console.log(op);
