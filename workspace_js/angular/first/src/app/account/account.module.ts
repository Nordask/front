import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "../home/home.component";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { CategoriesComponent } from "../categories/categories.component";
import { ContactComponent } from '../contact/contact.component';
import { DurationPipe } from '../duration.pipe';
import { CompanyComponent } from '../company/company.component';
import { EmployeeComponent } from '../employee/employee.component';
import { LoginService } from "../login.service";

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CategoriesComponent,
    ContactComponent,
    DurationPipe,
    CompanyComponent,
    EmployeeComponent
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CategoriesComponent,
    CompanyComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService
  ]
})
export class AccountModule { 

}
