// how can we replace an Element at a specific index in an array?

// we will need to make use of spread operator as well as array slice method

const invoiceNumbers = [23, 45, 64, 67, 7, 76, 98];
const replaceAt = 3;
const replaceNum = 34;

const newInvoiceNumbers = [
  ...invoiceNumbers.slice(0, replaceAt),
  replaceNum,
  invoiceNumbers.slice(replaceAt + 1),
];

console.log(newInvoiceNumbers);
