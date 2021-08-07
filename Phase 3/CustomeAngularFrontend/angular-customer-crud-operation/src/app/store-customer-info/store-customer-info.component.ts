import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-store-customer-info',
  templateUrl: './store-customer-info.component.html',
  styleUrls: ['./store-customer-info.component.css']
})
export class StoreCustomerInfoComponent implements OnInit {
  msg:string="";
  constructor(public custService:CustomerService) { } //DI for Customer Service

  ngOnInit(): void {
  }
  storeCustomer(customerRef:NgForm){
    let customer = customerRef.value;
    //console.log(customer);
    this.custService.storeCustomerDetails(customer).subscribe(
    result=>this.msg=result,
    error=>console.log(error))
  }
}
