import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "../home/home.component";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { CategoriesComponent } from "../categories/categories.component";

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CategoriesComponent
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CategoriesComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class AccountModule { 

}
