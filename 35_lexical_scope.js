//Lexical scope

// Lexical scope is the ability for a function scope to access variables from the parent scope.
// We call the child function to be lexically bound by that of the parent function.

// for example

const name1 = "Harry Potter";

function person() {
    // const name1 = "Harry Shanwill"

    const firstName =()=>{
        // const name1 = "Harry Wilson" 

         //If i comment out or remove the above line it then, js first checks the variable "name1" is found localy in that funtion.
         //If not found within the function then it checks the variable in its lexical scope(parent function).
         //This process is moveon until the variable not found.
         //If found then it will take that value of variable else throw error.

        console.log("Inside my firstName", name1);  // It takes name1 in parent function(lexical scope) environment.
    }
    
    const lastName = function(){
        var name1 = "Harry Wilson" // The name1 varible is not taken from here
                                    // the block scope of the const.
                                    // Not lexical environment(parent function)
    }

    // function gender(){

    // }

    
    console.log(name1);
    firstName();

}
person();