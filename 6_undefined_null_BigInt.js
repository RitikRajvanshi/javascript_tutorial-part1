// undefined
//null


// if variable is not define just declare then it should be undefined datatype.
let fullname;
console.log(typeof(fullname));

let fullName = null;
console.log(typeof(fullName));
// as you see at console it shows object as a data type of null, this is the bug/error which was not corrected yet, due to some obvous reason.


//BigInt

console.log(Number.MAX_SAFE_INTEGER);
// maximum safe number in variable with "number" data type is 9007199254740991
// greater than that is declare with BigInt data type
let number = BigInt(12332165488);
console.log(number);

//or we can store directly with
let newnumber = 4142142142n;
console.log(newnumber);

let add = number + newnumber;
console.log(add);
// we can't operate operation with BigInt and normal number datatypes we have to convert all in BigInt first to perform operations on it.


