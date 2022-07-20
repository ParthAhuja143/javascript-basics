const obj = {
    simple(){
        return this;
    }
}

let a = obj.simple;
console.log(obj.simple())
console.log(a() === globalThis)