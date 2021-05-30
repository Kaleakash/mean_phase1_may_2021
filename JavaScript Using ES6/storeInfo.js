function addName() {
    var name =document.getElementById("name").value;
    console.log("Name is "+name);
    sessionStorage.setItem("obj",name);
    localStorage.setItem("obj1",name);
}