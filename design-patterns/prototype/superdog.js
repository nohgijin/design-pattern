class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log("Woof!");
    }
}

class SuperDog extends Dog {
    constructor(name) {
        super(name);
    }

    fly() {
        return "Flying!";
    }
}

