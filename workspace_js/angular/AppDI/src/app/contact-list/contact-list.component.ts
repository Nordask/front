import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  people;
  constructor(private peopleSevice: PeopleService) { 
    console.log(this.peopleSevice.getPeople());
  }

  ngOnInit() {
    this.people = this.peopleSevice.getPeople();
  }

}
