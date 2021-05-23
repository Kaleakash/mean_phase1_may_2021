let empInfo1=[100,"Ravi",12000]
let empInfo2=[100,"Ravi",12000,"Java"]
let empInfo3=[100,"Ravi",12000,"C","C++","Java","Python"]
let [empId,empName,empSalary,...skillSet]=empInfo1;
document.write("Employee details are ")
document.write("<br/> Id is "+empId)
document.write("<br/> Name is "+empName)
document.write("<br/> Salary is "+empSalary)
document.write("<br/> SkillSet is "+skillSet)
document.write("<br/>Number of skillset "+skillSet.length)