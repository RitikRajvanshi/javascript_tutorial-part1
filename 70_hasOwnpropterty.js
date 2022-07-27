//hasOwnProperty
function CreateUser(firstName, lastName, email, age, address){
   this.firstName = firstName;         
   this.lastName = lastName;            //not giving hardcore value just gave the value we i/p.
   this.email = email;
   this.age = age;
   this.address = address;
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

//let access user1's key
// for(let user in user1){
//     console.log(user);
// }
//we see that the user1 shows its own key + keys present in prototype(about,is18 and sing)

//But we want to show only user1 own key.
//Then we use hasOwnProperty method
//gives boolean value

for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}
//this loops runs on every key of the user. Gave false to the value of prototype keys. 
//And print its own keys only.