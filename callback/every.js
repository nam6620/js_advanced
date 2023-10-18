courses = [
    'Pham',
    'Phuong',
    'Nam'
]

Array.prototype.myEvery = function(callback) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            var result = callback(this[i],i,this)
            if (!result) {
                return false;
            }
        }
    }
    return true;
}




const numbers = [1, 3, 3, 5];

console.log(numbers.myEvery(function (number) {
    return number % 2 !== 0;
})); // Output: true

console.log(numbers.myEvery(function (number, index) {
    return index % 2 === 0;
})); // Output: false

console.log(numbers.myEvery(function (number, index, array) {
    return array.length % 2 === 0;
})); // Output: true