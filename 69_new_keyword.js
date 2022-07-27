//new keyword     .........important
// The new keyword is used in javascript to create a object from a constructor function. 
// The new keyword has to be placed before the constructor function call and will do the following things: 
// Creates a new object. 
// Sets the proto of that object to the function's prototype property.

//

function CreateUser1(firstName,age){
    this.firstName = firstName;
    this.age = age;
}


CreateUser1.prototype.about = function(){
    console.log(this.firstName, this.age);
}

const user = new CreateUser1("harshut", 6);            //      adding  users
// { create empty object with new keyword  }      //with default constructor function

//new keyword done 3 things there:(automatically)
//1) gives empty object // this refer to empty object
//2)  return this.
//3)  sets the ‘__proto__’ property of that empty object(i.e user1) to the prototype property of function.
// the work same as const user = Object.create(CreateUser.prototype);

user.about();

//Now improvise the last code with new keyword


//custructor function --> costruct users(objects)
function CreateUser(firstName, lastName, email, age, address){ 

    //now remove it
    // const user = Object.create(CreateUser.prototype);
    

   this.firstName = firstName;         
   this.lastName = lastName;            //not giving hardcore value just gave the value we i/p.
   this.email = email;
   this.age = age;
   this.address = address;
    // return user(optional) ;                    //this is done automatically with new keyword    

}

CreateUser.prototype.about = function(){
return `${this.firstName} ${this.lastName} is ${this.age} years old`
}

CreateUser.prototype.is18 = function(){
return this.age >= 18;
}  

CreateUser.prototype.sing = function(){
console.log(`I am singing for ${this.firstName}`);
}

const user1 = new CreateUser("Rohit","Raj","rohitraj@gmail.com",28,"123 home");
const user2 = new CreateUser("Mohit","Raj","rohitraj@gmail.com",29,"123 home");
console.log(user1);
const about1 = user1.about();
console.log(about1);         
const is181 = user1.is18();
console.log(is181);
user1.sing();

console.log(user1.__proto__);
console.log(user2.__proto__);

//If we know that, we costruct a function which is always call by new keyword.
//Then we name that function with capital letter(uppercase)