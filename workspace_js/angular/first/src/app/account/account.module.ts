import { NgModule } from '@angular/core';
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
  ]
})
export class AccountModule { 

}
