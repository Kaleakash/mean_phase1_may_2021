import { Component, ViewChild } from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pName:string=""
  childDesg?:string;
  childAge?:number;

  @ViewChild(Child2Component)
  child1Ref?:Child2Component;// no key words 

  store(nameRef:any){
    this.pName=nameRef.value;
  }

  callChildData() {
    this.child1Ref?.childDis();     // calling function 
    this.childDesg=this.child1Ref?.desg;  // accessing property 
                                  //storing in parent componet variable. 
  }
}
