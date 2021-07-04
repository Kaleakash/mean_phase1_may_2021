import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string="Raj Deep";
  salary:number=25000;
  dob:Date=new Date();
  employees:Array<Employee>=[];

  constructor() {
    let emp1= new Employee(100,"Raj","male",21);
    let emp2= new Employee(100,"Reeta","female",23);
    let emp3= new Employee(100,"Raju","male",24);
    let emp4= new Employee(100,"Seeta","female",27);
    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
    this.employees.push(emp4);
  }
}
