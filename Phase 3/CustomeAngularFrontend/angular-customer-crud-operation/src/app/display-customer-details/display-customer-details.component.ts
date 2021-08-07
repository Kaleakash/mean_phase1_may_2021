import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-display-customer-details',
  templateUrl: './display-customer-details.component.html',
  styleUrls: ['./display-customer-details.component.css']
})
export class DisplayCustomerDetailsComponent implements OnInit {
  customers?:Array<Customer>;
  constructor(public custService:CustomerService) { }

  ngOnInit(): void {
    this.loadDataFromService();
  }
  loadDataFromService() : void {
    this.custService.getAllCustomerDetails().
    subscribe(result=>this.customers=result,
    error=>console.log(error));
  }
  /*
   subscribe(result.data=>this.customers=result.data,
  */

}
