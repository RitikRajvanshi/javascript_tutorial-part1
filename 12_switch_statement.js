//switch statement

//Print days according to the number from (0 to 6)=>(Monday to Sunday)
//with else if
// let day = 0;
// if (day === 0) { console.log("Monday"); }
// else if (day === 1) { console.log("Tuesday"); }
// else if (day === 2) { console.log("Wednesday"); }
// else if (day === 3) { console.log("Thursday"); }
// else if (day === 4) { console.log("Friday"); }
// else if (day === 5) { console.log("Saturday"); }
// else if (day === 6) { console.log("Sunday"); }
// else { console.log("Invalid day"); }

//switch statement
let day = 5;
switch (day) {
    case 0:
        console.log("Monday")
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("Saturday");
        break;
    case 6:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;

}
console.log("Loop is outside now");