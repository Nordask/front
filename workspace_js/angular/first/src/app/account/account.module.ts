import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "../home/home.component";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { CategoriesComponent } from "../categories/categories.component";
import { ContactComponent } from '../contact/contact.component';
import { DurationPipe } from '../duration.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CategoriesComponent,
    ContactComponent,
    DurationPipe 
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CategoriesComponent,
    ContactComponent 
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { 

}
