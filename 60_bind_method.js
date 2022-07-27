//bind method

// With the bind() method, an object can borrow a method from another object.

const about = function(hobby, favMusician){
    console.log(this.firstName+" with age", this.age, hobby, favMusician)
}
const user1={
    firstName:"Harsh",
    age:27,
    
}
const user2={
    firstName:"Mohan",
    age:22
}

// about.bind(user2,"playing", "Arijit")
//It didn't gave anything because bind retuns a function.

//So we have call the function so first store it.
const func1 = about.bind(user2,"playing", "Arijit");
const func2 = about.bind(user1,"playing", "Arijit");

//In future if we have call function, we just call it.
func1();
func2();