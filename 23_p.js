//Q.23 how to empty an array?

// There are 4 ways to empty an Array

//  1. assign [] to Array
//  2.n.length = 0;
//  3. while(n.length > 0){n.pop();}
//  4.n.splice(0, n.length);

let students = [10, 11, 12, 13, 15];

/* Technique -1 */
// students = [];

/* Technique -2 */

// students.length = 0;

/* Technique -3 */

// while (students.length > 0) {
//   students.pop();
// }

/* Technique -4*/

students.splice(0, students.length);
console.log(students.length);
console.log(students);
