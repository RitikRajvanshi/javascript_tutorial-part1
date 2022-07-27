//iterable
// jinpe we apply for of loop on it.
//string, array are iterable

//array like object kon se hote h
//jinke pas length property hoti h
// jinhe hm index se access kr skte hai
//ex- string
const firstName = "Radhemohan"
console.log(firstName.length);  // array like object
for(let name of firstName){     //iterable
    console.log(name);
}
