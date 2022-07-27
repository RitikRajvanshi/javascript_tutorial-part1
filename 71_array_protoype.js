//More about prototype

//creating array.
let number = [1,2,3];

//When we check (number.), we found that above array number have lots of methods.
//But we know that only function have prototype and the methods are present in its protoype.
//Why this is happening..?

//This is done because, internally array is created by Array constructor method and we can call that method with new keyword.
let numbers = new Array(1,2,3);   //method call with new keyword.

//We can also create array like above(with Array constructor.)

//Now here we use new keyword.


//That means, the object numbers is now work something like method so have its own prototype and prototype have lots of methods for numbers.
//So we can say that array have lots of methods in its prototype, like function.
console.log(Array.prototype);
// or
console.log(Object.getPrototypeOf(numbers));

//But we just created array like that
// let number = [1,2,3]; because it is small and easy to use.
//Internally what is working we know that.

// console.log(Array.prototype);

function hello(){
    console.log("hello world");
}
console.log(hello.prototype);
console.log(Object.getPrototypeOf(numbers));

//We see the output of both protope.
//There is difference comming that array protope array [] and function prototype is object {}.

//You can change the protype also...
hello.prototype =[]; //  empty array
console.log(hello.prototype);
hello.prototype.push('1');
console.log(hello.prototype);


