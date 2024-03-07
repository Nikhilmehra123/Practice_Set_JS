//  Q .21 How can you combine two arrays into a third array using spread operator?

// To combine two or more Arrays, we will use the spread operator.

const firstArr = [1, 2, 3, 4, 5];
const secondArr = [10, 20, 30, 40, 50];

const thirdArr = [...firstArr, ...secondArr];
console.log(thirdArr);
