class Person {
    name: string;

    constructor(name: string) {
       this.name = name;
        console.log(`Person created: ${this.name}`);
    }

    sayHello() {
        console.log(`${this.name} says hello`);    
    }
}

let Jose = new Person('Jose');

console.log('----------------------------------------------------------');

class Customer extends Person {
    id: number;

    constructor(id: number, name: string) {
        super(name);
        this.id = id;
        console.log(`Customer Created: ${this.name}`);    
    }

    payBalance() {
        console.log(`Customer ${this.id} has paid their balance`);
    }

    sayHello(){
        super.sayHello();
        console.log('qq')
    }
}

let Mary: Person = new Customer(1, 'Mary');
Mary.sayHello();
Mary.payBalance(); // error cuz let Mary: Person, but payBalance() from Customer class 