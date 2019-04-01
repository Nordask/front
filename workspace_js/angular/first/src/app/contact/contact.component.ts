import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  city: string = "Hyderabad";
  salary: number = 89686009977578;
  tax: number = 0.80;
  person: object = {firstName: "Adam", lastName: "Smith"};
  dt: Date = new Date();
  videolength: number = 150;
}
