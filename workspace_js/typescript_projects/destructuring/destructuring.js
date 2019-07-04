var user = {
    first: 'John',
    last: 'Doe'
};
var first = user.first, last = user.last;
console.log(first + ' ' + last);
var users = ['Mark', 'Jeff', 'Carlos'];
var user1 = users[0], user2 = users[1], user3 = users[2];
console.log(user2);
console.log('----------------------------------------------------------');
// Pattern
var _a = ['x', 'y'], a = _a[0], b = _a[1];
console.log(a);
var obj = { arr: [{ foo: 123, bar: 'abc' }, {}], b: true };
var b1 = obj.arr[0].bar;
console.log(b1);
console.log(obj);
var x = { x: 12, y: 22 }.x; // don't match
console.log(x);
console.log('----------------------------------------------------------');
var z = [][0]; // Initializer provides no value for this binding element and the binding element has no default value.
var f = {}.prop;
console.log(z);
console.log(f);
// default values
var _b = [][0], q = _b === void 0 ? 5 : _b;
var _c = {}.prop, p = _c === void 0 ? 6 : _c;
console.log(q);
console.log(p);
