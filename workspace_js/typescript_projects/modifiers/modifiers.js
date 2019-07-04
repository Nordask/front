/* default public - access  within the clas
 * acces within extended class
 * acess outhere global scope
 *
 * private - only accesible within the class
 *
 * protected - accessible within class and subclasses(extended)
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    return Animal;
}());
var dog = new Animal('Spot');
//dog.name = 'Fred';
//console.log(dog.name) // Property 'name' is private and only accessible within class 'Animal'.
console.log(dog.getName());
dog.setName('Fred');
console.log(dog.getName());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name); //If private: Property 'name' is private and only accessible within class 'Animal'.
        return _this;
    }
    return Dog;
}(Animal));
var another_dog = new Dog('Ralph');
console.log(another_dog.getName());
