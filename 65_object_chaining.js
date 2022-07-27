// object chaining

//task--->
// task---->
// If you have two objects.
//We want the value of key that not present in its object but present in other object.

//we want key-value of any object(obj2) first find value in its own object. If found then return or print it.
// if not found then it go to other object(obj1) and find value there.
//if found there, then retun or print that key-value.

const obj1 = {
    key1:"value1",
    key2:"value2"
}

// const user5 = "string";
// console.log(user5.__proto__);


// const obj2 = { 
//     key3:"value3", 
// }
// console.log(obj2.key2);    //It gives undefined, not found it that object.



// there is another way to create empty object
const obj2 = Object.create(obj1);  // now we create some connection with other object(obj1).
                                    
console.log(obj2);                 //{}

obj2.key3="value3";   //adding key3 in obj1

console.log(obj2);  //o/p  key3:value

// console.log(obj2.key3);    //value3

console.log(obj2.key2);      //value2 taken from obj1.

//Now we have done that task
//We create a connection b/w both objects and if any data not found in its own object.
//Then data is founded on other object and if found use that data.
//key2 is not present obj2 so move to the obj1 and as found there take their key2 of obj1.
//we print that data.

//How it is done
console.log(obj2);

// there is a property  __proto__ or [[prototype]] in obj2(already found in objects).
//And with create method the obj2 __proto__ is refer to obj1, it contains the the data of obj1.
//mean obj2's proto contains every object of obj1.

//If the data is not found in that object then it goes to the __proto__ / [[prototype]] of its object and found there.
//If found there then it used that data.

// const obj2 = Object.create(obj1);
// This js code set the data of the __proto__ of obj2 equals to obj1.
//Give a reference __proto__ of obj2  to obj1.
//It is known as object chaining.

// official ecmascript documentation
//[[prototype]] == __proto__

//protype  and proto is different in js.

console.log(obj2.__proto__);

//Also known as drunder.
// __proto__ is an internal property of an object, pointing to its prototype.

//Diff b/w proto and prototype
// The prototype gives access to the prototype of function using function.
//  proto gives access to the prototype of the function using the object.


