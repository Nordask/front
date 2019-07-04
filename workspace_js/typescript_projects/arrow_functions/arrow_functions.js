var getUser = function () {
    return 'John Doe';
};
console.log(getUser());
getUser = function () { return 'John Doe'; };
console.log(getUser());
getUser = function () {
    return 'John Doe';
};
console.log(getUser());
var getUser1 = function (name) {
    return name;
};
console.log(getUser1('Harry Williams'));
console.log('----------------------------------------------------------');
var add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(1, 3));
add = function (num1, num2) { return num1 + num2; };
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
    startAging: function () {
        var _this = this;
        setInterval(function () {
            _this.age++;
            console.log(_this.age);
        }, 1000);
    }
};
var john = Object.create(User);
john.startAging();
