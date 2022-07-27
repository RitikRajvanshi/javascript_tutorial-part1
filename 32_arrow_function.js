//arrow function      ***important

let happyBirthday2 = () => {
    console.log("Happy Birthday to you");
}
happyBirthday2();



let isEven = (a) => {
    return a %2 ===0;
}

console.log(isEven(5));


let isOdd = (a) => {
    return a % 2 !== 0 ;
}

console.log(isOdd(10));


//task--->1
//function
//input: string
//output: firstcharacter of the i/p string

// let firstChar = (anystring) => {
//     return anystring[0];
// }
// console.log(firstChar("Manjit"));


let firstChar = anystring => anystring[0];
console.log(firstChar("Manjit"));

// if the arrow function have only one parameter,
//we can ignore (), {} and return 
// Do it in only one line, it will work nicely.
    
    
    


//task--->2
//input: array, target(number)
//o/p: find the target in array if found then print the index number.

let findTarget = (array,target) => {
        for(let i=0;i<array.length;i++){
            if(array[i]===target){
                return i;
            }
        }
        return -1;
}
const array1 =[1,3,5,9,14];
const ans = findTarget(array1, 5);
console.log(ans);