import { Injectable } from '@angular/core';

export abstract class PeopleService { // interface doesn't work for services
    abstract getPeople();   
}

@Injectable()
export class AwesomePeopleService extends PeopleService {

    getPeople() {
        return [
            {
                name: 'Juri'
            },
            {
                name: 'Steffi'
            }
        ];
    }
}