//find method
//It takes call back function as i\p.
//It finds the first occurence, which has to find.

// Example
const animal=["Horse","cat",,"Mouse","dog"];
const find1 = animal.find((string)=>{
    return string.length === 3;
})
console.log(find1);
//It retruns the first occured element whose length is 4.

//Now check the realistic example.
const products =[
    {prductId:"001", product:"Watch",price:1500},
    {prductId:"002", product:"Perfume",price:500},
    {prductId:"003", product:"Gloves",price:200},
    {prductId:"004", product:"Undergarments",price:400},
]

//In real world we try to use find method on which, have unique no. or id or unique string.
//Task--->We find the product detail whose productid is 003.
const find003 = products.find((product)=>{
    return product.prductId==="003";
})
console.log("Find the product details whose id is ProductId is 003")
console.log(find003);