//objects inside array
//Very useful for real world entity.

const users = [  {userId:1, firstName:"Rohan", gender:"male"},
                {userId:2, firstName:"Mohan", gender:"male"},
                {userId:3, firstName:"Sohali", gender:"female"}];
                
console.log(users);
//For individual iteration
//We use for-of loop

for(let user of users){
    console.log(user);
    console.log(user.userId);
    console.log(user.firstName);
    console.log(user.gender);

}
