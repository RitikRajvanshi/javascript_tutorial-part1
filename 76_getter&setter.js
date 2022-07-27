//getter and setter

// The get keyword(getter) will bind an object property to a function.
//Getters and setters are used to protect your data, particularly when creating classes.
// For each instance variable, a getter method returns its value while a setter method sets or updates its value.

//get -  define a getter method to get the property value. 
// set - to define a setter method to set the property value.

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age ;
    }


    //getter method with get keyword

    get fullName(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`
    }

    //new method to set the values of the object
    // setName(firstName,lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    //with setter method
    set fullName(fullName){

        // fullName.split(" "); 
        //it gives list of strings by spliting/ breaking full name from spaces b/w them.
        // firstName" "lastName 
        //both are saved in differnt variable.

        const [firstName, lastName] = fullName.split(" ");   //destructuring list
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

const user1 = new Person("Rohan","Yadav",19);
// console.log(user1);
// console.log(user1.info());

//But we want class function to use as property.
//  console.log(user1.info) ---> o/p same as---> console.log(user1.info());.
// The get keyword(getter) will bind an object property to a function.
// So we use function as a property with get keyword(getter method.)

// console.log(user1.info); 
//but it will return the whole function like that,
//ƒ info(){
//     return `${this.firstName} ${this.lastName} is ${this.age} years old.`
// }


//So to use class function as property(object) we use getter method (get keyword) with function.
//Getter is used to get objects and make method to use as property.

console.log(user1.fullName); 

//As we add get keyword to the function now the function worked as property.
//o/p --> We get object --> Person {firstName: 'Rohan', lastName: 'Yadav', age: 19}


//Task---> We have set user1 values to another value.
//three way
//1) built a method in our class(say.. setName)
//2) set the value of user1 manually
//ex-- user1.firstName="abc", user1.lastName="def";
//3) Set the values with setter method.

console.log(user1);


//Updating value with setName method
// user1.setName("Mohit","Srivastava");
// console.log("After updating/setting values: ",user1);

//or

user1.firstName ="Rohan";
user1.lastName ="Roy";
console.log("After updating/setting values: ",user1);
console.log(user1.fullName);

//But we want to set values as we set in property.
//ex--> user1.fullName = " Ronit Roy"
// user1.fullName = " Ronit Roy"  // not possible yet
// console.log(user1.fullName);

//But with setter method it is possible.

user1.fullName = "Ronit Roy"  // now it is possible.
console.log(user1.fullName);
console.log("After updating/setting values: ",user1);


 





