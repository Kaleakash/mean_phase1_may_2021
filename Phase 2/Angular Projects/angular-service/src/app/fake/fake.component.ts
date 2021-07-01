import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { FakeService } from 'src/fake.service';
import { Fake } from '../fake.model';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {

  fakeData:Fake[]=[];
  constructor(public fake:FakeService) { }//DI

  ngOnInit(): void {
  }

  callService(){
    //this.fake.loadFakeJsonData();
    this.fake.loadData();
  }

 displayInTableFormat(): void {
   this.fake.loadDataInTableFormat().subscribe(
     data=>this.fakeData=data,
    e=>console.log(e),
    ()=>console.log("completed"))
 }

}
