//Sets(it is iterable)

//Set
//We use Set only if we have to store unique data.(like:id's)
//store data(iterable)
//sets have its own methods.
// no index-based access and no lenth propety allowed
//Order is not guanateed
//unique items allowed(duplicate items are ignored)
//Set and array are alike everywase rather than no index-based access & duplicate items are ignored.

// const numbers = new Set([1,2,3]); 
const string1 = new Set("abcd"); //it store separately the string 'a','b','c','d'
console.log(string1);
const numbers = new Set([1,2,3,4,3,2,1,4]); 
console.log(numbers);                               // duplicate are ignored

//Order is not guranteed
// [1,2,3] should be [3,2,1] or [1,3,2]

//Another way to add items
const array1 =["item1","item2","item1"]
const number2 = new Set();   // empty Set
number2.add(2);
number2.add(0);
number2.add(1);
// number2.add([1,2,4,1,3]);       
// number2.add([1,2,4,1,3]);   //Both are different array in the perpective of js. Therefore not ignored.
//But
number2.add({name:"harshit",age:27}); 
number2.add(array1);
number2.add(array1);  // both are same so ignored.

  //You can store any data type in Set.

console.log(number2);            

//If you want to check that Set have a particular data or not
//We can use has method to know it.
//We we want to check that above set have 3 in it.


// if(number2.has(3)){      // the has method gave boolean value if present:true else not present:false.
//     console.log("3 is present in the array.")
// }
// else{
//     console.log("3 is not present in the array.")

// }

//Checking iterable or not
console.log("Iterate the array here....")
for(let number of number2){
    console.log(number)
}

//trick to ignore duplicate data from array or extract unique data from the array.
const array2 =[2,3,5,4,4,1,2,6,9,5,2,1,3]
//Now we want extract the unique data
const uniqueData = new Set(array2);
console.log(uniqueData);
console.log(array2);   //Not effected on array.


//You can also check length of the Set by this trick
let length=0;
for(let data of uniqueData){
    length++;
}
console.log(length);  // now we have length of the unique data.

//Some methods of Set.

// new Set() Creates new Set	

// add()	        Adds a new element to the Set
// delete()	        Removes an element from a Set
// has()	        Returns true if a value exists
// clear()	        Removes all elements from a Set
// forEach()	    Invokes a callback for each element
// values()	        Returns an Iterator with all the values in a Set
// keys()	        Same as values()
// entries()	    Returns an Iterator with the [value,value] pairs from a Set

// Property
// size	            Returns the number elements in a Set









