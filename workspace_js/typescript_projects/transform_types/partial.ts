interface Person {
    name: string;
    age: number;
}

interface PartialPerson {
    name?: string;
    age?: number;
}

type MyPartial<T> = {
    [P in keyof T]? : T[P]
};

function upadatePerson(person: Person, prop: MyPartial<Person>) {
    return {...person, ...prop};
}

const anotherPerson: Person = {
    name: 'Todd',
    age: 27
};

console.log(upadatePerson(anotherPerson, {name: 'ABC'})); // will return new object with updated fields
console.log(anotherPerson);