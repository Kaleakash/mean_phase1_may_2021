var empInfo = '{"id":100,"name":"Ravi","salary":12000}';
    document.write(empInfo);
document.write("<br/>")
document.write(empInfo.id)
// converting string to json 
var empJson = JSON.parse(empInfo);
document.write("<br/> After convertion<br/>")
    document.write(empJson)
document.write("<br/>")
document.write(empJson.id)
document.write("<br/>")
document.write(empJson.name)
document.write("<br/>")
document.write(empJson.salary)
// converting json to string 
var empDetails = JSON.stringify(empJson);
document.write("<br/> After convertion <br/>")
document.write(empDetails)
document.write("<br/>")
document.write(empDetails.id)