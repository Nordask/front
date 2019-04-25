import { Component, Inject } from '@angular/core';
import { Employee } from "./employee";
import { EmployeesService} from "./employees.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees: Employee[] = [];

  constructor(@Inject(EmployeesService) private es: EmployeesService) {

  }

  ngOnInit() {
    this.es.getEmployees()
    .subscribe(
      (data) => {console.log(data); this.employees = data;},
      (err) => {console.log(err);},
      () => {console.log("completed");}
    )
  }
}
