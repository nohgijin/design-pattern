let counter = 0;

class Counter {
    get instance() {
        return this;
    }

    get count() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1.instance === counter2.instance)