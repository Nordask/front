import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {HomeComponent} from "../home/home.component";
import {RegisterComponent} from "../register/register.component";
import {LoginComponent} from "../login/login.component";

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule
  ]
})
export class AccountModule { 

}
