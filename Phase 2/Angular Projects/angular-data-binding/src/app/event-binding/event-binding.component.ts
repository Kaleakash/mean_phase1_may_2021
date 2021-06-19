import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  desg:string="Tester";
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
  
}
