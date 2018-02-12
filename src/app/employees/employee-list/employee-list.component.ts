import { Employee } from './../shared/employee.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.employeeService.getEmployeeList();
  }

  showForEdit(emp : Employee) {
    console.log(emp);
    this.employeeService.selectedEmployee = emp;
  }

  onDelete(id : number) {
    console.log(id);
    if(confirm('Are you sure to delete this ID ?') == true) {
      this.employeeService.deleteEmployee(id).subscribe(x => {
        this.employeeService.getEmployeeList();
        this.toastr.warning('Deleted Successfully', 'Employee Register');
      })
    }
  }
}
