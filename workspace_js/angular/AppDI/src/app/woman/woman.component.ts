import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { WomanService } from '../woman.service';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css'],
  providers: [{provide: PersonService, useClass: WomanService}]
})
export class WomanComponent implements OnInit {
  person;

  constructor(private people: PersonService) { }

  ngOnInit() {
    this.person = this.people.getPerson();
  }

}
