// reduce method

// The reduce() method executes a reducer function on each element of the array and returns a single output value.

//It is used to reduce the array to a single value 
// and executes a provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator.

// Mainly to used sum of the array.

// It takes two parameter known as accumulator and currentValue
//Accumulator is like total which has some intial value or it takes from the array's first element.
//CurrentValue is increamented everytimes and takes a element from the array.

const number=[2,5,13,8,10]

const sum = number.reduce((accumulator, currentValue) =>{
   return accumulator+currentValue;
})
console.log("Sum is:",sum);

// Track the steps
// accumulator       currentValue      sum
// 2                    5               7
// 7                    13              20   //accumulator takes value from last returned value i.e 7
// 20                   8               28
//  28                  10              38

//Realistic example

const cart=[
    {ProductId: 1, product: "fridge", Price: 20000},
    {ProductId: 2, product: "A.C", Price: 35000},
    {ProductId: 3, product: "T.V", Price: 55000},
    {ProductId: 4, product: "phone", Price: 15000},
]
//We want total price of the added product in the cart.
const sumOfcart = cart.reduce((Total,currentProduct)=>{
    return Total  + currentProduct.Price;
},0)                     //0 is the initial value of the accumulator/total
console.log("Subtotal in cart is: ",sumOfcart);

// Track the steps
// accumulator           currentValue      sum
// 0(initial value)      20000              20000
// 20000                 35000              55000  //accumulator takes value from last returned value i.e 20000
// 55000                 55000              110000
//  110000               15000              125000


