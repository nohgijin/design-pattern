class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        return `Woof!`;
    }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");

console.log({dog1, dog2, dog3})

console.log(dog1.bark())
console.log(dog2.bark())
console.log(dog3.bark())

console.log(Dog.prototype.constructor)
console.log(Dog.prototype.bark)