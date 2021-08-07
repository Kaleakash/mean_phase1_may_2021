import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { }

  getAllCustomerDetails():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:9090/allCustomer");
  }

  //post method 1st parameter url and 2nd parameter json object. 
  // 3rd parameter to set return type format ie json, text etc 
  // by default angular all http method return type json consider. 
  storeCustomerDetails(customer:any):Observable<string>{
    return this.http.post("http://localhost:9090/customerStore",customer,{responseType:'text'})
  }
}


