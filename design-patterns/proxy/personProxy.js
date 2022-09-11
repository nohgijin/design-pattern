const person = {
    name: "John Doe",
    age: 42,
    nationality: "American"
};

const personProxy = new Proxy(person, {
    get: (target, prop) => {
        console.log(`${prop} : ${target[prop]}`)
    },
    set: (target, prop, value) => {
        target[prop] = value
        console.log(`${prop} : ${target[prop]}`)
        return true
    }
})

console.log(personProxy)
personProxy.a = 1
console.log(personProxy.b)
personProxy.age = 100
console.log(personProxy)