let arrNumber: number[];
let arrString: string[];
let arrBoolean: boolean[];

arrNumber = [1, 2, 3];
// arrNumber = 1; // - wrong, but anyway it will be compiled
//arrNumber = ['A', 'B', 'CD']; // - wrong, but anyway it will be compiled

//arrString = [1, 2, 3]; // - wrong, but anyway it will be compiled
arrString = ['A', 'B', 'CD'];

arrBoolean = [true, false, true];

console.log(arrNumber)
console.log(arrString)
console.log(arrBoolean)

console.log('----------------------------------------------------------');

// Generic array type

console.log('Generic array type');

let arr: Array<number>;

arr = [1, 2, 3];
//arr = ['A', 'B', 'CD']; // - wrong, but anyway it will be compiled

console.log(arr)

console.log('----------------------------------------------------------');

// Tuple

/**
 * Similar to array except:
 * 1. Take fixed numbers of elements, that is known
 * 2. Elements don't have to be of the same type
 */

console.log('Tuple')

let tuple: [string, number];

//tuple = ['Hello', 'World']; // - wrong, but anyway it will be compiled
tuple = ['Hello', 7];
//tuple = ['Hello', 7, 'qq', 4, 5, 6]; // - wrong, but anyway it will be compiled

console.log(tuple)
console.log(tuple[0])
console.log(tuple[0].substr(1))