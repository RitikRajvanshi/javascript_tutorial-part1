//splice method

//Javascript array splice() method changes the content of an array.
// adding new elements while removing old elements.
// We can add element to any index in the array.
// Remove any element from the array from any index.
// We can remove and add elements at the same time.

// starting index, remove count, insert_item 

// delete item
const array1 =["item1","item2","item3","item4","item5"];
console.log("The array items are: ", array1)
const deletedItem = array1.splice(2,2);   //we can store deleted item in another array.
console.log("Deleted Item:",deletedItem);
console.log("After deleting:",array1);


//insert item
array1.splice(3,0,"insert item3");
console.log("After inserting new items: ",array1);

//Both
const deletedItem1 = array1.splice(1, 2,"insert item1","insert item2");
console.log(array1);
console.log("Delted items: ",deletedItem1);