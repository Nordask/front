import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-editor',
  template: `<h3>Person Editor Component</h3>
             <pre>{{personService.getPerson() | json}}</pre>
             <br/>
             <input type="text" #personName/>
             <button (click)="setPerson(personName.value)">Save</button>`,
  styleUrls: ['./person-editor.component.css']
})
export class PersonEditorComponent implements OnInit {

  constructor(public personService: PersonService) { }

  ngOnInit() {
  }

  setPerson(value: string) {
    this.personService.setPersonName(value);
  }

}
