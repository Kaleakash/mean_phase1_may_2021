import { Observable } from "rxjs";

let sub = Observable.create(obj=> {
    
    obj.next("1st statement")
    obj.next("2nd Statement")
    
    obj.next("3rd Statement")
    obj.next("4th Statement")
    obj.error("Error Generated")
    obj.complete("Done the task");
})

sub.subscribe(
(data)=>console.log(data),
    (error)=>console.log(error),
()=>console.log("completed")
)

/*
let pr = new Promise((res,rej)=> {
        res("Done")
})

pr.then(data=>console.log(data)).catch(e=>console.log(e)));

*/