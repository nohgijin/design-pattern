let count = 0;

const simpleCounter = {
    increment() {
        return ++count;
    },
    decrement() {
        return --count;
    }
};

Object.freeze(simpleCounter);
module.exports = { simpleCounter };