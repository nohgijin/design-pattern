const dog = {
    bark() {
        return `Woof!`
    },
}

const pet1 = Object.create(dog)
console.log(pet1.bark())
console.log(Object.keys(pet1))
console.log(Object.keys(pet1.__proto__))