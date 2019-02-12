/*
interface ReadOnlyPerson {
    readonly name: string;
    readonly age: number;
}
*/
var person = {
    name: 'Todd',
    age: 27
};
function freeze(person) {
    return Object.freeze(person); // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
}
var newPerson = freeze(person); // const newPerson: Readonly<Person>
//newPerson.age = 100000; // Cannot assign to 'age' because it is a constant or a read-only property
