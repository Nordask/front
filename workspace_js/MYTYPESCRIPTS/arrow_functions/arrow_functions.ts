let getUser = function() {
    return 'John Doe';
}

console.log(getUser());

getUser = (): string => 'John Doe';

console.log(getUser());

getUser = (): string => {
    return 'John Doe';
}
console.log(getUser());

let getUser1 = (name): string => {
    return name;
}
console.log(getUser1('Harry Williams'));

console.log('----------------------------------------------------------');

let add = function(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add(1, 3));

add = (num1: number, num2: number): number => num1 + num2;

console.log(add(1, 3));

console.log('----------------------------------------------------------');
/*
var User = {
    name: 'John Doe',
    age: 25,
    startAging: function() {
        var self = this;
        setInterval(function(){
            self.age++;
            console.log(self.age);
        }, 1000)
    }
}

var john = Object.create(User);
john.startAging();
*/


var User = {
    name: 'John Doe',
    age: 25,
    startAging: function() {
        setInterval(() => {
            this.age++;
            console.log(this.age);
        }, 1000)
    }
}

var john = Object.create(User);
john.startAging();


















