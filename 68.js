// What is NaN? What is its type?
// The NaN property represents a value that is "not a number".
// This special value results from an operation that could not be performed either because one of the operands was non-numeric
// (e.g., "abc"/4), or because the result of the operation is non-numeric.
//while this seems straightforward enough, there are a couple of somewhat surprising characteristics of NaN
//  that can result in hair-pulling bugs if one is not aware of them.
// for one thing, although NaN means "not a number", its type is, believe ot or Notification, Number:
console.log(typeof NaN === "number");
// Additionally,NaN compared to anything - even itself! - is false:
console.log(NaN === NaN);
