console.log("Selamat Anda berhasil menggunakan JavaScript pada Website");
alert("Terimakasih.");

// ini merupakan komentar satu baris komentar
// alert("Terima kasih")

/* Ini merupakan komentar dengan lebih dari satu baris
Teks apapun yang berada disini akan dijadikan komentar.
Ketika menggunakan ini, jangan lupa untuk menutupnya.
*/

//variable 1
var firstName = "Harry";
console.log(firstName);

firstName = "Ron";
console.log(firstName);

/* output: 
Harry
Ron
*/

//variable 2
x = 100;
var x;
console.log(x);

/* output: 100 */

//variable 3
var x;
x = 100;
console.log(x);

/* output: 100 */

//variable 4
y = 100;
let y;
console.log(y);

/* ReferenceError: Cannot access 'y' before initialization */

//variable 5
const z = 100;
console.log(z);

z = 200;
console.log(z)

/* TypeError: Assignment to constant variable. */

