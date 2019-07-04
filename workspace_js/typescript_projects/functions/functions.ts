function add(x: number, y: number):number {
    return x + y;
    //return 'Hello';
}

console.log(add(5, 5))

console.log('----------------------------------------------------------');

let myAdd = function(x: any, y: number): number {
    if(typeof(x == 'string')) {
        x = parseInt(x, 10)
    }
    return x + y;
}

console.log(myAdd('2', 5))

console.log('----------------------------------------------------------');

//                                      optional parameter
function getFullName(firstName: string, lastName?: string): string {
    if(lastName == undefined)
        return firstName;
    return firstName + ' ' + lastName;
}

let name1 = getFullName('John', 'Doe')

console.log(name1)

function getFullNameFewParameters(firstName: string, ...restOfName: string[]) {
    return firstName + ' ' + restOfName.join(' ');
}

let name2 = getFullNameFewParameters('John', 'Doe', 'Williams', 'Johnson')

console.log(name2)