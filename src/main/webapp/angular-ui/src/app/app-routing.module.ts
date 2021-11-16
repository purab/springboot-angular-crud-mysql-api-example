import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component'
import { EmployeesListComponent } from './employee/employees-list/employees-list.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'add', component: EmployeeCreateComponent },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
