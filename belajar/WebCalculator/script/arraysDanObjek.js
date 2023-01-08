//1. Arrays
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray);

/* output:
[ 'Coklat', 42.5, 22, true, 'Programming' ]
*/

let myArray1 = ["Hijau", 42.5, 22, true, "Programming"];
console.log(myArray1[1]);

/* output:
42.5
*/

let myArray2 = ["Biru", 42.5, 22, true, "Programming"];
console.log(myArray2[0]);
console.log(myArray2[1]);
console.log(myArray2[2]);
console.log(myArray2[3]);
console.log(myArray2[4]);
console.log(myArray2[5]);
console.log("Panjang nilai myArray adalah " + myArray2.length + ".");

/* output:
Coklat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/


//2. Objek
let object = {key1: "value1", key2: "value2", key3: "value3"}
let user = {firstName: "Harry", lastName: "Potter",  age: 20, isMuggle: false, stuff: ["Wand", "Flying Car", "Owl"]}; 



let user1 = {
    firstName: "Harry",
    lastName: "Potter", 
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
};

console.log("Hallo, nama saya " + user1.firstName + " " + user1.lastName);
console.log("Umur saya " + user1.age + " tahun");

/* output
Hallo, nama saya Harry Potter
Umur saya 20 tahun
*/

let user2 = {
    name: {
      first: "Harry",
      last: "Potter",
    },
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
};

console.log("Hallo, nama saya " + user2.name.first + " " + user2.name.last);
console.log("Umur saya " + user2.age + " tahun");

/* output
Hallo, nama saya Harry Potter
Umur saya 20 tahun
*/