//drawbacks recovery

   //Drawback--> As you see there is an object method(function) in the createUser.
   //When we create new user 1 object created and 2 methods are also created.
   //if we create 1 million users, 1 object created 2 methods 1 million times.
   //Jitne baar object banega utne baar ye methods meri memory location me store honge.
   //But we just need only one copy of the method for object.
   //As we know methods are same for all objects.


//we stored methods in new object.
const userMethods ={
about:function(){
    return `${this.firstName} ${this.lastName} is ${this.age} years old`
},     
is18:function(){
    return this.age >= 18;
 }  
}

function createUser(firstName, lastName, email, age, address){ 
    //we don't give function as parameter because function is same in every case.
                   const user =  {};                   //create object
                   user.firstName = firstName;         //add key-value pair
                   user.lastName = lastName;         //not giving hardcore value just gave the value we i/p.
                   user.email = email;
                   user.age = age;
                   user.address = address;


                        //    user.about =  function(){
                         //        return `${this.firstName} ${this.lastName} is ${this.age} years old`
                         //    },     
                        //    user.is18 =  function(){
                        //        return this.age >= 18;
                        //     }  


                    user.about = userMethods.about;     
                    user.is18 = userMethods.is18;     // we can store their reference(address/pointer).
                    // so it stores only,address of method created. Which is already stored in heap memory.
                    //Every time we call the method, it goes to its memory address(heap) and call their.
                    //Now method only store in heap once. We just provide the reference of it.
                    //So it saves lots of memory.
   
                    return user;                       //return object   
   
   }
   
   const user1 = createUser("Rohit","Raj","rohitraj@gmail.com",28,"123 home");
   console.log(user1);
   const about1 = user1.about();
   console.log(about1);
   const is181 = user1.is18();
   console.log(is181);

   const user2 = createUser("Mohit","Singh","mohitraj@gmail.com",27,"123 home");
   console.log(user2);
   const about2 = user1.about();
   console.log(about2);
   const is182 = user1.is18();
   console.log(is182);

   const user3 = createUser("Shohit","Raj","shohitraj@gmail.com",8,"123 home");
   console.log(user3);
   const about = user3.about();
   console.log(about);
   const is18 = user3.is18();
   console.log(is18);


   //There is an other Drawback. Refer to 66.js.


   
