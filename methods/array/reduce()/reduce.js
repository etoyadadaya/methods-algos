// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

export function myReduce(arr, callback, initialValue) {
    if (!Array.isArray(arr)) return;

    let accumulator = initialValue || 0;

    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
}

Array.prototype.myReduce = function (callback, initialValue) {
    if (!Array.isArray(this)) return;

    let accumulator = initialValue || 0;

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
}