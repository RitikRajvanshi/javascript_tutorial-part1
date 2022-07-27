// for loop in array

//Most important property of the array is length property which shows the length of the array.
let colors = ["red","yellow","orange","green","black","white"];
console.log(colors.length);
console.log(colors[colors.length-1]);//for last element
console.log(colors[colors.length-2]);//for second last element

// to show all elements
let fruits2 = [];
let i=0
for(i=0; i<=colors.length-1 ; i++){
    console.log(colors[i]);
    fruits2.push(colors[i].toUpperCase()); // to store all elements in uppercase at another array fruits2.
    }

console.log(fruits2);



