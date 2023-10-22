// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0));

let arr = [1,2,3,4,5];

Array.prototype.myReduce = function (callback, initialValue) {
    if (!Array.isArray(this)) return;

    let accumulator = initialValue || 0;

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
}

console.log(arr.myReduce((accumulator, currentValue) => accumulator + currentValue, 0));
