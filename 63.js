// hardcore

// const user1 = {
//     firstName:"Ritik",
//     lastName:"Raj",
//     email:"raj.ritik00789@gmail.com",
//     age:27,
//     address: "House no27",
//     about: function(){
//      return `${this.firstName} is ${this.age} years old`

// },
//  is18: function(){
//     return this.age >= 18;
//  }
// }

// const user2 = {
//     firstName:"Ritik",
//     lastName:"Raj",
//     email:"raj.ritik00789@gmail.com",
//     age:27,
//     address: "House no27",
//     about: function(){
//      return `${this.firstName} is ${this.age} years old`

// },
//  is18: function(){
//     return this.age >= 18;
//  }
// }

//If we want to store millions of users. We don't do traditionaly, so we create
//function
//takes as a i/p firstName, lastName, email.... --> o/p return object
//first create object
//second add key-value
//third return object

function createUser(firstName, lastName, email, age, address){ 
 //we don't give function as parameter because function is same in every case.
                const user =  {};                   //create object
                user.firstName = firstName;         //add key-value pair
                user.lastName = lastName;         //not giving hardcore value just gave the value we i/p.
                user.email = email;
                user.age = age;
                user.address = address;
                user.about =  function(){
                    return `${this.firstName} ${this.lastName} is ${this.age} years old`
                },     
                user.is18 =  function(){
                    return this.age >= 18;
                 }  

                 return user;                       //return object   

}

//giving i/p to the user and calling the fnc

const user1 = createUser("Rohit","Raj","rohitraj@gmail.com",28,"123 home")
console.log(user1);

const is18 = user1.is18();
console.log(is18);

const about = user1.about();
console.log(about);


//But there is lots of drawbacks in it. So refer to 64.js.