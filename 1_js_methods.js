// javascript methods
//trim() - used to remove the spaces
//toUpperCase()
//toLowerCase()
//slice()

let firstName="   Ritik Rajvanshi  "
console.log(firstName.length);
firstName.trim();
console.log(firstName.length);
//As the string is immutable therefore 
// length of the age is not changed, we have to create new string or store the data in same string
let newString = firstName.trim();
console.log(newString.length);
//for the same variable
firstName = firstName.trim();
console.log(firstName.length);

//toUpperCase()
firstName = firstName.toUpperCase();
console.log(firstName);
firstName = firstName.toLowerCase();
console.log(firstName);

//slice() - display copy of a potion of an array into a new array object selected from start to end
//start index and last index(not included)
// let newstring = firstName.slice(0,4);
let newstring = firstName.slice(5);
console.log(newstring);





