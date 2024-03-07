// How to find the count of duplicates in an array?

// This one can be really tricky and can be asked in multiple variations.
// The fix will be the same for both number array as well as array of strings.
// we will make use of the array reduce method and using an object instance we will check if the key value is present in object if yes,
//  increment or else return 1.

const months = [
  "May",
  "Feb",
  "Feb",
  "April",
  "June",
  "May",
  "Feb",
  "July",
  "December",
];

const counOfDuplicates = months.reduce((obj, month) => {
  if (obj[month] == undefined) {
    obj[month] = 1;
    return obj;
  } else {
    obj[month]++;
    return obj;
  }
}, {});

console.log(counOfDuplicates);
