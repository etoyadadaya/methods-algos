// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

export function myFill(arr, value, start, end) {
    if (!Array.isArray(arr)) return;

    let i = start || 0;
    let length = end || arr.length;

    for (i; i < length; i++) {
        arr[i] = value;
    }

    return arr;
}

Array.prototype.myFill = function (value, start, end) {
    if (!Array.isArray(this)) return;

    let i = start || 0;
    let length = end || this.length;

    for (i; i < length; i++) {
        this[i] = value;
    }

    return this;
}