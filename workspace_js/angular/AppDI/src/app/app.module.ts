import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent} from './contact-list/contact-list.component';
import { ChildComponent } from './child/child.component';
import { PersonEditorComponent } from './person-editor/person-editor.component';
import { PersonService } from './person.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ChildComponent,
    PersonEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PersonService], // global instance of Person service for this component
  bootstrap: [AppComponent]
})
export class AppModule { }
