import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing';
  id : number = 100;
  name: string = "Raj Deep";
  age : number =21;
  result : boolean = true;
  num:Array<string>=["Raj","Ravi","Reeta","Raju","Ramesh"];
  msg:string="";
  sayHello(name:string):string{
    return "Welcome "+name;
  }
  addNumber(a:number,b:number):number {
    return a+b;
  }

  doChange(): void {
    console.log("hello");
    this.msg = "Hello";
    //this.msg  = ref.getInfo();    
  }
}
