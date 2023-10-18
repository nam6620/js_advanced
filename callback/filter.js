courses = [
    'Pham',
    'Phuong',
    'Nam'
]

Array.prototype.filter2 = function(callback) {
    var output = []
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            var result = callback(this[i],i,this)
            if (result) {
                output.push(this[i])
            }
        }
    }
    return output;
}

courses.filter2(function(course,index,courses) {
    return course == "Pham"
})

const numbers = [1, 2, 3, 4];

console.log(numbers.filter2(function (number) {
    return number % 2 === 0;
})); 
console.log(numbers.filter2(function (number, index) {
    return index % 2 === 0;
})); 

console.log(numbers.filter2(function (number, index, array) {
    return array.length % 2 === 0;
}));
