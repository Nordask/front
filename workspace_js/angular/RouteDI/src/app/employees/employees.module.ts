import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { PeopleListModule } from '../people-list/people-list.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
    imports: [CommonModule, PeopleListModule, EmployeesRoutingModule],
    declarations: [EmployeesComponent],
})
export class EmployeesModule {}
