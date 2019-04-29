import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  banks = [
    {bankshortname: "ICICI", bankfullname: "ICICI Bank"},
    {bankshortname: "HDFC", bankfullname: "HDFC Bank"},
    {bankshortname: "SBI", bankfullname: "SBI Bank"}
  ];

  cities = [
    "Hyderabad",
    "New York",
    "Moscow"
  ]

  myControl: FormControl = new FormControl();
}
