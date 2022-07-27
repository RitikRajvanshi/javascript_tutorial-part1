//Don't do this mistake

const user1={
    firstName:"Harsh",
    age:27,
    about: function(){
        console.log(this);               // here this reperent window object.
        console.log(this.firstName, this.age);
    }
    
}
// user1.about();
//task---> store above fucntion in myfunc variable.

// const myfunc = user1.about;               //we store reference of the method in variable.
// or we are doing here.

const myfunc1 = function(){  
    console.log(this);                       // here this keyword not reperent user1 but represent window object.
    console.log(this.firstName, this.age); 
}
myfunc1();                   // As this keyword represent window object, so it gives undefined undefined.


// So resolve it we use bind method to give this keyword the object.
const myfunc = user1.about.bind(user1);  // user1 represent this keyword.
myfunc();