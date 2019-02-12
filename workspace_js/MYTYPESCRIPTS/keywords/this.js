// Function
function myFunction() {
    var text = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        text[_i] = arguments[_i];
    }
    console.log('Function:::', this, text);
}
myFunction('QQ', 'FF'); // this function will be called by global object => this point to global obj
// Object literal
var myObj = {
    myMethod: function () {
        console.log('Object:::', this);
    }
};
myObj.myMethod(); // this method will be calling by myObj => this point to myObj
// Classes
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.myMethod = function () {
        console.log('Class:::', this);
    };
    return MyClass;
}());
var myInstance = new MyClass();
myInstance.myMethod();
myFunction.call(myObj, 'ABC', 'DEF'); // point to myObj
myFunction.apply(myObj, ['ABC', 'DEF']); // point to myObj
myFunction.call([]); // point to array
var bindFunction = myFunction.bind(myObj, ['ABC', 'DEF']);
bindFunction();
bindFunction('123', '456');
bindFunction('QQ', ['FF', 'LL']);
