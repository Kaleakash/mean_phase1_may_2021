//ES5 style 
//var pp = new Promise(function(resolve,reject){
//
//});

//ES6 style 
var i=2;
let pp = new Promise((resolve,reject)=>{
          if(i==1){
            resolve("Successfully Done")
          }else {
            reject("Error Generated")
          }
            
           
});

// Then and catch are callback asynchronous function which get
//call if promise resolved successfully then call if promise 
//reject catch call..
pp.then(data=>document.write(data)).catch(error=>document.write(error))
document.write("<br/> Normal Statement<br/>")