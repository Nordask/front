interface Person {
    name: string;
    age: number;
}

type MyRequired<T> = {
    +readonly [P in keyof T]-?: T[P] // remove optional modifire, add readonly modifire to all fields
 }

function printAge(person: MyRequired<Person>) {
    return `${person.name} is ${person.age}`;
}

const person: MyRequired<Person> = {
    name: 'Todd',
    age: 27
};

const age = printAge(person)