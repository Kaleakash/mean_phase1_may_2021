function getName() {
    var name = sessionStorage.getItem("obj");
    var name1 = localStorage.getItem("obj1")
    console.log("name is in another js from session "+name);
    console.log("name is in another js from local "+name1);
}