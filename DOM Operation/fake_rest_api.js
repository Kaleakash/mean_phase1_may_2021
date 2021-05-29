//fetch is a pre-defined function provided by javascript which 
//help to call rest API develop in any language and return type 
//of fetch api is promise object 
fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).
then(data=>console.log(data.length)).catch(error=>console.log("Error generated"))