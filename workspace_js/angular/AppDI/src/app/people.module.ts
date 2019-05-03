import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { PeopleService } from './people.service';

@NgModule({
    imports: [CommonModule],
    providers: [ {provide: PeopleService, useClass: PeopleService} ],
    declarations: []
})
export class PeopleModule {}
