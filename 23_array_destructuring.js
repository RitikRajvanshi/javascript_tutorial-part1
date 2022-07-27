// array destructuring


// const fruits = ["kiwi","orange","banana","grapes","apple"];
// let fruits1=fruits[0];
// let fruits2=fruits[1];
// let fruits3=fruits[2];
// let fruits4=fruits[3];
// console.log(fruits)
// console.log(fruits1)
// console.log(fruits2)
// console.log(fruits3)
// console.log(fruits4)

// Array destructing is used to store the element of the array in another array with one line of code.

const fruits = ["kiwi","orange","banana","grapes","apple"];
let [fruits1, fruits2, fruits3, fruits4, fruits5] = fruits; // array destructuring

//Here,
// fruits1 stores fruits 0th index element means "kiwi".
// fruits2 stores fruits 1st index element means "orange".
// fruits3 stores fruits 3rd index element means "banana".
// fruits4 stores fruits 4th index element means "grapes".
// fruits5 stores fruits 5th index element means "apple".
console.log(fruits);
console.log("Values of the fruits1",fruits1);
console.log("Values of the fruits2",fruits2);
console.log("Values of the fruits3",fruits3);
console.log("Values of the fruits4",fruits4);
console.log("Values of the fruits5",fruits5);

// If i have only one value in the array.
const myArray = ["value1"];
let [var1, var2, var3] = myArray;
console.log("Values of the var1",var1);
console.log("Values of the var2",var2);
console.log("Values of the var3",var3);

// If I want to store value in only value1 and value3 not in value 2 then,
const myArray2 = ["value4","value5","value6"];
let[var4, var5, var6] =["value4",,"value6"]
console.log("Values of the var4",var4);
console.log("Values of the var5",var5);
console.log("Values of the var6",var6);

//Consider we have deconstruct myArray3 and stores the value1 and value2 in myvar1 and myvar2
//want to store remaining items in another array.
//We can do it with the help of slice method.
const myArray3 = ["value1","value2","value3","value4"];
const [vari1, vari2] = myArray3;
const myNewArray = myArray3.slice(2);// value3 and value4

console.log("All elements or values of the array before destructuring are: ",myArray3);
console.log("After destructuring.....")
console.log("The value of vari1 is ",vari1);
console.log("The value of vari2 is ",vari2);
console.log("The remaining values stored in new array is ",myNewArray);




// Another way for destructuring is with spread operator
const myArray4 = ["value1","value2","value3","value4"];
const[variable1, variable2, ...remainingVar]= myArray4;
console.log("Destructing using spread operator");
console.log("All elements or values of the array before destructuring are: ",myArray4);
console.log("The value of variable1 is ",variable1);
console.log("The value of variable2 is ",variable2);
console.log("The remaining values stored in new array is ",remainingVar);


for(let [vari1, vari2] of myArray3){
    console.log(var1);
 }





