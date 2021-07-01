import { Component, OnInit } from '@angular/core';
import { Student } from '../structure-directive/student.model';
@Component({
  selector: 'app-structure-directive-dom-operation',
  templateUrl: './structure-directive-dom-operation.component.html',
  styleUrls: ['./structure-directive-dom-operation.component.css']
})
export class StructureDirectiveDomOperationComponent implements OnInit {
  students:Array<Student>=new Array();
  constructor() { }

  ngOnInit(): void {
  }
  addStudent(sid:HTMLInputElement,sname:HTMLInputElement,sage:HTMLInputElement){
    console.log(sid+" "+sname+" "+sage)
    let s = new Student(eval(sid.value),sname.value,eval(sage.value));
    this.students.push(s);
    sid.value=""
    sname.value=""
    sage.value="";
  }
  deleteRec(index:any){
    console.log("delete function called.."+index)
    this.students.splice(index,1);
  }
}
