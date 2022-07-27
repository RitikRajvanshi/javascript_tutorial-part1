//every method

//This method is used to check the condition that every element present the array passes the test or not.

//The callback function called in it retun boolean value(true or false).

// every method return boolean value(true or false).

//first callback function should be test and then every method should be test.
//Every elements in the array should pass the test, then it give true else false.

const isEven = [2,4,6,8,10];

const ans = isEven.every((number)=>{
    return number%2===0;
});

console.log(ans);

//Realistic ex

//task--> We have to check that every product in the cart have price should be greater than 10000.

const cart=[
    {ProductId: 1, product: "fridge", Price: 20000},
    {ProductId: 2, product: "A.C", Price: 35000},
    {ProductId: 3, product: "T.V", Price: 55000},
    {ProductId: 4, product: "phone", Price: 15000},
]


const check = cart.every((cartProduct)=> cartProduct.Price > 10000);
console.log("Is every product in cart have price greater than 10000", check);

