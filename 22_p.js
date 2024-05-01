// check whether a given string is pallindrom or not?

function isPallindromeData(str) {
  // normalize the string remove alphanumeric characters and convert it to lowercase.
  const normalizeString = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // reverse the normalize string :

  const reverseString = normalizeString.split("").reverse().join("");

  // compare the normalized string with the reverse string :
  return normalizeString === reverseString;
}
console.log(isPallindromeData("madem"));
console.log(isPallindromeData("Was it a car or a cat I saw?"));
console.log(isPallindromeData("A man, a plan, a canal, Panama"));
