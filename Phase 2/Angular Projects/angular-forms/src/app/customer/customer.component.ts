import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  paymentDetails= new Set();
  constructor() { }
  ngOnInit(): void {
  }
  storeCustomerDetails(custRef:NgForm){
    console.log(custRef.value)
    console.log(this.paymentDetails);
  }

  paymentInfo(payment:any){
    if(payment.checked){
      console.log("true")
      this.paymentDetails.add(payment.value);
    }else {
      console.log("false")
      this.paymentDetails.delete(payment.value);
    }
    //console.log(payment.value)
    
  }
}
