import { Component, OnInit, Inject } from '@angular/core';
import { Employee } from "../employee";
import { Observable, Observer } from "rxjs";
import { ObsService } from "../obs.service";

@Component({
  selector: 'app-employees-entry',
  templateUrl: './employees-entry.component.html',
  styleUrls: ['./employees-entry.component.css']
})
export class EmployeesEntryComponent implements OnInit {
  emp1: Employee = new Employee();

  constructor(@Inject(ObsService) private ss: ObsService) {

  }

  ngOnInit() {
  
  }

  onOKClicked() {
    var temp: Employee = new Employee();
    temp.empName = this.emp1.empName;
    temp.salary = this.emp1.salary;

    this.ss.mySubject.next(temp);
  }

  onCompletClicked() {
    this.ss.mySubject.complete();
  }

}
