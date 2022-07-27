//nested if

// Guess an number game
let num = 27;
let userGuess = +prompt("Guess a number between 1 to 100");
console.log(userGuess);
if(userGuess===num){
    console.log("Hurrah! you win the game.You guess right number");
}
else{
    if(userGuess>num){
        console.log("You guess is too big.");
    }else{
        console.log("You guess is too small.");

    }
}

//ifelse if
let temIndegree = 10;

if(temIndegree<=0){
    console.log("The day is extremely cold");
}
else if(temIndegree<=20){
    console.log("The day is too cold");

}
else if(temIndegree<=35){
    console.log("The day is cold");
}
else if(temIndegree<=45){
    console.log("The day is normal");
}
else{
    console.log("The day is too hot");
}
