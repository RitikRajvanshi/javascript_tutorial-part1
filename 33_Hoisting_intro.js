// Hoisting intro


// Hoisting is JavaScript's default behavior of moving declarations to the top.

//In JS, s variable can be used before it has been declared.

hello();
function hello(){
    console.log("Hello World");
}

//As you see above, the function is invoked before it has been declared.
//This is due hoisting.
// But you can not do it, in the case of function expression and arrow function.
// Another Example

x = 5;              // Assign 5 to x

console.log(x);    // Display x in the element

var x;             // Declare x

//But in the case of const, it will give ReferenceError.
//In the case of let, it will give cannot access before initialization.

//Variables defined with let and const are hoisted to the top of the block, but not initialized.
//Mean --> The block of code is aware of the variable, but it cannot be used until it has been declared.

carName = "Volvo";             // Initiallize or assign value Volvo to carName
console.log(carName);           // display x
 var x;               // declare x

