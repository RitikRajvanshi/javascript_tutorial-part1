// block scope vs function scope

// block scope means that the variable is accessible with in the block only.
// function scope means it will access value in whole function(not effect of blocks) or globally.

// let and const are block scope
// var is function scope

// Ex-

{
var firstName ="Harrison Willie" ; // block scope
// let firstName ="Haris Mony";        // function scope
console.log(firstName);
}

{
 console.log(firstName); // uncaught ReferenceError: firstName is not defined
                        // As firstnName is defined with let keyword which have block scope.
}

{
console.log(firstName);
}