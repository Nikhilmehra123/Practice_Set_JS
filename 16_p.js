// how can we delete a specific element in an Array?

// we will need to make use of spread operator as well as array filter methods

const original = [1, 2, 3, 4, 5];
const deleteEl = 3;
const newArr = original.filter((item) => item !== deleteEl);
console.log(newArr);
