import { Component, OnInit } from '@angular/core';
import { MyCustom } from '../custom.service';
import { MyService } from '../my.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers:[MyCustom]
})
export class SecondComponent implements OnInit {

  msg:string=""
  msg1:string=""
  constructor(public cser:MyCustom) { } //cser is a reference. done DI

  ngOnInit(): void {
  }

  fun() {
    let ss = new MyService();   // created the object 
    this.msg = ss.sayHello();
  }

  fun1() {
      this.msg1=this.cser.sayHello();
  }
}
