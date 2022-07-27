// function returning function

// function myfunction1(){
//     function myfunction2(){
//             console.log("Inside myfunction2")
//     }
//       // We can return any thing here. number/string/array/object
//        return myfunction2;      // What if we return another function here. 
//                                 // This is function returning function.
//     }
    
//  Or we can do this

function myfunction1(){
     return function(){
            return "Inside function";
    };
                            }

const answer = myfunction1();

// Now answer store myfunction2.
// now "answer" is equivalent to the "myfunction2".
// We can call answer as a function now.

console.log(answer());
// answer();


// if we pass function as an argument in another function.
// or we have function returning another function.
// or we do both. Then it is called "Higher order function".