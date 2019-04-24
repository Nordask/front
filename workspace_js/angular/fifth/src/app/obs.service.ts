import { Injectable } from '@angular/core';
import { Employee } from "../employee";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObsService {
  myObservable: Observable<Employee>;
}
