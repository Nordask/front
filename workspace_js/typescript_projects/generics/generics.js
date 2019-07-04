function myStrictFunc(arg) {
    return arg;
}
function myAnyFunc(arg) {
    return arg;
}
function myGeneric(arg) {
    return arg;
}
var str = myGeneric('God is laughing'); // Output = string
console.log(str);
var numb = myGeneric(44); // Output = number
console.log(numb);
var x = myGeneric(45);
console.log(x);
console.log('----------------------------------------------------------');
// Multiple arguments
function myGenericMult(arg1, arg2) {
    var str = arg1 + ' ' + arg2;
    return str;
}
var y = myGenericMult('Hello', 100);
console.log(y);
console.log('----------------------------------------------------------');
// Arrays
function myGenericArr(arg) {
    console.log(arg.length);
    return arg;
}
var z = myGenericArr([1, 2, 3]);
console.log(z);
console.log('----------------------------------------------------------');
function myGenericF(arg) {
    return arg;
}
var f = myGenericF;
console.log(f('Hello'));
