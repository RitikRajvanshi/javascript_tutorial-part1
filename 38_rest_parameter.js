// Rest Parameter


function myfunc(a,b,c,...d){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
    console.log(`d is`,d)  // d is rest store rest parameters as array
}

myfunc(3,4,5,6,8,10);

// As you see that argument 6,8,10 are useless due to only 3 parameters declare.
// Now we have to store other(rest) parameters in an array.
// We use spread operator as
  // ...num stores all the values given by us as argument
function Sum1(...num){
    let total = 0;
    for(let numbers of num){
         total = total + numbers;
    }
    return total
}

const ans = Sum1(1,2,5,7,25);
console.log(ans); 

