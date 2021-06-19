import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  fname:string ="Ajay Kumar";
  f1:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  sayHello():string {
    return "Welcome user "+this.fname;
  }
  sayHi(name:any):string{
      return "Welcome user "+name;
  }
}
