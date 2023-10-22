// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight

let arr = [1,2,3,4,5];

Array.prototype.myReduceRight = function (callback, initialValue) {
    if (!Array.isArray(this)) return;

    let accumulator = initialValue || 0;

    for (let i = this.length - 1; i >= 0; i--) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
}

console.log(arr.myReduceRight((accumulator, currentValue) => accumulator + currentValue, 0));
