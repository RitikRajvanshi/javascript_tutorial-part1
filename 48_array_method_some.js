//some method

//Everything in this method is same as everymethod.
//But it checkes any element of array passes the test.
//If pass then true else false.

const isEven = [3,9,5,2];
//Is any element in the array is even or not.

const ans = isEven.some((number)=>{
    return number%2===0;
});

console.log(ans);

//Realistic example

//task--> We have to check that any product in the cart have price greater than 10000.

const cart=[
    {ProductId: 1, product: "fridge", Price: 200},
    {ProductId: 2, product: "A.C", Price: 350},
    {ProductId: 3, product: "T.V", Price: 550},
    {ProductId: 4, product: "phone", Price: 15000},
]


const check = cart.some((cartProduct)=> cartProduct.Price > 10000);
console.log("Is any product in the cart have price greater than 10000", check);