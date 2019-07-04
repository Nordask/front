interface Person {
    name: string;
    age: number;
    address?: {}
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P] // From T pick a set of properties K
};

const person1: MyPick<Person, 'name' | 'age'> = {
    name: 'Todd',
    age: 27
};

console.log(person1)