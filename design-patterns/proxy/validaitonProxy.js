const person = {
    name: "John Doe",
    age: 42,
    nationality: "American"
};

const personProxy = new Proxy(person, {
    get: (target, prop) => {
        if(!target[prop]){
            console.error('값이 없습니다')
            return
        }
        console.log(`${prop} : ${target[prop]}`)
    },
    set: (target, prop, value) => {
        if (prop === "age" && typeof value!=="number") {
            console.error('나이에는 숫자만 넣어주세요')
            return
        }
        if (prop==="name" && value.length<2) {
            console.error('이름은 2글자 이상 넣어주세요')
            return
        }
        target[prop] = value
        console.log(`${prop} : ${target[prop]}`)
        return true
    }
})

console.log(personProxy)
personProxy.a = 1
console.log(personProxy.b)
personProxy.age = 'a'
console.log(personProxy)