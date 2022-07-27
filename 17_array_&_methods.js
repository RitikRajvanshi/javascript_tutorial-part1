// array :- Ordered collection of items or elements.
//reference type
//creating an array


// let fruits = ["apple","mango","banana",1,2.3, undefined, null];
// console.log(fruits);
// fruits[2]= "grapes";
// console.log(typeof fruits, fruits);

// //Checking object is array or not is checked by Array.isArray method
// let color={}// object lierals
// console.log(Array.isArray(fruits)); //true shows it is array
// console.log(Array.isArray(color)); // false shows it is not a array


//Array Methods

//push and pop
// shift and unshift

//push and pop --> add and remove items from the last of the array
let fruits = ["apple","mango","banana"];
console.log(fruits);
fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);
let popped = fruits.pop();
console.log("Popped fruits is", popped);

// unshift and shift ---. add and remove items from starting of the array
fruits.unshift("Pineapple");
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);


//push and pop is faster than shift and unshift
//because first shifts all the elements by one location in memory takes more times.

