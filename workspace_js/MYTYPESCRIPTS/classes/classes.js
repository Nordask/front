var Person = /** @class */ (function () {
    function Person(first, last, age) {
        console.log('Constructor ran...');
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log(this.firstName + ' says hello...');
        return this.firstName + ' says hello...';
    };
    return Person;
}());
var John = new Person('John', 'Smith', 30);
John.lastName = 'Doe';
console.log(John);
console.log(John.age);
John.sayHello();
var Kevin = new Person('Kevin', 'Williams', 40);
Kevin.sayHello();
