import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CompanyComponent } from '../company/company.component';

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
  
  //Only first one or single
  @ViewChild(CompanyComponent) comp: CompanyComponent;
  @ViewChildren(CompanyComponent) comp2: QueryList<CompanyComponent>;

  ngAfterViewInit() {
    console.log(this.comp);
    console.log(this.comp2); 
    console.log(this.comp2.toArray());
  }

  onChangeDataClick() {
    //this.comp.firstName = "modified";
    var arr = this.comp2.toArray();
    for (var i = 0; i < arr.length; i++) {
      arr[i].firstName = "modified" + i;
    }
  }
}
