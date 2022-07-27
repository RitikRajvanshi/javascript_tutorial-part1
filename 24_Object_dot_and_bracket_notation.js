// difference b/w dot amd bracket notation
const key = "email";
const person ={
    name:"Rohan",
    age:28,
 "person hobbies":["playing", "listening", "walking"], // Without "" you are unable to add key if the key is more than one word.
}

// console.log(person.person hobies); // here dot notation is not possible.
console.log(person["person hobbies"]); // so we use bracket notation here.

person["key"] = "ritik@gmail.com";
console.log(person);
// but we want to add element not as key:"ritik@gmail.com"
// we want use, key's value(email) as key-----> email:"ritik@gmail.com"

//we have to remove "" then it computes the value of key i.e email.
person[key] = "raj@gmail.com";
console.log(person);
