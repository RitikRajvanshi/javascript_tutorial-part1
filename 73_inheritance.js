// class example with inheritance
class animal{
constructor(name, age){
    this.name = name;
    this.age = age;
}

eat(){
    return `${this.name} is eating.`
}
supercute(){
    return this.age <= 1;        //true if age of the animal is smaller than 1 otherwise false.
}
cute(){
    return true;                 //true , because every animal is cute.
}
}
// const animal1 = new animal("dog",2);
// console.log(animal1);
// console.log(animal1.supercute());
// console.log(animal1.cute());
// console.log(animal1.eat());

//task --->  create another class cat, which have same methods and functions.
//we use inheritance
//subclass extends parentclass
//subclass uses all methods and function of parentclass.

class cat extends animal{

}

const kitty = new cat("cat",1);
console.log(kitty);
console.log(kitty.supercute());
console.log(kitty.cute());
console.log(kitty.eat());

//We are calling cat class constructor above.
// We don't have cat class constructor, 
// so the new keyword goes to its extends class(parent class) call its constructor to construct objects and add propeties in kitty object.


