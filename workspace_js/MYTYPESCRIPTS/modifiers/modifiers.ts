/* default public - access  within the clas
 * acces within extended class
 * acess outhere global scope
 * 
 * private - only accesible within the class
 * 
 * protected - accessible within class and subclasses(extended)
*/ 

class Animal {
    protected name: string;  

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }
}

let dog = new Animal('Spot');
//dog.name = 'Fred';
//console.log(dog.name) // Property 'name' is private and only accessible within class 'Animal'.

console.log(dog.getName());

dog.setName('Fred');

console.log(dog.getName());

class Dog extends Animal{
    constructor(name: string) {
        super(name);
        console.log(this.name); //If private: Property 'name' is private and only accessible within class 'Animal'.
    }
}


let another_dog: Animal = new Dog('Ralph');
console.log(another_dog.getName())