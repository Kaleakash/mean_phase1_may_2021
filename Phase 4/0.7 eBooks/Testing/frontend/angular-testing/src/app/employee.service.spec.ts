//import {HttpClientTestingModule} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';

xdescribe('EmployeeService', () => {
  let service: EmployeeService;     // reference of service class 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(EmployeeService);    // doing di for service class 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("say hello function testing",()=> {
    expect(service.sayHello()).toBe("Welcome to Service class");
  })

  it("check rest api testing",async()=> {
    expect(true).toBeTruthy();
    service.getAllEmployeeDetails().subscribe(data=> {
      let employee = data;
      let emp = data[0]
      expect(employee.length).toEqual(13);
      expect(emp._id).toEqual(1);
      expect(emp.name).toEqual("Raju");
      expect(emp.salary).toEqual(18000);
    },error=> {
      console.log(error);
    });
  })

});
