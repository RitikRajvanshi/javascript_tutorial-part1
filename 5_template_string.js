// template string
let age = 25;
let myname = "Rtik Raj"
// Now I have to print as My name is Ritik Raj
// and my age is 22
let aboutme = "My name is "+myname +" and My age is "+age;
console.log(aboutme);
// but this is so exaustic so we use template(``) to make it normal
let Aboutme = `My name is ${myname} and My age is ${age}`;
console.log(Aboutme);