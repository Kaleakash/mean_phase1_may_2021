import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }   // DI for Http Client

  sayHello() : string {
    return "Welcome to Service class";
  }

  getAllEmployeeDetails():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:9090/api/employees/getAllEmployeeDetails");
  }
}
