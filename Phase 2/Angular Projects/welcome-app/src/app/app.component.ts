import { Component } from '@angular/core';

@Component({
  selector: 'app-root',   //<app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id:number=100;
  fname:string="Raj Deep";
  age : number = 21;
  result : boolean = true;
  
  dis():string {
      return `Welcome to Angular trainng ${this.fname}`;
  }

}
