import { Component, OnInit, Inject } from '@angular/core';
import { Employee } from "../employee";
import { ObsService } from "../obs.service";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employees-display',
  templateUrl: './employees-display.component.html',
  styleUrls: ['./employees-display.component.css']
})
export class EmployeesDisplayComponent implements OnInit {
  emp2: Employee = new Employee();
  
  constructor(@Inject(ObsService) private ss: ObsService) {

  }

  ngOnInit() {
    this.ss.mySubject
    .pipe(map((data) => {
      data.salary = data.salary * 12;
      return data;}))
    .subscribe(
      (data) => {
        console.log(data);
        this.emp2.empName = data.empName;
        this.emp2.salary = data.salary;
      },
      (error) => {console.log(error);},
      () => {console.log("Completed");}
    );
  }

}
