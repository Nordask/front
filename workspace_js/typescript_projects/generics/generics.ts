function myStrictFunc(arg: number): number {
    return arg;
}

function myAnyFunc(arg: any): any {
    return arg;
}

function myGeneric<T>(arg: T): T {
    return arg;
}

let str = myGeneric<string>('God is laughing'); // Output = string
console.log(str);

let numb = myGeneric<number>(44); // Output = number
console.log(numb);

let x = myGeneric(45);
console.log(x);

console.log('----------------------------------------------------------');

// Multiple arguments

function myGenericMult<T1, T2>(arg1: T1, arg2: T2) {
    let str = arg1 + ' ' + arg2;
    return str;
}

let y = myGenericMult('Hello', 100);
console.log(y)

console.log('----------------------------------------------------------');

// Arrays

function myGenericArr<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

let z = myGenericArr([1, 2, 3]);
console.log(z);

console.log('----------------------------------------------------------');

// Interfaces with generics

interface MyGenericFn {
    <T>(arg: T): T;
}

function myGenericF<T>(arg:T): T{
    return arg;
}

let f: MyGenericFn = myGenericF;
console.log(f('Hello'));
