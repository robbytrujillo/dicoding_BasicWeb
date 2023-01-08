//Tipe Data

//1. Undefined
let x;
console.log(typeof(x));
// Fungsi typeof() digunakan untuk memastikan tipe data
// pada variabel dengan mengembalikan tipe data tersebut dalam bentuk teks

/* output: undefined */

//2. Numbers
let a = 10;
console.log(typeof(a))

/* output: number */

let b = 17.25;
console.log(typeof(b))

/* output: number */

//2a. Operator
let c = 12;
let d = 9;

console.log(c + d)
console.log(c - d)
console.log(c * d)
console.log(c / d)
console.log(c % d)

/* output:
21
3
108
1.3333333333333333
3
*/

//2b. Penerapan Operator
/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

//3. Strings
let greet = "Hello";
console.log(typeof(greet))

/* output: string */

//4. Boolean
let e = true;
let f = false;

console.log(typeof(e))
console.log(typeof(f))

/* output: 
boolean
boolean
*/

//atau
const g = 10;
const h = 12;

let isGreater = g > h;
let isLess = g < h;

console.log(isGreater);
console.log(isLess);

/* output: 
false
true
*/

//5. Null
let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/

let i; // i merupakan undefined
i = 1 // sekarang i merupakan number
i = true // sekarang i merupakan boolean
i = "Harry" // sesekarang i merupakan string