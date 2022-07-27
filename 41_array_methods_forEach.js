// important array method

//forEach  // callback fnc, iteration, separately (no new array)
//map    // callback fnc, iteration, return, new array
//filter      // callback fnc, boolean value, iteration, return, new array
//reduce       // callback fnc, single value ans, return, (Accumulator,currentValue), Sum
//find      // callback fnc, single value ans, return, find the first occurance from the array, use unique id 
//every  // callback fnc, single value(boolean), every element should pass the test
//some // callback fnc, single value(boolean), any element should pass the test
//sort  //callback fnc, changes the array, sort the array as string, number(return a-b)


//forEach

const number = [2,4,7,8,6];

 function func1(number, index){
    console.log(`index is ${index} and number is ${number}`);
    // console.log(`${number} x 2 = ${number * 2}`);
 }

//  func1(number[0],0);
//  func1(number[1],1);
//  func1(number[2],2);
//  func1(number[3],3);
//  func1(number[4],4);
//  func1(number[5],5);

// for(let i=0; i<number.length;i++){

//     func1(number[i],i);
   
// }

// number.forEach(func1); 

//or you can define the whole function here or anonomous(function without name).
number.forEach(function (number, index){
    console.log(`index is ${index} and number is ${number}`);
    // console.log(`${number} x 2 = ${number * 2}`);
 });
//forEach is the array method. 
//It takes the callback function as an argument.
//It iterate the whole array and takes parameter as number and index automatically.
//First it gives, the array element and then its index.


// task--- every no. mulitplied by 2 

number.forEach(function(number){
    console.log (`${number} x 2 = ${number * 2}`);
    
})

//forEach method of array takes two parameters 
// number and index, its on you to take parameters(number or index) or ignore it.

//Realistic Example

const person =[
                 {firstName:"Rohan" ,age:27},
                 {firstName:"Mohan" ,age:26},
                 {firstName:"Sohan" ,age:22},
                 {firstName:"Raushan" ,age:29}
       ]

// task --> We have to print the firstname of all objects in the array.
// Here user is the variable that takes the array's elements.
person.forEach(function(user,index){
        console.log(user.firstName+" at Index ",index);
})

// or we can also use for-of loop
for(let user of person){
    console.log(user.firstName);
}