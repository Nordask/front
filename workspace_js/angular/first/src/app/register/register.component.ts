import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string;
  name: string;
  password: string;
  mobile: string;
  dateOfBirth: number;
  monthOfBirth: number;
  yearOfBirth: number;
  receiveNewsLetters: boolean;
  gender: string;
  country: string;
  amount: number;
  isSuccessfullyRegistered: boolean = false;
  shouldDisplayMessage: boolean = false;

  onRegisterClick() {
    try {
      var s = "Email:" + this.email + ", Rerson name:" + this.name +
      ", Password:" + this.password + ", Mobile:" + this.mobile +
      ", Date of birth:" + this.dateOfBirth + ", Month of birth:" +
      this.monthOfBirth +  ", Year of birth:" + this.yearOfBirth +
      ", Gender:" + this.gender + ", Country:" +
      this.country + ", Amount:" + this.amount;
      console.log(s);

      if(localStorage.users == null || localStorage.users == undefined) {
        localStorage.users = JSON.stringify([]);
      }

      var u = JSON.parse(localStorage.users);
      u.push({email: this.email, personName: this.name, mobile: this.mobile,
      dateOfBirth: this.dateOfBirth, monthOfBirth: this.monthOfBirth,
      yearOfBirth: this.yearOfBirth, receiveNewsLetters: this.receiveNewsLetters,
      gender: this.gender, country: this.country, amount: this.amount,
      password: this.password});

      localStorage.users = JSON.stringify(u);

      this.isSuccessfullyRegistered = true;
      this.shouldDisplayMessage = true;
    } catch(e) {
      this.isSuccessfullyRegistered = false;
      this.shouldDisplayMessage = true;
    }
  }
}