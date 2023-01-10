for(let i = 0; i < 5; i++) {
    console.log(i);
}

/* output
0
1
2
3
4
*/

const myArray = ["Harry", "Ron", "Hermione", "Tom"];

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

/* output
Harry
Ron
Hermione
Tom
*/

let myArray = ["Harry", "Ron", "Hermione", "Tom"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}

/* output
Harry
Ron
Hermione
Tom
*/

