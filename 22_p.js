// Q.22  Write a function to check if a given string is Palindrome or not?

// We will need to write a custom method using string methods like replace, toLowerCase and reverse and finally join the string

function checkPalindrome(str) {
  str = str.replace(/\w/g, "").toLowerCase();
  //we are using regular expression here with global
  //str = str.toLowerCase(); it is also fine
  return str == str.split("").reverse().join("");
}
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("Level"));
