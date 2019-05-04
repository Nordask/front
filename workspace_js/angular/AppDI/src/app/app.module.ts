import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent} from './contact-list/contact-list.component';
import { ChildComponent } from './child/child.component';
import { PersonEditorComponent } from './person-editor/person-editor.component';
import { PersonService } from './person.service';
import { LoggerService, loggerFactory } from './logger.service';
import { PersonComponent } from './person/person.component';
import { NewLoggerService } from './new-logger.service';
import { ConsoleWriterService } from './console-writer.service';
import { WomanComponent } from './woman/woman.component';
import { WomanService } from './woman.service';
import { PeopleService, AwesomePeopleService } from './people.service';

const simpleLogger = {
  log(msg: string) {
    console.log(`I'm a simple logger: ${msg}`);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ChildComponent,
    PersonEditorComponent,
    PersonComponent,
    WomanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PersonService, // global instance of Person service for this component
              /*{provide: LoggerService, useExisting: NewLoggerService}, // useExisting - one instance for NewLoggerService
              NewLoggerService // useClass - few instance*/
              /*{provide: LoggerService, useValue: simpleLogger}*/
              /*{provide: LoggerService, 
               useFactory: loggerFactory(new ConsoleWriterService(), 'AppModule'),
               deps: [ConsoleWriterService]
              },*/
              ConsoleWriterService,
              WomanService,
              {provide: PeopleService, useClass: AwesomePeopleService, useValue: AwesomePeopleService}
             ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
