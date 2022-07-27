// filter method

//This method also call a callback function for each element in the array.
//Callback function always has to return boolean values.
// That means, the elements present in the array should pass the test(i.e should return boolean value. True/false)

//The elements that passes the test should stores in an new array.
// return from callback fnc is compulsary.

const numbers = [1,5,2,6,8,9];

const isEven = function(number){
    return number%2 ===0;    // If even true else false(boolean value)
}

const isOdd = function(number){
    return number%2 !==0;    // If even true else false(boolean value)
}


console.log("Given array is: ",numbers);
const answer = numbers.filter(isEven);
console.log("Filtering even number from the given array...")
console.log(answer);

const answer2 = numbers.filter(isOdd);
console.log("Filtering odd number from the given array....")
console.log(answer2);

// const topSix = [
//     { name: "Nigeria", position: "1st", points: 43 },
//     { name: "England", position: "2nd", points: 37 },
//     { name: "USA", position: "3rd", points: 35 },
//     { name: "South Africa", position: "4th", points: 30 },
//     { name: "Brazil", position: "5th", points: 27 },
//     { name: "Korea", position: "6th", points: 23 }
// ]
 
// const totalPoints = topSix.reduce((acc, currTeam) => acc + currTeam.points, 0);
 
// console.log(totalPoints) // Prints 195