class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        return `Woof!`;
    }

    play2(){
        console.log("Playing2 now!");
    }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");

Dog.prototype.play = () => console.log("Playing now!");

dog1.play();
dog1.play2();