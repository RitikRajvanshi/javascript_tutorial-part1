// Maps
//map are iterable.
// Are like object.
// Stored data in ordered fashion.
// store key-value pair(like object).
//duplicate keys are not allowed like object.


//Difference b/w object and maps
// Object have only string or symbol as a key

//But in maps you can use anything(array,number,object...)as a key
// object is not iterable we can apply only for in loop not for of loop


//Create map
const person = new Map();   // empty Map
//Adding values in this Map
person.set("firstName","Ritik");
person.set("age",28);
person.set([1,2,3,4],"onetwothreefour"); // you can put key in data type.
person.set(1,"one");
person.set({name:"Rohan",age:25},"one");
console.log(person);

// or you can directly create Map.
const person2 = new Map([["firstName","Ritik"],["age",22],[[1,2,3],"array"]]);
console.log(person2); 

//How to get data in Map
//In object we can access data like that
console.log(person.firstName); // undefined in case of MAp
console.log(person["firstName"]); //undefined

//We can fetch data in Map by using get method.
console.log(person.get("firstName"));
console.log(person.get("age"));
console.log(person.get(1));


//How to access all keys or iterate map.
//key method of map
// console.log(person.keys());

// //We can print keys with loop on map-iterator.
// console.log("Printing keys separately...");

// for(let key of person.keys()){
//     console.log(key, typeof key);
// }

//As Map is iterable
//Apply for of loop

for(let pers of person){
    console.log(pers);
    // console.log(Array.isArray(pers));
} 

console.log("Destructuring.....");

for(let [key,value] of person){  // you can not put directly key, value for destructing
// To print or store key-value separately. We use destructuting and you see that, for-of loop gives the data in array so we have to use here array destructuring technique to destructure Map.
    console.log(key,value);  //you have to put [key,value]for destructuring as for-of loop gave the key values as array(array destructuring).
} 

//task ---> I have an object with some important data in it
//We have to insert some extra information but not using(Not in this) object.
//We have to store extra data another place.

console.log("Resolving task");

const person3 = {
            id: 27445,
            firstName: "Raj"
}
const person4 = {
    id: 27456,
    firstName: "Raushani"
}
const extraInfo = new Map();   //object is mapping object key(object)=> value(object)
extraInfo.set(person3, {age:27, gender:"Male"})//key is person3 and value is an object.
extraInfo.set(person4, {age:22, gender:"female"})
console.log("Extra information of the object:")
console.log(extraInfo);

//how to use it
//to fetch person3 id
console.log("Id of the person3 is :",person3.id);
console.log("Firstname of the person3 is :",person3.firstName);  //id
  //id
//Now i want the value of the key person3
console.log("Value of the key person3:",extraInfo.get(person3));  //person3(key)---> value
console.log("Value of the key person4:",extraInfo.get(person4));console.log("Value of age of the key person3:",extraInfo.get(person3).age); // age

console.log("Value of age of the key person4:",extraInfo.get(person4).age); // age
console.log("Value of gender of the key person3:",extraInfo.get(person3).gender); // gender
console.log("Value of gender of the key person4:",extraInfo.get(person4).gender);






