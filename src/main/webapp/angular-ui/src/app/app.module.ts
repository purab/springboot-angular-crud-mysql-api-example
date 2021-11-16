import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './service/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesListComponent } from './employee/employees-list/employees-list.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeesListComponent,
    UpdateEmployeeComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }