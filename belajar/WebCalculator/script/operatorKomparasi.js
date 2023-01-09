//1. Operator Komparasi
let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

/* output
true
false
*/

//2. Perbedaan antara “sama” dan “Identik”
const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/* output
true
false
*/

//2. Logical Operators
let c = 10;
let d = 12;

/* AND operator */
console.log(c < 15 && d > 10); // (true && true) -> true
console.log(c > 15 && d > 10); // (false && true) -> false

/* OR operator */
console.log(c < 15 || d > 10); // (true || true) -> true
console.log(c > 15 || d > 10); // (false || true) -> true

/* NOT operator */
console.log(!(c < 15)); // "!(true)" -> false
console.log(!(c < 15 && d > 10)); // "!(true && true) -> !(true)" -> false

/* output
true
false
true
true
false
false
*/