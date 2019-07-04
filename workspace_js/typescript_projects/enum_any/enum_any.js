var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Blue"] = 6] = "Blue";
    Color[Color["Green"] = 7] = "Green";
})(Color || (Color = {}));
var x = Color.Green;
console.log(x);
console.log('----------------------------------------------------------');
var PayLog;
(function (PayLog) {
    PayLog[PayLog["mon"] = 125.5] = "mon";
    PayLog[PayLog["tues"] = 95.66] = "tues";
    PayLog[PayLog["wed"] = 0] = "wed";
    PayLog[PayLog["thurs"] = 110.33] = "thurs";
    PayLog[PayLog["fri"] = 150.88] = "fri";
})(PayLog || (PayLog = {}));
var paycheck = PayLog.mon + PayLog.tues + PayLog.wed + PayLog.thurs + PayLog.fri;
console.log(paycheck);
console.log('----------------------------------------------------------');
var variable;
variable = 'Hello';
variable = 14;
variable = true;
console.log(variable);
console.log('----------------------------------------------------------');
//let freeArray: any[] // works same as belowed code line
var freeArray;
freeArray = [1, 2, 3];
freeArray = ['A', 'B', 'C'];
freeArray = ['A', 4, 'B', 5, "C", 6];
console.log(freeArray);
