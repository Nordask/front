import { Component } from '@angular/core';
import { PeopleService, AwesomePeopleService } from './people.service';
import { ConsoleWriterService } from './console-writer.service';
import { LoggerService, loggerFactory } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: PeopleService, useClass: AwesomePeopleService, useValue: AwesomePeopleService},
              {provide: LoggerService, 
               useFactory: loggerFactory(new ConsoleWriterService(), 'AppComponent'),
               deps: [ConsoleWriterService]
              },]
})
export class AppComponent {
  people;
  childVisible = true;
  constructor(private peopleService: PeopleService) {
    //const peopleService = new PeopleService();
    this.people = peopleService.getPeople(); 
  }

  toggleChildVisible() {
    this.childVisible = !this.childVisible;
  }
}
