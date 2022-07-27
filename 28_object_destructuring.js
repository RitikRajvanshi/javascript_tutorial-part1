//object destructuring

const band={
    bandName: "Led Zeppeline",
    famousSong:"Stairway to the heaven",
    year: 1968,
    teamMembers:7
};


//If we want to store all elements of the object band separately in other vaiables.
// We destructed the object like that,

// const name = band.bandName;
// const song = band.famousSong;
// console.log(name);
// console.log(song);

// object destructuring

// const{bandName, famousSong} = band; // by default the values are stored key name.
// console.log(bandName);
// console.log(famousSong);
//we always have to use same key(bandName and famousSong..etc) for destructuring.
//Whenever we don't want another variable name here.


//If you want to save the bandName and famousSong in other variables then,
const{bandName:var1, famousSong:var2} = band;
console.log(var1);//now it is stored in var1 and var2
console.log(var2);

let {bandName,famousSong,...remainingprops}= band; // you can store remaining by spread opertor in another varibale.
console.log(remainingprops); // now remaining key values are stored in remainingprops variable.









