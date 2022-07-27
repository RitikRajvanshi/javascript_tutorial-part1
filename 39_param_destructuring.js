// param destructuring

// used for object
//Highly used in react

const person = {
    name:"Rohan",
    age:25,
    gender:"male"
}

// function getDetails(obj){
//     console.log(obj.name);
//     console.log(obj.age);
// }

function getDetails({name,age,gender}){
    console.log(name);
    console.log(age);
    console.log(gender);
}


getDetails(person);
//{name,age,gender} = person;  (which is object); // destructuring
// If we want to store every element of the person in unique variables.
//By this we can use every values separately.
// Then we use parameter destructuring here.

