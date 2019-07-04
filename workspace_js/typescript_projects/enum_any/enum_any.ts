enum Color {
    Red = 3,
    Blue = Red * 2,
    Green
}

let x: Color = Color.Green

console.log(x)

console.log('----------------------------------------------------------');

enum PayLog {
    mon = 125.50,
    tues = 95.66,
    wed = 0,
    thurs = 110.33,
    fri = 150.88
}

let paycheck: number = PayLog.mon + PayLog.tues + PayLog.wed + PayLog.thurs + PayLog.fri

console.log(paycheck)

console.log('----------------------------------------------------------');

let variable: any;

variable = 'Hello'
variable = 14
variable = true

console.log(variable)

console.log('----------------------------------------------------------');

//let freeArray: any[] // works same as belowed code line
let freeArray: Array<any>

freeArray = [1, 2, 3]
freeArray = ['A', 'B', 'C']
freeArray = ['A', 4, 'B', 5, "C", 6]

console.log(freeArray)