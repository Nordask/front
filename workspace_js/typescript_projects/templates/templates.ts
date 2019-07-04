let greet = 'Hello world';
let num1 = 5;
let num2 = 3;

let total = (num1: number, num2: number):  number => num1 + num2;

let template: any = `${greet} This is my template        
 in typesctript ${num1} + ${num2} = ${total(num1, num2)}`; // multiply lines `

console.log(template);

console.log(template.startsWith('Hello')); // true
console.log(template.startsWith('Hello1')); // false
console.log(template.endsWith(81));
console.log(template.includes('This is'));

