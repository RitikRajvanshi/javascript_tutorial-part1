//creating connection between proto of object and prototype of function.


// const userMethods ={
//     about:function(){
//         return `${this.firstName} ${this.lastName} is ${this.age} years old`
//     },     
//     is18:function(){
//         return this.age >= 18;
//      }  
//     }
    
    function createUser(firstName, lastName, email, age, address){ 
        
                        // const user = Object.create(userMethods);   //We put the connection b/w both objects(Method) user and userMethod.
                        //With this we give a reference of userMethod data to user's  __proto__.

                        //userMethod is not created due to using already present object space in function.
                        //prototype

                        const user = Object.create(createUser.prototype);  //create {} object
                        //chaining between createUser and createUser.prototype (same function)

                        user.firstName = firstName;         //add key-value pair
                       user.lastName = lastName;            //not giving hardcore value just gave the value we i/p.
                       user.email = email;
                       user.age = age;
                       user.address = address;
                        return user;                           //return object   
       
       }
       
       console.log(createUser.prototype);

       //Wow! see we have a prototype(empty object) where we can save property.

       //Why creating a new object(method)....?

       // Instead, creating new object (userMethod). We use that provided space(prototype) to save properties(object method).

       //Now add methods in the prototype...
       createUser.prototype.about = function(){
                return `${this.firstName} ${this.lastName} is ${this.age} years old`
            }
        
        createUser.prototype.is18 = function(){
                    return this.age >= 18;
                 }  
                 
        createUser.prototype.sing = function(){
            console.log(`I am singing for ${this.firstName}`);
        }


       const user1 = createUser("Rohit","Raj","rohitraj@gmail.com",28,"123 home");   //user ka _proto_
       const user2 = createUser("Mohit","Raj","rohitraj@gmail.com",29,"123 home");
       const user3 = createUser("Shohit","Raj","rohitraj@gmail.com",30,"123 home");
       console.log(user1);
       const about1 = user1.about();
       console.log(about1);         
       const is181 = user1.is18();
       console.log(is181);
       user1.sing();

       console.log(user2);
       const about2 = user1.about();
       console.log(about2);         
       const is182 = user1.is18();
       console.log(is182);
       user2.sing();

       console.log(user3);
       const about3 = user3.about();
       console.log(about1);         
       const is183 = user3.is18();
       console.log(is183);
       user3.sing();