// how can we insert an element at a specific index in an array?

//    we will make use of spread operator as well as array slice method

const invoiceNumbers = [12, 45, 54, 67, 2, 56, 88];
const ele = 3;
const insertAt = 2;

const newInvoiceNumbers = [
  ...invoiceNumbers.slice(0, insertAt),
  ele,
  ...invoiceNumbers.slice(insertAt),
];
console.log(newInvoiceNumbers);
