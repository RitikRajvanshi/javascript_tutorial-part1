//default parameter

function addTwo(a=0,b=0){       // This is default parameter


    // if (typeof a ==="undefined"){
    //      a = 0;
    //     }
    //     if(typeof b ==="undefined"){     // This is the first way to gave default value of parameter
    //      b = 0;
    // }


    return a+b;
}
const add = addTwo(4)
// As we have two parameters but we gave only one argument,therefore second argument is undefined  
// Therefore the o/p will be NaN
//To resolve this or gave a default value to a and b 
// We have two choices.

console.log(add);