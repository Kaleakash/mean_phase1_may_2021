import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShareService } from '../share.service';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input()
  parentName?:string;   // this varialbe become eligible to  recieve the value of 
                          // parent variable. 
  cAge?:number;

  @Output()
  obj = new EventEmitter<number>();

  constructor(public ser:ShareService) { }

  ngOnInit(): void {
  }
  storeAge(ageRef:any){
    this.cAge=ageRef.value;
    this.obj.emit(this.cAge); //passing value to parent component
  }
}
