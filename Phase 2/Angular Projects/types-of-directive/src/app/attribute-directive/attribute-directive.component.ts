import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
  f1:boolean = false;
  f2:boolean = true;
  empId:number =100;
  constructor() { }
  styleVariable = {'color':'orange'};
  ngOnInit(): void {
  }
  fun1(){
    this.f1= true;
  }
  fun2() {
      if(this.f2){
        this.f2 = false;
        this.f1 = true;
      }else {
        this.f1 = false;
        this.f2 = true;
      }
  }
}
