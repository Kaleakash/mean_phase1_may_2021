var count=1;
function addData() {
    //console.log("Event fired")
    var name = document.getElementById("name").value; //retreive value of name
    var age = document.getElementById("age").value;     // retrieve value of age 

    var divTag = document.getElementById("main");    // point to div tag using id main 

    var empTag = document.createElement("p");   // p tag created 

    var empTagContent = document.createTextNode(name+","+age)// content created 
    empTag.appendChild(empTagContent);      // content added to p

    empTag.setAttribute("class","myClass");  // adding the class attribute 
    
    empTag.setAttribute("id",count);    // adding id attibute 
    


    var deleteNode = document.createElement("a");
    var deleteNodeValue = document.createTextNode("X");
    deleteNode.appendChild(deleteNodeValue);

    deleteNode.setAttribute("href","#");
    deleteNode.setAttribute("onclick","deleteTag("+count+")");

    
    empTag.appendChild(deleteNode);

    divTag.appendChild(empTag);         // p added to div 
    count++;
    reset();
}

function reset() {
    document.getElementById("name").value=""
    document.getElementById("age").value=""
}

function deleteTag(idValue) {
    console.log("Event fired..."+idValue)
    var obj = document.getElementById(idValue);
    obj.remove();
}

