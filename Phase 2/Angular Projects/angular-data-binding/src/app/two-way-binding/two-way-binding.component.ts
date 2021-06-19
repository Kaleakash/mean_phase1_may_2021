import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  salary:number=12000;
  empAge:number = 21;
  constructor() { }

  ngOnInit(): void {
  }

  changeAge(age:any){
    this.empAge = age;
  }
}
