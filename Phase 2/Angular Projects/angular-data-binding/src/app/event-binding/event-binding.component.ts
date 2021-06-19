import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  desg:string="Tester";
  name:string="";
  constructor() { }

  ngOnInit(): void {
  }

  sayHello(name:string):void {
    console.log("Event fired...");
    console.log("Your name is "+name)
  }
  changeDesg():void {
    this.desg="Programmer";
  }
  sendName(obj:any){
    alert(obj.value);
      console.log(obj.value)
      this.name = obj.value;
  }
  sum:number=0;
  addNumber(a:any,b:any){
    //this.sum = eval(a)+eval(b);
    this.sum = Number(a)+Number(b);
  }
}



