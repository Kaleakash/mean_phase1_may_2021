class Employee {
	constructor(id,name,salary) {
		this.id = id;
		this.name = name;
		this.salary = salary;
	}
	dis() {
		console.log("id is "+this.id);
		console.log("name is "+this.name);
		console.log("salary is "+this.salary);
	}
}
let emp = new Employee(100,"Ravi",12000);
emp.dis();

let num = [10,20,30,40,50];
num.forEach(e=>console.log(e));

