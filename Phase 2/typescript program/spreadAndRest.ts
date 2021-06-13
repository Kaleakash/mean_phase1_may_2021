//let empInfo:any[]=[100,"Ravi",12000,"C","C++","Java"];
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
// spread operator is use to store zero, one or many array value while de structure 
// let [empId,empName,empSalary,...skillSet]=empInfo;  
// console.log("id is "+empId)
// console.log("Name is "+empName)
// console.log("salary is "+empSalary);
// console.log("Skill is "+skillSet)

// let num1:number[]=[100,200,300,400];
// let num2:number[]=[500,600,700,800];
// //let mergeArray:number[]=[10,20,30,num1[0],num1[1],num1[2],num1[3],num2[0],num2[1]];
// let mergeArray:number[]=[10,20,30,...num1,...num2];

// Rest Operator which can take 0 or 1 or many parameter 
function empInfo(id:number,name:string,age:number,...skillSet:string[]):void{

}
let skillInfo:string[]=["C","C++","Python","AI"];
empInfo(1,"Ravi",21)
empInfo(2,"Ramesh",24,"C")
empInfo(3,"Lokesh",25,"Java","Angular","ReactJS");
empInfo(4,"Mahesh",42,...skillInfo);





