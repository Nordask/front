// literal type expect the string that equals its type
var str;
// str = 'Hello world'; // Type '"Hello world"' is not assignable to type '"Hello"'.
str = 'Hello'; // expecting 'Hello'
str = undefined;
str = null;
console.log(str);
console.log('----------------------------------------------------------');
// union type - used for match multiple types of types
var un;
un = 'Hello';
un = 'Hello World';
un = 'Hello World!'; // Type '"Hello World!"' is not assignable to type '"Hello" | "Hello World"'.
console.log(un);
console.log('----------------------------------------------------------');
var Add = function (x, y) {
    if (typeof (x == 'string')) {
        x = parseInt(x, 10);
    }
    if (typeof (y == 'string')) {
        y = parseInt(y, 10);
    }
    return x + y;
};
console.log(Add(5, '5'));
//console.log(Add(5, true)); // error
console.log('----------------------------------------------------------');
function move(distance, direction) {
    console.log('Moving ' + distance + ' Miles ' + direction);
}
move(5, 'North');
move(15, 'South');
//move(15, "South-West") // error
