// How to replace a given string in a given array?
let arr = ["ban", "bangalore", "banned", "banaras"];
arr = arr.map(function (x) {
  return x.replace(/ban/g, "ben");
});

console.log(arr);
