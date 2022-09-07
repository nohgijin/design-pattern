const { singletonCounter } = require("./counter");

function increment() {
    singletonCounter.increment()
    console.log(singletonCounter.getCount(), '증가')
}

module.exports = { increment }