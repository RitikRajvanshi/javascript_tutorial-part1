//fill method

// The fill() method fills specified elements in an array with a value.

// The fill() method overwrites the original array.

// If you want some elements will be filled then start and end position can be specified.
// array.fill(value, start(included), end(not included))

// The purpose of a constructor is to create a new object 
// and set values for any existing object properties.
// A constructor is a special function.
// that creates and initializes an object.

//We have fill array having length 10 with 0
const myArray = new Array(10).fill(0);
console.log(myArray);

//

const Array2=[1,2,3,4,5,6,7,8,9,10];
//Now we have to fill 0 in the place of 3,4,5,6. then
const fillingWith0 = Array2.fill(0, 2, 6)
console.log(fillingWith0);