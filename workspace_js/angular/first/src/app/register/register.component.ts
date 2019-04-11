import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  myForm: FormGroup;
  
  isSuccessfullyRegistered: boolean = false;
  shouldDisplayMessage: boolean = false;

  constructor() {
    this.myForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$")]),
      name: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]*$"), Validators.minLength(3), Validators.maxLength(30)]),
      password: new FormControl("", [Validators.required, Validators.pattern("((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,15})")]),
      mobile: new FormControl("", [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{3,14}$")]),
      dateOfBirth: new FormControl("", [Validators.required, Validators.pattern("[0-9]{1,2}")]),
      monthOfBirth: new FormControl("", [Validators.required, Validators.pattern("[0-9]{1,2}")]),
      yearOfBirth: new FormControl("", [Validators.required, Validators.pattern("[0-9]{4}")]),
      receiveNewsLetters: new FormControl("", []),
      gender: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      amount: new FormControl("", [Validators.required, Validators.pattern("[0-9]*$")]),
    });
  }

  onRegisterClick() {
    try {
      console.log(this.myForm.controls.monthOfBirth.value);
      if(this.myForm.valid == true) {
        var s = "Email:" + this.myForm.controls.email.value + ", Rerson name:" + this.myForm.controls.name.value +
        ", Password:" + this.myForm.controls.password.value + ", Mobile:" + this.myForm.controls.mobile.value +
        ", Date of birth:" + this.myForm.controls.dateOfBirth.value + ", Month of birth:" +
        this.myForm.controls.monthOfBirth.value +  ", Year of birth:" + this.myForm.controls.yearOfBirth.value +
        ", Gender:" + this.myForm.controls.gender.value + ", Country:" +
        this.myForm.controls.country.value + ", Amount:" + this.myForm.controls.amount.value;
        console.log(s);

        if(localStorage.users == null || localStorage.users == undefined) {
          localStorage.users = JSON.stringify([]);
        }

        var u = JSON.parse(localStorage.users);
        u.push({email: this.myForm.controls.email.value, personName: this.myForm.controls.name.value, mobile: this.myForm.controls.mobile.value,
        dateOfBirth: this.myForm.controls.dateOfBirth.value, monthOfBirth: this.myForm.controls.monthOfBirth.value,
        yearOfBirth: this.myForm.controls.yearOfBirth.value, receiveNewsLetters: this.myForm.controls.receiveNewsLetters.value,
        gender: this.myForm.controls.gender.value, country: this.myForm.controls.country.value, amount: this.myForm.controls.amount.value,
        password: this.myForm.controls.password.value});

        localStorage.users = JSON.stringify(u);

        this.isSuccessfullyRegistered = true;
        this.shouldDisplayMessage = true;
      }  
    } catch(e) {
      this.isSuccessfullyRegistered = false;
      this.shouldDisplayMessage = true;
    }
  }
}