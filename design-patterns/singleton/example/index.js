const { increment } = require('./blueButton');
const { decrement } = require('./redButton');
const { singletonCounter } = require('./counter');
const { simpleCounter } = require('./simpleCounter');

decrement();
increment();

console.log(singletonCounter.getCount(), 'singleton 1');
console.log(simpleCounter.increment(),'simple 1')
console.log(simpleCounter.decrement(),'simple 2')
