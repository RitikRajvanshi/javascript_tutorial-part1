//call method

// function hello(){
//     console.log("Hello world..")
// }
// hello();
// hello.call(); 

//Both prints same object.


//call method
// *******With call(), an object can use a method, belonging to another object.

// const user1={
//     firstName:"Harsh",
//     age:27,
//     about:function(hobby, favMusician){
//         console.log(this.firstName, this.age, hobby, favMusician)
//     }
// }

// const user2={
//     firstName:"Mohan",
//     age:22
// }
// user1.about();
//user2.about();  //this will not run.


// //If we want to use(borrow) about method of obejct user1 for another object user2.
// //Then we use call method.

user1.about.call(user2); //user2 is used as "this" keyword for the about method of object user1.

// *******With call(), an object can use a method, belonging to another object.


// user1.about.call(); //will show undefined undefined 
// //Here call method wants any variable(user1 or user2) which refer to this keyword.

// user1.about(); // this will give undefined because we do not use call method.

user1.about.call(user1); //this keyword now refer to user1.

// // We can also pass extra argument in it.

user1.about.call(user2, "playing","Arijit Singh")


const about = function(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician)
}
const user1={
    firstName:"Harsh",
    age:27,
    
}
const user2={
    firstName:"Mohan",
    age:22
}
about.call(user1, "playing", "Arijit");  //with using call we can set any value of this.
about.call(user2, "playing", "Arijit");   // other orgument is also used. hobby="playing", favMusician="Arijit"