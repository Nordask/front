import {Todo} from './TodoInterface';
import {TodosClassInterface} from './TodosClassInterface';
import {Promise} from 'es6-promise';

export class Todos implements TodosClassInterface {
    todos: Todo[];

    constructor() {
        // Init local storage
        if(localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([
                {
                    id: 1,
                    text: 'My First Todo'
                }
            ]))    
        }
        
        // Get from local storage and set todos
        this.todos = JSON.parse(localStorage.getItem('todos'));
    }

    getTodos():Promise<any> {
        let promise = new Promise((resolve, reject) => {
            resolve(this.todos);
        });
    
        return promise;
    }

    generateId():number {
        return Math.floor(Math.random() * 1000000000);    
    }

    addTodo(todo:Todo):Promise<Todo> {
        this.todos.push(todo);
        
        // Push to local storage
        let todos = JSON.parse(localStorage.getItem('todos'));
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));

        let promise = new Promise<Todo>((resolve, reject) => {
            resolve(todo);
        });
    
        return promise;
    }

    deleteTodo(id:number):Promise<Todo[]> {
        let todos = JSON.parse(localStorage.getItem('todos'));

        for(let i = 0; i < this.todos.length; i++) {
            if(id == this.todos[i].id) {
                this.todos.splice(i, 1);
                todos.splice(i, 1);
                localStorage.setItem('todos', JSON.stringify(todos));
                let promise = new Promise<Todo[]>((resolve, reject) => {
                    resolve(this.todos);
                });
                
                return promise;
            }
        }
    }
}