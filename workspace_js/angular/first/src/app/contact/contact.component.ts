import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  city: string;
  salary: number;
  tax: number;
  person: object;
  dt: Date;
  videolength: number;

  constructor() {
    this.city = "Hyderabad";
    this.salary = 89686009977578;
    this.tax = 0.80;
    this.person = {firstName: "Adam", lastName: "Smith"};
    this.dt = new Date();
    this.videolength = 150;  
  }

  ngOnChanges() {
    
  }
}
