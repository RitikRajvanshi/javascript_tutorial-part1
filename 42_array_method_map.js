//map method of array
//Important method of array
//React


// The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array.
// It is a non-mutating method. 
// Generally map() method is used to iterate over an array and calling function on every element of array.
//The map method calls the callbackfn function one time for each element in the array.
//It takes callback function as an argument(same as forEach but it always should have to return.).
//It is compulasary that the callback function should return something.
const numbers = [2,4,7,8,6];

// let squareNumbers = function(number){
//     return number*number;
// }

// const newArray = numbers.map(squareNumbers);
// console.log(newArray);

// or we can directly use function in array.map
const newArray = numbers.map(function(number, index){
    return `index:  ${index} value: ${number*number}`;
});
console.log(newArray);


// It always return a new array and stores data into it.
// But in forEach it is optional to return.


//Realistic example
const users =[
    {firstName:"Rohan" ,age:27},
    {firstName:"Mohan" ,age:26},
    {firstName:"Sohan" ,age:22},
    {firstName:"Raushan" ,age:29}
]

//We have to print firstname of the users.

let usersName = users.map((user)=>{
    return (user.firstName);
})
console.log(usersName);

