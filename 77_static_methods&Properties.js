//static methods and properties

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //getter method with get keyword
    get fullName(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`
    }
    
    static statprop = "This is static property"; //static property,directly access through class.


    eat(){
        return `${this.firstName} is eating.`
    }
    supercute(){
        return this.age <= 1;        //true if age of the animal is smaller than 1 otherwise false.
    }
    cute(){
        return true;                 //true , because every animal is cute.
    }
    
    //static method which is accessed or invoke direct by class not with object.
    static classInfo(){
        return `This is using directly class not users(object)`
    }
}

const user1 = new Person("Yohan","Nanda", 25)
console.log(user1.fullName);
console.log(user1.eat());

//These method always related with object of the class.

//But we also build methods which directly related with class.
//Jinko banane ke liye hame object ki jrurt nahi hogi hum direct class se use call kar skte hai.
//These methods are known as static method.

// const statMethod2 = user1.classInfo();
// console.log(statMethod);
//throws error due to static method.
//user1.classInfo is not a function

const statMethod = Person.classInfo();
console.log(statMethod);

const statproperty = Person.statprop;
console.log(statproperty);



