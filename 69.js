// Will the below 2 functions return same output?
function foo1() {
  return {
    bar: "hello",
  };
}

function foo2() {
  return;
  {
    bar: "hello";
  }
}

console.log(foo1);
// they both are different just a matter of next line after return in second funtion.
