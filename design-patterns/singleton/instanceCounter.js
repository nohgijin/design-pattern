let instance;
let counter = 0;

class Counter {
    constructor() {
        if (instance) {
            throw new Error('이미 인스턴스가 생성되었습니다');
        }
        instance = this;
    }

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

const counter1 = new Counter()
const counter2 = new Counter()