// Q.1 What is Doctype in HTML?
// Doctype tells the browser which version of Html standard is used and how to render the page
// Doctype ensures that the browser makes a best-effort attempt at following the relevant specifications, rather than using a different rendering mode that is incompatible with some specifications.

// Q.2 What are data attributes?
// Data attributes are used to store custum data directly inside Html pages.
// They can be easily accessed via CSS and JavaScript.
// Common examples are data-dismiss, data-target, data toggle etc.
// Most modern frameworks will have these attributes defined for components.

// Q.3 What is SVG?
//  SVG stands for scalable vector graphics, which is used for displaying the vector graphics on the page.
// The most important thing about SVG is the image does not loose quality when we zoom in or zoom out.
// We can easily customize the SVG like color, size etc.
// Bootstrap 5 icons are icons which are completely designed using SVG.

// Q.4 What is the difference between display:none and visibility:hidden?
// When we use display: none - the element is not displayed in page and the element will not occupy any space on the page.
// When we use visibility:hidden - the element will not be displayed in page but the element will still occupy the space in the page.

// Q.5 Difference between sessionStorage and localStorage?
// sessionStorage is available only when a browsers tab is open
// E.g user login details, tokens etc.
// localStorage is available even after closing and opening the browser window.
// Accept cookies etc.

// Q.6 Name few new features of HTML5?
// <header>
// <nav>
// <section>
//<footer>
// <aside>
// <article>

// New Form Controls
// Email.
// url
// Date
// Calender

// Q.7  What is a CSS Preprocessor?
// Css preprocessor is a tool which allows you to create CSS mode much faster in a more structured manner
// Css Preprocessor extends Css by allowing us to add variable, mixins, partials.
// Its powerful and helpful when working on creating custom themes, and reusable CSS code.

// Q.8 What is the difference between <ul> and <ol>?
//<ul> element helps in creating a unordered list.
//<ol> tag helps us create a ordered list .
// By default it is numbered list.

// Q.9 What tags are used to make a table?
//<table> - used to define the table in html page.
//</thead> - represents the table header in table.
// <th>
// <tr> represents a row in table.
// <td> represents a columun in table.
// <tfoot> used to define the table footer.

// Q. 10 Difference between == and === in JavaScript ?
// the == is equality check operator. Check if the values are matching.
// the === is strict equality and type check operator.check both the value and data type of the comparing elements.

// Q.11 Different types of loops in JavaScript?
//  for: loops through a code for x number of times in a repetition.
//  for..in: loops through an object for properties
//  while: goes through inner code when a specified condition is true
//  do..while: goes through the inner code while a condition is true.

// Q.12 Difference between let, const ang var in JavaScript?
// var: can be re-defined and re-assigned. Is global scope.
// let: can be re-assingned but cannot be re-defined. Scope is in the block defined.
// const: cannot be re-defined nor can be re-assigned.

// Q.13 What is arrow funtion in JavaScript?
// An arrow function expression is a compact alternative to a traditional funtion expression.a
// function(a,b){
//     return a + b + 100;
// }
// // Arrow function
// (a,b)=> a+b;

// Q.14 Difference between Arrow funtion and a Funtion in javaSript?
// An arrow funtion is a compact alternative to a traditional function expression.
// Arrow function has lot of limitation that a traditional function does not have.
// for eg. we cannot use this operator inside the arrow function.
// Not suitable for apply, call or bind as it requires establishing a scope.

// Q. 15
// What is use strict in JavaScript.
// the use strict directive was new in ECMAScript version 5.
// t is not a statement, but a literal expression, ignored by earlier versions of JavaSript.
// The purpose of use strict is to indicate that the code should be executed in strict mode.
// With strict mode, you can not, for example, use undeclared variables.
// All modern browsers support use strict except internet explorer 9 and lower.

// Q.15 What is meta data in HTML?
// Meta  data is a set of additional HTML tags for specifying the additional information about the web page.
// The meta data is very helpful and extremely critical for SEO optimization.
//  some of the meta data tags are:
//    Name
//    Author
//    Keywords

// Q.16 What is "canvas" in HTML?
// Easy and powerful way to draw diagrams in HTML.
// Used for drawing graphs, photo compositions, create animations etc.

// Q.17 What is web worker?
// web worker is a piece of javascript code that works in the background.
// web workers are a simple means for web content to run scripts in background.
// the worker thread can perform tasks without interfering with the user interface. In AudioDestinationNode, the can
// perform I/O using XMLHttpRequest (although the responseXML) and channel attributes are always null).
// Once created, a worker can send messages to the javascript code that created it by posting messages to an event handler specified by that
// code(and viece versa).

// Q.18 What are block and inline elements in HTML5?
// A block-level element is drawn as a block and will occupy 100% width of screen
// An inline element are drawn where they are defined and take up space only as much needed by the element.
// this also means there can be more elements in a single row.
