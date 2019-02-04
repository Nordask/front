import {Todo} from './TodoInterface';
import {TodosClassInterface} from './TodosClassInterface';
import {Promise} from 'es6-promise';

export class Todos implements TodosClassInterface {
    todos: Todo[];

    constructor() {
        this.todos = [
            {
                id: 1,
                text: 'My Todo One'
            },
            {
                id: 2,
                text: 'My Todo Two'
            },
            {
                id: 3,
                text: 'My Todo Three'
            }
        ];
    }

    getTodos():Promise<any> {
        let promise = new Promise((resolve, reject) => {
            resolve(this.todos);
        });

        return promise;
    }
}