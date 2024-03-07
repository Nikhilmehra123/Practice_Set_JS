// Given two strings, how can you check if the strings are anagram for each other?

// to check if the given strings are anagram or Not we will implement a custom method and write the logic as given below.

//  1. First we will make them lowercase
//  2. Then we will sort the strings.
//  3. And finally we will join them back.
//  4. The only thing then pending will be to compare the strings.

const string1 = "Mary";
const string2 = "Army";

function checkAnagram(string1, string2) {
  var a = string1.toLowerCase();
  var b = string2.toLowerCase();

  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a == b;
}

console.log(checkAnagram(string1, string2));
