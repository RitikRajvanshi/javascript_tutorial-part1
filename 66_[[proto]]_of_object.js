//chaining
//drawback

//If we created new methods in the userMethod.
//Then every time we have to give reference in my function(createUser).
//ex---> is18 method, we have to give reference it in my function createUSer(user.about = userMethods.about)

//Now if we want to create 10000 of methods in the userMethod.
//That means we also have to give reference 1000 times in the function.
//If we forget in of the method there we are unable to use that method.


//Resolve drawback

//To resolve this query we just make a connection b/w objects createUser and UserMethod with Object.create().
//It gives a reference of userMethod to Createuser's  __proto__.It is known as chaining.
//Everytime we call method if not found in createUser, it moves to its __prtoto__ and run there.

const userMethods ={
    about:function(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old`
    },     
    is18:function(){
        return this.age >= 18;
     }  
    }
    
    function createUser(firstName, lastName, email, age, address){ 
        
                    //    const user =  {};                   //create object
                        const user = Object.create(userMethods);   //We put the connection b/w both objects(Method) user and userMethod.
                        //With this we give a reference of userMethod data(fnc) to user's  __proto__.
                        user.firstName = firstName;         //add key-value pair
                       user.lastName = lastName;         //not giving hardcore value just gave the value we i/p.
                       user.email = email;
                       user.age = age;
                       user.address = address;

// as we use Object.create method and bind the object and other object(method) to each other.So now remove it.
//As it take data from the userMethod's  proto..
                        // user.about = userMethods.about;     
                        // user.is18 = userMethods.is18;     // we can store their reference(address/pointer).
                        
                        return user;                       //return object   
       
       }
     
       const user1 = createUser("Rohit","Raj","rohitraj@gmail.com",28,"123 home");
       console.log(user1);
       const about1 = user1.about();
       console.log(about1);         
       const is181 = user1.is18();
       console.log(is181);