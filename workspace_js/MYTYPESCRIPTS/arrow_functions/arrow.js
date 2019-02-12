var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.myMethod = function () {
        var _this = this;
        var foo = 123;
        var that = this;
        console.log('1', this); // this === MyClass
        setTimeout(function () {
            console.log(foo); // this variable is avaible in lexical scope
            console.log(this); // this === Window
            console.log(that); // MyClass
        }, 0);
        setTimeout(function () {
            console.log(_this); // this === MyClass
        }, 0);
    };
    MyClass.prototype.foo = function () {
        var foo = 456;
    };
    return MyClass;
}());
var myInstance = new MyClass();
myInstance.myMethod();
