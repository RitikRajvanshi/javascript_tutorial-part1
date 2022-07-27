//Use const for creating array

const fruits = ["kiwi","orange","banana","grapes","apple"];//stored in heap memory with address maybe(0X11)
fruits.push("mango");//maybe address(0X11)// this is possible due to reference datatype(array).
console.log(fruits);

//But this is not possible.
// fruits = ["grapes","pineapple"]//error assignment to constant variable.
//unable to change the array element.


//while loop on array
const fruit = ["kiwi","orange","banana","grapes","apple"];
let i=0;
let fruit2 =[];
while(i<fruit.length){
   fruit2.push(fruit[i].toUpperCase());
    i++;
}
console.log(fruit2);