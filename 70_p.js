// What's the output of the following code?
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);

//  output will be = 1undefined
