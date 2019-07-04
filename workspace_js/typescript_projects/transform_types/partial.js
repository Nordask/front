var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function upadatePerson(person, prop) {
    return __assign({}, person, prop);
}
var anotherPerson = {
    name: 'Todd',
    age: 27
};
console.log(upadatePerson(anotherPerson, { name: 'ABC' })); // will return new object with updated fields
console.log(anotherPerson);
