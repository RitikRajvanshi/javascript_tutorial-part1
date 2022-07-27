//class
//ES6 or 2015
//class keyword should be added
//In js classes are fake-- bacause internally js automatically do every work.
//We don't have to write methods object and functions alag alag likne ki jrurt nahi
//hum saari cheezo ko ek jgh wrap kr skte h classes me.

 class CreateUser{
// function CreateUser(firstName, lastName, email, age, address)
//Above is constructor function, which is used to construct objects and takes user i/p & everytimes called when user created.

constructor(firstName, lastName, email, age, address){
    //But in class above constructor function, which is used to construct objects and takes user i/p & everytimes called when user created.
    console.log("constructor called")
    this.firstName = firstName;         
    this.lastName = lastName;            //not giving hardcore value just gave the value we i/p.
    this.email = email;
    this.age = age;
    this.address = address;
 }

    about(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old`
}   
    is18(){
        return this.age >= 18;
    }

    sing(){
        console.log(`I am singing for ${this.firstName}`);
    }
 }

const user1 = new CreateUser("Rohit","Raj","rohitraj@gmail.com",28,"123 home");
const user3 = new CreateUser("Goro","Dombo","gotodombo@gmail.com",38,"123 home street2");
const user2 = new CreateUser("Mohit","Raj","rohitraj@gmail.com",9,"123 home");
console.log(user1);
console.log(user1.firstName);
console.log(Object.getPrototypeOf(user1));

console.log(user1.about());
console.log(user1.is18());

console.log(user2);
console.log(user2.about());
console.log(user2.is18());
 
 //class 
 //jb bhi object create karenge, we use new keyword laga ke constructor call hoga.
 //new keyword ke bina hum user create nahi kar skte.
 //new keyword laga ke call krenge to constructor apne aap call ho jayega.
 //object is created by its own.
 //Propterty should be added automatically. 
//prototype me apne aap functions(methods) add ho jayega.

//Without new keyword
//throws a error
//Class constructor CreateUser cannot be invoked without 'new'.

//  CreateUser.prototype.about = function(){
//  return `${this.firstName} ${this.lastName} is ${this.age} years old`
//  }
 
//  CreateUser.prototype.is18 = function(){
//  return this.age >= 18;
//  }  
 
//  CreateUser.prototype.sing = function(){
//  console.log(`I am singing for ${this.firstName}`);
//  }
// }