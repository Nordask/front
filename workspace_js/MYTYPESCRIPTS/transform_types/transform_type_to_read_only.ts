interface Person {
    name: string;
    age: number;
}
/*
interface ReadOnlyPerson {
    readonly name: string;
    readonly age: number;
}
*/
const person: Person = {
    name: 'Todd',
    age: 27
};

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
};

function freeze<T>(person: T): MyReadonly<T> {
    return Object.freeze(person); // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
}

const newPerson = freeze(person); // const newPerson: Readonly<Person>
//newPerson.age = 100000; // Cannot assign to 'age' because it is a constant or a read-only property