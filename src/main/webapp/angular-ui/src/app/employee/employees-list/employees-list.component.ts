import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {  
  employees: Observable<ApiResponse> | any;
  

  constructor(private employeeService: EmployeeService,
    private router: Router) { 
      setTimeout(function(){
       
      },2000);
      
    }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    setTimeout(function(){
      
    },2000);

  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.employees = this.employeeService.getEmployees();
        },
        error => console.log(error));
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }

}
