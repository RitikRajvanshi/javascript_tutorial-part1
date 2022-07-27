// sort method
//sort method changes the original array.
//This method is used for sorting the element of the array.

// const array1 =[4000,1200,2000,10000,950];
// // sort method think as["4000","1200","2000","950"]
// array1.sort();
// console.log(array1);

// /o/p --> [10000, 1200, 2000, 4000, 950] that was not expected o/p
//This happens because sort method, sorts the element of the array as string.

const array2 =["rohan","Mohan","Amit","johnson"]
//It puts uppercase character element first(having ascii value less than small character)
array2.sort()
console.log(array2);

//to sort the numbers with sort method
//We have call the callback function.
//return a-b for ascending order and return b-a fordescending order.
const array1 =[4000,1200,2000,10000,950];
array1.sort((a,b) =>{
                     return a-b     //ascending order
})
console.log(array1);

array1.sort((a,b)=>b-a);  // descending order
console.log(array1);


//Realistic method
const products =[
    {prductId:001, product:"Watch",price:1500},
    {prductId:002, product:"Perfume",price:500},
    {prductId:003, product:"Gloves",price:200},
    {prductId:004, product:"Undergarments",price:400},
]

//We have sort it acc to price
// Low to High
console.log("The list of products in the cart are:");
console.log(products);

console.log("Sort according to Low To High Price:");
const LowToHigh = products.slice(0).sort((a,b)=>a.price-b.price);
console.log(LowToHigh);
//It can change the whole array.
//For resolve this we clone it.
//So we use slice method to clone the array.

// For High to Low
console.log("Sort according to High To Low Price:");
const HighToLow = products.slice(0).sort((a,b)=> b.price-a.price);
console.log(HighToLow);

// products.sort((a,b)=>b.price-a.price);
// console.log(products);
