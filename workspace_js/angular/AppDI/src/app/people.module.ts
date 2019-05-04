import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { PeopleService, AwesomePeopleService } from './people.service';

@NgModule({
    imports: [CommonModule],
    providers: [{provide: PeopleService, useClass: AwesomePeopleService, useValue: AwesomePeopleService}],
    declarations: []
})
export class PeopleModule {}
