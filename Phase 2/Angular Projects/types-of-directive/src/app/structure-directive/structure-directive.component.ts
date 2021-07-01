import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
  flag:boolean = false;
  f1:boolean = false;
  b1:string="Show"
  num:number[]=[100,200,300,400,500,600];
  students:Array<string>=["Ravi","Raj","Ramesh","Rajesh","Ram"];
  
  studentsDetails:Array<Student>=new Array();

  constructor() {
    let s1 = new Student(101,"Seeta",21);
    let s2 = new Student(102,"Meeta",22);
    let s3 = new Student(103,"Reeta",23);
    let s4 = new Student(104,"Keeta",24);
    this.studentsDetails.push(s1);
    this.studentsDetails.push(s2);
    this.studentsDetails.push(s3);
    this.studentsDetails.push(s4);
   }

  ngOnInit(): void {
  }

  changeF1value(){
    if(this.b1=="Hide"){
      this.b1 = "Show"
      this.f1 = false;
    }else {
      this.b1 = "Hide";
      this.f1 = true;
    }
      }

}
