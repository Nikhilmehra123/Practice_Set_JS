// How to Sort a Number Array ?

//   To sort an array of numbers we will have to use a comparison method inside the sort method.

const unsortedArray = [20, 10, 4, 29, 63, 72, 82];

unsortedArray.sort((a, b) => {
  return a - b;
});
console.log(unsortedArray);
