class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(first?: string, last?: string, age?: number) {
        console.log('Constructor ran...');
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }

    sayHello() {
        console.log(this.firstName + ' says hello...');
        return this.firstName + ' says hello...'
    }
}

let John = new Person('John', 'Smith', 30);
John.lastName = 'Doe';

console.log(John);
console.log(John.age);

John.sayHello();

let Kevin = new Person('Kevin', 'Williams', 40);
Kevin.sayHello();

