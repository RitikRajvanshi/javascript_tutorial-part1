// computed properties or Property accessors

// Property accessors provide access to an object's properties by using the dot notation or the bracket notation.


// property ==> key-value pair     ex... car is an object whose property is color: "black".



const key1 = "objectkey1";
const key2 = "objectkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// now we have to store the object like that
// we have to access values of the keys from all variables like that

// value of key1 = value of value1
// objectkey1 : myvalue1 

// value of key2 = value of value2 
// objectkey2 : myvalue2

const obj ={
     [key1]:[value1],
     [key2]:[value2]
}
console.log(obj);

 // or we can do this
  const object ={};   //empty object.
  
object[key1] = value1;
object[key2] = value2;
console.log(object);


//second example
let propName = 'c';

const rank = {
  a: 1,
  b: 2,
  [propName]: 3,   //we want propName's value as rank key(c);
};

console.log(rank.c);   // 3

// Here, the [propName] is a computed property of the rank object. 
// The property name is derived from the value of the propName variable.




