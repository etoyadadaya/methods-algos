// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight

export function myReduceRight(arr, callback, initialValue) {
    if (!Array.isArray(arr)) return;

    let accumulator = initialValue || 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
}

Array.prototype.myReduceRight = function (callback, initialValue) {
    if (!Array.isArray(this)) return;

    let accumulator = initialValue || 0;

    for (let i = this.length - 1; i >= 0; i--) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
}