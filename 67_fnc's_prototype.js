//protype
// In javascript
//function ==> use as (function + object)
//function in js you can treat as function or as object.
//function provides more useful properties.(like call,apply,bind)
//proof

function hello(){
    console.log("hello world")
}

console.log(hello.name);                        //it looks like object.
// name property ----> tells the function name.

//you can also add your own property(key-value pair) as same as object in function

hello.myOwnProperty = "very unique";    // like object
// or
// hello["myOwnProperty"] ="very unique";

console.log(hello.myOwnProperty); 


//If we done like below

console.log(hello.prototype);    // {}--> empty object , constructor - fn hello


//prototype

//defining:

// When a function is created in JavaScript, the JavaScript engine adds a prototype property to the function. This prototype property is an object (called a prototype object) that has a constructor property by default. 
// The constructor property points back to the function on which prototype object is a property.

//Only function provides us empty space or empty object.
//Known as prototype.
//It is used to add(property) key-value pair for the function.(if needed)

//how to add property to the fnc

hello.prototype.firstName = "Gon"
hello.prototype.LastName = "Ji"
hello.prototype.key1 = "value1"
hello.prototype.sing = function(){
    return "la la la"
    }

console.log(hello.prototype);

// There is no connection between __proto__ of object and prototype of function
//Now we create connection between them.


 