import { Component, OnInit, Inject } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "test@gmail.com";
  password: string;
  message: string;

  constructor(@Inject(LoginService) private s:LoginService) { 
    console.log("constructor login");  
  }

  onLoginClick(myForm) {
    console.log(myForm)
    if(myForm.valid == true) {
      if(this.s.checkUserNameAndPassword(this.email, this.password)) {
        this.message = "Successfully Login";
      } else {
        this.message = "Invalid Login";
      }
    }
  }
}
