//Objects
//Arrays are useful and good but not sufficient for real world object.
//Object stores as key-value pair
//Object don't have index

//Create object
let person ={   //prperty(key):value
                name: "Ritik",
                age:27,
                color:"white",
                hair:"black"
            };
console.log(typeof person,person);
console.log(person.name);//dot 
//or
console.log(person["name"]);//square braces
console.log(person["age"]);

//arrays within object....

//by default these keys are stored in string type.
//The keys in the object is always type of string/ symbol.
//so we also gave the keys within "".
let person2= {
            "name":"Rohit",
            "age":25,
            "class":12,
            "hobbies":["playing", "travelling", "watching"],
};
console.log(typeof person2,person2);
console.log(person2.hobbies);

// adding key-values
person2.gender="male";
console.log(person2);
//or
person2["haircolor"]="black";
console.log(person2);

