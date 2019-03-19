import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "test@gmail.com";
  password: string;
  message: string;

  constructor() { 
    console.log("constructor login");  
  }

  onLoginClick() {
    if(this.checkUserNameAndPassword(this.email, this.password)) {
      this.message = "Successfully Login";
    } else {
      this.message = "Invalid Login";
    }
  }

  private checkUserNameAndPassword(email: string, password: string) {
    var u = JSON.parse(localStorage.users);

    for(var i = 0; i < u.length; i++) {
      if(u[i].email == email && u[i].password == password) {
        return true;
      }  
    }

    return false;
  }
}
