class Dog {
    constructor(name) {
        this.name = name;
    }
}

const dogFunctionality = {
    bark: () => console.log("Woof!"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("Playing!")
};

Object.assign(Dog.prototype, dogFunctionality)

const pet1 = new Dog("gijin")
pet1.bark()
pet1.wagTail()
pet1.play()