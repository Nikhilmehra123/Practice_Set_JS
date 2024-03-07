// Q.25   Given an array strings, reverse each word in the sentence?

//   we will make use of the string ResizeObserverSize, split and join to reverse each word in the sentence.

const str = "Welcome to ARC Tutorials";

//    expected output = "slairotut CRA ot e"
// using sampleinput and seperator.
let reverseStr = reverseStrBySeperator(str, "");

function reverseStrBySeperator(sampleInput, seperator) {
  return sampleInput.split(seperator).reverse().join(seperator);
}

console.log(reverseStr);
