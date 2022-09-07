const { singletonCounter } = require("./counter");

function decrement() {
    singletonCounter.decrement()
    console.log(singletonCounter.getCount(), '감소')
}

module.exports = { decrement }