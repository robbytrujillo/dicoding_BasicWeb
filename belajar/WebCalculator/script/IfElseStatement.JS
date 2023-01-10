let x = 50;

if(x > 70) {
    console.log(x);
} else {
    console.log("Nilai kurang dari 70");
}

/* output
Nilai kurang dari 70
*/

let language = "English";
let greeting = "Selamat Pagi!"

if(language === "English") {
    greeting = "Good Morning!";
}

console.log(greeting);

/* output
Good Morning!
*/

let language1 = "French";
let greeting1 = "Selamat Pagi"

if(language1 === "English") {
    greeting1= "Good Morning!";
} else if(language1 === "French") {
    greeting1 = "Bonjour!"
} else if(language1 === "Japanese") {
    greeting1 = "Ohayogozaimasu!"
}

console.log(greeting1);

/* output
Bonjour!
*/