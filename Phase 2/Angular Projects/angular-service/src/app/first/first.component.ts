import { Component, OnInit } from '@angular/core';
import { MyCustom } from '../custom.service';
import { MyService } from '../my.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers:[MyCustom]
})
export class FirstComponent implements OnInit {
  msg:string=""
  msg1:string="";
  constructor(public cservice:MyCustom) { }   //Pull the object using DI 
                                              // it create singleton object. 
  ngOnInit(): void {
  }

  fun() {
    let ss = new MyService();   // created the object 
    this.msg = ss.sayHello();
  }

  fun1() {
   this.msg1=this.cservice.sayHello();
  }
}
