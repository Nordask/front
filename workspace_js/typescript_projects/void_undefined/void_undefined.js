function logData() {
    console.log('Here is some data');
    //return 'Some data'; - error is not assigneble for type void
    return; // works because didn't return a value
}
logData();
console.log('----------------------------------------------------------');
var x = undefined; // only null\undefined
var u = null; // only null\undefined
var n = undefined; // only null\undefined
console.log(x + '   ' + u + '   ' + n);
console.log('----------------------------------------------------------');
/* bottom type that is a natural outcome as soon as you do code flow analysis.
 * never - means no value, usually used for functions which generates exceptions
 */
/*
function error(message: string): never {
   throw new Error(message);
}

error('Something happened');
*/
console.log('----------------------------------------------------------');
function infLoop() {
    while (true) {
        console.log("In C everything that not 0 is a true");
    }
}
console.log('----------------------------------------------------------');
function doSomething() {
    return 'Hello'; // Type '"Hello"' is not assignable to type 'never'.
}
