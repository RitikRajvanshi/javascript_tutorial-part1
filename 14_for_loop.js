
// for loop

// for(let i=0; i<=10;i++){  //if we define i with let inside the loop it will shows error not defined.

//     console.log(i);     //This is due to let have block scope(only access within the braces.)
// }
// console.log(i);
// comes error if i is defined with let keyword within the paranthesis of for loop.
//you can use var for this or you can declare it above the for loop.

//Sum of n numbers
let i1 = 0;
let total = 0;
for(i1=0; i1<=100;i1++){
    total = total + i1;
}
console.log(total);
