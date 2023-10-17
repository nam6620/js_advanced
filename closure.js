function createCounter() {
    let counter =0;
    function increate() {
        return ++counter;
    }
    return increate
}

var m= createCounter();
console.log(m());
console.log(m());
console.log(m());