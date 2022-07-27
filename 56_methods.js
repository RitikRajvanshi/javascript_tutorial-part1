//methods or object methods
//Methods or object methods are function inside object

// const person1 ={
//             firstName:"Rohit",
//             age: 18,
//             about: function(){                               //method
//                 console.log("I am Rohit and my age is 18")
//             }
// }

//But if I changed the firstName or age of the person1. The about() method shows same o/p.

// const person1 ={
//     firstName:"Mohit",
//     age: 20,
//     about: function(){                                  //method
//         console.log("I am Rohit and my age is 18")
//     }
// }

//But we want name and age change according to the firstname and age of the person1.
//So we use template string and placeholder to resolve it.

// const person1 ={
//     firstName:"Mohit",
//     age: 20,
//     about: function(){                               //method
//         console.log(`I am ${firstName}  and my age is ${age}`);
//     }
// }

//It is clear that this syntax is not possible.
//To resolve it, we have to use this keyword.

const person ={
    firstName:"Mohit",
    age: 20,
    about: function(){                               //method
    console.log(`I am ${this.firstName} and my age is ${this.age}`);
    }
}

//Here, in an object method, this keyword refers to the object(person1).
//this.fisrtName = person1.firstName.

console.log(person.firstName);
console.log(person.age);
console.log(person.about);                              //print full function

person.about();                                        // call function or method



const aboutme = function(){                              
    console.log(`I am ${this.firstName} and my age is ${this.age}`);
}

const person1 ={
    firstName:"Mohit",
    age: 20,
    about: aboutme
}

const person2 ={
    firstName:"Rohit",
    age: 22,
    about: aboutme   
}

const person3 ={
    firstName:"Supriya",
    age: 16,
    about: aboutme
}

const person4 ={
    firstName:"Sonu",
    age: 18,
    about: aboutme
}
// aboutme();  //Here this is undefined. But
console.log(aboutme);

console.log("");
person1.about();   // calling method with person1 makes this keyword as same object(who is calling) person1(this=person1) object.
person2.about();    // calling method with person2 makes this keyword as same object(who is calling) person2(this=person2) object.
person3.about();    // calling method with person3 makes this keyword as same object(who is calling) person3(this=person3) object.
person4.about();    // calling method with person4 makes this keyword as same object(who is calling) person4(this=person4) object.




