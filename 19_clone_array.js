// Clone array(copy of the array object in diff. array that both didn't effect each other)

//if
let array3 = ["value1","value2","value3"];
let array4 = array3
console.log(array3 === array4)

// methods to clone array

// 1)By copying all value in another array.But never used.
let array1 = ["value1","value2","value3"];
let array2 = ["value1","value2","value3"];
array1.push("value4")
console.log(array1)
console.log(array2) // doesn't affect on the array1

console.log(array1 === array2)

//2) With slice method (fastest way)
let array5 = ["value1","value2","value3"];
let array6 = array5.slice(0);
console.log(array5)
console.log(array6)
console.log(array5 === array6)
array6.push("value4")
console.log(array5)
console.log(array6)

//3) With concat method
let array7 = ["value1","value2","value3"];
let array8 = [].concat(array7);
console.log(array7)
console.log(array8)
console.log(array7 === array8)
array6.push("value4")
console.log(array7)
console.log(array8)

//4) New way with spread operator(mostly used)
let array9 = ["value1","value2","value3"];
let array10 = [...array9];
console.log(array9)
console.log(array10)
console.log(array9 === array10)
array9.push("value4")
console.log(array9)
console.log(array10)






