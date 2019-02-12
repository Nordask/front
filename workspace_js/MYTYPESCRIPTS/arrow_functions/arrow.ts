class MyClass {
    
    myMethod() {
        const foo = 123;
        const that = this;
        console.log('1', this); // this === MyClass
        setTimeout(function() {
            console.log(foo); // this variable is avaible in lexical scope
            console.log(this); // this === Window
            console.log(that); // MyClass
        }, 0);

        setTimeout(() => {
            console.log(this); // this === MyClass
        }, 0);
    }

    foo() {
        const foo = 456;
    }
}

const myInstance = new MyClass();
myInstance.myMethod();