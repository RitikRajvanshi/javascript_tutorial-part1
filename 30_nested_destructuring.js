// nested destructuring

const users = [  {userId:1, firstName:"Rohan", gender:"male"},
                {userId:2, firstName:"Mohan", gender:"male"},
                {userId:3, firstName:"Sohali", gender:"female"}
            ];

// const[user1,user2,user3] = users;
// console.log(user1);
// console.log(user2);
// console.log(user3);

//here, {} means within object or it is an object and we want userId  and firstname of first user and gender of user3 key value here.
const[{userId,firstName},,{gender}]= users;
console.log(userId,firstName);
console.log(gender);

//If you want to change the name of variable then,
const[{userId:user1Id,firstName:user1Name},,{gender:user3sex}]= users;
//now the variable userId is changed into varId and so on...
// Now we can access it as--->
console.log(user1Id,user1Name,user3sex);

                