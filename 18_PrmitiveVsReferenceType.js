// Primitive Vs Reference data types


//Prmitive data type ex
let num1 = 6;
let num2 = num1;
console.log("The value of num1 is ",num1);
console.log("The value of num2 is ",num2);
num1++;
console.log("The value of num1 is ",num1);
console.log("The value of num2 is ",num2);
//In primitive data types, both num1 and num2(variables) are saved in stack at different location.The changes made in first location doesn't effect on second location.
// When you declare a primitive data type in JavaScript, it is stored on a stack. 
//With each primitive data type you create, data is added to the stack.
//So the value changed in num1 didn't effect on num2.
//num1 = 7 and num2 remains 6.

//refernce data types
let num3 =[1,2,3,4];
let num4 =num3;
console.log("The value of num3 is ",num3);
console.log("The value of num4 is ",num4);
num3.push(5,6);
console.log("The value of num3 is ",num3);
console.log("The value of num4 is ",num4);

// In reference data type
//Reference data types, unlike primitive data types, are dynamic in nature. That is, they do not have a fixed size.

//When you create a variable and assign it a value that is a reference data type, the computer does not directly store that data type in that variable (as is the case with primitive types).

// we have two data structures now. A stack, and a heap. Say we declared an object, for example. The object itself is stored on a heap(having its adress), and its pointer(adress of the object present at stack) is stored on a stack. The pointer is identified by the object's variable name, and points to that object.
//Now we could create a variable, num3, and assign an object to it. We create another variable num4, and assign it to num4(assign same address as num3 have, to point the object present at heap).
//Since the object already exists on the heap, num3 and num4 will both point to the same location.

//Another difference comes in when we update object1. If we log both variables to the console, we see that the change affected them both. This is because they are pointing to the same object on the heap – and updating one variable of course affects the other.