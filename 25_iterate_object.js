// how to iterate the object
const person ={
    name:"Rohan",
    age:28,
 "person hobbies":["playing", "listening", "walking"], // Without "" you are unable to add key if the key is more than one word.
}

// for looping in object we use two 
//for in loop
//Object.keys

for(let key in person){
    //  console.log(key); // access keys.
    //  console.log(person[key]);// using key in square bracket to access array's value.
        // console.log(`${key} : ${person[key]}`);
     //Here, Backtics(template string) is used to print key value pair.
     //or we have do this,
     console.log(key,": ",person[key]);
}

// with Object.keys
//fetching keys only.

console.log(Object.keys(person));

for(let key of Object.keys(person)){
    console.log(key," : ",person[key]); // for the value with keys.
}