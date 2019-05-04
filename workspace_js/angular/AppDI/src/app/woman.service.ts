import { Injectable } from '@angular/core';
import { PersonService } from './person.service';

@Injectable()
export class WomanService extends PersonService{
    
    getPerson() {
        const person = super.getPerson();
        person.name = 'Katie';
        person.gender = 'F';
        return person;

    }
}