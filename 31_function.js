// function:
//  A JavaScript function is a block of code designed to perform a particular task.
// Used for code reusablity.
// A JavaScript function is executed when "something" invokes it (calls it).
// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
//The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)
// Function parameters are listed inside the parentheses () in the function definition.

// Function arguments are the values received by the function when it is invoked.

// Inside the function, the arguments (the parameters) behave as local variables.

//Function declaration

function happyBirthday(){
    console.log("Happy Birthday to you");
}

happyBirthday();




// function expression
let happyBirthday2 = function(){
    console.log("Happy Birthday to you");
}
happyBirthday2();



let isEven = function(a){
    return a %2 ===0;
}

console.log(isEven(5));

//function expression

let isOdd = function(a){
    return a % 2 !== 0 ;
}

console.log(isOdd(10));

//task--->1
//function
//input: string
//output: firstcharacter of the i/p string

function firstChar(anystring){
    return anystring[0];
}
console.log(firstChar("Manjit"));

//task--->2
//input: array, target(number)
//o/p: find the target in array if found then print the index number.

function findTarget(array,target){
        for(let i=0;i<array.length;i++){
            if(array[i]===target){
                return i;
            }
        }
        return -1;
}
const array1 =[1,3,5,9,14];
const ans = findTarget(array1, 1);
console.log(ans);

