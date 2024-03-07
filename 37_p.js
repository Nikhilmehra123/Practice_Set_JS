// How to find unique values in an array?

//   To find unique values in an array we are going to use the array filter method and check if the value is present using indexOf method.

const Ids = [12, 4, 5, 76, 87, 65, 65, 43, 24];
const sortedOrder = Ids.filter((ele, index, arr) => arr.indexOf(ele) == index);

console.log(sortedOrder);
