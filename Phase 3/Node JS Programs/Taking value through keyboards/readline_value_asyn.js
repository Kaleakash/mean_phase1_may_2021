let obj = require("readline");
let info = obj.createInterface({
        input:process.stdin,
        output:process.stdout
        });
// info.question("Enter the name",(name)=> {
//     console.log("Your Name is "+name);
//     info.close();
// })
info.question("Enter the id",(id)=> {
    
    info.question("Enter the name",(name)=> {
    
        info.question("Enter the age",(age)=> {
            console.log("id is "+id);
            console.log("name is "+name);
            console.log("age is "+age);
            info.close();
        })
        
    })
    
})
