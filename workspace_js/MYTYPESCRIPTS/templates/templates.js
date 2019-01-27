var greet = 'Hello world';
var num1 = 5;
var num2 = 3;
var total = function (num1, num2) { return num1 + num2; };
var template = greet + " This is my template        \n in typesctript " + num1 + " + " + num2 + " = " + total(num1, num2); // multiply lines `
console.log(template);
console.log(template.startsWith('Hello')); // true
console.log(template.startsWith('Hello1')); // false
console.log(template.endsWith(81));
console.log(template.includes('This is'));
