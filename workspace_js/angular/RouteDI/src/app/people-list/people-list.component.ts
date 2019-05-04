import { Component, OnInit, Inject } from '@angular/core';
import { PeopleListService } from './people-list.service';

@Component({
  selector: 'app-people-list',
  template: `<div>
              <ul>
                <li *ngFor="let person of persons">{{person.name}}</li>
              </ul>

              <form #myForm="ngForm">
                <input type="text" [(ngModel)]="personName" name="personName">
                <input type="submit" value="Add" (click)="addPerson(myForm)">
              </form>
            </div>`,
  styles: []
})
export class PeopleListComponent implements OnInit {
  persons;
  personName: string;
  constructor(private people: PeopleListService) { }

  ngOnInit() {
    this.persons = this.people.getPeople();
  }

  addPerson() {
    this.people.addPerson(this.personName);
  }
}
