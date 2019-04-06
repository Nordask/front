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

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CategoriesComponent,
    ContactComponent,
    DurationPipe,
    CompanyComponent
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
  ]
})
export class AccountModule { 

}
