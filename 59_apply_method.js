//apply method
// With the apply() method, an object can borrow a method from another object.

//same as call method
//internally apply method use call method

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
about.apply(user1, ["playing", "Arijit"]); 

about.apply(user2, ["playing", "Arijit"]);

//the differnce is that,we have to pass extra argument in array rather than set of argument(as call)

