// Function
function myFunction(...text: string[]) {
    console.log('Function:::', this, text)
}

myFunction('QQ', 'FF'); // this function will be called by global object => this point to global obj

// Object literal
const myObj = {
    myMethod() {
        console.log('Object:::', this);
    }
}

myObj.myMethod(); // this method will be calling by myObj => this point to myObj

// Classes
class MyClass {
    myMethod() {
        console.log('Class:::', this);
    }
}

const myInstance = new MyClass();
myInstance.myMethod();

myFunction.call(myObj, 'ABC', 'DEF'); // point to myObj
myFunction.apply(myObj, ['ABC', 'DEF']); // point to myObj
myFunction.call([]); // point to array

const bindFunction = myFunction.bind(myObj,['ABC', 'DEF']);
bindFunction();
bindFunction('123', '456');
bindFunction('QQ', ['FF', 'LL']);