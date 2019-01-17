function add(x, y) {
    return x + y;
    //return 'Hello';
}
console.log(add(5, 5));
console.log('----------------------------------------------------------');
var myAdd = function (x, y) {
    if (typeof (x == 'string')) {
        x = parseInt(x, 10);
    }
    return x + y;
};
console.log(myAdd('2', 5));
console.log('----------------------------------------------------------');
//                                      optional parameter
function getFullName(firstName, lastName) {
    if (lastName == undefined)
        return firstName;
    return firstName + ' ' + lastName;
}
var name1 = getFullName('John', 'Doe');
console.log(name1);
function getFullNameFewParameters(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
var name2 = getFullNameFewParameters('John', 'Doe', 'Williams', 'Johnson');
console.log(name2);
