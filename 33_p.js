// how can you uppercase the first character in a string array?

// 1. To capitalize the first character of every element in the array, we will have to get the first character using charAt method.
// 2. And then apply toUpperCase and finally we will concatenate all the other characters using substr(1)

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// let updatedDays = [];
for (let day of days) {
  day = day.charAt(0).toUpperCase() + day.substring(1);
  console.log(day);
  //    if we want this in the form of array then we will do this.
  //   updatedDays.push(day);
}

console.log(updatedDays);
