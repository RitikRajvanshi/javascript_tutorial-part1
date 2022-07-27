//ternary operator
let age = 10;
let drink;
if(age>=15){
    drink = "You can drink cofee";
}
else{
    drink = "You only drinks milk";
}
console.log(drink);

// with ternary operator or conditional operator

let drink2 = age>=15? "coffee" : "milk";
console.log("You can drink"+" "+ drink2);


// and(&&) and or(||) operator
let age2 = 21;
let lic = "Licence";
if(age2>=22 && lic==="Licence"){
    console.log("You can use guns.")
}
else{
    console.log("You cann't use guns.")

}

if(age2>=22 || lic ==="Licence"){
    console.log("You can use guns.")
}
else{
    console.log("You cann't use guns.")

}
