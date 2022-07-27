// spread operator in objects


//spread operator in array
const array1 =[1, 2, 3];
const array2 =[4, 5, 6];
const myNewArray =[...array1, ...array2, 58];
const myNewArray1 =[...array1, array2];
console.log(myNewArray);
console.log(myNewArray1);  // array2 fully comes in myNewArray1

// you can spread elements in the array through spread operator
const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
//Also we have converted string into array 
// also able to convert string into object

console.log(alphabet);

// but without "" it is not possible .i.e iterable things only like string or array

// spread operator in objects



const object1 ={
    key1: "value1",
    key2: "value2",
    // key1: "value10"  // In the object, only one key is allowed.
                    // If you put two keys with same name js always include only last key-value.
};

const object2 ={
    key3: "value3",
    key4: "value4",
    key1:"value0"
};

const Newobject ={...object1,...object2, key5:"value5"};
console.log(Newobject);


// spreadin array in object
const array = {...["item1","item2"]}; // Also, we convert array into object
console.log(array);
