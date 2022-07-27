//callback function


// We pass function as an argument and we call that passed function.
// Thsi is callback function.

// function myfunc(a){
//     console.log(a);
// }

// We can pass everything in the function
// myfunc(25); //number
// myfunc("Babu"); //string 
// myfunc([1,2,3]); // array
// myfunc({name:"Rohan", age:25}) //object

//Can we pass function as an argument in function...?


// function myfunc(a){

//                 console.log(a);     // now a is function. So we call it.
//                 a();                 //callback function
// }



function myfunc2(name){
    console.log(`My name is ${name}`);
    console.log("Inside my func2");
}

//we just change the variable name as callback
function myfunc1(callback){
    console.log("I am myfunc")
    // console.log(callback);     // now callback is function. So we call it.
    // callback() equivalent to myfunc2()

    callback();                                    
}




//  a is equivalent to the function myfunc2.
//We pass "a" as a function myfunc2, now a is function. So we call "a" as function like a();. This is callback function.
myfunc1(myfunc2);  // We can pass function "func2" as an argument in the function "myfunc".