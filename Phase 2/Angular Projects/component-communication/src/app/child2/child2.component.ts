import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  desg:string="UI Developer";
  constructor(public ser:ShareService) { }

  ngOnInit(): void {
  }

  childDis():void {
    console.log("Child2 component");
    
  }
}
