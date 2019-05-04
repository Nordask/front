import { Component, OnInit, Optional, SkipSelf, Host } from '@angular/core';
import { LoggerService, loggerFactory } from '../logger.service';
import { PersonService } from '../person.service';
import { ConsoleWriterService } from '../console-writer.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [{provide: LoggerService, 
              useFactory: loggerFactory(new ConsoleWriterService(), 'PersonComponent'),
              deps: [ConsoleWriterService]
              }]
})
export class PersonComponent implements OnInit {
  person;

  // @SkipSelf() - ignore this, use parent provider
  // @Host() - use only this, ignore all parent, even if this provider doesn't exist
  // @Optional - this provider doesn't required
  constructor(@SkipSelf() @Optional() private logger: LoggerService, private people: PersonService) { 
    this.person = this.people.getPerson();
  }

  ngOnInit() {
  }

  doLog() {
    if(this.logger) {
      this.logger.log("Message from PersonComponent");
    } else {
      console.log('No logger avaible')
    }
  }

}
