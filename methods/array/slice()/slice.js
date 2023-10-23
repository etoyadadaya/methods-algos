// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

export function mySlice(arr, start, end) {
    if (!Array.isArray(arr)) return;

    let tmp = [];
    let i = start || 0;
    let length = end || arr.length;

    if (start < 0) {
        i = start + arr.length;
    }

    if (end < 0) {
        length = end + arr.length;
    }

    for (i; i < length; i++) {
        tmp.push(arr[i]);
    }

    return tmp;
}

Array.prototype.mySlice = function (start, end) {
    if (!Array.isArray(this)) return;

    let tmp = [];
    let i = start || 0;
    let length = end || this.length;

    if (start < 0) {
        i = start + this.length;
    }

    if (end < 0) {
        length = end + this.length;
    }

    for (i; i < length; i++) {
        tmp.push(this[i]);
    }

    return tmp;
}