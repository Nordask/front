import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  userName: string;
  password: string;
  message: string;

  onLoginClicked() {
    if(this.userName == "admin" && this.password == "manager") {
      this.message = "Successful login";
    } else {
      this.message = "Invalid login";
    }
  }

}
