// function inside funtion

function person() {
        var name1 = {
            firstname: "Harry",
            lastname: "Potter"
        }

        const firstName =()=>{
            console.log(name1["firstname"]);
        }
     
        const lastName =()=>{
            console.log(name1["lastname"]);
        }
        firstName();

        lastName();
    }
person();


    
   
