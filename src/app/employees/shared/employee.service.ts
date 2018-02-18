import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {

  selectedEmployee: Employee;
  employeeList: Employee[];

  constructor(private http: Http) { }

  postEmployee(emp: Employee) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type': 'application/json'});
    var requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    
    return this.http.post('https://laravel-labtest.herokuapp.com/api/employee', body, requestOptions).map(x => x.json());
  }

  getEmployeeList() {
    this.http.get('https://laravel-labtest.herokuapp.com/api/employee')
    .map((data: Response) => {
      return data.json() as Employee[];
    }).toPromise().then(x => {
      this.employeeList = x;
    })
  } 

  deleteEmployee(id : number) {
    return this.http.delete('https://laravel-labtest.herokuapp.com/api/employee/' + id)
    .map(res => res.json());
  }
}
