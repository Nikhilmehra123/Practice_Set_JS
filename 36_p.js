// How to find unique values form an array in sorted order?

//   We will be using the array filter method first and check if the element is present using the indexOf and then we will use the
// sort method to sort the Array Elements

const Ids = [23, 45, 64, 67, 23, 45, 98, 75, 69];

const sortedUniqueValues = Ids.filter(
  (ele, index, arr) => arr.indexOf(ele) == index
);
sortedUniqueValues.sort((a, b) => {
  return a - b;
});
console.log(sortedUniqueValues);
