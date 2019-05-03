import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-child',
  template: `<h3>Child Component</h3>
             <pre>{{personService.getPerson() | json}}</pre>
             <app-person-editor></app-person-editor>`,
  styleUrls: ['./child.component.css'],
  providers: [PersonService]  // separate instance of Person service for this component
})
export class ChildComponent implements OnInit {

  constructor(public personService: PersonService) { }

  ngOnInit() {
  }

}
