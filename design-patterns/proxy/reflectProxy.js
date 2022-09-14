const person = {
    name: "Jonh Doe",
    age: 42,
    nationality: "American"
};

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        console.log(prop,Reflect.get(obj,prop))
    },
    set: (obj, prop, value) => {
        return Reflect.set(obj,prop,value)
    }
})

personProxy.age
personProxy.name="chloe"
personProxy.name