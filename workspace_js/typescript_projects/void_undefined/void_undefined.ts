function logData(): void {
    console.log('Here is some data');
    //return 'Some data'; - error is not assigneble for type void
    return; // works because didn't return a value
}

logData();

console.log('----------------------------------------------------------');

let x: void = undefined; // only null\undefined

let u: undefined = null; // only null\undefined

let n: null = undefined; // only null\undefined

console.log(x + '   ' + u + '   ' + n)

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

function infLoop(): never { 
    while(true) {
        console.log("In C everything that not 0 is a true")
    }
}

console.log('----------------------------------------------------------');

function doSomething(): never {
    return 'Hello'; // Type '"Hello"' is not assignable to type 'never'.
}
