import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { DisplayCustomerDetailsComponent } from '../display-customer-details/display-customer-details.component';

@Component({
  selector: 'app-store-customer-info',
  templateUrl: './store-customer-info.component.html',
  styleUrls: ['./store-customer-info.component.css']
})
export class StoreCustomerInfoComponent implements OnInit {
  msg:string="";
  
  // creating the reference of child component 
  // DI for Child component 
  @ViewChild(DisplayCustomerDetailsComponent)
  displayComponent?:DisplayCustomerDetailsComponent;

  constructor(public custService:CustomerService) { } //DI for Customer Service

  ngOnInit(): void {
  }
  storeCustomer(customerRef:NgForm){
    let customer = customerRef.value;
    //console.log(customer);
    this.custService.storeCustomerDetails(customer).subscribe(
    result=>{
      this.msg=result;
          if(this.displayComponent!=undefined){
              this.displayComponent.loadDataFromService();
          }
      },
    error=>console.log(error))
  }
}
