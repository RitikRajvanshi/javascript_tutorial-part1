//for of and for in loop

//for of loop is used to iterate the element of the array.
// Work as traditional loop and automatically,runs from starting of the array to the length of the array.

const fruits = ["kiwi","orange","banana","grapes","apple"];
const fruits2 =[];
for(let fruit of fruits){
    console.log(fruit);// to show elements separately.
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);

//for in loop is used to iterate the index of the element of the array.

const fruits3 = ["kiwi","orange","banana","grapes","apple"];
const fruits4 = [];
for(let index in fruits3){
    // console.log(index);//for index
    console.log(fruits3[index]);// for the element of the array.
    fruits4.push(fruits3[index].toUpperCase());
}
console.log(fruits4);
