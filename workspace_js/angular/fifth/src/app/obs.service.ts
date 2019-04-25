import { Injectable } from '@angular/core';
import { Employee } from "./employee";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObsService {
  mySubject: Subject<Employee> = new Subject<Employee>();
}
