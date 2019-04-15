import { Component, Inject } from '@angular/core';
import { AuthStatusService } from "../auth-status.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  userName: string;
  password: string;
  message: string;

  constructor(@Inject(AuthStatusService) private s: AuthStatusService) {

  }

  onLoginClicked() {
    console.log(this.userName)
    if(this.userName == "system" && this.password == "manager") {
      this.message = "Successfully loggedin";
      this.s.isLoggedIn = true;
    } else {
      this.message = "Invalid Login";
      this.s.isLoggedIn = false;
    }
  }
}
