"use strict"     
// console.log(this);
// //It prints the window object.
// //or
// console.log(window); // both are same.
// console.log(this===window);

//Window object have all the object used in the program
function myfunc(){
    console.log(this);  //as function myfunc is called by window object so this represent the the window object.
}
myfunc();
console.log(window);  // we see the window object now contain myfunc function.

//This window object sometimes creates some problem so the developer use strict mode.
//It gives undefined on using strict mode.