import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
describe('EmployeeService Fake Service', () => {
  let service: EmployeeService;     // reference of service class 
  let httpMock : HttpTestingController  // reference of HttpTestingController   
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(EmployeeService);    // doing di for service class
    httpMock = TestBed.get(HttpTestingController);  // doing di for HttpTesting Controller  
  });

  it("HttpClient Mock Testing ",()=> {
      // calling service 
      service.getAllEmployeeDetails().subscribe(data=> {
          let employees = data;
          let emp = employees[0];
          expect(employees.length).toBe(2);
          expect(emp._id).toEqual(1);
          expect(emp.name).toEqual("Raj");
          expect(emp.salary).toEqual(14000);
      });
      //This code provide you fake response to testing method... proxy 
      const dummyData:Employee[]=[
        {_id:1,name:"Raj",salary:14000},
        {_id:2,name:"Ravi",salary:16000}
        ];
      const req = httpMock.expectOne("http://localhost:9090/api/employees/getAllEmployeeDetails");
      req.flush(dummyData);
  })

});
