import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Employee } from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(@Inject(HttpClient) private http: HttpClient) {

  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>("/assets/employees.json", {responseType: "json"})
    .pipe(filter((data) => {
      if(data[0].salary > 5000)
        return true;
      else
        return false;  
    }))
    .pipe(map((data) => {
      for(var i = 0; i < data.length; i++) {
        data[i].salary = data[i].salary * 12;
      }
      return data;
    }))
    .pipe(map((data) => {
      for(var i = 0; i < data.length; i++) {
        data[i].empName = data[i].empName.toUpperCase();
      }
      return data;
    }))
    .pipe(map((data) => {
      for(var i = 0; i < data.length; i++) {
        data[i].tax = data[i].salary * 10 / 100;
      }
      return data;
    }))
  }
}
