// write an add method using javasript currying concept?

function add(x) {
  let sum = x;
  function resultFn(y) {
    sum += y;
    return resultFn;
  }
  resultFn.valueOF = function () {
    return sum;
  };
  return resultFn;
}

console.log(add(3)(4)(9)(897).valueOF());
