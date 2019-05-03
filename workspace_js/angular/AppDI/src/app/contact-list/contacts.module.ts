import { NgModule } from '@angular/core';

import { ContactListComponent } from '../contact-list/contact-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ContactListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ContactListComponent],
  providers: []
})
export class ContactsModule { }
