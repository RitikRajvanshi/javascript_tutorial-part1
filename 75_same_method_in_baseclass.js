
//same method in base class
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

 //task---> We have to modified eat method for cat class.
 // we just add eat() in subclass.
 //because new keyword first goes to its own class constructor and methods and if not found then move on to superclass. 

    class cat extends animal{
            constructor(name,age,speed){

     //name aur age ke liye hum animal ke constructor ko use kar skte hai.
    //  uske liye hum super keyword ka use karenge.

            super(name,age)              //super == parent class(animal).We are using name and age of super(animal) class.
            this.speed = speed;             //speed property hum add karenge.
            }

            eat(){
                return `modified eat: ${this.name} is eating food.`
            }

            
             run(){
                return `${this.name} is running at speed ${this.speed} kmph`
        }    
    }

   
    const kitty = new cat("cat",1, 45);   

    console.log(kitty);                    //speed should be added now.
    console.log(kitty.run());
    console.log(kitty.eat());
    // console.log(kitty.supercute());
    // console.log(kitty.cute());
    // console.log(kitty.eat());
