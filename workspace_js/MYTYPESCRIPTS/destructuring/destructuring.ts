const user = {
    first: 'John',
    last: 'Doe'
}

const {first, last} = user;

console.log(first + ' ' + last);


const users = ['Mark', 'Jeff', 'Carlos'];

const [user1, user2, user3] = users;

console.log(user2);


console.log('----------------------------------------------------------');
// Pattern
const [a, b] = ['x', 'y'];

console.log(a);

const obj = {arr: [{foo: 123, bar: 'abc'}, {}], b: true}

const {arr: [{bar: b1}]} = obj;

console.log(b1);
console.log(obj);

const {x: x} = {x: 12, y: 22}; // don't match
console.log(x);


console.log('----------------------------------------------------------');


const [z] = []; // Initializer provides no value for this binding element and the binding element has no default value.
const {prop: f} = {};
console.log(z);
console.log(f);

// default values

const [q = 5] = [];
const {prop: p = 6} = {};
console.log(q);
console.log(p);