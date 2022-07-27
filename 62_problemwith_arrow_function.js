//arrow function 



const user1={
    firstName:"Harsh",
    age:27,
    about: () => {
        console.log(this);                     //this==>window object due to arrow function.
        console.log(this.firstName, this.age);
    }
    
}

user1.about();       //undefined undefined

//arrow function doesn't have its own 'this'.
//It takes "this" from it's sorroundings.
//here 'this' is not refer object person1,it takes 'this' from one upper level.
//In above case 'window'.

user1.about.call(user1);
//you can't change 'this' in arrow function.




// const user2={
//     firstName:"Harsh",
//     age:27,
//     about: () => {
//         console.log(this.firstName, this.age);
//     }
    
// }

// Short syntax

const user2={
    firstName:"Harsh",
    age:27,
    about(){
        console.log(this.firstName, this.age);
    }
    
}

