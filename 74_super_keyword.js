//super keyword in class
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

 //task--->now we have to add property another method(property) speed.
    //In past, we are using animal constructor to create objects. But this is not enough.
    //So create own constructor.

    class cat extends animal{
            constructor(name,age,speed){

     //name aur age ke liye hum animal ke constructor ko use kar skte hai.
    //  uske liye hum super keyword ka use karenge.

            super(name,age)              //super == parent class(animal).We are using name and age of super(animal/parent) class.

            this.speed = speed;             //speed property(extra property) hum add karenge.
            }
        run(){
                return `${this.name} is running at speed ${this.speed} kmph`
        }    
    }

   
    const kitty = new cat("cat",1, 45);   

    console.log(kitty);                    //speed should be added now.
    console.log(kitty.run());               //Using spped property as in method.
    // console.log(kitty.supercute());
    // console.log(kitty.cute());
    // console.log(kitty.eat());
