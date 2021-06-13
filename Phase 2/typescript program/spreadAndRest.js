var empInfo = [100, "Ravi", 12000, "C", "C++", "Java"];
/*let empId =empInfo[0];
let empName = empInfo[1];
let empSalary = empInfo[2]; */
// de structure 
// let [empId,empName,empSalary]=empInfo;  
// console.log("id is "+empId)
// console.log("name is "+empName)
// console.log("salary is "+empSalary);
//// de structure  with skip some index position 
// let [empId,,empSalary]=empInfo;  
// console.log("id is "+empId)
// console.log("salary is "+empSalary);
var empId = empInfo[0], empName = empInfo[1], empSalary = empInfo[2], skillSet = empInfo.slice(3);
console.log("id is " + empId);
console.log("Name is " + empName);
console.log("salary is " + empSalary);
console.log("Skill is " + skillSet);
